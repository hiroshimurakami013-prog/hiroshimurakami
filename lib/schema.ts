import { AREA_SERVED, LOCATIONS } from "@/content/locations";
import { SERVICES, type Service } from "@/content/services";
import { USE_CASES, type UseCase } from "@/content/use-cases";
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

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

const SERVICES_HUB_NAME = "AI automation and AI accounting services";

/** The services hub: the eight services as a list, and the breadcrumb. */
export function servicesHubJsonLd(
  description: string,
  crumbs: BreadcrumbItem[],
) {
  const url = absoluteUrl("/services");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: SERVICES_HUB_NAME,
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: absoluteUrl(`/services/${s.slug}`),
          })),
        },
      },
      breadcrumbJsonLd(crumbs),
    ],
  };
}

/** One service page: the Service, linked to the provider and the hub. */
export function serviceJsonLd(service: Service, crumbs: BreadcrumbItem[]) {
  const url = absoluteUrl(`/services/${service.slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.name,
        serviceType: service.serviceType,
        description: service.description,
        url,
        provider: {
          "@type": "ProfessionalService",
          "@id": BUSINESS_ID,
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: AREA_SERVED },
          "Worldwide, remote",
        ],
        isRelatedTo: service.related.map((slug) => ({
          "@type": "Service",
          name: SERVICES.find((s) => s.slug === slug)?.name ?? slug,
          url: absoluteUrl(`/services/${slug}`),
        })),
        subjectOf: {
          "@type": "CollectionPage",
          "@id": `${absoluteUrl("/services")}#page`,
          name: SERVICES_HUB_NAME,
          url: absoluteUrl("/services"),
        },
      },
      breadcrumbJsonLd(crumbs),
    ],
  };
}

const USE_CASES_HUB_NAME = "AI use cases";

/** The use cases hub: every use case as a list, and the breadcrumb. */
export function scenarioHubJsonLd(
  description: string,
  crumbs: BreadcrumbItem[],
) {
  const url = absoluteUrl("/use-cases");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: USE_CASES_HUB_NAME,
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: USE_CASES.map((u, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: u.title,
            url: absoluteUrl(`/use-cases/${u.slug}`),
          })),
        },
      },
      breadcrumbJsonLd(crumbs),
    ],
  };
}

/**
 * One use case page: a WebPage about its parent service, and the
 * breadcrumb. No Article markup, since there is no author or date to show.
 */
export function scenarioJsonLd(useCase: UseCase, crumbs: BreadcrumbItem[]) {
  const url = absoluteUrl(`/use-cases/${useCase.slug}`);
  const service = SERVICES.find((s) => s.slug === useCase.service);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: useCase.title,
        description: useCase.detail.seoDescription,
        inLanguage: "en-US",
        isPartOf: { "@id": WEBSITE_ID },
        about: {
          "@type": "Service",
          "@id": `${absoluteUrl(`/services/${useCase.service}`)}#service`,
          name: service?.name ?? useCase.service,
          url: absoluteUrl(`/services/${useCase.service}`),
        },
      },
      breadcrumbJsonLd(crumbs),
    ],
  };
}

const LOCATIONS_HUB_NAME =
  "AI automation and AI accounting in the Los Angeles area";

/** The locations hub: the cities as a list, and the breadcrumb. */
export function locationsHubJsonLd(
  description: string,
  crumbs: BreadcrumbItem[],
) {
  const url = absoluteUrl("/locations");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: LOCATIONS_HUB_NAME,
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: LOCATIONS.map((l, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: l.name,
            url: absoluteUrl(`/locations/${l.slug}`),
          })),
        },
      },
      breadcrumbJsonLd(crumbs),
    ],
  };
}

/**
 * One city page: the breadcrumb only. The work is remote-first, so there
 * is no local business, address or Service markup to claim here.
 */
export function cityJsonLd(crumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [breadcrumbJsonLd(crumbs)],
  };
}

export type ArticleInput = {
  /** Site path, for example "/blog/my-post". */
  path: string;
  headline: string;
  description: string;
  /** ISO dates (YYYY-MM-DD), the real publish and last edit dates. */
  datePublished: string;
  dateModified?: string;
  /** Site path of an image shown on the page, if there is one. */
  image?: string;
};

/**
 * Ready for a future blog post: an Article by Hiroshi Murakami, and the
 * breadcrumb. Not used yet. Only pass dates and an image the page shows.
 */
export function articleJsonLd(article: ArticleInput, crumbs: BreadcrumbItem[]) {
  const url = absoluteUrl(article.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        url,
        headline: article.headline,
        description: article.description,
        datePublished: article.datePublished,
        dateModified: article.dateModified ?? article.datePublished,
        inLanguage: "en-US",
        ...(article.image ? { image: absoluteUrl(article.image) } : {}),
        author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
        publisher: { "@id": BUSINESS_ID },
        isPartOf: { "@id": WEBSITE_ID },
      },
      breadcrumbJsonLd(crumbs),
    ],
  };
}
