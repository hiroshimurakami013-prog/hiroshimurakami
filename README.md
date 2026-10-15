# Hiroshi Murakami: portfolio landing page

A single page, CTA-focused landing page for Hiroshi Murakami, who helps businesses automate accounting (bookkeeping, invoices, receipts, reconciliation, reporting) with AI.

Live: https://hiroshimurakami.vercel.app

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- Outfit via `next/font/google`
- No other runtime dependencies

## Brand

Follows the Hiroshi Murakami brand guidelines v1.0: Cloud and Mist surfaces, Ink text, soft UI shadows with light from the top left, a lowercase bold H1 with an ember full stop, and ember reserved for the primary call to action.

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

- `public/logo-circle.png`: circular crop of the soft UI primary logo, used in the footer.
- `app/icon.png`, `app/apple-icon.png`: icons cropped from the symbol tile.
- `public/og.jpg`: Open Graph image, 1200 by 630.

## Deploy

Hosted on Vercel. Pushes to `main` redeploy when the GitHub repository is connected to the Vercel project.
