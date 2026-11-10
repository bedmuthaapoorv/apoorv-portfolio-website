# Tech Stack, Performance, SEO and Infrastructure for a Top-Tier Developer Portfolio (late 2026)

Research date: 2026-11-10. Budget: about 14 tool calls. Many 2026 sources are personal or vendor blogs and pricing aggregators, which are flagged where relevant. Items marked "Inference" or listed under Gaps are not directly sourced.

## Framework comparison (Next.js, Astro, SvelteKit, React Router v7/Remix, Nuxt, plain static)

### Takeaway
In 2026 the consensus is Astro for content-first portfolios and blogs (no JS shipped by default, islands for interactivity) and Next.js 16 when the site doubles as a full-stack showcase (auth, DB-backed APIs, RSC). Remix is now split in two: React Router v7/v8 framework mode carries the React lineage, while Remix 3 is an unstable non-React rewrite, so avoid it for a portfolio.

### Cited Findings
- **Astro vs Next.js consensus:** 2026 comparisons agree that Astro wins for content-first sites (blogs, docs, portfolios) and Next.js wins for apps (dashboards, auth flows, dynamic full-stack products). One source puts Next.js at about 85–120KB of default JS on a blog post, versus zero by default for Astro. Lighthouse claims are Astro 95–100 vs Next.js 15 at 85–95. These numbers come from blog benchmarks and are not independently verified. — [Cosmic: Astro vs Next.js 2026](https://www.cosmicjs.com/blog/astro-vs-nextjs-2026); [Kunal Ganglani](https://www.kunalganglani.com/blog/astro-vs-nextjs-2026.md); [pkgpulse Astro 5 vs Next 15](https://www.pkgpulse.com/guides/astro-5-vs-nextjs-15-content-sites-2026); [DEV: Next.js vs Astro for content sites](https://dev.to/nayankyada/nextjs-vs-astro-for-content-sites-and-blogs-an-honest-comparison-4jp5)
- **Real migration:** A developer moved their portfolio from Next.js to Astro, kept MDX and frontmatter, and noted that "Next.js isn't bad." — [alexcloudstar.com](https://www.alexcloudstar.com/blog/moved-portfolio-from-nextjs-to-astro/)
- **Astro joins Cloudflare (January 2026):** All full-time staff of The Astro Technology Company became Cloudflare employees. Cloudflare pledged that Astro stays MIT-licensed and deployable to any cloud. — [Cloudflare blog](https://blog.cloudflare.com/astro-joins-cloudflare/); [Astro blog](https://astro.build/blog/joining-cloudflare/); [BusinessWire](https://www.businesswire.com/news/home/20260116386991/en)
- **Astro 6:** The beta was announced in January 2026 with GA expected "in the weeks ahead." It brings a new dev server built on the Vite Environments API (runs code locally in the same runtime as deploy), and Live Content Collections become stable. — [Cloudflare blog](https://blog.cloudflare.com/astro-joins-cloudflare/)
- **Next.js 16 (released 2025-10-21):**
  - Turbopack is stable and the default bundler for dev and build; webpack is a legacy opt-out.
  - Cache Components (`"use cache"`, `cacheComponents: true`) replace the implicit App Router caching with explicit opt-in caching.
  - Ships with `proxy.ts` (replacing middleware) and React 19.2.
  - Next.js 16.4 recommends Cache Components for every app, and the docs say they become the default in Next.js 17.
  - Sources: [Next.js 16 blog](https://nextjs.org/blog/next-16); [Next.js 16.4 blog](https://nextjs.org/blog/next-16-4); [InfoQ](https://www.infoq.com/news/2025/12/nextjs-16-release); [heise](https://heise.de/-10794114)
- **Remix / React Router:**
  - Remix 3 is a ground-up rewrite on a Preact fork plus web APIs, with no migration path from Remix 2 or React Router v7. A beta preview was reported in mid-2026 and its API is still moving.
  - Remix's loaders, actions and nested routing now live in React Router framework mode.
  - One source says React Router v8 shipped on 2026-06-17 and Remix v2 and React Router v6 went EOL that day. This is single-source.
  - Sources: [InfoQ Remix 3 beta](https://infoq.com/news/2026/07/remix-3-beta-preview); [InfoQ: Remix v3 drops React](https://www.infoq.com/news/2025/08/remix-run-v3-drops-react); [buildwithmatija](https://www.buildwithmatija.com/blog/md/remix-vs-react-router-what-happened-to-remix-2026)
- **TanStack Start:** It is now being compared alongside Astro and Next.js in 2026 roundups. — [bitdoze](https://www.bitdoze.com/astro-vs-nextjs-vs-tanstack-start-which-wins-2026/)
- **leerob's site:** The `leerob/site` GitHub repo now points to the "next-mdx-blog" template: Next.js + MDX + Tailwind + TypeScript, optional Postgres for redirects, Vercel hosting with Vercel Analytics, and pnpm. It has been heavily simplified compared with older versions that had a guestbook and view counters. — [github.com/leerob/site](https://github.com/leerob/site)

### Inferences
- For a full-stack engineer who wants the site to prove backend skill, the strongest signal comes from one of two setups:
  - **Next.js 16 App Router** (RSC, Server Actions, route handlers, Cache Components, `next/og` built in).
  - **Astro 6 plus server islands/actions on Cloudflare Workers**, which gives the best default performance and an edge-first backend story.
- Either is defensible. The choice should follow the author's target job market (React/Next.js dominates Indian full-stack JDs; unverified).
- The current repo history (commits mention the `sharp` package for image optimization and mobile views) suggests an existing Next.js codebase. That argues for Next.js 16 continuity unless the goal is to demonstrate range.
- SvelteKit and Nuxt are fine technically but signal less to React-centric recruiters. Plain static (HTML + Vite) maximizes Lighthouse but makes it hard to show full-stack skill.
- Avoid Remix 3 (unstable). React Router v7/v8 framework mode is viable but less common for portfolios.

### Gaps
- No reliable 2026 dataset of which frameworks top developer portfolios actually use (for example, Wappalyzer or BuiltWith stats on portfolio sites). Not found.
- Astro 6 GA date and the current Astro version as of November 2026 are unconfirmed.
- SvelteKit and Nuxt 2026 status were not researched (budget).

## Styling, UI, animation and 3D

### Takeaway
Tailwind v4 (CSS-first `@theme` config, Rust "Oxide" engine) plus shadcn/ui (now Tailwind-v4 native) is the default 2026 stack. For animation, Motion (MIT) and GSAP (now 100% free, including former Club plugins, but with a Webflow-competitor licence restriction) are both viable. Keep 3D (R3F/Three.js) lazy-loaded or avoid it to protect LCP and INP.

### Cited Findings
- **Tailwind v4.0:**
  - GA on 2025-01-22, with an engine rewritten as "Oxide." `tailwind.config.js` is now optional and configuration lives in CSS via `@theme`; JS config can still be loaded with `@config`.
  - Upgrade with `npx @tailwindcss/upgrade`.
  - Speedup claims vary from about 3.5x to 5x for full builds and up to 100x for incremental builds.
  - Sources: [youngju.dev](https://www.youngju.dev/blog/culture/2026-05-14-tailwind-css-4-vite-first-engine-config-as-css-migration-deep-dive-2026.en); [pkglog](https://pkglog-com.pages.dev/blog/tailwind-css-4-complete-guide/); [Tailwind v4 alpha post (mirror)](https://tailwind.nodejs.cn/blog/tailwindcss-v4-alpha)
- **shadcn/ui on Tailwind v4:** shadcn/ui ships v4 by default. `tailwindcss-animate` is deprecated in favour of `tw-animate-css`. — [skills.sh tailwind-v4-shadcn](https://skills.sh/jezweb/claude-skills/tailwind-v4-shadcn); [DEV](https://dev.to/malahim_haseeb_981126d794/tailwind-css-v4-what-actually-changed-and-what-it-means-for-your-nextjs-project-472f)
- **GSAP is free:** Webflow made GSAP 100% free, including SplitText, MorphSVG and other former paid plugins, for everyone (not only Webflow customers), effective April 2025. — [Webflow blog](https://webflow.com/blog/gsap-becomes-free); [Codrops demos](https://tympanus.net/codrops/2025/05/14/from-splittext-to-morphsvg-5-creative-demos-using-free-gsap-plugins/)
- **GSAP licence caveat:** The GSAP licence prohibits use in tools that compete with Webflow, and GSAP is not open source. Motion is MIT. Note that this comes from Motion's own comparison page, a competitor. — [motion.dev: GSAP vs Motion](https://motion.dev/docs/gsap-vs-motion)
- **Bundle sizes (low confidence):** Motion is listed at about 2.3KB (mini) / 18KB (full) and GSAP at about 24KB core / 45KB+ with plugins. Motion's docs also claim GSAP is not tree-shakable. — [learnwithhasan comparison](https://learnwithhasan.com/js-libraries/compare/motion-vs-gsap/); [motion.dev](https://motion.dev/docs/gsap-vs-motion)

### Inferences
- **Recommended:** Tailwind v4 + shadcn/ui (Radix-based, accessible) for UI primitives.
- **Animation:**
  - Use CSS transitions and the View Transitions API for simple effects.
  - Use Motion for React component animation.
  - Reach for GSAP only for scroll-driven or timeline-heavy hero sections.
- **3D (R3F/Three.js):** Three.js core alone is several hundred KB, so treat it as a progressive enhancement. Load it via dynamic import after LCP, gate it with `prefers-reduced-motion`, and provide a static poster image. (This is general knowledge; no 2026 measurement was found.)
- CSS Modules and vanilla-extract remain valid if the author wants to show zero-runtime CSS-in-TS skill, but they carry less ecosystem momentum than Tailwind.

### Gaps
- No measured R3F bundle and INP cost on real portfolio sites was found.
- vanilla-extract and Panda CSS 2026 status were not researched.

## Content: MDX, content collections, CMS, Shiki, OG images

### Takeaway
Contentlayer is abandoned (unmaintained since 2023). Do not use it. Replacements:

| Framework | Content layer |
|---|---|
| Next.js | Content Collections (drop-in successor) or Velite |
| Astro | Native Astro Content Collections (Live Content Collections stable in Astro 6) |

Generate dynamic OG images with `next/og` (`ImageResponse`, built into Next.js) or Satori + resvg/sharp in Astro.

### Cited Findings
- **Contentlayer (deprecated):** Reported as no longer actively maintained since 24 April 2023. — [wisp.blog](https://www.wisp.blog/blog/contentlayer-has-been-abandoned-what-are-the-alternatives); [GitHub issue #429](https://github-redirect.dependabot.com/contentlayerdev/contentlayer/issues/429)
- **Content Collections:** A Contentlayer-inspired, actively maintained framework by Sebastian Sdorra. Dub.co migrated to it and recommends it. Its API uses `defineCollection` and `defineConfig` from `@content-collections/core`. — [Dub blog](https://dub.co/blog/content-collections); [sdorra.dev](https://sdorra-dev.vercel.app/posts/2024-01-15-content-collections)
- **Velite:** Turns Markdown, MDX, YAML and JSON into type-safe collections at build time only. — [DEV: Velite](https://dev.to/0012303/velite-has-a-free-content-layer-for-static-sites-heres-how-to-use-it-2e53); [dev.co](https://dev.co/cms/open-source/velite)
- **Astro Content Collections:** Live Content Collections are stable in Astro 6. — [Cloudflare blog](https://blog.cloudflare.com/astro-joins-cloudflare/)
- **OG images in Next.js:**
  - `ImageResponse` from `next/og` is bundled with Next.js.
  - An `opengraph-image.tsx` file in a route segment auto-wires the `og:image` meta tag.
  - Fetch fonts inside the handler, not at module level.
  - Sources: [MakerKit Next.js 16 OG](https://makerkit.dev/blog/md/tutorials/dynamic-og-image); [paulund](https://paulund.co.uk/notebook/nextjs/dynamic-og-images-in-nextjs-with-opengraph-imagetsx)
- **OG images in Astro:**
  - Use an endpoint with Satori + resvg (or `@vercel/og`), or pre-render PNGs at build via `getStaticPaths`.
  - Gotcha: files in `public/` shadow API routes of the same path.
  - Sources: [cai.im](https://cai.im/blog/og-images-using-satori/); [egghead](https://egghead.io/lessons/astro-implement-dynamic-og-image-generation-with-astro-api-routes-and-satori); [nookie portfolio](https://nookie-portfolio.pages.dev/blog/og-astr-with-vercel-og)

### Inferences
- For a solo developer, Git-backed MDX (in-repo) is the strongest default: versioned, reviewable in PRs, and testable in CI.
- Keystatic (Git-based CMS with a local/GitHub admin UI) layers on top of the same files if a visual editor is wanted.
- Sanity or Notion-as-CMS adds a network dependency and an API key but showcases headless-CMS integration plus ISR/webhooks.
- For syntax highlighting, use Shiki at build time (via `rehype-pretty-code` or `@shikijs/rehype`; Astro uses Shiki natively) so no highlighter JS ships to the client.

### Gaps
- No 2026 sources were fetched on Keystatic, Sanity pricing, Notion API limits, or the Shiki version. These are general-knowledge recommendations only.
- Content Collections' and Velite's current 2026 maintenance cadence was not verified (search results dated 2024).

## Performance: Core Web Vitals, Lighthouse, images, fonts, bundle

### Takeaway
Targets, all measured at the 75th percentile of real users (field data, CrUX), on both mobile and desktop:

| Metric | Good | Poor |
|---|---|---|
| LCP | 2.5s or less | over 4.0s |
| INP | 200ms or less | over 500ms |
| CLS | 0.1 or less | over 0.25 |

A content-first static or RSC site with little client JS can realistically hit Lighthouse 95–100.

### Cited Findings
- **Official thresholds:** LCP good at 2.5s or less (poor over 4s), INP good at 200ms or less (poor over 500ms), CLS good at 0.1 or less (poor over 0.25). All are evaluated at the 75th percentile, and the same thresholds apply to mobile and desktop. — [web.dev: Defining CWV thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds)
- **"Tightened" thresholds claim:** A DEV post claims 2025 tightened LCP to under 2.0s and CLS to under 0.08. This is not supported by web.dev; treat it as unreliable. — [DEV (unreliable)](https://dev.to/linou518/core-web-vitals-2025-complete-guide-how-to-handle-inp-and-tighter-thresholds-24hf), contradicted by [web.dev](https://web.dev/articles/defining-core-web-vitals-thresholds)
- **Framework JS defaults:** Astro ships zero JS by default. Next.js ships about 85–120KB of baseline JS on a blog page (blog benchmark). — [Cosmic](https://www.cosmicjs.com/blog/astro-vs-nextjs-2026); [pkgpulse](https://www.pkgpulse.com/guides/astro-5-vs-nextjs-15-content-sites-2026)

### Inferences (standard practice; not individually sourced in this pass)
- **LCP:**
  - Serve the hero image as AVIF/WebP via `next/image` (uses sharp) or `astro:assets`, with explicit width and height and `priority`/`fetchpriority="high"`.
  - Avoid client-rendered hero text.
  - Self-host fonts with `next/font` or Fontsource, subset them, use `font-display: swap`, and use size-adjusted fallbacks to avoid CLS.
- **INP:** Minimize hydration. Use RSC or islands, defer analytics, lazy-load 3D and animation libraries, and avoid large client-side state libraries.
- **CLS:** Reserve space for images, embeds and the theme toggle. Prevent dark-mode flash with an inline script or `color-scheme`.
- **Engineering showcase:**
  - Run Lighthouse CI or `unlighthouse` in GitHub Actions with performance budgets (for example, JS under 100KB gzip on the home page).
  - Publish real CrUX/RUM numbers (via `web-vitals` or Vercel Speed Insights) on a "/stack" or "/colophon" page.

### Gaps
- No measured CrUX data for popular developer portfolios (leerob.com, joshwcomeau.com, and others) was retrieved. The writer should not cite specific scores for those sites.
- No 2026 AVIF vs WebP size benchmarks were fetched.

## SEO and discoverability (name ranking, structured data, sitemaps, AI search / llms.txt)

### Takeaway
To rank for one's own name:
- Put the name in the domain, title and H1.
- Add JSON-LD `ProfilePage` with `mainEntity: Person`, linked via `sameAs` to GitHub, LinkedIn and X.
- Add a sitemap, RSS, canonical URLs and OG/Twitter cards, verify in Google Search Console, and earn links from profiles and posts.

llms.txt is cheap to add but has no demonstrated effect on AI-search citations. Google says it neither helps nor hurts.

### Cited Findings
- **Google ProfilePage structured data:**
  - `mainEntity` must be a Person or Organization, and `name` is required.
  - Recommended properties are `dateCreated`/`dateModified` (ISO 8601), `alternateName` (handle) and `identifier`.
  - Article markup can reference the profile via `author`.
  - Use Person when unsure.
  - Source: [Google Search Central: ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- **llms.txt adoption:** About 10% of 300k domains (SE Ranking) and 8.7% of the top 1,000 sites. — [DEV reality check](https://dev.to/mrtd/llmstxt-reality-check-10-of-sites-have-it-ai-search-engines-almost-never-read-it-2281); [Limy](https://limy.ai/blog/llms-txt-in-2026-the-full-guide)
- **llms.txt traffic:** Ahrefs' analysis of 137k sites found 97% of llms.txt files received zero requests in May 2026. AI bots made only 1.1% of their requests to llms.txt. — [PPC Land](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/); [DesignRush](https://news.designrush.com/llmstxt-ai-search-visibility)
- **llms.txt citation effect:** SE Ranking and Trakkr found no measurable citation lift. A small 10-site test saw 2 sites gain AI traffic. Google says llms.txt "won't negatively or positively impact" Search visibility. — [Contentful](https://www.contentful.com/blog/llms-txt-search-visibility/); [Something Inc.](https://somethinginc.com/blog/does-llms-txt-work-2026-data/)
- **Where llms.txt may help:** It looks more like agent-readiness infrastructure (coding agents, MCP) than a search lever. — [Contentful](https://www.contentful.com/blog/llms-txt-search-visibility/)

### Inferences
- **Checklist:**
  - Unique `<title>` and meta description per page.
  - `metadataBase` and canonical URL (Next.js Metadata API) or `@astrojs/sitemap` + `<link rel=canonical>`.
  - `sitemap.xml` and `robots.txt` (`app/sitemap.ts`, `app/robots.ts` in Next.js).
  - RSS/Atom feed for the blog.
  - Per-post OG image.
  - JSON-LD: `ProfilePage`/`Person` on home and about, `BlogPosting` on posts with an `author` reference.
- **Domain:** `firstnamelastname.com`, `.dev` or `.in` all rank fine. `.dev` is HSTS-preloaded (HTTPS mandatory), a nice engineering signal. `.in` may help local Indian relevance. (General knowledge; not sourced here.)
- **GEO:** Treat AI-search visibility as a by-product of clean semantic HTML, server-rendered content, consistent entity data (the same name, bio and `sameAs` everywhere), and being cited on third-party pages. Add `/llms.txt` as a low-cost, agent-friendly extra and frame it as a demo, not a ranking tactic.

### Gaps
- No primary-source data on how fast new personal domains get indexed or rank for a name.
- Registrar comparison (Cloudflare Registrar at-cost pricing vs Porkbun vs Namecheap) was not researched.

## Hosting and infrastructure (Vercel, Netlify, Cloudflare; India latency)

### Takeaway
- **Vercel Hobby** is free but limited to non-commercial personal use. That suits a portfolio, but it has hard caps and a 30-day lockout if exceeded.
- **Cloudflare (Pages/Workers)** has an unlimited-bandwidth free tier that allows commercial use, and it now owns Astro.
- For India, Vercel has a Mumbai compute region (`bom1` on AWS `ap-south-1`) that can be pinned for functions near an Indian DB.

### Cited Findings
- **Vercel Hobby:** Non-commercial personal use only. Commercial use (payments, client work, ads) requires Pro at $20 per seat per month. — [Vercel docs: Hobby](https://vercel.com/docs/plans/hobby); [livemy.app](https://livemy.app/blog/vercel-pricing)
- **Vercel Hobby limits (aggregator figures):** 100GB bandwidth, 1M function invocations per month, 300s max duration. Exceeding a limit means waiting 30 days. — [fencode.dev](https://www.fencode.dev/en/blog/vercel-free-vs-pro-2026-official-limits-pricing); [agentdeals](https://agentdeals.dev/vendor/vercel)
- **Cloudflare free tier (aggregator figures):** Unlimited bandwidth, 500 builds per month, 100K Workers requests per day, commercial use allowed. Workers Paid is $5/month. Workers have CPU-time limits. — [hostfleet comparison April 2026](https://hostfleet.pages.dev/cf-pages-vs-vercel-vs-netlify-2026/); [agentdeals hosting comparison](https://agentdeals.dev/hosting-free-tier-comparison-2026)
- **Vercel Mumbai region:** `bom1` maps to AWS `ap-south-1` and has its own regional pricing page. Vercel reports about 19–20 compute regions and a CDN with 126 PoPs in 94 cities. — [Vercel docs: Regions](https://vercel.com/docs/regions); [Vercel bom1 pricing](https://vercel.com/docs/pricing/regional-pricing/bom1)

### Inferences
- **Static assets** are CDN-cached on every platform, so India latency matters mainly for dynamic functions and DB round-trips.
- **On Vercel**, pin functions to `bom1` and pick a DB region in Mumbai (Neon, Supabase and Upstash offer `ap-south-1`; unverified) or use edge-replicated reads (Turso).
- **On Cloudflare Workers**, compute runs at the nearest PoP, and Cloudflare has multiple Indian PoPs (unverified in this pass). Pair it with D1, KV or Turso replicas.
- Netlify is comparable but has less momentum. Its 2026 limits were not researched.
- **Recommendation:**
  - Next.js: Vercel Hobby (zero-config, Speed Insights, `next/og`, preview deploys).
  - Astro: Cloudflare (free, commercial-safe, Workers + D1 + KV for the full-stack showcase).

### Gaps
- No primary list of Cloudflare's Indian data-centre cities was retrieved.
- No measured TTFB from Indian ISPs to Vercel vs Cloudflare was found.
- Netlify 2026 free-tier credit model and domain registrar pricing were not covered.

## Full-stack showcase features

### Takeaway
Pick two or three backend features that are genuinely useful and well engineered rather than many gimmicks. Good options: view counters, a contact form with rate limiting and spam protection, a guestbook with OAuth, and a RAG "ask my resume" chatbot. Back them with free-tier serverless data (Upstash Redis for rate limits and counters; Turso or Neon for relational data). Show the engineering in a public repo with CI, tests, observability and a "/how-this-site-is-built" page.

### Cited Findings
- **Upstash Redis free tier:** About 500K commands per month and 256MB. Note that `@upstash/ratelimit` consumes commands on every check. — [agentdeals Upstash](https://agentdeals.dev/vendor/upstash); [costbench](https://costbench.com/software/database-as-service/upstash/free-plan/)
- **Turso free tier:** 100 databases, 5GB storage, 500M rows read and 10M rows written per month, with no time limit. — [agentdeals Turso](https://agentdeals.dev/vendor/turso); [costbench Turso](https://costbench.com/software/database-as-service/turso/free-plan)
- **Neon free tier:** Sources disagree, but describe about 100 projects, 100 CU-hours per project and 0.5GB per project after the move to usage-based pricing. One source flags shrinking free quotas. — [agentdeals Neon](https://agentdeals.dev/vendor/neon); [costbench Neon](https://costbench.com/software/database-as-service/neon/free-plan)
- **PlanetScale:** Reported to have ended its free tier. — [cloudinsight](https://cloudinsight.cc/en/blog/free-cloud-database)
- **leerob's simplified site:** leerob's current site template keeps only an optional Postgres redirects table. This suggests the "guestbook + view counter" era is less fashionable among top portfolios. — [github.com/leerob/site](https://github.com/leerob/site)

### Inferences
- **High-signal features for a full-stack engineer:**
  1. Contact form via Server Action or Worker, with Zod validation, Upstash sliding-window rate limit, Cloudflare Turnstile, and Resend email.
  2. Post view and like counters (Redis INCR or a Turso table), cached with Cache Components or ISR.
  3. "Ask about me" RAG chatbot over resume and blog content: embeddings in pgvector or Upstash Vector, streaming responses, a strict system prompt, rate limiting, and cost caps. Disclose that it is AI-generated.
  4. Guestbook with GitHub OAuth (Auth.js or Better Auth) to demo authentication and moderation.
  5. Live "now playing", GitHub contribution or WakaTime widgets via cached API routes.
- **Engineering-quality proof:**
  - Public GitHub repo; TypeScript strict; ESLint/Biome.
  - Vitest unit tests and Playwright e2e.
  - Lighthouse CI budget gate; GitHub Actions on PRs; preview deploys.
  - Error monitoring (Sentry) and OpenTelemetry traces.
  - Uptime check.
  - A public "/colophon" or "/stack" page with an architecture diagram, ADRs and live CWV numbers.
- **Cost control:** Every feature should degrade gracefully when free quotas are exhausted (for example, the counter hides itself rather than erroring).

### Gaps
- LLM API pricing for the chatbot was not researched (out of scope / budget).
- No source surveyed which showcase features recruiters actually value.

## Privacy-friendly analytics and India DPDP considerations

### Takeaway
Cookieless analytics avoid consent banners in most cases and fit the engineering-quality story:
- **Umami:** self-host or free cloud tier.
- **Plausible:** paid, from about $9/month.
- **Vercel Analytics:** free on Vercel.
- **PostHog:** 1M events/month free, but heavier.

India's DPDP Rules were notified in November 2025, with most consent and notice obligations phased in about 18 months later (around May 2027).

### Cited Findings
- **PostHog:** Free tier of 1M events/month and 5k session recordings, with per-product billing limits. — [devtoolpicks](https://devtoolpicks.com/blog/posthog-vs-plausible-vs-fathom-vs-mixpanel-2026); [agentdeals analytics](https://agentdeals.dev/analytics-free-tier-comparison-2026)
- **Umami:** Self-host is free. Cloud Hobby is $0 for 100k events, 1 site and 6-month retention (as of September 2026). — [aicores Umami pricing](https://aicores.io/pricing/umami)
- **Plausible:** Cloud from $9/month for 10k pageviews, a 30-day trial with no free plan, open source and self-hostable. — [pkgpulse analytics](https://www.pkgpulse.com/guides/vercel-analytics-vs-plausible-vs-umami-privacy-first-2026); [devtoolpicks](https://devtoolpicks.com/blog/posthog-vs-plausible-vs-fathom-vs-mixpanel-2026)
- **Vercel Analytics:** Free tier on all Vercel plans; requires Vercel hosting. — [pkgpulse](https://www.pkgpulse.com/guides/vercel-analytics-vs-plausible-vs-umami-privacy-first-2026)
- **DPDP Rules notification:** Notified 13/14 November 2025 (sources differ by a day). — [Mondaq](https://www.mondaq.com/india/data-protection/1708164/digital-personal-data-protection-rules-2025-notified); [SCC Online](https://www.scconline.com/blog/post/2025/12/26/digital-personal-data-protection-rules-2025-key-highlights/)
- **DPDP phasing:** The consent-manager framework takes effect 1 year after publication. Core consent, notice, security and rights rules take effect 18 months after publication. — [myndsolution DPDP wiki](https://dpdp.myndsolution.com/wiki/rules/); [Mondaq update](https://www.mondaq.com/india/privacy-protection/1708314/update-indias-digital-personal-data-protection-framework-comes-into-effect)
- **DPDP website implications:**
  - Commentary says cookies and tracking become consent-driven.
  - Withdrawal of consent must be as easy as giving it.
  - Rule 9 requires published contact details for data-related grievances.
  - Sources: [Bar & Bench](https://www.barandbench.com/columns/impact-of-the-new-digital-personal-data-protection-rules-on-websites); [Mondaq website guide](https://www.mondaq.com/india/privacy-protection/1724392/impact-of-dpdp-rules-on-websites-in-india-complete-compliance-guide)

### Inferences
- A personal portfolio using cookieless, aggregate analytics (Umami, Plausible, Vercel Analytics) processes little or no personal data. Contact-form submissions, guestbook OAuth profiles and chatbot logs are personal data, though.
- **Best practice before May 2027:**
  - A short privacy notice: what is collected, why, retention, and a contact email.
  - A way to delete guestbook entries.
  - No third-party trackers.
  - IP addresses hashed or truncated in rate-limit keys, with short TTLs.
- The Act's exemption for personal/domestic purposes may apply to a purely personal site, but this is unverified and should not be treated as legal advice.
- Avoid Google Analytics 4 if aiming for "no cookie banner."

### Gaps
- No authoritative source on whether a non-commercial personal site is in scope of DPDP.
- Vendor pricing comes from aggregators, not vendor pages. Verify before quoting.
