# Hiroshi Murakami: AI automation and AI accounting

Website for Hiroshi Murakami, who builds AI automation (receptionists, voice agents, agents, follow-ups, lead qualification, custom CRM and workflows, customer support assistants) and AI accounting (invoice capture, bookkeeping, bank reconciliation, reporting) for small and mid-size businesses in the Los Angeles area and worldwide.

Current deployment: https://hiroshimurakami.vercel.app (noindex until the real domain is live, see "Go live" below).

The build plan and its status live in `docs/BUILD-PLAN.md`.

## Stack

- Next.js (App Router, TypeScript, Cache Components), Tailwind CSS v4
- Bricolage Grotesque (display) and Geist (text) via `next/font/google`
- `lenis` for inertial scrolling, loaded after idle. `@phosphor-icons/react` for icons, rendered on the server
- No animation library: scroll-linked effects share one scroll listener (`app/components/scroll-frame.ts`) and CSS does the motion

## Structure

- `lib/site.ts`: `SITE_URL`, `INDEXABLE`, contact links, the CTA label and `pageMetadata()` for titles, descriptions, canonicals and Open Graph tags. Nothing else hard-codes the domain.
- `lib/routes.ts`: every public page with its last content change. The sitemap and the link checker read it, so add new pages here.
- `lib/schema.ts`: JSON-LD (WebSite and ProfessionalService on the home page).
- `lib/og.tsx`: shared renderer for the `opengraph-image.tsx` files next to each page. Fonts for it are committed in `assets/fonts` (SIL Open Font License, see the licence files there).
- `content/`: typed content modules (services, use cases, locations). `content/services.ts` holds the full copy of every service page, rendered by `app/services/[slug]/page.tsx`. Edit copy there, not in the template. Use case page copy lives in `content/use-case-details/`, and each Los Angeles area city page has its own file in `content/location-details/` (rendered by `app/locations/[city]/page.tsx`). City pages must stay distinct: `npm run check` fails if a city has fewer than 600 words of its own copy or shares a 12-word passage with another city.
- `scripts/check-links.mjs`: QA against the built output. Run `npm run build && npm run check`.

## Design

Dark and cinematic (see `CLAUDE.md` and `docs/BUILD-PLAN.md`), with ember as the warm accent and tide, steel and mint as supporting light.

- Hero: a static CSS gradient paints first. The WebGL aurora (`app/components/aurora.tsx`, shader in `aurora-gl.ts`) loads after the page is idle and drifts slowly, blooming under the cursor, with scroll parallax.
- A capabilities marquee that speeds up and reverses with the reader's scroll.
- An About statement that lights up word by word as it is read.
- A pinned scroll story of an AI workflow (`app/components/flow.tsx`): work comes in, AI does the first pass, work goes out done.
- Eight service cards with a cursor light, use case highlights, a Los Angeles area band with a city ticker, and a process rail that draws itself.
- A magnetic primary CTA.

Motion respects `prefers-reduced-motion`: smooth scrolling, the aurora, parallax, the marquee and ticker and the pinned story switch off, and the flow becomes a still diagram. Content is visible without JavaScript.

## Performance

- The aurora is skipped entirely on reduced motion, Save-Data, low device memory, fewer than 4 CPU cores and software GPU renderers. It renders at reduced resolution with a pixel cap, at 30 frames a second, pauses when off screen or in a hidden tab, and settles on a still frame if frames keep running late.
- Lenis loads after idle and only runs a frame loop while a glide is in progress.
- The hero lead paragraph is the LCP element and renders without animation.

## Develop

```bash
npm install
npm run dev
npm run build
npm run check   # after a build
```

## Contact and placeholders

Contact channels are the Instagram profile and Facebook page in `lib/site.ts` (`INSTAGRAM`, `FACEBOOK`). There is no email address or phone number on the site.

Use cases are illustrative scenarios, labelled "Use case". They are not client case studies and contain no client names or metrics.

## Assets

- `public/symbol.png`: the H symbol, shown on a light tile in the header and footer.
- `app/icon.png`, `app/apple-icon.png`: icons cropped from the symbol tile.
- Open Graph images are generated at build time by the `opengraph-image.tsx` files.

## Go live

The site is noindex until the owner has a real domain. To go live:

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
