import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { LOCATIONS } from "@/content/locations";
import { SERVICES } from "@/content/services";
import { locationsHubJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import Breadcrumbs, { type Crumb } from "../components/breadcrumbs";
import { ClosingCta, PrimaryCta } from "../components/cta";
import JsonLd from "../components/json-ld";
import RevealObserver from "../components/reveal-observer";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import Words, { order } from "../components/words";

const description =
  "AI automation and AI accounting for businesses across Los Angeles County, remote-first. City pages for Los Angeles, Pasadena, Long Beach and more.";

export const metadata: Metadata = pageMetadata({
  title: "AI Services in the Los Angeles Area | Hiroshi Murakami",
  description,
  path: "/locations",
});

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations" },
];

// How remote-first service works, the same for every city.
const remoteSteps = [
  {
    title: "A free AI audit by video call",
    text: "We talk through how your calls, leads, follow-ups and books are handled today, and where the time goes. You get a plain language recommendation, with no obligation.",
  },
  {
    title: "Setup online, with access you control",
    text: "I connect to your tools through their official connections, using accounts and permissions you create and can remove at any time. Nobody needs to visit your premises.",
  },
  {
    title: "A careful launch",
    text: "The system starts small, often as overflow or after-hours cover, and a person reviews its work before it takes on more. You see every call, message and entry it handles.",
  },
  {
    title: "Check-ins that fit your schedule",
    text: "Short online check-ins after launch, timed around your busy hours. Changes to scripts, rules and answers are made for you.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={locationsHubJsonLd(description, crumbs)} />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader current="/locations" />

      <main id="main" tabIndex={-1}>
        <section className="page-hero" aria-labelledby="page-title">
          <div className="legal-glow" aria-hidden="true" />
          <div className="wrap">
            <Breadcrumbs items={crumbs} />
            <h1 id="page-title" className="display page-title">
              AI for businesses across the Los Angeles area
              <span className="dot">.</span>
            </h1>
            <p className="lead mt-8 max-w-[56ch]">
              Los Angeles County is a patchwork of very different local
              economies: logistics around the port, media in Burbank and
              Culver City, professional firms and practices in Pasadena and
              Beverly Hills, manufacturing in the South Bay. Each city page
              below looks at the kinds of businesses common there and the AI
              that tends to help them most.
            </p>
            <p className="muted mt-6 max-w-[56ch]">
              The work is remote-first. There is no office in any of these
              cities: audits, setup and check-ins happen online, for businesses
              anywhere in the county and beyond.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <PrimaryCta />
              <a href="#remote-first" className="text-link font-medium">
                How remote-first service works
              </a>
            </div>
          </div>
        </section>

        {/* The cities */}
        <section className="block" aria-labelledby="cities-title">
          <div className="wrap">
            <h2 id="cities-title" className="h2 words max-w-[20ch]" data-reveal>
              <Words text="Ten cities, ten different business mixes" />
            </h2>
            <ul className="uc-grid" data-count="2">
              {LOCATIONS.map((l, i) => (
                <li
                  key={l.slug}
                  className="uc-tile"
                  data-reveal
                  style={order(i % 2)}
                >
                  <h3 className="uc-title">
                    <Link href={`/locations/${l.slug}`} className="uc-link">
                      {l.name}
                    </Link>
                  </h3>
                  <p className="uc-text">{l.detail.angle}</p>
                  <span className="uc-more" aria-hidden="true">
                    AI for {l.name} businesses
                    <ArrowRight size={16} weight="bold" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Remote-first */}
        <section
          id="remote-first"
          className="block"
          aria-labelledby="remote-first-title"
        >
          <div className="wrap">
            <h2
              id="remote-first-title"
              className="h2 words max-w-[20ch]"
              data-reveal
            >
              <Words text="How remote-first service works" />
            </h2>
            <p className="lead mt-6 max-w-[54ch]" data-reveal="blur">
              Most of the systems behind these services live in software you
              already use, so the work does not depend on being in the room.
              It also means no time lost to traffic, on either side.
            </p>
            <ol className="steps">
              {remoteSteps.map((s, i) => (
                <li key={s.title} data-reveal style={order(i % 3)}>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Not on the list, and the services */}
        <section className="block" aria-label="Other cities and the services">
          <div className="wrap split">
            <div data-reveal>
              <h2 className="block-title">Your city is not on the list?</h2>
              <div className="prose mt-7">
                <p>
                  These ten pages cover the cities where the local business mix
                  is easiest to describe, not the limits of where I work.
                </p>
                <p>
                  Businesses anywhere in Los Angeles County, from the San
                  Fernando Valley to the San Gabriel Valley and the South Bay,
                  are just as welcome, and so are clients outside California.
                  The services, the process and the safeguards are the same
                  everywhere.
                </p>
              </div>
            </div>
            <div data-reveal style={order(1)}>
              <h2 className="block-title-sm">The eight services</h2>
              <ul className="nf-links mt-7">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="nf-link">
                      <span className="nf-link-label">{s.name}</span>
                      <ArrowRight size={20} weight="bold" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ClosingCta
          title="Wherever you are in the county, start with a free audit"
          text="Book a free AI audit. We look at where your team's time goes and which system would help first, over a video call and with no obligation."
        />
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
