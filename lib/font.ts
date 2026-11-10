/**
 * Loads JetBrains Mono as TTF for next/og images (Satori can't read woff2).
 * Google Fonts serves TTF to clients that don't advertise woff2 support.
 * Returns null on failure so images still render with the default font.
 */
export async function loadMono(weight = 600): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(`https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@${weight}`, {
      headers: { "User-Agent": "Mozilla/4.0" },
    }).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}
