import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/routes";
import { INDEXABLE, absoluteUrl } from "@/lib/site";

// Empty while the site is not indexable. Dates are real content dates from
// lib/routes.ts, so the sitemap stays static.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!INDEXABLE) return [];
  return ROUTES.map((r) => ({
    url: absoluteUrl(r.path),
    lastModified: new Date(r.lastModified),
  }));
}
