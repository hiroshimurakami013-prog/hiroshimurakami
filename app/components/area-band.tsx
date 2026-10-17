import { LOCATIONS } from "@/content/locations";

// The Los Angeles area band: a short statement and a slow ticker of the
// cities served. Remote-first, so no city claims an office or address.
export default function AreaBand({
  title = "Serving businesses across Los Angeles County, remote-first",
  text = "Audits, setup and check-ins happen online, so I work with teams anywhere in the county, and with clients worldwide.",
}: {
  title?: string;
  text?: string;
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
