# Recruiter and Hiring-Manager Perspective on SWE Portfolio Websites (Full Stack SDE2, India + Remote)

Research note: compiled 2026-11-10 from about 15 search and fetch calls. Several primary pages (profy.dev, techinterview.org, underdog.io, weekday.works) returned 403/500, so claims from them come from search snippets and are marked. Most "statistics" in career blogs (for example "73% of hiring managers value a portfolio over a resume") could not be traced to a primary survey and are left out on purpose.

## 1. Do recruiters and hiring managers actually visit portfolios? How long, and what do they look at first?

### Takeaway
Hiring managers usually say they will look at a portfolio if one is linked, but it is rarely decisive. Recruiters screen mostly on resume, LinkedIn and GitHub, and spend seconds on the first pass. No India-specific survey (Naukri, Instahyre, Cutshort, Wellfound) on portfolio visits was found. The portfolio works best as a fast "verification hub" for someone who is already interested, not as a discovery channel.

### Cited Findings
- Profy.dev survey of "60+ hiring managers" (React team leads and recruiters, **Aug 2021, older**): "the overwhelming majority" would look at a candidate's website, but most did not think lacking one lowers a candidate's chances. Many answered "it depends." — [DEV Community / Profy.dev](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge)
- Secondary summaries of the same survey give figures: 93% likely to look, 65% would *definitely* look for an inexperienced candidate, and 51% said a candidate without a site has the same chances. (These figures come from search snippets of the original article, which returned HTTP 500 when fetched. The DEV version shows the results only as chart images.) — [Profy.dev via HN reader](https://hn.jakechampion.name/reader/https://profy.dev/article/portfolio-websites-survey)
- A survey question about inexperienced candidates suggests the portfolio carries less weight for an experienced SDE2. This is an inference from how the question was framed. — same source as above
- Ladders eye-tracking study (**2018, older**): average initial resume screen of 7.4 seconds (up from about 6s in 2012). Recruiters scan job titles and subheads first. — [HR Dive](https://www.hrdive.com/news/eye-tracking-study-shows-recruiters-look-at-resumes-for-7-seconds/); methodology criticised (sample size and role types not disclosed) — [ERE](https://www.ere.net/articles/is-the-6-second-resume-scan-a-myth)
- DEV Community essay (Aug 2025) argues recruiters "rarely" open portfolio sites and screen through resume, GitHub and LinkedIn first. It calls the modern portfolio "a stack of signals" and a hub. Its cited statistics are mostly unsourced. — [DEV Community, devtips](https://dev.to/dev_tips/recruiters-arent-clicking-your-portfoliotheyre-looking-here-instead-2jah)
- A Taro lesson says recruiters mostly browse LinkedIn and calls a portfolio "resume++", meaning the resume still comes first. — [Jointaro](https://www.jointaro.com/lesson/wuiq8vI7ablCd09zkz0x/creating-a-portfolio-that-makes-recruiters-come-to-you/)
- An engineering career guide says frontend recruiters frequently click through to personal sites, while backend and infra recruiters rarely do. It calls "you need a personal website" over-sold advice. (From search snippets; the page returned 403.) — [techinterview.org](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/)
- Ask HN "Did your personal website help you get hired?" (Sept 2024): mixed results. Some reported getting "past pretty much every first round", job offers from niche blog posts, and interviewers who had read their posts. Others said it "never got me anything" or "probably hurt me more than helped." One commenter said in their own site's analytics, recruiter visits were rare. — [Hacker News](https://news.ycombinator.com/item?id=41656015)
- Hired's then-SVP of People (**2020, older**): the first thing managers check is a clear statement of your current role, for fit. — [The Muse](https://www.themuse.com/advice/can-a-personal-website-help-your-job-search-what-6-hiring-managers-really-think)
- One blog claims hiring managers spend about 15 seconds on first portfolio reviews. It is unverified and non-primary. — [search snippet, scale.jobs](https://blog.scale.jobs/portfolio-content-for-tech-jobs-what-recruiters-want)

### Inferences
- The above-the-fold area has to do the job of the 7-second resume scan: name, current role and title, company, years of experience, primary stack, and one headline impact metric, all visible without scrolling.
- For a full-stack SDE2, a polished site is a bit more likely to be opened than for a pure backend engineer, because the site itself is frontend evidence. It still won't replace the resume or LinkedIn as the primary screen.
- The most likely visitors are hiring managers and interviewers *after* shortlisting, preparing for the interview, plus inbound leads from writing. Content depth (case studies, posts) matters more for them than visual flash.

### Gaps
- No 2023-2026 primary survey with numbers on portfolio visit rates or time-on-site by tech recruiters was found.
- No data from Naukri, Instahyre, Cutshort, Wellfound, LinkedIn or Hired on portfolio-link click-through for Indian candidates. Searches aimed at these platforms returned only generic hiring-volume reports.

## 2. Which signals matter most for an SDE2 compared with a junior?

### Takeaway
For mid-level engineers, the signals that matter are scope growth ("slope"), clear statements of what *you* owned, measurable business and technical impact, architecture and trade-off thinking, and production experience. Side projects and open source are secondary: they help as evidence but should not outshine paid work.

### Cited Findings
- Hiring manager Swizec Teller (Nov 2025): resumes must answer "What's your slope?" (growth in scope and responsibility over time) and "What did you do?" (what you built or owned, for whom, and whether it worked). Side projects help early-career engineers. For later-career engineers they "shouldn't look more impressive than their paid work." Showing you've solved problems like the hiring manager's is a strong advantage. — [swizec.com](https://swizec.com/blog/what-makes-your-resume-stand-out/)
- Enhancv's analysis of 1,337 senior engineer job ads (2026 guide): recruiters look for demonstrated impact through delivered systems, role-relevant tools, and measurable outcomes over task lists. — [Enhancv](https://enhancv.com/resume-examples/senior-engineer/)
- Hiring managers want evidence of architectural ownership, and of thinking beyond single components to sound architectural decisions over time. Generic lines like "participated in code reviews and helped juniors" are table stakes. — [The Architect's Notebook](https://thearchitectsnotebook.substack.com/p/ep-66-the-software-architect-resume); [DEV Community](https://dev.to/johalputt/how-to-write-a-standout-resume-for-2026-senior-engineering-roles-1o1f)
- Project impact is judged by "adoption, revenue lift, reduced error rates, time saved, user satisfaction improvements." The lack of context around projects is one of the biggest portfolio weaknesses. — [search snippets: scale.jobs](https://blog.scale.jobs/portfolio-content-for-tech-jobs-what-recruiters-want), [underdog.io](https://underdog.io/blog/software-engineer-portfolio)
- Hiring managers on HN said a personal site adds signal when it shows communication and critical thinking, and gives "a more realistic picture" than a resume. — [Hacker News](https://news.ycombinator.com/item?id=41656015)
- A Profy survey respondent (recruiter) said GitHub projects are a strong interview conversation starter. — [DEV / Profy.dev](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge)
- On a Blind thread, a hiring manager said a strong GitHub is needed for SDE2/3. Others pushed back that senior engineers' work is mostly in private repos, so a public profile is not a fair test. — [search snippet, Blind](https://www.teamblind.com/post/need-referrals-for-an-sde-2-position-25-yoe-o5fe2n01)
- Ed Fry (**2020, older**) valued project write-ups showing goal, decisions and outcome, and said a candid account of a *failed* project raised his team's confidence in the candidate. — [The Muse](https://www.themuse.com/advice/can-a-personal-website-help-your-job-search-what-6-hiring-managers-really-think)

### Inferences
- Priority order for an SDE2 portfolio: (1) work-experience impact with numbers (scale, latency, cost, revenue, users), (2) 2-3 deep case studies of professional systems they owned, sanitised as needed, (3) evidence of slope (promotions, growing scope, mentoring, leading a feature or migration), (4) writing that shows design thinking, (5) side projects and open source as supporting evidence, (6) testimonials from managers or peers as a light trust signal (no sourced data found on testimonial impact).
- Because most SDE2 code sits in private repos, written case studies with architecture diagrams are the main way to make professional work visible. This is where a portfolio adds value beyond the resume.

### Gaps
- No source quantifies the value of testimonials or recommendations on a dev portfolio.
- No source compares the weight of open source and blogging for mid-level hiring at Indian product companies specifically.

## 3. Which content sections and ordering work best, and how should projects be written up?

### Takeaway
Sources agree on a simple, fast, scannable structure: a clear role statement and short bio up top, then experience and impact, case-study projects (problem, approach and trade-offs, outcome, your role), writing, and visible links to resume, GitHub, LinkedIn and contact. Process and decision-making count as much as results.

### Cited Findings
- A clear statement of your current role near the top is "usually the first thing managers check" (Hired). Recommended: a 2-5 line bio covering who you are and what you offer (Eventbrite). — [The Muse (2020, older)](https://www.themuse.com/advice/can-a-personal-website-help-your-job-search-what-6-hiring-managers-really-think)
- Show process: "so key, but so overlooked." Projects should explain goal, decision-making and outcome. Content should target the jobs you're applying for, and the site should look current. — [The Muse](https://www.themuse.com/advice/can-a-personal-website-help-your-job-search-what-6-hiring-managers-really-think)
- Recommended modern format: plain, fast design without heavy animation. Each project gets a short write-up of the problem, trade-offs and lessons learned. Show teamwork evidence (PR reviews, collaboration). Link GitHub, LinkedIn, blog and talks. Prefer one original project over several clones. — [DEV Community (Aug 2025)](https://dev.to/dev_tips/recruiters-arent-clicking-your-portfoliotheyre-looking-here-instead-2jah)
- Reviewers want to know the problem, the impact, and your role and responsibilities, including who you worked with (product, design, other engineers). — [search snippets aggregated; underdog.io / scale.jobs](https://underdog.io/blog/software-engineer-portfolio)
- HN commenters praised simple, clean design over flashy design. A project showcase can work without a blog, and niche technical write-ups attract relevant employers better than general tutorials. — [Hacker News (2024)](https://news.ycombinator.com/item?id=41656015)
- Arpit Bhayani (Indian Principal Engineer, Razorpay per his site) recommends hosting technical writing on a domain you own, your personal engineering site. — [arpitbhayani.me](https://arpitbhayani.me/videos/software-engineers-guide-to-technical-writing)

### Inferences
- Suggested order for an SDE2 full-stack site:
  1. Hero: name, "Full Stack Engineer (SDE2), X yrs, Company", one-line specialty, one headline metric, buttons for Resume PDF, Email, LinkedIn and GitHub.
  2. Impact and experience: roles with 2-3 quantified bullets each, showing progression.
  3. Case studies (2-3): Context and problem, constraints, your role, architecture (diagram), key decisions and trade-offs, outcome metrics, lessons and what you'd do differently.
  4. Side projects and open source, kept briefly.
  5. Writing and talks.
  6. Testimonials (optional, short, attributed).
  7. Contact, plus availability and location ("Based in Pune/Bangalore, IST; open to remote").
- Resume download and contact should appear both in the hero and at the end. Avoid hiding them behind animations or multi-step navigation.

### Gaps
- No A/B or analytics data on the effect of section order.

## 4. Common portfolio mistakes that hurt candidates

### Takeaway
The main mistakes are tutorial clones and generic projects, missing context and impact, stale or abandoned sites, over-engineered or flashy designs that hide content, broken links, and unprofessional content. A weak site can hurt more than having no site.

### Cited Findings
- "A bad design can make you look incompetent even though everything works fine." "Websites have to be maintained." A hiring commenter rejected candidates whose sites were "overengineered, using inappropriate technology for such a simple site, poor code." — [DEV / Profy.dev (2021, older)](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge)
- Todo, weather and Netflix-clone projects make portfolios blend in. Heavy animations are discouraged. — [DEV Community (2025)](https://dev.to/dev_tips/recruiters-arent-clicking-your-portfoliotheyre-looking-here-instead-2jah)
- Hiring managers "can spot a tutorial clone in seconds." Keep the site mobile-friendly and free of broken links. — [search snippets, scrimba / hakia](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired)
- Empty templates or a single stale "TODO" post count against a candidate. A profane project name was flagged by a recruiter. Strong opinions on a blog can cost you with some employers. — [Hacker News (2024)](https://news.ycombinator.com/item?id=41656015)
- Sites focused on unrelated pursuits can make a manager think "your heart won't be in the role." Generic, impersonal sites read as uncreative. — [The Muse (2020, older)](https://www.themuse.com/advice/can-a-personal-website-help-your-job-search-what-6-hiring-managers-really-think)

### Inferences
- For an SDE2, an extra mistake is a portfolio dominated by side projects that look more junior than their real job, which goes against Swizec's "shouldn't outshine paid work" point.
- Site performance (Lighthouse and Core Web Vitals) acts as a credibility signal for a full-stack engineer. No source measured this directly.

### Gaps
- No quantitative data on how page speed affects recruiter perception.

## 5. India-specific factors

### Takeaway
In India, screening runs mostly through LinkedIn, Naukri and other portals, referrals, and recruiter or consultant intermediaries. HR and recruiters often use proxies such as company brand, LeetCode and keywords. Hard evidence on how Indian recruiters use portfolios is thin and anecdotal. GitHub and LeetCode links are widely recommended but contested as signals for experienced engineers. Visible proof of work matters most for remote or international roles and for selective, engineering-led firms.

### Cited Findings
- Indian recruitment context (**Jan 2020, older**): the author estimates about 70% of the tech-recruitment TAM is held by an unorganised consultant and search industry. Naukri, Monster, Timesjobs, Shine and LinkedIn dominate sourcing. Resumes and social profiles are seen as unreliable and inflatable, and coding assessments as only a first filter. — [Saurabh Saha, Substack](https://saurabhsaha.substack.com/p/the-tech-recruitment-conundrum)
- A Blind thread describes a Google India recruiter asking an SDE2 candidate to complete 200-300 medium/hard LeetCode problems. Commenters said HR often treats LeetCode as the measure of competence and that this reflects recruiter metrics more than requirements. — [Blind](https://www.teamblind.com/post/google-recruiter-asked-for-leetcode-profile-and-told-me-to-complete-200-300-mid-hard-level-problems-mqeyhdry)
- Indian career guides (vendor-adjacent, treat cautiously) say recruiters don't read GitHub code, they "run a fast signal check", and that ATS and keyword tools scan for GitHub, LeetCode and portfolio links. — [JobRise](https://jobrise.io/en/blog/github-portfolio-kaise-banaye/); [unboxcareer](https://unboxcareer.com/blog/github-readme-portfolio-guide-india)
- Market context 2025: about 1.8M IT roles in India (+16% YoY, Quess). GCCs (global capability centres such as Microsoft, Google and Atlassian India) rose from about 15% to 27% of IT demand. Product and SaaS firms hired selectively, startup hiring was low, and mid-level professionals were in demand. — [Free Press Journal / Quess](https://www.freepressjournal.in/tech/indias-it-job-demand-touches-18-million-in-2025-led-by-gccs-product-firms); [Asianet Newsable](https://newsable.asianetnews.com/amp/business/india-it-hiring-soars-in-2025-18m-jobs-midlevel-pros-in-demand-articleshow-fo69o7l)
- Zerodha is extremely selective: CTO Kailash Nadh said they hired about 5 people in tech in 4 years (2024). Its culture is FOSS-heavy. No primary source confirms that Zerodha hires from open-source work instead of resumes. — [Indian Startup News](https://indianstartupnews.com/news/zerodha-hired-only-5-employees-for-its-tech-team-in-4-years-says-cto-kailash-nadh-7238408)
- Personal brand example: Arpit Bhayani reports 350,000+ followers across LinkedIn, Twitter and YouTube and a newsletter with about 125-145k readers, built from writing on system design and distributed systems. His site has collaborate and consult pages. — [arpitbhayani.me/collaborate](https://arpitbhayani.me/collaborate); [newsletter](https://arpitbhayani.me/newsletter)
- Remote and international: anecdotal claims say US companies rarely hire directly from India unless a candidate is highly visible on X and GitHub sharing their work. Wellfound remote listings often require 2-3+ years. Smaller, less-funded startups are more open to India-based hires. When managers can't observe work, proof of ownership and communication becomes more important. — [search snippets: Reddit snapshot](https://reddit.sentinel-team.org/posts/1t3c91x/snapshots/2026-05-04T19%3A53%3A39.279918Z), [Blind](https://www.teamblind.com/post/us-startups-offering-remote-role-in-india-yupwsqgs), [Fueler](https://fueler.io/blog/remote-startup-jobs-for-indian-professionals)

### Inferences
- For Indian product companies and FAANG India, the portfolio supports a funnel that runs through LinkedIn, Naukri, Instahyre and referrals. The portfolio link should appear on all of these, and the LinkedIn headline, resume and site hero should use the same keywords.
- LeetCode links mean little for an SDE2 portfolio. Interviews will test DSA anyway. Link only if the profile is strong (contest rating or a high solve count). GitHub should be linked, with pinned repos and READMEs tidy.
- Salary-band positioning: no source discussed showing CTC on a portfolio. Common practice and inference is *not* to publish compensation. Instead, signal level through scope, scale and title. Remote and international audiences benefit from an explicit "open to remote, IST with US/EU overlap" line.
- Remote and global roles reward the portfolio more than domestic hiring does, because written communication, async ownership and public proof of work stand in for in-person trust.

### Gaps
- No statements found from named Indian EMs or recruiters at Razorpay, CRED, Swiggy, Flipkart, Atlassian, Microsoft or Google India about portfolios specifically.
- No referral-share data for Indian product companies.
- No YourStory or Inc42 article on portfolios surfaced in searches.

## 6. How a portfolio supports goals beyond jobs (freelance, consulting, personal brand, speaking)

### Takeaway
The clearest evidence that personal sites pay off comes from long-running writing and niche content. It generates inbound consulting, freelance, teaching and job leads, but only over years of consistent publishing.

### Cited Findings
- HN (2024): one freelancer said clients reached out through his blog for years, keeping him booked. Another said her site has driven her consulting work for five years. Niche posts (multiplayer networking, Kubernetes/Istio) led to a job offer and a teaching role. Results take years, so consistency matters more than any single post. Audience mismatch is a risk: popular posts may reach developers in other regions rather than target clients. — [Hacker News](https://news.ycombinator.com/item?id=41656015)
- Arpit Bhayani's site has dedicated "collaborate", "consult" and "sessions" pages alongside a newsletter. This is a model of a personal site converting a writing audience into consulting and paid sessions. — [arpitbhayani.me/consult](https://arpitbhayani.me/consult); [sessions](https://arpitbhayani.me/sessions)
- He advises owning your domain for writing and hand-writing explanations rather than using AI-generated text. — [arpitbhayani.me](https://arpitbhayani.me/videos/software-engineers-guide-to-technical-writing)
- Example of an Indian developer's "hire me" page on a personal site. — [akashrajpurohit.com/hire-me](https://akashrajpurohit.com/hire-me/)

### Inferences
- If freelancing, consulting or speaking is a goal, add a separate "Work with me" or "Speaking" page with services, past talks and a booking or contact path. Keep the main job-seeker path (hero, impact, case studies, resume) uncluttered.
- A blog or newsletter on the engineer's actual domain (for example payments, scaling a full-stack product, or system design lessons from work) compounds over time and is the strongest long-term personal-brand asset found in the evidence.

### Gaps
- No quantitative data on conversion from a portfolio or blog to freelance income for Indian engineers.
