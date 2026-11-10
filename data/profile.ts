// All site content lives here. Edit this file to update the portfolio.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apoorv-portfolio-website.vercel.app";
export const LAST_UPDATED = "2026-11-10";

export const profile = {
  name: "Apoorv Bedmutha",
  role: "Full-stack Software Engineer 2",
  location: "Bengaluru, India",
  email: "bedmuthaapoorv@gmail.com",
  status: "Open to SDE 2 / Senior full-stack roles · Bengaluru or remote",
  description:
    "Apoorv Bedmutha is a full-stack Software Engineer 2 in Bengaluru who builds backends that keep up under load and interfaces people actually use.",
  links: {
    linkedin: "https://linkedin.com/in/apoorvbedmutha",
    github: "https://github.com/bedmuthaapoorv",
    medium: "https://medium.com/@bedmuthaapoorv",
    leetcode: "https://leetcode.com/u/bedmuthaapoorv",
  },
  // Drop the PDFs into /public/resume/ with these names.
  resumes: [
    { label: "Résumé · Full-stack (PDF)", href: "/resume/apoorv-bedmutha-fullstack.pdf" },
    { label: "Résumé · Backend (PDF)", href: "/resume/apoorv-bedmutha-backend.pdf" },
  ],
};

export const proof = [
  { n: "1,000", unit: "/min", label: "claim documents processed asynchronously by a poller service I architected", src: "MediAssist · 2025–" },
  { n: "14k", unit: "+", label: "users on the multi-tenant enterprise UIs I build and maintain", src: "MediAssist · Angular 18" },
  { n: "60→90", unit: "", label: "Lighthouse performance after SSR, lazy loading and CDN work in Next.js", src: "Nexus1 AI · 2025" },
  { n: "700", unit: "+", label: "npm downloads in 3 days for docsync, my commit-driven docs tool", src: "Side project · npm" },
];

export type Role = {
  title: string;
  org: string;
  dates: string;
  datetime: string;
  scope: string;
  bullets: string[]; // **bold** is supported
  chips?: string[];
  now?: boolean;
};

export const roles: Role[] = [
  {
    title: "Software Engineer 2",
    org: "MediAssist · Bengaluru",
    dates: "Sep 2025 — now",
    datetime: "2025-09",
    scope: "SCOPE ▸ production services + enterprise UIs",
    now: true,
    bullets: [
      "Architected a **poller background service** for asynchronous claim-document processing at **1,000 req/min** across 5+ .NET microservices.",
      "On-call for critical incidents from database to UI: **hotfix in ~1 hr**, permanent fix within 2 days on average.",
      "Frontend for multi-tenant Angular 18 apps used by **14,000+ users**; Figma wireframes to hi-fi across 4 viewports.",
    ],
    chips: [".NET", "RabbitMQ", "Redis", "MS SQL", "MongoDB", "Kubernetes", "Angular 18"],
  },
  {
    title: "Founding Engineer, Full-stack",
    org: "Nexus1 AI · Pune",
    dates: "Dec 2024 — Sep 2025",
    datetime: "2024-12",
    scope: "SCOPE ▸ service architecture + a team of 3",
    bullets: [
      "Designed a **6-service Spring Boot architecture** isolating Supabase, Postgres, Hive Metastore, Airflow, AWS and Jenkins integrations for fault tolerance.",
      "Built a multi-threaded Java poller tracking Jenkins jobs every 5 s to drive downstream data-lake pipelines.",
      "Org-level **multi-tenancy** on Postgres with Supabase OAuth; observability via Log4j, Elasticsearch and Grafana.",
      "**Led 3 engineers**; raised Lighthouse from **60 to 90** on the Next.js frontend.",
    ],
    chips: ["Java", "Spring Boot", "Airflow", "PostgreSQL", "Next.js", "Grafana"],
  },
  {
    title: "Founding Product Engineer",
    org: "Hushh AI · Pune",
    dates: "Feb — Dec 2024",
    datetime: "2024-02",
    scope: "SCOPE ▸ product owner, Hushh Wishlists",
    bullets: [
      "Product owner of **Hushh Wishlists**, a Chrome extension for building shareable product wishlists across **1,000+ shopping sites** — **50+ sign-ups on launch day**.",
      "Built product detection and UI injection on third-party sites (Amazon, Flipkart), with React compiled to a vanilla build via Webpack.",
      "Integrated the Gemini API to turn browsing behaviour into personalised ads.",
    ],
    chips: ["React", "Webpack", "GraphQL", "Gemini API"],
  },
  {
    title: "M.Tech, Information Technology",
    org: "IIIT Gwalior",
    dates: "2022 — 2024",
    datetime: "2022-08",
    scope: "BRANCH TOPPER · GPA 8.97 · HONOURS",
    bullets: ["Published in **Springer**: a novel lightweight authentication certificate for IoT devices."],
  },
  {
    title: "Software Engineer",
    org: "Xoriant · Pune",
    dates: "Feb 2021 — Aug 2022",
    datetime: "2021-02",
    scope: "SCOPE ▸ features",
    bullets: [
      "Designed and built 15+ pages in React, Redux and Material UI.",
      "Extended SWIFT message gateways from 1 to 4 supported input formats.",
    ],
  },
];

