// The explicit .ts extension lets scripts/check-links.mjs import this file
// directly with Node's type stripping.
import { LOCATIONS } from "../content/locations.ts";
import { POSTS } from "../content/posts.ts";
import { SERVICES } from "../content/services.ts";
import { SAVINGS_CALCULATOR } from "../content/tools.ts";
import { USE_CASES } from "../content/use-cases.ts";

// Every public page, with the date its content last changed. The sitemap,
// the link checker and the visible "Last updated" date all read this list,
// so a new page goes here too.
export type SiteRoute = { path: string; lastModified: string };

// When the first version of the service, use case and city pages was written.
const FIRST_VERSION = "2026-10-17";

// Pages whose own copy changed in a growth batch. See docs/GROWTH-LOG.md.
// A new blog post listed under "From the blog" does not count: the visible
// date must mean the page's own content changed.
const GROWTH_BATCH = "2026-11-22";
const GROWTH_BATCH_2 = "2026-11-23";
const growthPages = new Set([
  "/use-cases/missed-calls-at-the-front-desk",
  "/use-cases/ai-receptionist-for-accounting-firms",
  "/locations/beverly-hills",
  // The other AI accounting use cases: new pages, or new links and the calculator.
  ...USE_CASES.filter((u) => u.service === "ai-accounting").map(
    (u) => `/use-cases/${u.slug}`,
  ),
]);
const growthPages2 = new Set([
  "/services/ai-accounting",
  "/services/ai-receptionist",
  "/use-cases/ai-reconciliation-tool-evaluation-checklist",
  "/use-cases/ai-transaction-matching-for-quickbooks",
  "/use-cases/automated-bank-reconciliation",
  "/locations/los-angeles",
  "/locations/pasadena",
]);
const contentDate = (path: string) =>
  growthPages2.has(path)
    ? GROWTH_BATCH_2
    : growthPages.has(path)
      ? GROWTH_BATCH
      : FIRST_VERSION;
const dated = (path: string): SiteRoute => ({
  path,
  lastModified: contentDate(path),
});

export const ROUTES: SiteRoute[] = [
  { path: "/", lastModified: POSTS[0]?.datePublished ?? "2026-11-22" },
  { path: "/privacy", lastModified: "2026-11-22" },
  { path: "/terms", lastModified: "2026-11-22" },
  { path: "/data-deletion", lastModified: "2026-11-22" },
  { path: "/services", lastModified: FIRST_VERSION },
  ...SERVICES.map((s) => dated(`/services/${s.slug}`)),
  { path: "/use-cases", lastModified: GROWTH_BATCH_2 },
  ...USE_CASES.map((u) => dated(`/use-cases/${u.slug}`)),
  { path: "/locations", lastModified: FIRST_VERSION },
  ...LOCATIONS.map((l) => dated(`/locations/${l.slug}`)),
  { path: SAVINGS_CALCULATOR.path, lastModified: GROWTH_BATCH_2 },
  { path: "/blog", lastModified: POSTS[0]?.datePublished ?? "2026-10-29" },
  ...POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    lastModified: p.dateModified ?? p.datePublished,
  })),
];

/** The date shown on a page, from the same list the sitemap uses. */
export function lastModifiedFor(path: string): string {
  const route = ROUTES.find((r) => r.path === path);
  if (!route) throw new Error(`No route for "${path}" in lib/routes.ts`);
  return route.lastModified;
}
