// Every public page, with the date its content last changed. The sitemap
// and the link checker both read this list, so a new page goes here too.
export type SiteRoute = { path: string; lastModified: string };

export const ROUTES: SiteRoute[] = [
  { path: "/", lastModified: "2026-10-16" },
  { path: "/privacy", lastModified: "2026-10-16" },
  { path: "/terms", lastModified: "2026-10-16" },
  { path: "/data-deletion", lastModified: "2026-10-16" },
];
