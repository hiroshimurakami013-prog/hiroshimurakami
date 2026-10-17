// Los Angeles area cities served remotely. There is no office or address in
// any of them. The slugs become /locations/<slug> once those pages exist.

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

export type Location = { slug: LocationSlug; name: string };

export const LOCATIONS: Location[] = [
  { slug: "los-angeles", name: "Los Angeles" },
  { slug: "santa-monica", name: "Santa Monica" },
  { slug: "pasadena", name: "Pasadena" },
  { slug: "glendale", name: "Glendale" },
  { slug: "burbank", name: "Burbank" },
  { slug: "long-beach", name: "Long Beach" },
  { slug: "beverly-hills", name: "Beverly Hills" },
  { slug: "culver-city", name: "Culver City" },
  { slug: "torrance", name: "Torrance" },
  { slug: "inglewood", name: "Inglewood" },
];

export const AREA_SERVED = "Los Angeles County, California, United States";
