import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt =
  "About Hiroshi Murakami, AI automation and AI accounting consultant.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "About Hiroshi Murakami",
    subtitle:
      "AI automation and AI accounting consultant, serving Los Angeles County and clients worldwide.",
  });
}
