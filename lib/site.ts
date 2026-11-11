import type { Metadata } from "next";

// One place for everything that depends on where the site lives and whether
// search engines may index it. Nothing else in the code base hard-codes the
// domain. Both values are read at build time, so a change needs a redeploy.

/** The public origin, without a trailing slash. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://hiroshimurakami.vercel.app"
).replace(/\/+$/, "");

/** The bare host name, for mentions in copy. */
export const SITE_HOST = new URL(SITE_URL).host;

/**
 * False until the owner has a real domain. While false, every page is
 * noindex, nofollow, the sitemap is empty and robots.txt advertises nothing.
 */
export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const SITE_NAME = "Hiroshi Murakami";

export const INSTAGRAM = "https://www.instagram.com/hiroshimurakami013";
export const FACEBOOK = "https://www.facebook.com/1252933767913035";

/** Primary call to action, the same wording everywhere. */
export const CTA_LABEL = "Book a free AI audit";

/** Calendly page for the free 30 minute discovery call. */
export const CALENDLY_URL = "https://calendly.com/hiroshimurakami013/30min";

/** Screen reader hint placed after the booking button text. */
export const BOOKING_LABEL = "(opens the booking calendar)";

export const ROBOTS: Metadata["robots"] = INDEXABLE
  ? { index: true, follow: true }
  : {
      index: false,
      follow: false,
      noarchive: true,
      googleBot: { index: false, follow: false, noarchive: true },
    };

/** Absolute URL for a site path such as "/privacy". */
export function absoluteUrl(path = "/") {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Page metadata with the canonical, Open Graph and Twitter tags filled in.
 * Open Graph images come from the opengraph-image file next to each page.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
    robots: ROBOTS,
  };
}
