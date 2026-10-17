import type { MetadataRoute } from "next";
import { INDEXABLE, SITE_URL } from "@/lib/site";

// Crawling stays allowed in both modes. While the site is not indexable,
// crawlers must still be able to fetch pages to see the noindex, and no
// sitemap is advertised.
export default function robots(): MetadataRoute.Robots {
  return INDEXABLE
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${SITE_URL}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", allow: "/" } };
}
