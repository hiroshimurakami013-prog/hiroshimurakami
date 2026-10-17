import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

// The home page image, also the default for any page without its own.
export const alt =
  "Hiroshi Murakami: AI automation and AI accounting for small and mid-size businesses.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "AI that answers, follows up and keeps the books",
    subtitle:
      "AI automation and AI accounting for businesses in Los Angeles County and worldwide.",
  });
}
