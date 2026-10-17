import type { NextConfig } from "next";
import { INDEXABLE } from "./lib/site";

// Low risk security headers for every route. No CSP: the inline theme script
// and JSON-LD would need nonces, and a wrong policy could break the site.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

// While the site is not indexable, say so in a header as well as in the
// page metadata, so images and other files are covered too.
const robotsHeaders = INDEXABLE
  ? []
  : [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [...securityHeaders, ...robotsHeaders],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
