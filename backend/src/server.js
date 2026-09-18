import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { addMessage, getProjects, initStore } from "./store.js";

const app = express();
const port = Number(process.env.PORT || 5000);
const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";

app.disable("x-powered-by");
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors({ origin: clientUrl, methods: ["GET", "POST"], credentials: false }));
app.use(express.json({ limit: "64kb" }));

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { success: false, message: "Too many contact attempts. Please try again later." },
});

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "Portfolio API is running.", data: { uptime: process.uptime() } });
});

app.get("/api/projects", async (_req, res, next) => {
  try {
    const projects = await getProjects();
    res.json({ success: true, message: "Projects loaded.", data: projects });
  } catch (error) {
    next(error);
  }
});

app.post("/api/contact", contactLimiter, async (req, res, next) => {
  try {
    const { name, email, subject = "", message } = req.body || {};
    const clean = {
      name: String(name || "").trim(),
      email: String(email || "").trim().toLowerCase(),
      subject: String(subject || "").trim(),
      message: String(message || "").trim(),
    };

    if (!clean.name || clean.name.length < 2) {
      return res.status(400).json({ success: false, message: "Please enter a valid name." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email address." });
    }
    if (clean.message.length < 10) {
      return res.status(400).json({ success: false, message: "Please enter at least 10 characters in your message." });
    }
    if (clean.message.length > 3000) {
      return res.status(400).json({ success: false, message: "Message is too long." });
    }

    await addMessage(clean);
    res.status(201).json({ success: true, message: "Your message was received.", data: null });
  } catch (error) {
    next(error);
  }
});

app.use("/api", (_req, res) => {
  res.status(404).json({ success: false, message: "API route not found." });
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, "../../frontend/dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((req, res, next) => {
    if (req.path.startsWith("/api/")) return next();
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ success: false, message: "Unexpected server error." });
});

await initStore();

app.listen(port, () => {
  console.log(`Portfolio API listening on http://localhost:${port}`);
});
