import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { loadMono } from "@/lib/font";

export const alt = `${profile.name} — Full-stack Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const mono = await loadMono(600);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: 72, background: "#0a0c0f", color: "#e7eaee", fontFamily: mono ? "JetBrains Mono" : "monospace",
          backgroundImage: "radial-gradient(800px 420px at 85% 0%, rgba(255,122,69,.18), transparent 70%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
          <span style={{ fontSize: 44, letterSpacing: -2.5, lineHeight: 1 }}>apoorv</span>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: "#ff7a45" }} />
          <span style={{ marginLeft: 20, fontSize: 22, color: "#a2a9b4", letterSpacing: 3 }}>BEDMUTHA · FULL-STACK</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 64, lineHeight: 1.1, letterSpacing: -3 }}>
          <span>I build backends that</span>
          <span style={{ display: "flex", gap: 20 }}><span style={{ color: "#ff7a45" }}>keep up</span><span>and interfaces</span></span>
          <span>people actually use.</span>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#8a929e" }}>Full-stack SDE 2 · Bengaluru · .NET · Java · React · Next.js</div>
      </div>
    ),
    { ...size, fonts: mono ? [{ name: "JetBrains Mono", data: mono, weight: 600, style: "normal" }] : [] }
  );
}
