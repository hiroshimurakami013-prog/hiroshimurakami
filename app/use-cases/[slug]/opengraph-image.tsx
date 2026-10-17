import { serviceName } from "@/content/services";
import { USE_CASES, getUseCase } from "@/content/use-cases";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt =
  "A Hiroshi Murakami use case: an illustrative scenario showing how AI handles a common business problem.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return USE_CASES.map((u) => ({ slug: u.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const useCase = getUseCase((await params).slug);
  return renderOgImage({
    title: useCase?.title ?? "AI use cases",
    subtitle: useCase
      ? `Use case, ${serviceName(useCase.service)}. An illustrative scenario.`
      : "Illustrative scenarios from Hiroshi Murakami.",
  });
}
