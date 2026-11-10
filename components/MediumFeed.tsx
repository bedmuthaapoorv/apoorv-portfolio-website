"use client";

import { useEffect, useState } from "react";
import type { Post } from "@/lib/medium";

const MAX = 8;
const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "Asia/Kolkata" });
const timeFmt = new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" });

type State = { kind: "loading" } | { kind: "live"; count: number; at: string } | { kind: "stale" };

/**
 * Server-rendered posts (`initial`) show immediately and are what crawlers index.
 * On every page load the component re-fetches /api/medium (no cache) and swaps in the live list.
 */
export function MediumFeed({ initial }: { initial: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initial);
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    const ctl = new AbortController();
    fetch("/api/medium", { cache: "no-store", signal: ctl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: { items: Post[]; fetchedAt: string }) => {
        if (!data.items?.length) throw new Error("empty");
        setPosts(data.items);
        setState({ kind: "live", count: data.items.length, at: data.fetchedAt });
      })
      .catch((e) => {
        if (e?.name !== "AbortError") setState({ kind: "stale" });
      });
    return () => ctl.abort();
  }, []);

  const statusText =
    state.kind === "loading"
      ? "Fetching latest posts from Medium…"
      : state.kind === "live"
        ? `Live from Medium · ${state.count} posts · fetched ${timeFmt.format(new Date(state.at))} IST`
        : "Couldn't reach Medium right now · showing recent posts";

  return (
    <>
      <p className={`feed-status ${state.kind === "loading" ? "" : state.kind}`} aria-live="polite">
        <span className="feed-dot" aria-hidden="true" />
        {statusText}
      </p>
      <ul className="notes" aria-busy={state.kind === "loading"}>
        {posts.slice(0, MAX).map((p) => (
          <li key={p.link}>
            <a href={p.link}>
              <time dateTime={p.date.slice(0, 10)}>{dateFmt.format(new Date(p.date))}</time>
              <div>
                <h3>{p.title}</h3>
                {(p.excerpt || p.publication) && (
                  <p>
                    {p.excerpt}
                    {p.publication && <span className="mono" style={{ fontSize: 12 }}> · {p.publication}</span>}
                  </p>
                )}
              </div>
              {p.tag && <span className="tag">{p.tag}</span>}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
