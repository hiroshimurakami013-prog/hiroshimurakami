import type { CSSProperties } from "react";

// Splits a heading into words for the staggered reveal. The full text stays
// in the DOM as real words, so it reads normally to everyone.
export default function Words({
  text,
  dot = true,
}: {
  text: string;
  dot?: boolean;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <span className="w" style={{ "--w": i } as CSSProperties}>
            {w}
            {dot && i === words.length - 1 ? (
              <span className="dot">.</span>
            ) : null}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}

/** Stagger index for [data-reveal] siblings. */
export const order = (n: number) => ({ "--i": n }) as CSSProperties;
