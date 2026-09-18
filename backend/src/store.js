import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(__dirname, "../data");
const projectsPath = path.join(dataDir, "projects.json");
const messagesPath = path.join(dataDir, "messages.json");

async function ensureFile(filePath, fallback) {
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, JSON.stringify(fallback, null, 2), "utf8");
  }
}

export async function initStore() {
  await fs.mkdir(dataDir, { recursive: true });
  await ensureFile(projectsPath, []);
  await ensureFile(messagesPath, []);
}

export async function getProjects() {
  const raw = await fs.readFile(projectsPath, "utf8");
  return JSON.parse(raw);
}

export async function addMessage(message) {
  const raw = await fs.readFile(messagesPath, "utf8");
  const messages = JSON.parse(raw);
  const record = {
    id: crypto.randomUUID(),
    ...message,
    createdAt: new Date().toISOString(),
  };
  messages.push(record);
  await fs.writeFile(messagesPath, JSON.stringify(messages, null, 2), "utf8");
  return record;
}
