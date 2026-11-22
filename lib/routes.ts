// The explicit .ts extension lets scripts/check-links.mjs import this file
// directly with Node's type stripping.
import { LOCATIONS } from "../content/locations.ts";
import { POSTS } from "../content/posts.ts";
import { SERVICES } from "../content/services.ts";
import { SAVINGS_CALCULATOR } from "../content/tools.ts";
import { USE_CASES } from "../content/use-cases.ts";

// Every public page, with the date its content last changed. The sitemap
// and the link checker both read this list, so a new page goes here too.
export type SiteRoute = { path: string; lastModified: string };

const hasPosts = (service: string) => POSTS.some((p) => p.service === service);

// Pages whose own copy changed in the growth batch of 2026-11-22 (answer-first
// leads, FAQs, new links). See docs/GROWTH-LOG.md.
const GROWTH_BATCH = "2026-11-22";
const growthPages = new Set([
  "/services/ai-receptionist",
  "/use-cases/missed-calls-at-the-front-desk",
  "/use-cases/ai-receptionist-for-accounting-firms",
  "/locations/pasadena",
  "/locations/los-angeles",
  "/locations/beverly-hills",
]);
const changed = (path: string, otherwise: string) =>
  growthPages.has(path) ? GROWTH_BATCH : otherwise;

export const ROUTES: SiteRoute[] = [
  { path: "/", lastModified: "2026-11-22" },
  { path: "/privacy", lastModified: "2026-10-16" },
  { path: "/terms", lastModified: "2026-10-16" },
  { path: "/data-deletion", lastModified: "2026-10-16" },
  { path: "/services", lastModified: "2026-10-17" },
  // Pages of a service with blog posts gained a "From the blog" block.
  ...SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    lastModified: changed(
      `/services/${s.slug}`,
      hasPosts(s.slug) ? "2026-11-22" : "2026-10-17",
    ),
  })),
  { path: "/use-cases", lastModified: GROWTH_BATCH },
  ...USE_CASES.map((u) => ({
    path: `/use-cases/${u.slug}`,
    lastModified: changed(
      `/use-cases/${u.slug}`,
      hasPosts(u.service) ? "2026-11-22" : "2026-10-17",
    ),
  })),
  { path: "/locations", lastModified: "2026-10-17" },
  ...LOCATIONS.map((l) => ({
    path: `/locations/${l.slug}`,
    lastModified: changed(`/locations/${l.slug}`, "2026-10-17"),
  })),
  { path: SAVINGS_CALCULATOR.path, lastModified: GROWTH_BATCH },
  { path: "/blog", lastModified: POSTS[0]?.datePublished ?? "2026-10-29" },
  ...POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    lastModified: p.dateModified ?? p.datePublished,
  })),
];
