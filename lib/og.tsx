import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Shared renderer for every opengraph-image route: the dark hero field, the
// H symbol, a large headline with an ember full stop and one line of
// context. Fonts are committed TTFs (SIL OFL) because the image renderer
// cannot read the woff2 files next/font serves.

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const root = process.cwd();
const assets = Promise.all([
  readFile(join(root, "assets/fonts/BricolageGrotesque-Bold.ttf")),
  readFile(join(root, "assets/fonts/Geist-Regular.ttf")),
  readFile(join(root, "public/symbol.png"), "base64"),
]);

export async function renderOgImage({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const [display, text, symbol] = await assets;
  const words = title.split(" ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#0b0d14",
          backgroundImage: [
            "radial-gradient(circle at 82% 22%, rgba(255,107,74,0.55), rgba(255,107,74,0) 42%)",
            "radial-gradient(circle at 62% 92%, rgba(47,182,166,0.38), rgba(47,182,166,0) 45%)",
            "radial-gradient(circle at 100% 70%, rgba(74,134,197,0.35), rgba(74,134,197,0) 40%)",
          ].join(", "),
          color: "#eef0f4",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              backgroundColor: "#e6e9ef",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`data:image/png;base64,${symbol}`}
              width={36}
              height={35}
              alt=""
            />
          </div>
          <div style={{ fontSize: 30, fontFamily: "Bricolage", fontWeight: 700 }}>
            Hiroshi Murakami
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: 980,
              fontFamily: "Bricolage",
              fontWeight: 700,
              fontSize: title.length > 34 ? 76 : 92,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            {/* One flex item per word, so lines wrap between words and the
                full stop stays attached to the last one. */}
            {words.map((word, i) => (
              <span
                key={i}
                style={{
                  display: "flex",
                  marginRight: i < words.length - 1 ? "0.24em" : 0,
                }}
              >
                {word}
                {i === words.length - 1 ? (
                  <span style={{ color: "#ff6b4a" }}>.</span>
                ) : null}
              </span>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 900,
              fontSize: 32,
              lineHeight: 1.4,
              color: "#b3b9c6",
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Bricolage", data: display, weight: 700, style: "normal" },
        { name: "Geist", data: text, weight: 400, style: "normal" },
      ],
    },
  );
}
