# Hiroshi Murakami portfolio site

Next.js landing page and portfolio for Hiroshi Murakami, who helps businesses in the accounting field by using AI to automate accounting. Live at https://hiroshimurakami.vercel.app. Pushes to `main` redeploy on Vercel.

## Who it is for
Business owners and accountants. The offer is practical AI-automated accounting: invoice capture, bank reconciliation, monthly reporting. Primary CTA: "Book a free AI accounting audit", linking to https://www.instagram.com/hiroshimurakami013. Secondary contact: https://www.facebook.com/1252933767913035.

## Hard rules
- Always write "AI" in capitals in every piece of copy.
- Never use em dashes anywhere (copy, comments, docs). Use commas, periods or colons.
- No video.
- Do not invent clients, metrics or testimonials. Project cards are placeholders labelled "Case study" until the owner supplies real ones.
- Never write tokens or secrets into the repo.

## Brand (source of truth: /root/.openclaw/workspace/brand/BRAND.md, read it)
- Colours: Cloud #E9EDF0 (page), Mist #E6E9EF (surfaces), Ember #FF6B4A (primary accent), Steel #4A86C5 (links, info), Mint #21A87D (success), Ink #1C1F26 (text, logo). Balance 85% soft neutrals, 8% ink, 5% ember, 2% support.
- One ember element per view, reserved for the primary action.
- Type: Outfit via next/font/google. Bold lowercase H1 with an ember full stop. H2 SemiBold with +12% tracking. Body 15px at 1.7 line height.
- Soft UI (neumorphism): light from the top left. Raised: -20 -20 40 #FFFFFF and 20 20 40 #D3DBE6 on Mist. Inset for inputs and pressed states. Pebble-like radii.
- Logo: /root/.openclaw/workspace/brand/logo/logo-primary-soft.jpg. Never stretch, rotate, recolour, add hard shadows or frames.

## Design skills
UI and motion skills live in `.claude/skills/` (see its README). Use `impeccable` as the main one, `redesign-existing-projects` for upgrades, and the animation skills for motion. The skills give general taste. This file says how it applies here. Respect `prefers-reduced-motion`.

## Workflow
- Build with `npm run build` before committing. Fix errors.
- Commit and push to `main` to deploy. Do not store credentials in git config or remote URLs.

## Design direction v2 (owner feedback, overrides the Brand section above for this website)
The owner rejected the first redesign. The brand kit may be bent or broken on this site. Specifically:
- No neumorphism or soft UI. No pebble shadows, no raised or inset cards.
- Dark by default. Rich, deep, cinematic, not flat black and not white. A light theme is optional, only as a toggle, and the dark theme must be the hero experience.
- Not Outfit. Choose a distinctive, characterful type pairing (display plus text) via next/font. Headings must be set in normal case, large and confident. Never small caps, never tiny letterspaced uppercase labels or eyebrows.
- The page must feel alive: smooth scrolling, scroll-driven reveals, animated backgrounds, depth and parallax, magnetic or glowing interactions, cursor-aware effects, marquee or ticker elements, animated counters only if the numbers are not fabricated. Smooth, 60fps, GPU-friendly, respecting prefers-reduced-motion.
- Colour is free. Ember #FF6B4A can stay as an accent but is no longer limited to one element. Add supporting hues if they look great.
- Rules that still apply: "AI" always in capitals, no em dashes, no video, no invented clients, metrics or testimonials, no secrets in the repo, placeholder case studies stay labelled "Case study".
