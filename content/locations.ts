import type { ServiceSlug } from "./services";
import { BEVERLY_HILLS } from "./location-details/beverly-hills.ts";
import { BURBANK } from "./location-details/burbank.ts";
import { CULVER_CITY } from "./location-details/culver-city.ts";
import { GLENDALE } from "./location-details/glendale.ts";
import { INGLEWOOD } from "./location-details/inglewood.ts";
import { LONG_BEACH } from "./location-details/long-beach.ts";
import { LOS_ANGELES } from "./location-details/los-angeles.ts";
import { PASADENA } from "./location-details/pasadena.ts";
import { SANTA_MONICA } from "./location-details/santa-monica.ts";
import { TORRANCE } from "./location-details/torrance.ts";

// Los Angeles area cities served remotely. There is no office or address in
// any of them, and no page may claim one. Each city is rendered at
// /locations/<slug> by app/locations/[city]/page.tsx.
//
// These must not be doorway pages (docs/BUILD-PLAN.md section 8). Every city
// has its own angle, its own section structure and its own FAQ, written from
// conservative, widely known facts about the local business mix. No
// statistics, landmarks, partnerships, clients or testimonials. The long
// copy lives in content/location-details/, one file per city.

export type LocationSlug =
  | "los-angeles"
  | "santa-monica"
  | "pasadena"
  | "glendale"
  | "burbank"
  | "long-beach"
  | "beverly-hills"
  | "culver-city"
  | "torrance"
  | "inglewood";

export type CityPoint = { title: string; text: string };

/**
 * One section of a city page. The kinds render differently, so each city
 * can tell its story in its own shape.
 */
export type CitySection =
  | { kind: "prose"; heading: string; paragraphs: string[] }
  | { kind: "points"; heading: string; intro?: string; points: CityPoint[] }
  | {
      kind: "split";
      heading: string;
      paragraphs: string[];
      asideHeading: string;
      aside: string[];
    };

export type CityFaq = { question: string; answer: string };

export type LocationDetail = {
  /** Page title, 60 characters or fewer. */
  seoTitle: string;
  /** Meta description, 155 characters or fewer. */
  seoDescription: string;
  /** The H1, without the closing full stop (the template adds it). */
  headline: string;
  /** The lead paragraph under the H1. */
  lead: string;
  /** One line for the locations hub. */
  angle: string;
  /** The body of the page, in order. */
  sections: CitySection[];
  /** The services in the order that matters most here, all eight. */
  serviceOrder: ServiceSlug[];
  /** A local note for the services that matter most here. */
  serviceNotes: Partial<Record<ServiceSlug, string>>;
  /** Three to five use cases, each with a note on why it fits this city. */
  useCases: { slug: string; note: string }[];
  /** Three or four questions unique to this city. */
  faqs: CityFaq[];
  /** Nearby cities, linked at the foot of the page. */
  neighbours: LocationSlug[];
  /** The closing call to action title. */
  ctaTitle: string;
};

export type Location = { slug: LocationSlug; name: string; detail: LocationDetail };

export const LOCATIONS: Location[] = [
  { slug: "los-angeles", name: "Los Angeles", detail: LOS_ANGELES },
  { slug: "santa-monica", name: "Santa Monica", detail: SANTA_MONICA },
  { slug: "pasadena", name: "Pasadena", detail: PASADENA },
  { slug: "glendale", name: "Glendale", detail: GLENDALE },
  { slug: "burbank", name: "Burbank", detail: BURBANK },
  { slug: "long-beach", name: "Long Beach", detail: LONG_BEACH },
  { slug: "beverly-hills", name: "Beverly Hills", detail: BEVERLY_HILLS },
  { slug: "culver-city", name: "Culver City", detail: CULVER_CITY },
  { slug: "torrance", name: "Torrance", detail: TORRANCE },
  { slug: "inglewood", name: "Inglewood", detail: INGLEWOOD },
];

export const AREA_SERVED = "Los Angeles County, California, United States";

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function locationName(slug: LocationSlug): string {
  return getLocation(slug)?.name ?? slug;
}

/**
 * The four cities where a service ranks highest in the local service order,
 * for the "Serving the Los Angeles area" links on that service's page.
 */
export function citiesForService(service: ServiceSlug, count = 4): Location[] {
  return LOCATIONS.map((l, i) => ({ l, i, rank: l.detail.serviceOrder.indexOf(service) }))
    .sort((a, b) => a.rank - b.rank || a.i - b.i)
    .slice(0, count)
    .map((x) => x.l);
}

/** The required remote-first line, the same wording on every city page. */
export function servingLine(name: string): string {
  return `Serving businesses in ${name} and across Los Angeles County, remote-first.`;
}

/**
 * Every piece of copy written for one city, for the link checker's word
 * count and overlap test.
 */
export function cityCopy(detail: LocationDetail): string[] {
  return [
    detail.lead,
    ...detail.sections.flatMap((s) =>
      s.kind === "prose"
        ? [s.heading, ...s.paragraphs]
        : s.kind === "points"
          ? [s.heading, s.intro ?? "", ...s.points.flatMap((p) => [p.title, p.text])]
          : [s.heading, ...s.paragraphs, s.asideHeading, ...s.aside],
    ),
    ...Object.values(detail.serviceNotes),
    ...detail.useCases.map((u) => u.note),
    ...detail.faqs.flatMap((f) => [f.question, f.answer]),
  ].filter((t): t is string => Boolean(t));
}
