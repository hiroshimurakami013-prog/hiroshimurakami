import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { LOCATIONS, type Location } from "@/content/locations";

// The Los Angeles area band: a short statement, links to the city pages
// that fit the page it sits on, and a slow ticker of every city served.
// The ticker is decoration (moving links are hard to use), so the real
// links sit in a still list above it. Remote-first, so no city claims an
// office or address.
export default function AreaBand({
  title = "Serving businesses across Los Angeles County, remote-first",
  text = "Audits, setup and check-ins happen online, so I work with teams anywhere in the county, and with clients worldwide.",
  cities = [],
}: {
  title?: string;
  text?: string;
  /** City pages to link, a sensible subset for the page. */
  cities?: Location[];
}) {
  return (
    <section id="area" aria-labelledby="area-title" className="area">
      <div className="wrap area-inner" data-reveal>
        <h2 id="area-title" className="h3 area-title">
          {title}
          <span className="dot">.</span>
        </h2>
        <p className="area-text">{text}</p>
      </div>
      <div className="wrap area-links" data-reveal>
        <h3 className="area-links-title">Serving the Los Angeles area</h3>
        <ul>
          {cities.map((l) => (
            <li key={l.slug}>
              <Link href={`/locations/${l.slug}`} className="area-chip">
                {l.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/locations" className="area-all">
              {cities.length === LOCATIONS.length
                ? "How remote-first service works"
                : "All Los Angeles area locations"}
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="ticker" aria-label="Cities served" role="region">
        <div className="ticker-track">
          {[false, true].map((hidden) => (
            <ul
              key={String(hidden)}
              className="ticker-group"
              aria-hidden={hidden || undefined}
            >
              {LOCATIONS.map((l) => (
                <li key={l.slug}>{l.name}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
