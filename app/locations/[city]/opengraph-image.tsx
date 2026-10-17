import { LOCATIONS, getLocation, servingLine } from "@/content/locations";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt =
  "AI automation and AI accounting for a Los Angeles area city, remote-first, from Hiroshi Murakami.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const location = getLocation((await params).city);
  return renderOgImage({
    title: location ? `AI for ${location.name} businesses` : "Los Angeles area",
    subtitle: location
      ? servingLine(location.name)
      : "Serving businesses across Los Angeles County, remote-first.",
  });
}
