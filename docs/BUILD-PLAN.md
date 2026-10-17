# Build plan: AI automation and AI accounting site (source of truth)

This file overrides older notes in CLAUDE.md where they conflict. Read it fully before every phase. Keep the visual style the owner likes (dark cinematic, aurora, smooth motion, Bricolage Grotesque + Geist, ember accent with teal, steel and mint). Do not redesign the look. Extend it.

## 0. Who and what
Hiroshi Murakami builds AI for businesses in two fields:
1. AI automation (receptionists, voice agents, agents, follow-ups, lead qualification, custom CRM and workflows, customer support assistants)
2. AI accounting (invoice capture, bookkeeping, bank reconciliation, reporting)

Audience: owners and managers of small and mid-size businesses, especially in the Los Angeles area, plus accountants. Primary CTA everywhere: "Book a free AI audit", linking to https://www.instagram.com/hiroshimurakami013 (secondary: Facebook Page https://www.facebook.com/1252933767913035). There is no email address and no phone number to show. Do not invent any contact details, addresses, awards, certifications, clients, testimonials, reviews, ratings or statistics.

## 1. Non-negotiable rules
- Always write "AI" in capitals in all copy, alt text and metadata.
- Never use em dashes or en dashes anywhere (copy, code comments, docs, alt text). Use commas, periods, colons or hyphens.
- No video. No third-party scripts, analytics, cookies or embeds (the privacy policy says the site has none; if you ever add anything that collects data, update /privacy truthfully).
- No secrets in the repo. Never push or deploy (the owner's agent does that).
- These URLs must keep working unchanged: /privacy, /terms, /data-deletion (a Meta app depends on them). The shared footer stays identical on every page.
- Honest marketing: no income or results guarantees, no made-up numbers. Use cases are illustrative scenarios, labelled "Use case", never presented as client case studies. Compare tools fairly (for example: a large CRM such as Salesforce is powerful, but built for generic workflows and often does not fit a specific business model). Do not disparage named products with unverifiable claims.
- Nothing may break: every internal link resolves, no orphan pages, build passes, accessibility stays at 100, existing animations keep working with the hero fix (no white flash, works after client navigation).

## 2. Indexing switch (site is NOINDEX until the owner buys a domain)
- Create `lib/site.ts` (or similar) exporting `SITE_URL` (default `https://hiroshimurakami.vercel.app`, overridable by `NEXT_PUBLIC_SITE_URL`) and `INDEXABLE` (default false, overridable by `NEXT_PUBLIC_INDEXABLE=true`). Everything that needs an absolute URL (canonicals, Open Graph, sitemap, robots, JSON-LD, metadataBase) must use `SITE_URL`. Zero hard-coded domains elsewhere.
- While `INDEXABLE` is false: metadata robots `noindex, nofollow` on every page and the 404; an `X-Robots-Tag: noindex, nofollow, noarchive` header on all routes via next.config headers; sitemap returns no entries; robots.txt must NOT block crawling (so crawlers can see the noindex), and must not advertise a sitemap.
- While `INDEXABLE` is true: `index, follow`, no X-Robots-Tag noindex, real sitemap, robots.txt with the sitemap URL.
- README gets a short "Go live" section: buy domain, add it in Vercel, set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_INDEXABLE=true`, redeploy, set the domain as primary, add 301 from the vercel.app host, submit the sitemap in Google Search Console and Bing Webmaster Tools, check Rich Results Test.

## 3. Performance (the owner wants page speed to be excellent)
Baseline measured on the live site: Lighthouse mobile performance 54, TBT 6.8 s, LCP 3.6 s, FCP 1.9 s, CLS 0 (run on a weak server with software rendering, so absolute numbers are pessimistic, but the main thread is clearly overloaded).
Targets on a production build, measured with local Lighthouse (`npx lighthouse`, `CHROME_PATH` is set, use `--chrome-flags="--headless=new --no-sandbox"`): mobile performance 90 or higher if achievable in this environment, otherwise show a large measured improvement and explain the remaining limit; LCP 2.5 s or better in field terms (keep the LCP element static, text or a prioritised image); CLS 0.1 or less; keep INP low (no long tasks).
Required techniques:
- Server Components by default. `"use client"` only where truly needed, as small leaf components.
- The WebGL aurora and the smooth-scroll library must not compete with first paint: render a static CSS gradient first, then lazy-load the WebGL aurora and smooth scroll after load and idle (`requestIdleCallback` or after first interaction), via dynamic import. Skip WebGL entirely on `prefers-reduced-motion`, `saveData`, very low device memory or low core counts, and when the tab is hidden. Pause it when off-screen. Cap its resolution and frame cost.
- Split heavy client code per route. No large animation libraries on legal pages.
- Fonts: next/font with `display: swap`, only needed weights and subsets, preload only what is above the fold.
- Images: `next/image` with explicit dimensions, correct `sizes`, AVIF/WebP, `priority` only on the single LCP image, lazy below the fold, no layout shift. Source images are committed as optimised WebP (see section 7).
- Avoid layout thrash, large DOM, long tasks, unused CSS and JS. Check the bundle with the Next build output.
- Verify the hero fix still holds after client navigation to other pages and back.

## 4. Technical SEO (follow Google Search Essentials, helpful content and E-E-A-T guidance, current Core Web Vitals)
- Every page: unique `<title>` of 60 characters or fewer and unique meta description of 155 characters or fewer, written for humans with the primary phrase near the start; canonical; `lang`; viewport; `theme-color`; Open Graph and Twitter tags; one H1 and a logical H2/H3 outline; descriptive link text.
- Dynamic Open Graph images per page via the Next file convention (`opengraph-image.tsx` with `next/og`), in the site's dark theme, so no external image tools are needed.
- JSON-LD (valid, parsed in a test): `WebSite` and `Organization`/`ProfessionalService` on the home page (no address, no rating, no review); `Service` on each service page with `provider`, `serviceType`, `areaServed` and a link to the service hub; `BreadcrumbList` on every deep page; `Article`-ready helper for the future blog. Do not use FAQPage rich result expectations (Google restricts them) and do not add fake review or rating markup. Visible FAQ sections are fine without schema.
- Clean URLs, lowercase kebab-case, consistent no-trailing-slash, no redirect chains. A custom branded 404 with links to the main sections (noindex).
- Sitemap and robots as in section 2, with `lastmod` from real dates, no changefreq/priority noise.
- Semantic HTML landmarks (header, nav, main, footer), skip link, visible focus, alt text on every meaningful image (descriptive, with AI in capitals, no keyword stuffing), decorative images `alt=""`.
- Security headers that are low risk (for example `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`), no CSP that could break the site.
- No keyword stuffing, no hidden text, no thin or duplicated pages, no doorway pages. Write for people first.

## 5. Information architecture
Routes (all new routes must be statically generated):
- `/` home: positioning for AI automation and AI accounting, services grid, use case highlights, Los Angeles area strip, process, closing CTA. Keep the style the owner likes.
- `/services` hub and `/services/[slug]` for the 8 services below.
- `/use-cases` hub and `/use-cases/[slug]` for 24 use cases (3 per service, more is welcome).
- `/locations` hub and `/locations/[city]` for 10 Los Angeles area cities.
- Existing: `/privacy`, `/terms`, `/data-deletion`.
Header navigation: Services, Use cases, Locations, plus the primary CTA. Footer (shared): the same links plus legal links. Breadcrumbs on all deep pages.

Data lives in typed content modules under `content/` (services, use cases, locations), rendered by shared templates, so copy is easy to edit.

## 6. Services (8) and use case seeds (3 each, write real, specific, useful content)
Each service page: what it is, who it is for, business problems it solves, how it works (steps), what the client provides, human-in-the-loop and privacy note, 3 use case summaries with links, related services, Los Angeles area links, a visible FAQ (4 to 6 questions), CTA.

1. `ai-accounting` AI Accounting: (a) invoice and receipt capture and coding, (b) bank reconciliation that eats days each month, (c) month-end reporting delayed by messy books, plus accounts payable chasing if useful.
2. `ai-receptionist` AI Receptionist: (a) the human receptionist who misses calls (breaks, lunch, sick days, two calls at once), (b) after-hours calls that go to voicemail so callers phone the next business, (c) booking and rescheduling that eats the front desk's day.
3. `custom-voice-agents` Custom Voice Agents: (a) outbound appointment confirmations and reminders, (b) inbound pricing and FAQ calls that interrupt the team, (c) instant callback to new web leads.
4. `ai-agents` AI Agents: (a) back-office data entry across tools that do not talk to each other, (b) research and reporting on autopilot (price and competitor monitoring, weekly summaries), (c) an internal assistant that answers team questions from company documents.
5. `ai-follow-ups` AI Follow-Ups: (a) quotes sent and never answered, (b) overdue invoices that feel awkward to chase, (c) review requests and rebooking after the job is done.
6. `ai-lead-qualification` AI Lead Qualification: (a) web form leads that go cold, (b) unqualified calls wasting sales time, (c) messy inbound from email, DMs and forms that nobody triages.
7. `custom-crm-and-workflows` Custom CRM and Workflow Automation: (a) "Salesforce is a good CRM, but it does not fit your business model" (generic objects, per-seat cost, weeks of admin, process bent to the tool), (b) five tools that do not talk to each other, (c) handoffs that are manual so leads and jobs fall through.
8. `ai-customer-support` AI Customer Support Assistants: (a) the same questions swamping inbox, chat and WhatsApp, (b) support only during business hours, (c) handing over to a human with full context.

Use case page (`/use-cases/[slug]`, about 500 to 800 unique words each): the problem in plain business terms (recent, real pressures such as hiring and wage costs, missed calls, tool sprawl, per-seat software pricing, spreadsheet chaos), why the usual tools fall short, how the AI solution works step by step, what changes (qualitative, no invented numbers), what is needed to start, human-in-the-loop and privacy notes, links to the parent service, one related service and relevant city pages, CTA. Label it "Use case" and add a short note that it is an illustrative scenario.

## 7. Images (generated with the OpenAI image model, matching the dark theme)
Generate with the OpenClaw CLI (already authenticated):
`openclaw infer image generate --model openai/gpt-image-2.5-flare --quality high --size 1536x1024 --output-format png --output <path> --prompt "<prompt>" --json`
- One hero image per service (8) and one image per use case (24 or more). Locations reuse a shared set (no per-city generation).
- Prompt style: dark cinematic, deep night background #0B0D14, ember #FF6B4A as the main glow, teal #2FB6A6, steel #7FB0E6 and mint #3CCF9B accents, soft aurora light, subtle grain, premium and calm, concrete scene for the specific problem and solution (for example a phone with a glowing AI voice waveform answering a call, glass cards flowing into an AI core). No text, no letters, no logos, no faces of real people, no watermark.
- View each result (Read tool can display images). If it is poor or contains text artefacts, regenerate once or twice with a refined prompt.
- Optimise with Pillow (`python3`): convert to WebP, max width 1600, quality about 80, target under 180 KB each, descriptive kebab-case file names in `public/images/services/` and `public/images/use-cases/`. Delete the PNG originals. Compute width and height for next/image. Write good alt text.
- If generation fails repeatedly, use a CSS gradient placeholder component, note it in docs/BUILD-PLAN.md under "Open items", and carry on.

## 8. Los Angeles area location pages
Cities (10): Los Angeles, Santa Monica, Pasadena, Glendale, Burbank, Long Beach, Beverly Hills, Culver City, Torrance, Inglewood.
These are not doorway pages. Google penalises thin, templated city pages. Each page must be genuinely useful and clearly different:
- 600 or more unique words per city, with a different angle and structure driven by that city's real business mix (use only widely known, conservative facts, for example Long Beach and its port and logistics, Burbank and media and entertainment, Pasadena and science, healthcare and professional services, Beverly Hills and professional services, retail and medical practices, Culver City and media and tech studios, Torrance and manufacturing and aerospace supply, Santa Monica and startups, hospitality and tourism, Inglewood and sports, entertainment and aviation-related services, Glendale and healthcare and media, Los Angeles as the broad hub). No invented statistics, landmarks, partnerships or testimonials.
- Say "serving businesses in <city> and across Los Angeles County, remote-first". Never claim a physical office, address or in-person presence in a city.
- Each page links to all 8 services, to the 3 to 5 use cases most relevant to that type of local business, and to neighbouring cities. Include a short FAQ unique to that city. `Service`-style structured data is not needed on city pages (BreadcrumbList only); `areaServed` may reference the city on the service schema of the page only if accurate.
- If you cannot make 10 pages genuinely distinct and useful, ship fewer (minimum 6) and list the rest under "Open items".

## 9. Internal linking (make it excellent)
Hub and spoke: home -> services hub -> service -> its use cases -> related services and cities; cities -> services and use cases; use cases -> parent service, sibling use case, relevant cities. Breadcrumbs everywhere. Descriptive anchor text (no "click here"). Footer lists hubs. A build-time or script check (`scripts/check-links.mjs`, run in the QA phase) crawls the built output or route list and fails on any broken internal link or orphan page, and also checks: one H1 per page, title and description length limits, canonical present, noindex present while INDEXABLE is false, no em or en dashes, no lowercase "ai" word in copy, JSON-LD parses.

## 10. Phases and commits
Work is split into phases, each ending with a commit whose message starts with `P<number>: `. Phases: P1 foundation and performance, P2 services, P3 use cases, P4 locations, P5 images, P6 final QA. Update the "Status" list below at the end of each phase.

### Status
- [x] P1 foundation, noindex switch, performance, home repositioning, nav, OG images, description fixes
- [x] P2 services hub and 8 service pages (typed content for services and all 24 use cases, Service and BreadcrumbList JSON-LD, breadcrumbs, OG images, Services in header and footer, linked home cards, extended `npm run check`)
- [x] P3 use cases hub and 24 use case pages (long-form copy per use case in `content/use-case-details/`, hub grouped by service, WebPage and BreadcrumbList JSON-LD, breadcrumbs, OG images, linked tiles on home, hub and service pages, Use cases in header, footer and 404, extended `npm run check`)
- [ ] P4 locations hub and 10 city pages
- [ ] P5 images generated, optimised and wired in
- [ ] P6 final QA, link check, Lighthouse, README go-live, CLAUDE.md update

### Open items
- Performance (P1): local Lighthouse mobile on the home page went from 51 to about 70 (TBT 6.9 s to 0.6 to 1.0 s, LCP 4.0 s to 3.6 s, CLS 0). In this environment even /privacy, which is plain text plus the Next and React runtime, scores 75, so the remaining gap to 90 is the framework runtime on a weak, software-rendered CPU rather than page code. Re-measure with PageSpeed Insights on the deployed site, and again in P6.
- Fonts: the Bricolage Grotesque file is 128 KB because it carries the width axis (the site uses a fixed 94% width). A self-hosted instance pinned at that width (fontTools `varLib.instancer`, then `next/font/local`) would save about 50 KB without changing the look. fontTools was not available here.
- Navigation: Services and Use cases go to their hubs in the home header (`app/nav-links.tsx`), the deep page header (`app/components/site-header.tsx`), the shared footer and the 404. "Process" stays an in-page anchor. Add Locations to all four in P4.
- The city ticker is still plain text, on the home page, service pages and use case pages (`AreaBand`). Each use case page names its four most relevant cities in the area band text (`locations` in `content/use-cases.ts`), as plain text. In P4, link those city names to /locations/<city>, and link each city page back to its 3 to 5 most relevant use cases.
- Service pages show the Los Angeles area band with the city ticker as plain text. In P4, add links from each service page to the relevant city pages, and add the new routes to `lib/routes.ts` (the service routes are generated from `content/services.ts`).
- `npm run check` checks heading outlines, unique titles and descriptions, og:image, an identical footer on every page, breadcrumbs and BreadcrumbList on deep pages, Service JSON-LD on service pages, a two-click depth for services and three clicks for use cases. For use case pages it also checks the "Use case" label, the illustrative scenario note, at least 500 words of main copy, links to the parent service, sibling use case and related service, and links from at least two other pages. `isDeep()` covers /services and /use-cases: extend it to /locations in P4.
- P2 and P3 pages were checked through the build output, `npm run check` and HTTP responses from `next start`, not visually: no headless Chrome is installed in this environment. Look at /services, /use-cases, one service page and one use case page on desktop and mobile before deploying.
- Use case pages have no image yet. P5 generates one per use case: add an `image` field to the use case cards and render it in the use case hero and tiles without layout shift.
- On the services hub, the AI accounting feature card lists its three use cases as plain text, because the whole card is one stretched link to the service. The use cases are linked from the service page, the use cases hub and their siblings instead.
- `AGENTS.md` contains em dashes inside the block that `next dev` writes and rewrites. It is outside the checked folders. Leave it, or fix it only together with the Next.js tooling.
