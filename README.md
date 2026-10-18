# Hiroshi Murakami: AI automation and AI accounting

Website for Hiroshi Murakami, who builds AI automation (receptionists, voice agents, agents, follow-ups, lead qualification, custom CRM and workflows, customer support assistants) and AI accounting (invoice capture, bookkeeping, bank reconciliation, reporting) for small and mid-size businesses in the Los Angeles area and worldwide.

Current deployment: https://hiroshimurakami.vercel.app (noindex until the real domain is live, see "Go live" below).

The build plan and its status live in `docs/BUILD-PLAN.md`, the source of truth for strategy and rules. `CLAUDE.md` has the short version of the rules for agents.

## Pages

All routes are statically generated (49 pages plus a branded 404):

- `/`: home, positioning for AI automation and AI accounting, services, use case highlights, the Los Angeles area band, process and a closing call to action.
- `/services` and 8 service pages under `/services/<slug>`.
- `/use-cases` and 24 use case pages under `/use-cases/<slug>`, three per service. They are illustrative scenarios, labelled "Use case".
- `/locations` and 10 Los Angeles area city pages under `/locations/<city>`, each with its own angle, remote-first.
- `/privacy`, `/terms`, `/data-deletion`: legal pages. Their URLs must not change (a Meta app links to them).

Every page has a unique title and description, a canonical URL, Open Graph and Twitter tags, a generated Open Graph image and JSON-LD. Deep pages have breadcrumbs.

## Stack

- Next.js (App Router, TypeScript, Cache Components), Tailwind CSS v4
- Bricolage Grotesque (display) and Geist (text) via `next/font/google`
- `lenis` for inertial scrolling, loaded after idle. `@phosphor-icons/react` for icons, rendered on the server
- No animation library: scroll-linked effects share one scroll listener (`app/components/scroll-frame.ts`) and CSS does the motion

## Structure

- `lib/site.ts`: `SITE_URL`, `INDEXABLE`, contact links, the CTA label and `pageMetadata()` for titles, descriptions, canonicals and Open Graph tags. Nothing else hard-codes the domain.
- `lib/routes.ts`: every public page with its last content change. The sitemap and the link checker read it, so add new pages here.
- `lib/schema.ts`: JSON-LD builders: WebSite and ProfessionalService on the home page, Service on service pages, CollectionPage on the hubs, WebPage on use cases, BreadcrumbList on every deep page, and `articleJsonLd()` ready for a future blog. No address, rating or review markup.
- `lib/og.tsx`: shared renderer for the `opengraph-image.tsx` files next to each page. Fonts for it are committed in `assets/fonts` (SIL Open Font License, see the licence files there).
- `content/`: typed content modules (services, use cases, locations). `content/services.ts` holds the full copy of every service page, rendered by `app/services/[slug]/page.tsx`. Edit copy there, not in the template. Use case page copy lives in `content/use-case-details/`, and each Los Angeles area city page has its own file in `content/location-details/` (rendered by `app/locations/[city]/page.tsx`). City pages must stay distinct: `npm run check` fails if a city has fewer than 600 words of its own copy or shares a 12-word passage with another city.
- `scripts/check-links.mjs`: QA against the built output. Run `npm run build && npm run check`.
- `scripts/optimize-output.mjs`: runs as part of `npm run build`, after `next build`. It adds V8 compile hints to the client chunks and makes every prerendered page start its scripts after the first paint (see Performance). It changes nothing a visitor sees. On Vercel it patches both `.next` and `.next/output`, the copy that Vercel's Next.js adapter writes during `next build` and that Vercel then moves to `.vercel/output` and deploys. It works with a plain Git push and needs no Vercel project setting. To check a deploy, view the source of a page: it should contain `<script data-boot>` and no `<script src="/_next/static/.../chunks/..." async>` tags.

## Edit content

