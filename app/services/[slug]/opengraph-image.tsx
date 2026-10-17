import { SERVICES, getService } from "@/content/services";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt =
  "A Hiroshi Murakami service page: AI automation and AI accounting for businesses.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const service = getService((await params).slug);
  return renderOgImage({
    title: service?.name ?? "AI automation and AI accounting",
    subtitle: service?.summary ?? "Services from Hiroshi Murakami.",
  });
}
