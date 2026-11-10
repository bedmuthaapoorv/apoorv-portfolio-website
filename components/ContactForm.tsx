"use client";

import { useState } from "react";

/**
 * No backend yet: opens the visitor's mail client with the note pre-filled.
 * Swap for a POST to a rate-limited /api/contact (e.g. Resend + Upstash) when you add an email provider.
 */
export function ContactForm({ to }: { to: string }) {
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Hello from your portfolio");
    const body = encodeURIComponent(`${text}\n\n— ${from}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="msg" onSubmit={onSubmit}>
      <label className="eyebrow" htmlFor="m-email">Or leave a note</label>
      <input id="m-email" type="email" placeholder="you@company.com" required autoComplete="email" value={from} onChange={(e) => setFrom(e.target.value)} />
      <textarea id="m-text" placeholder="Role, team, and what you're building" aria-label="Message" value={text} onChange={(e) => setText(e.target.value)} />
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <button className="btn" type="submit">Send</button>
        <span className="fine">Opens your mail client · no tracking cookies</span>
      </div>
    </form>
  );
}
