import type { MetadataRoute } from "next";

const siteUrl = "https://hiroshimurakami.vercel.app";

// Fixed dates keep the sitemap static. Update them when a page changes.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/data-deletion`,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