- Service copy: `content/services.ts` (name, summary, title, description, headline, problems, steps, FAQs, related services).
- Use cases: the card data (title, summary, parent service, related service, cities) in `content/use-cases.ts`, and the long copy in `content/use-case-details/<service>.ts`.
- City pages: `content/location-details/<city>.ts`. Keep each city distinct, with facts that are widely known and conservative.
- Contact links and the call to action label: `lib/site.ts`.
- After a content change, update the date for that page in `lib/routes.ts` (it becomes the sitemap `lastmod`), then run `npm run build`, `npm run lint` and `npm run check`.

Rules for all copy: "AI" in capitals, no em or en dashes, no invented clients, testimonials, statistics or guarantees, no contact details other than Instagram and Facebook. Titles stay at 60 characters or fewer and descriptions at 155 or fewer; the checker enforces these.

## Design

Dark and cinematic (see `CLAUDE.md` and `docs/BUILD-PLAN.md`), with ember as the warm accent and tide, steel and mint as supporting light.

- Hero: a static CSS gradient paints first. The WebGL aurora (`app/components/aurora.tsx`, shader in `aurora-gl.ts`) loads after the page is idle and drifts slowly, blooming under the cursor, with scroll parallax.
- A capabilities marquee that speeds up and reverses with the reader's scroll.
- An About statement that lights up word by word as it is read.
- A pinned scroll story of an AI workflow (`app/components/flow.tsx`): work comes in, AI does the first pass, work goes out done.
- Eight service cards with a cursor light and a scene image each, use case highlights with images, a Los Angeles area band with a city ticker, and a process rail that draws itself.
- A magnetic primary CTA.
- Service, use case and city pages end their hero with a wide scene image that drifts slowly as it scrolls (a CSS scroll-driven animation, no JavaScript).

Motion respects `prefers-reduced-motion`: smooth scrolling, the aurora, parallax, the marquee and ticker, the scene drift and the pinned story switch off, and the flow becomes a still diagram. Content is visible without JavaScript.

## Performance

- The aurora is skipped entirely on reduced motion, Save-Data, low device memory, fewer than 4 CPU cores and software GPU renderers. It renders at reduced resolution with a pixel cap, at 30 frames a second, pauses when off screen or in a hidden tab, and settles on a still frame if frames keep running late.
- Lenis loads after idle and only runs a frame loop while a glide is in progress.
- The hero lead paragraph is the LCP element and renders without animation.
- Deep pages end their hero with one scene image, the only image with high fetch priority on the page. Card and tile images are lazy and decorative (`alt=""`, the card title already names them). `next/image` serves AVIF or WebP at the width the `sizes` attribute asks for.
- The pages are complete HTML and CSS, so their scripts wait for the first paint (on the home page also for the end of the hero intro), or start at once on the first input or after 3 s. See `scripts/optimize-output.mjs`.
- On a plain fresh load, the blocks below the first one render late (`content-visibility`, lifted block by block by `app/components/render-release.tsx` before each reaches the screen). Loads with a `#fragment`, reloads and back and forward skip this, so scroll positions are always measured on the real layout.
- Endless loops (marquee, city ticker, flow core ring, CTA light) only play while their band is on screen (`[data-loop]`, marked by `app/components/reveal-observer.tsx`).
- The logo mark uses `app/components/static-image.tsx` (the same `<img>` as `next/image`, rendered on the server), so pages without scene images load no image code.

## Develop

```bash
npm install
npm run dev
npm run build
npm run lint
npm run check   # after a build
```

`npm run check` reads the built HTML of every route and the 404 and fails on broken internal links, orphan pages, more or fewer than one H1, long or duplicate titles and descriptions, missing canonicals, Open Graph or Twitter tags, a missing noindex while not indexable, em or en dashes, a lowercase "ai", JSON-LD that does not parse, a footer that differs between pages, third-party scripts, missing alt text, thin or overlapping city pages and more (the full list is at the top of the script). It also scans the source folders for dashes, token shapes and hard-coded domains.