export type Project = {
  kicker: string;
  title: string;
  body: string;
  chips: string[];
  meta: string;
  metaMono?: boolean;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    kicker: "Full-stack · Fintech",
    title: "Frontier TradeLight",
    body: "Algorithmic-trading research platform: screen stocks, capture events and back-test strategies on 10+ years of data across 500+ NSE stocks. Describe a strategy in plain English and Gemini turns it into a runnable Python script in about 3 seconds.",
    chips: ["FastAPI", "React 18", "TypeScript", "Tailwind"],
    meta: "2025",
    link: { label: "Source →", href: "https://github.com/bedmuthaapoorv" },
  },
  {
    kicker: "Open source · Dev tooling",
    title: "docsync",
    body: "Documentation that writes itself. On every commit, docsync reads the change and updates one Google Doc per git branch with a plain-English summary, using the Claude CLI and its Google connectors. 700+ downloads in its first 3 days; 300+ documents kept up to date where I've rolled it out.",
    chips: ["Node.js", "Git hooks", "Claude CLI", "Google Docs"],
    meta: "npm i @bedmuthaapoorv/docsync",
    metaMono: true,
    link: { label: "npm →", href: "https://www.npmjs.com/package/@bedmuthaapoorv/docsync" },
  },
  {
    kicker: "Research · Security",
    title: "Lightweight IoT certificates",
    body: "M.Tech research published by Springer: a lightweight authentication certificate designed for constrained IoT devices.",
    chips: ["Cryptography", "IoT"],
    meta: "2024 · IIIT Gwalior",
    // TODO: add the Springer paper URL
  },
];

export const now = {
  updated: "10 Nov 2026",
  items: [
    { k: "Work", v: "Scaling document pipelines for health-insurance claims at MediAssist." },
    { k: "Writing", v: "A “JS without the jargon” series on Medium: closures, scopes, and what comes next." },
    { k: "Building", v: "docsync v2: support for monorepos and Markdown front-matter." },
    { k: "Learning", v: "Distributed tracing with OpenTelemetry across .NET and Java." },
    { k: "Looking for", v: "Senior full-stack roles at product companies, in Bengaluru or remote." },
  ],
};

export const credentials = [
  { t: "M.Tech, IIIT Gwalior", s: "Branch topper · Honours · GPA 8.97" },
  { t: "B.E. Computer Science", s: "Sinhgad College of Engineering, Pune · GPA 8.69" },
  { t: "Springer publication", s: "Lightweight authentication certificate for IoT" },
  { t: "AWS Certified Cloud Practitioner", s: "Amazon Web Services" },
  { t: "Microsoft Technology Associate", s: "JavaScript" },
  { t: "Top 16% on LeetCode", s: "Plus HackerRank Core Java, Liquibase Fundamentals" },
];
