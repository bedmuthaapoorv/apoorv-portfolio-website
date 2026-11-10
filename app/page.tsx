import { ThemeToggle } from "@/components/ThemeToggle";
import { Clock } from "@/components/Clock";
import { Reveal } from "@/components/Reveal";
import { RichText } from "@/components/RichText";
import { MediumFeed } from "@/components/MediumFeed";
import { ContactForm } from "@/components/ContactForm";
import { getPosts, MEDIUM_PROFILE, type Post } from "@/lib/medium";
import { SITE_URL, LAST_UPDATED, profile, proof, roles, projects, now, credentials } from "@/data/profile";

// The server-rendered post list is refreshed at most hourly (for SEO and first paint);
// the browser then fetches the live list from /api/medium on every load.
export const revalidate = 3600;

async function initialPosts(): Promise<Post[]> {
  try {
    return await getPosts({ revalidate: 3600 });
  } catch {
    return [];
  }
}

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateModified: LAST_UPDATED,
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      url: SITE_URL,
      email: `mailto:${profile.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Indian Institute of Information Technology, Gwalior" },
        { "@type": "CollegeOrUniversity", name: "Sinhgad College of Engineering, Pune" },
      ],
      worksFor: { "@type": "Organization", name: "MediAssist" },
      sameAs: Object.values(profile.links),
      knowsAbout: [".NET", "Java", "Spring Boot", "React", "Angular", "Next.js", "System design", "RabbitMQ", "Kubernetes"],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function Home() {
  const posts = await initialPosts();
  const lastUpdated = new Date(LAST_UPDATED).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

  return (
    <>
      <JsonLd />
      <Reveal />
      <a className="skip" href="#main">Skip to content</a>

      <header className="top">
        <div className="wrap">
          <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
            <span className="mark">ab</span>
            <span>{profile.name}</span>
          </a>
          <nav className="primary" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#writing">Writing</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
          <a className="btn resume-btn" href="#contact">Résumé</a>
        </div>
      </header>

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="hero" id="top">
          <div className="wrap">
            <span className="status"><span className="dot" aria-hidden="true" />{profile.status}</span>
            <p className="prompt" aria-hidden="true"><b>apoorv@blr</b>:<i>~</i>$ whoami</p>
            <h1 className="display" style={{ marginTop: 8 }}>
              I build backends that <em>keep up</em> and interfaces people actually use.
              <span className="cursor" aria-hidden="true" />
            </h1>
            <p className="lede">
              I&apos;m Apoorv — a full-stack <strong>Software Engineer 2 at MediAssist</strong>, previously a{" "}
              <strong>two-time founding engineer</strong>. I work across .NET, Java and Python services, queues and Postgres,
              and React, Angular and Next.js frontends. 3.8+ years, M.Tech from IIIT Gwalior.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#work">See my work →</a>
              <a className="btn ghost" href="#contact">Get in touch</a>
            </div>
            <div className="meta-row" aria-label="Quick facts">
              <span><b>Local time</b> <Clock /> IST</span>
              <span><b>Stack</b> .NET · Java/Spring · FastAPI · React · Angular · Next.js</span>
              <span><b>Infra</b> Docker · Kubernetes · RabbitMQ · Redis · AWS</span>
            </div>
            <div className="proof reveal" aria-label="Headline numbers">
              {proof.map((p) => (
                <div key={p.label}>
                  <div className="n">{p.n}{p.unit && <small>{p.unit}</small>}</div>
                  <div className="l">{p.label}</div>
                  <div className="src">{p.src}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WORK ============ */}
        <section className="block" id="work">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">01 — Work</span>
              <div>
                <h2>Scope has grown every year.</h2>
                <p>From shipping pages, to owning a product, to designing a service architecture and leading engineers, to running production systems at enterprise scale.</p>
              </div>
            </div>
            <div className="slope">
              <figure className="slope-chart" aria-label="Chart: scope of ownership by year, rising from features in 2021 to systems in 2025">
                <svg viewBox="0 0 180 200" role="img">
                  <title>Scope of ownership over time</title>
                  <g className="d-sub">
                    <text x="0" y="22">systems</text><text x="0" y="72">team</text><text x="0" y="122">product</text><text x="0" y="172">features</text>
                  </g>
                  <line x1="52" y1="186" x2="176" y2="186" className="d-line" />
                  <polyline points="56,170 96,140 120,112 146,64 172,22" className="d-line hot" strokeWidth="2" />
                  <g fill="var(--accent)">
                    <circle cx="56" cy="170" r="3.5" /><circle cx="96" cy="140" r="3.5" /><circle cx="120" cy="112" r="3.5" /><circle cx="146" cy="64" r="3.5" /><circle cx="172" cy="22" r="4.5" />
                  </g>
                  <g className="d-sub">
                    <text x="48" y="199">&apos;21</text><text x="88" y="199">&apos;23</text><text x="112" y="199">&apos;24</text><text x="138" y="199">&apos;25</text><text x="160" y="199">now</text>
                  </g>
                </svg>
                <figcaption>&ldquo;What&apos;s your slope?&rdquo; — the question hiring managers actually ask.</figcaption>
              </figure>
              <div className="roles">
                {roles.map((r, i) => (
                  <article key={r.title + r.org} className={`role reveal${r.now ? " now" : ""}`} style={i === roles.length - 1 ? { paddingBottom: 0 } : undefined}>
                    <div className="role-top">
                      <h3>{r.title}</h3>
                      <span className="org">{r.org}</span>
                      <time dateTime={r.datetime}>{r.dates}</time>
                    </div>
                    <span className="scope">{r.scope}</span>
                    <ul>{r.bullets.map((b) => <li key={b}><RichText text={b} /></li>)}</ul>
                    {r.chips && <div className="chips">{r.chips.map((c) => <span key={c} className="chip">{c}</span>)}</div>}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ SIDE PROJECTS ============ */}
        <section className="block" id="projects">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">02 — Side projects</span>
              <div><h2>Things I build on weekends.</h2></div>
            </div>
            <div className="projects">
              {projects.map((p) => (
                <article key={p.title} className="proj reveal">
                  <span className="eyebrow">{p.kicker}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <div className="chips">{p.chips.map((c) => <span key={c} className="chip">{c}</span>)}</div>
                  <div className="foot">
                    <span className={p.metaMono ? "mono" : undefined}>{p.meta}</span>
                    {p.link && <a href={p.link.href}>{p.link.label}</a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WRITING + NOW ============ */}
        <section className="block" id="writing">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">03 — Writing</span>
              <div>
                <h2>Writing on Medium.</h2>
                <p>JavaScript fundamentals without the jargon, system design, and notes on full-stack careers in India. Loaded live from my Medium feed every time this page opens.</p>
              </div>
            </div>
            <div className="two">
              <div>
                <MediumFeed initial={posts} />
                <a className="medium-cta" href={MEDIUM_PROFILE}>All posts on Medium ↗</a>
              </div>
              <aside className="now reveal" aria-labelledby="nowh">
                <span className="eyebrow">/now · updated {now.updated}</span>
                <h3 id="nowh">What I&apos;m doing now</h3>
                <dl>
                  {now.items.map((n) => (
                    <div key={n.k}><dt>{n.k}</dt><dd>{n.v}</dd></div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* ============ CREDENTIALS ============ */}
        <section className="block" id="credentials">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">04 — Credentials</span>
              <div><h2>The paper trail.</h2></div>
            </div>
            <div className="creds reveal">
              {credentials.map((c) => (
                <div key={c.t} className="cred"><div className="t">{c.t}</div><div className="s">{c.s}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section className="contact" id="contact">
          <div className="wrap contact-grid">
            <div>
              <span className="eyebrow">05 — Contact</span>
              <h2 style={{ marginTop: 16 }}>Hiring for a hard <em>backend-meets-UI</em> problem?</h2>
              <p className="lede" style={{ marginBottom: 22 }}>I reply within a day. The fastest way is email; there&apos;s a form if you&apos;d rather type here.</p>
              <div className="hero-actions">
                <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
                {profile.resumes.map((r) => (
                  <a key={r.href} className="btn ghost" href={r.href} download>{r.label}</a>
                ))}
              </div>
              <ContactForm to={profile.email} />
            </div>
            <ul className="links" aria-label="Profiles">
              <li><a href={`mailto:${profile.email}`}><span>Email</span><span>{profile.email}</span></a></li>
              <li><a href={profile.links.linkedin}><span>LinkedIn</span><span>/in/apoorvbedmutha ↗</span></a></li>
              <li><a href={profile.links.github}><span>GitHub</span><span>@bedmuthaapoorv ↗</span></a></li>
              <li><a href={profile.links.medium}><span>Medium</span><span>@bedmuthaapoorv ↗</span></a></li>
              <li><a href={profile.links.leetcode}><span>LeetCode</span><span>top 16% ↗</span></a></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <span>© {new Date(LAST_UPDATED).getFullYear()} {profile.name} · {profile.location}</span>
          <span>Last updated {lastUpdated} · Built with Next.js 16</span>
        </div>
      </footer>
    </>
  );
}
