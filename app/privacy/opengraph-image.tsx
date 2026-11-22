import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Privacy Policy, Hiroshi Murakami";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Privacy Policy",
    subtitle:
      "No forms, no ads, Microsoft Clarity analytics. How this website and the Hiro App handle data.",
  });
}
