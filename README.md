# apoorv-portfolio-website

Personal site of Apoorv Bedmutha, a full-stack Software Engineer 2. Next.js 16 (App Router), React 19, TypeScript, plain CSS.

## Run

Needs Node 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Where things live

| What | Where |
| --- | --- |
| All text content (roles, projects, /now, credentials, links) | `data/profile.ts` |
| Styles (dark-first; light via toggle) | `app/globals.css` |
| Page layout | `app/page.tsx` |
| Live Medium feed API (no cache) | `app/api/medium/route.ts` + `lib/medium.ts` |
| SEO: metadata, JSON-LD, sitemap, robots, OG image | `app/layout.tsx`, `app/page.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` |
| Original HTML design prototype | `design/index.html` |

## Medium posts

The page is server-rendered with the latest posts (refreshed at most hourly, so crawlers see them). On every page load,
the browser also calls `/api/medium`, which reads `https://medium.com/feed/@bedmuthaapoorv` server-side with no caching,
and swaps in the live list.

## To do

- Add résumé PDFs at `public/resume/apoorv-bedmutha-fullstack.pdf` and `public/resume/apoorv-bedmutha-backend.pdf`.
- Add the Springer paper link in `data/profile.ts`.
- Set `NEXT_PUBLIC_SITE_URL` once a custom domain is live.
