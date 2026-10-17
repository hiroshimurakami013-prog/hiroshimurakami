# Hiroshi Murakami website

Next.js site for Hiroshi Murakami, who builds AI for small and mid-size businesses in two fields: AI automation (receptionists, voice agents, agents, follow-ups, lead qualification, custom CRM and workflows, customer support assistants) and AI accounting (invoice capture, bookkeeping, bank reconciliation, reporting). Audience: owners and managers, especially in the Los Angeles area, plus accountants. Deployed at https://hiroshimurakami.vercel.app and kept noindex until the owner has a real domain.

## Source of truth
`docs/BUILD-PLAN.md` is the source of truth for strategy, routes, SEO, performance, images and the indexing switch. It overrides this file where they conflict. Its "Status" and "Open items" lists record what was done and what is left. `README.md` explains the structure, editing content, images and the Go live checklist.

## Contact and call to action
- Primary CTA everywhere: "Book a free AI audit" (`CTA_LABEL` in `lib/site.ts`), linking to https://www.instagram.com/hiroshimurakami013.
- Secondary: the Facebook Page https://www.facebook.com/1252933767913035.
- There is no email address, phone number or office address. Never invent contact details.

## Hard rules
- Always write "AI" in capitals in all copy, alt text and metadata.
- Never use em dashes or en dashes anywhere (copy, comments, docs, alt text). Use commas, periods, colons or hyphens.
- No video. No third-party scripts, analytics, cookies or embeds. If anything that collects data is ever added, update /privacy truthfully first.
- Honest marketing: no invented clients, testimonials, reviews, ratings, awards, certifications or statistics, no income or results guarantees, no absolute promises such as "every call answered". Use cases are illustrative scenarios labelled "Use case", never client case studies. Compare named tools fairly (Salesforce is powerful, but built for generic workflows) and make no unverifiable claims about named companies.
- City pages say "serving businesses in <city> and across Los Angeles County, remote-first" and never claim an office or in-person presence. They must stay genuinely distinct (no doorway pages).
- /privacy, /terms and /data-deletion keep their URLs (a Meta app depends on them). The shared footer (`app/components/site-footer.tsx`) is identical on every page.
- Never write tokens or secrets into the repo, git config or remote URLs.
- All absolute URLs come from `SITE_URL` in `lib/site.ts`. No hard-coded domain anywhere else.

## Content model
Copy lives in typed modules under `content/`, rendered by shared templates. Edit copy there, not in the templates.
- `content/services.ts`: the 8 services (`Service`), with all service page copy, FAQs, related services and process steps. Rendered by `app/services/[slug]/page.tsx`.
- `content/use-cases.ts`: the 24 use case cards (3 per service, with parent service, related service and cities). Long-form copy per service in `content/use-case-details/<service>.ts`. Rendered by `app/use-cases/[slug]/page.tsx`.
- `content/locations.ts`: the 10 Los Angeles area cities. Each city's copy, sections, FAQ, use cases and neighbours in `content/location-details/<city>.ts`. Rendered by `app/locations/[city]/page.tsx`.
- `content/images.ts`: scene image paths, sizes and alt text.
- `lib/routes.ts`: every public page and its last content date (feeds the sitemap and the checker). Add new pages here.
- `lib/site.ts`: `SITE_URL`, `INDEXABLE`, contact links, `pageMetadata()`. `lib/schema.ts`: JSON-LD builders (no address, rating or review markup).

## Design direction (owner feedback, still binding)
The owner rejected an earlier soft UI redesign. Keep the look the owner now likes and extend it, do not redesign it:
- Dark and cinematic by default, with a WebGL aurora, ember #FF6B4A as the warm accent and teal, steel and mint as supporting light. No neumorphism, no pebble shadows, no raised or inset cards.
- Bricolage Grotesque (display) and Geist (text) via next/font. Headings in normal case, large and confident. Never small caps, never tiny letterspaced uppercase labels or eyebrows.
- The page feels alive: smooth scrolling, scroll-driven reveals, parallax, magnetic and glowing interactions, marquee and ticker. Smooth, GPU-friendly and respecting `prefers-reduced-motion`. Animated counters only for real numbers.
- The brand kit in /root/.openclaw/workspace/brand/BRAND.md still supplies the logo (never stretch, rotate, recolour or frame it) and the ember colour, but its soft UI, Outfit and light theme rules do not apply to this site.

## Design skills
UI and motion skills live in `.claude/skills/` (see its README). Use `impeccable` as the main one, `redesign-existing-projects` for upgrades and the animation skills for motion. They give general taste; this file and the build plan say how it applies here.

## Workflow
- `npm run build`, then `npm run lint` and `npm run check` (`scripts/check-links.mjs`: links, orphans, titles, descriptions, H1s, canonicals, noindex, dashes, "AI" casing, JSON-LD, footer, images, city distinctness and more). All must pass before committing.
- Commit to `main`. Pushes to `main` redeploy on Vercel, which the owner's agent handles. Do not push or deploy unless asked.
- Going live (domain, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_INDEXABLE=true`) is described in README.md under "Go live".
