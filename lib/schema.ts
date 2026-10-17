import { AREA_SERVED } from "@/content/locations";
import { SERVICES } from "@/content/services";
import { FACEBOOK, INSTAGRAM, SITE_NAME, SITE_URL, absoluteUrl } from "./site";

// Structured data builders. Honest by construction: no address, no
// ratings, no reviews, nothing that is not visible on the site.

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const HOME_DESCRIPTION =
  "AI receptionists, voice agents, follow-ups, lead qualification, custom CRMs and AI accounting for small and mid-size businesses in Los Angeles and beyond.";

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: HOME_DESCRIPTION,
        inLanguage: "en-US",
        publisher: { "@id": BUSINESS_ID },
      },
      {
        "@type": "ProfessionalService",
        "@id": BUSINESS_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description: HOME_DESCRIPTION,
        logo: absoluteUrl("/symbol.png"),
        image: absoluteUrl("/symbol.png"),
        founder: { "@type": "Person", name: SITE_NAME },
        areaServed: [
          { "@type": "AdministrativeArea", name: AREA_SERVED },
          "Worldwide, remote",
        ],
        knowsAbout: SERVICES.map((s) => s.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI automation and AI accounting services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.summary,
            },
          })),
        },
        sameAs: [INSTAGRAM, FACEBOOK],
      },
    ],
  };
}
