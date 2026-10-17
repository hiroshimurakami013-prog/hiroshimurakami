import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt =
  "AI use cases from Hiroshi Murakami: everyday business problems and the AI that handles them.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Everyday problems, and the AI that handles them",
    subtitle:
      "Illustrative use cases for AI automation and AI accounting, grouped by service.",
  });
}
