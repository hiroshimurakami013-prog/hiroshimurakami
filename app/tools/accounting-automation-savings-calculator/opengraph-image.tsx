import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt =
  "Accounting automation savings calculator by Hiroshi Murakami.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Accounting automation savings calculator",
    subtitle:
      "Estimate the bookkeeping hours and dollars AI could save each month, with every assumption shown.",
  });
}
