# Hiroshi Murakami: portfolio landing page

A single page, CTA-focused landing page for Hiroshi Murakami, who helps businesses automate accounting (bookkeeping, invoices, receipts, reconciliation, reporting) with AI.

Live: https://hiroshimurakami.vercel.app

## Stack

- Next.js (App Router, TypeScript), Tailwind CSS v4
- Bricolage Grotesque (display) and Geist (text) via `next/font/google`
- `motion` for scroll-linked and spring motion, `lenis` for inertial scrolling, `@phosphor-icons/react` for icons

## Design

Design direction v2 (see `CLAUDE.md`): dark and cinematic, with ember as the warm accent and tide, steel and mint as supporting light. No soft UI.

- Hero: a WebGL aurora (`app/components/aurora.tsx`) that drifts slowly and blooms under the cursor, with scroll parallax.
- A capabilities marquee that reacts to scroll speed and direction.
- An About statement that lights up word by word as it is read.
- A pinned scroll story of the AI accounting flow (`app/components/flow.tsx`): documents in, AI core, clean books out.
- Services rows with a cursor light, case study cards with tilt and a spotlight border, and a process rail that draws itself.
- A magnetic primary CTA.

Motion respects `prefers-reduced-motion`. Smooth scrolling, parallax, the marquee, tilt and the pinned story all switch off, and the flow becomes a still diagram. Content is visible without JavaScript.

## Develop

```bash
npm install
npm run dev
npm run build
```

## Placeholders to replace

The projects grid in `app/page.tsx` (the `projects` array) contains generic placeholder case studies. They are labelled "Case study" and contain no client names and no metrics. Replace them with real projects when they are ready.

Contact channels are the Instagram profile and Facebook page set at the top of `app/page.tsx` (`INSTAGRAM`, `FACEBOOK`). There is no email address on the site.

## Assets

- `public/symbol.png`: the H symbol, shown on a light tile in the header and footer.
- `app/icon.png`, `app/apple-icon.png`: icons cropped from the symbol tile.
- `public/og.png`: Open Graph image, 1200 by 630, in the dark design.

## Deploy

Hosted on Vercel. Pushes to `main` redeploy when the GitHub repository is connected to the Vercel project.
