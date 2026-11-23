import { ABOUT, ABOUT_DEFINITION, ABOUT_PATH } from "@/content/about";
import { HIROSHI_PORTRAIT } from "@/content/images";
import { AREA_SERVED, LOCATIONS } from "@/content/locations";
import { POSTS } from "@/content/posts";
import { SERVICES, type Service } from "@/content/services";
import { USE_CASES, type UseCase } from "@/content/use-cases";
import { FACEBOOK, INSTAGRAM, LINKEDIN, SITE_NAME, SITE_URL, absoluteUrl } from "./site";

// Structured data builders. Honest by construction: no address, no
// ratings, no reviews, nothing that is not visible on the site.

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PERSON_ID = `${SITE_URL}/#person`;

/**
 * Hiroshi Murakami as a person, the same entity everywhere it appears (home
 * page, blog bylines, the free tool). Only facts the site states: what he
 * builds, the portrait on /about and the public profiles in lib/site.ts. No credentials or employers.
 */
export const PERSON_JOB_TITLE = "AI automation and AI accounting consultant";
const PERSON_KNOWS_ABOUT = [
  "AI accounting automation",
  "Bookkeeping automation",
  "Bank reconciliation with AI",
  "Invoice capture with AI",
  "AI receptionists",
  "AI voice agents",
  "Business workflow automation",
];
const SAME_AS = [INSTAGRAM, FACEBOOK, LINKEDIN];

export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    url: SITE_URL,
    mainEntityOfPage: absoluteUrl(ABOUT_PATH),
    description: ABOUT_DEFINITION,
    image: absoluteUrl(HIROSHI_PORTRAIT.src),
    jobTitle: PERSON_JOB_TITLE,
    knowsAbout: PERSON_KNOWS_ABOUT,
    worksFor: { "@id": BUSINESS_ID },
    sameAs: SAME_AS,
  };
}

export type FaqItem = { question: string; answer: string };

/**
 * FAQPage for a page that shows the same questions and answers on screen.
 * Never pass questions the page does not show.
 */
export function faqJsonLd(path: string, faqs: FaqItem[]) {
  const url = absoluteUrl(path);
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** The FAQPage node for a graph, when the page shows questions. */
const withFaq = (path: string, faqs?: FaqItem[]) =>
  faqs && faqs.length ? [faqJsonLd(path, faqs)] : [];

export const HOME_DESCRIPTION =
  "AI receptionists, voice agents, follow-ups, lead qualification, custom CRMs and AI accounting for small and mid-size businesses in Los Angeles and beyond.";

export function homeJsonLd(faqs?: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personJsonLd(),
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
        founder: { "@id": PERSON_ID },
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
        sameAs: SAME_AS,
      },
      ...withFaq("/", faqs),
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

/** The about page: a ProfilePage about the Person, its FAQ and breadcrumb. */
export function aboutJsonLd(
  description: string,
  crumbs: BreadcrumbItem[],
  faqs: FaqItem[],
) {
  const url = absoluteUrl(ABOUT_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${url}#page`,
        url,
        name: ABOUT.title,
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
      },
      personJsonLd(),
      breadcrumbJsonLd(crumbs),
      ...withFaq(ABOUT_PATH, faqs),
    ],
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
      ...withFaq(`/services/${service.slug}`, service.faqs),
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
 * breadcrumb. No Article markup, since there is no author to show.
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
      ...withFaq(`/use-cases/${useCase.slug}`, useCase.detail.faqs),
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
 * One city page: the breadcrumb and the visible FAQ. The work is
 * remote-first, so there is no local business, address or Service markup
 * to claim here.
 */
export function cityJsonLd(
  path: string,
  crumbs: BreadcrumbItem[],
  faqs?: FaqItem[],
) {
  return {
    "@context": "https://schema.org",
    "@graph": [breadcrumbJsonLd(crumbs), ...withFaq(path, faqs)],
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
  /** Questions shown on the page, if there are any. */
  faqs?: FaqItem[];
};

const BLOG_NAME = "Blog: AI for business owners and accountants";

/** The blog index: every post as a list, and the breadcrumb. */
export function blogHubJsonLd(description: string, crumbs: BreadcrumbItem[]) {
  const url = absoluteUrl("/blog");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: BLOG_NAME,
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: POSTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.title,
            url: absoluteUrl(`/blog/${p.slug}`),
          })),
        },
      },
      breadcrumbJsonLd(crumbs),
    ],
  };
}

/**
 * A blog post: an Article by Hiroshi Murakami, and the breadcrumb. Only
 * pass dates and an image the page shows.
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
        author: personJsonLd(),
        publisher: { "@id": BUSINESS_ID },
        isPartOf: { "@id": WEBSITE_ID },
      },
      breadcrumbJsonLd(crumbs),
      ...withFaq(article.path, article.faqs),
    ],
  };
}

/**
 * A free tool page: the WebApplication (it runs in the browser and stores
 * nothing), its visible FAQ and the breadcrumb.
 */
export function toolJsonLd(
  tool: { path: string; name: string; description: string },
  crumbs: BreadcrumbItem[],
  faqs?: FaqItem[],
) {
  const url = absoluteUrl(tool.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${url}#app`,
        name: tool.name,
        description: tool.description,
        url,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any, runs in the browser",
        browserRequirements: "Requires JavaScript",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        inLanguage: "en-US",
        creator: { "@id": PERSON_ID },
        publisher: { "@id": BUSINESS_ID },
        isPartOf: { "@id": WEBSITE_ID },
      },
      breadcrumbJsonLd(crumbs),
      ...withFaq(tool.path, faqs),
    ],
  };
}
