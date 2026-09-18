import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { API_URL } from "../App";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);
  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault(); setStatus({ type: "", message: "" });
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please complete your name, email and message." }); return;
    }
    setSending(true);
    try {
      const response = await fetch(`${API_URL}/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.message || "Something went wrong.");
      setForm(initialForm); setStatus({ type: "success", message: "Thanks — your message is on its way." });
    } catch (error) { setStatus({ type: "error", message: error.message }); }
    finally { setSending(false); }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div>
          <SectionHeading eyebrow="CONTACT" title="Let’s&nbsp; build&nbsp; something&nbsp; people&nbsp; actually&nbsp; want&nbsp; to&nbsp; use." text="For recruiters and hiring teams: I’m open to conversations about frontend, full-stack, and product-focused web roles." />
          <div className="contact-links">
            <a href="mailto:@myemail123@gmail.com"><span>Email</span><strong>myemail123@gmail.com ↗</strong></a>
            <a href="https://www.linkedin.com/in/Name" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Connect ↗</strong></a>
            <a href="https://github.com/mygithub" target="_blank" rel="noreferrer"><span>GitHub</span><strong>View code ↗</strong></a>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={submit} noValidate>
          <div className="form-heading"><span>START A CONVERSATION</span><strong>Tell me what you’re building.</strong></div>
          <div className="field-grid">
            <label><span>Your name</span><input value={form.name} onChange={update("name")} placeholder="John Bero" autoComplete="name" /></label>
            <label><span>Email</span><input type="email" value={form.email} onChange={update("email")} placeholder="John@example.com" autoComplete="email" /></label>
          </div>
          <label><span>Subject</span><input value={form.subject} onChange={update("subject")} placeholder="Frontend role / project" /></label>
          <label><span>Message</span><textarea rows="6" value={form.message} onChange={update("message")} placeholder="A little context goes a long way…" /></label>
          <button className="button button-primary submit-button" disabled={sending}>{sending ? "Sending…" : "Send message ↗"}</button>
          <div className={`form-status ${status.type}`} role="status">{status.message}</div>
        </form>
      </div>
    </section>
  );
}
