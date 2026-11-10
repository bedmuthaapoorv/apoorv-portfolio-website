import { ImageResponse } from "next/og";
import { loadMono } from "@/lib/font";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const mono = await loadMono(700);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "baseline", justifyContent: "center", paddingTop: 34, gap: 6, background: "#0f1217" }}>
        <span style={{ fontFamily: mono ? "JetBrains Mono" : "monospace", fontWeight: 700, fontSize: 118, lineHeight: 1, color: "#e7eaee" }}>a</span>
        <span style={{ width: 24, height: 24, borderRadius: 4, background: "#ff7a45" }} />
      </div>
    ),
    { ...size, fonts: mono ? [{ name: "JetBrains Mono", data: mono, weight: 700, style: "normal" }] : [] }
  );
}