## Contact and placeholders

Contact channels are the Instagram profile and Facebook page in `lib/site.ts` (`INSTAGRAM`, `FACEBOOK`). There is no email address or phone number on the site.

Use cases are illustrative scenarios, labelled "Use case". They are not client case studies and contain no client names or metrics.

## Assets

- `public/symbol.png`: the H symbol, shown on a light tile in the header and footer.
- `app/icon.png`, `app/apple-icon.png`: icons cropped from the symbol tile.
- Open Graph images are generated at build time by the `opengraph-image.tsx` files.
- `public/images/services/`, `public/images/use-cases/` and `public/images/shared/`: scene images, one per service and use case plus three shared scenes for the location pages. They were generated with the OpenAI image model (see `docs/BUILD-PLAN.md` section 7) and committed as 1536 by 1024 WebP files of under 180 KB each. Paths, dimensions and alt text live in `content/images.ts`, and `app/components/scene.tsx` renders them with `next/image` in a fixed aspect ratio frame. To replace an image, overwrite the WebP file (same name and size) or change its entry in `content/images.ts`; `npm run check` fails on a missing, unused, non-WebP or oversized file.

### How scene images are made

1. Generate a 1536 by 1024 PNG with the OpenAI image model through the OpenClaw CLI: `openclaw infer image generate --model openai/gpt-image-2.5-flare --quality high --size 1536x1024 --output-format png --output <path> --prompt "<prompt>" --json`.
2. Prompt style: dark cinematic night scene on #0B0D14, ember #FF6B4A as the main glow, teal, steel and mint accents, soft aurora light, subtle grain, a concrete scene for the problem and its solution. No text, letters, logos, watermarks or real faces.
3. Look at the result. Regenerate with a refined prompt if it has text artefacts or looks poor.
4. Convert with Pillow to WebP at about quality 80, under 180 KB, with a descriptive kebab-case name in the right `public/images/` folder, and delete the PNG.
5. Add or update the entry in `content/images.ts` with width, height and alt text (descriptive, "AI" in capitals, no keyword stuffing).

## Go live

The site is noindex until the owner has a real domain. While `NEXT_PUBLIC_INDEXABLE` is unset, every page has `noindex, nofollow`, every response has an `X-Robots-Tag: noindex, nofollow, noarchive` header, the sitemap is empty and robots.txt allows crawling (so search engines can see the noindex) without listing a sitemap.

Optional dry run before switching: put `NEXT_PUBLIC_INDEXABLE=true` and `NEXT_PUBLIC_SITE_URL=https://<domain>` in a local `.env.production.local` (git ignores it), run `npm run build` and `node --env-file=.env.production.local scripts/check-links.mjs`, then delete the file and build again.

To go live:

1. Buy the domain.
2. Add it to the Vercel project (Settings, Domains) and set up the DNS records Vercel shows.
3. In Vercel, Settings, Environment Variables (Production), set `NEXT_PUBLIC_SITE_URL` to the full origin, for example `https://www.example.com` (no trailing slash), and `NEXT_PUBLIC_INDEXABLE` to `true`.
4. Redeploy, so the new values are built in. Pages switch to `index, follow`, the `X-Robots-Tag` header goes away, and the sitemap and robots.txt list the real URLs.
5. Set the new domain as the primary domain in Vercel, and redirect `hiroshimurakami.vercel.app` to it with a 301 (Vercel offers this in the domain settings).
6. Check `https://<domain>/robots.txt`, `https://<domain>/sitemap.xml` and a page source for the canonical and robots tags.
7. Add the domain in Google Search Console and Bing Webmaster Tools, verify it, and submit `https://<domain>/sitemap.xml`.
8. Test the home page in Google's Rich Results Test.

## Deploy

Hosted on Vercel. Pushes to `main` redeploy when the GitHub repository is connected to the Vercel project.
