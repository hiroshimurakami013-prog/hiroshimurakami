// The explicit .ts extension lets scripts/check-links.mjs import this file
// directly with Node's type stripping.
import { SERVICES } from "../content/services.ts";
import { USE_CASES } from "../content/use-cases.ts";

// Every public page, with the date its content last changed. The sitemap
// and the link checker both read this list, so a new page goes here too.
export type SiteRoute = { path: string; lastModified: string };

export const ROUTES: SiteRoute[] = [
  { path: "/", lastModified: "2026-10-17" },
  { path: "/privacy", lastModified: "2026-10-16" },
  { path: "/terms", lastModified: "2026-10-16" },
  { path: "/data-deletion", lastModified: "2026-10-16" },
  { path: "/services", lastModified: "2026-10-17" },
  ...SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    lastModified: "2026-10-17",
  })),
  { path: "/use-cases", lastModified: "2026-10-17" },
  ...USE_CASES.map((u) => ({
    path: `/use-cases/${u.slug}`,
    lastModified: "2026-10-17",
  })),
];
