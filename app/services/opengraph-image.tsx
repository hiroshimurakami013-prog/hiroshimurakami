import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt =
  "AI automation and AI accounting services from Hiroshi Murakami.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "AI automation and AI accounting services",
    subtitle:
      "Receptionists, voice agents, follow-ups, lead qualification, CRMs and books, with a person checking what matters.",
  });
}
