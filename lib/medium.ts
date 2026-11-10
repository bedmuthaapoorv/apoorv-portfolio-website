/**
 * Medium RSS -> JSON. Medium's feed sends no CORS headers, so browsers can't read it directly;
 * this runs on the server (route handler + server component) instead.
 */

export const MEDIUM_USER = "bedmuthaapoorv";
export const MEDIUM_FEED = `https://medium.com/feed/@${MEDIUM_USER}`;
export const MEDIUM_PROFILE = `https://medium.com/@${MEDIUM_USER}`;

export type Post = {
  title: string;
  link: string;
  date: string; // ISO
  tag: string;
  excerpt: string;
  publication: string; // "" when posted on the personal profile
};

const PUBLICATIONS: Record<string, string> = {
  "blog.devgenius.io": "Dev Genius",
  "medium.com/codetodeploy": "CodeToDeploy",
};

const ENTITIES: Record<string, string> = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&nbsp;": " ",
};

function decode(s: string): string {
  return s
    .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (m) => ENTITIES[m] ?? m)
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

function field(item: string, tag: string): string {
  const m = item.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`));
  return m ? m[1].trim() : "";
}

function toText(html: string): string {
  return decode(
    html
      .replace(/<figure[\s\S]*?<\/figure>/g, " ")
      .replace(/<\/(h\d|p|li|div)>|<br\s*\/?>/g, " ")
      .replace(/<[^>]+>/g, "")
  )
    .replace(/Continue reading on .*?»/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function clip(s: string, n: number): string {
  return s.length > n ? s.slice(0, n).replace(/\s+\S*$/, "") + "…" : s;
}

function publicationOf(link: string): string {
  try {
    const u = new URL(link);
    if (u.pathname.startsWith(`/@${MEDIUM_USER}`)) return "";
    const key = u.host === "medium.com" ? `medium.com/${u.pathname.split("/")[1]}` : u.host;
    return PUBLICATIONS[key] ?? "";
  } catch {
    return "";
  }
}

export function parseFeed(xml: string): Post[] {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
  return items.map((item) => {
    const link = field(item, "link").split("?")[0];
    const category = item.match(/<category><!\[CDATA\[(.*?)\]\]><\/category>/);
    return {
      title: decode(field(item, "title")),
      link,
      date: new Date(field(item, "pubDate")).toISOString(),
      tag: category ? category[1].replace(/-/g, " ") : "",
      excerpt: clip(toText(field(item, "content:encoded") || field(item, "description")), 120),
      publication: publicationOf(link),
    };
  });
}

/** Fetches the live feed. `revalidate: 0` means no caching anywhere. */
export async function getPosts(opts: { revalidate?: number } = {}): Promise<Post[]> {
  const res = await fetch(MEDIUM_FEED, {
    headers: { "User-Agent": "Mozilla/5.0 (portfolio feed reader)" },
    ...(opts.revalidate === 0 ? { cache: "no-store" as const } : { next: { revalidate: opts.revalidate ?? 3600 } }),
    signal: AbortSignal.timeout(6000),
  });
  if (!res.ok) throw new Error(`Medium feed responded ${res.status}`);
  return parseFeed(await res.text());
}
