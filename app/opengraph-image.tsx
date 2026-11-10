import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — Full-stack Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: 72, background: "#0a0c0f", color: "#e7eaee", fontFamily: "monospace",
          backgroundImage: "radial-gradient(800px 420px at 85% 0%, rgba(255,122,69,.18), transparent 70%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#a2a9b4" }}>
          <div style={{ width: 48, height: 48, borderRadius: 10, background: "#ff7a45", color: "#0a0c0f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>ab</div>
          {profile.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 64, lineHeight: 1.1, letterSpacing: -2 }}>
          <span>I build backends that</span>
          <span style={{ display: "flex", gap: 20 }}><span style={{ color: "#ff7a45" }}>keep up</span><span>and interfaces</span></span>
          <span>people actually use.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#6b7380" }}>Full-stack SDE 2 · Bengaluru · .NET · Java · React · Next.js</div>
      </div>
    ),
    size
  );
}
