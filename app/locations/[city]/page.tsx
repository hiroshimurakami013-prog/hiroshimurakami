import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle,
  Compass,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { LOCATION_IMAGES } from "@/content/images";
import {
  LOCATIONS,
  getLocation,
  servingLine,
  type CitySection,
} from "@/content/locations";
import { getService } from "@/content/services";
import { getUseCase } from "@/content/use-cases";
import { cityJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import Breadcrumbs, { type Crumb } from "../../components/breadcrumbs";
import { ClosingCta, PrimaryCta } from "../../components/cta";
import JsonLd from "../../components/json-ld";
import RevealObserver from "../../components/reveal-observer";
import Scene, { HERO_SIZES } from "../../components/scene";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import UseCaseTile from "../../components/use-case-tile";
import Words, { order } from "../../components/words";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/locations/[city]">): Promise<Metadata> {
  const location = getLocation((await params).city);
  if (!location) return {};
  return pageMetadata({
    title: location.detail.seoTitle,
    description: location.detail.seoDescription,
    path: `/locations/${location.slug}`,
  });
}

// One body section. Each city chooses its own sequence of kinds, so the
// pages differ in shape as well as in words.
function Section({ section, index }: { section: CitySection; index: number }) {
  const id = `section-${index + 1}`;
  if (section.kind === "prose")
    return (
      <section className="block" aria-labelledby={id}>
        <div className="wrap">
          <h2 id={id} className="block-title max-w-[24ch]" data-reveal>
            {section.heading}
          </h2>
          <div className="prose mt-7" data-reveal>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    );

  if (section.kind === "points")
    return (
      <section className="block" aria-labelledby={id}>
        <div className="wrap">
          <h2 id={id} className="h2 words max-w-[20ch]" data-reveal>
            <Words text={section.heading} />
          </h2>
          {section.intro ? (
            <p className="lead mt-6 max-w-[54ch]" data-reveal="blur">
              {section.intro}
            </p>
          ) : null}
          <ul
            className="card-grid"
            data-count={section.points.length === 3 ? "3" : undefined}
          >
            {section.points.map((p, i) => (
              <li key={p.title} className="info-card" data-reveal style={order(i)}>
                <span className="info-card-icon" aria-hidden="true">
                  <Compass size={22} weight="light" />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );

  return (
    <section className="block" aria-labelledby={id}>
      <div className="wrap split">
        <div data-reveal>
          <h2 id={id} className="block-title">
            {section.heading}
          </h2>
          <div className="prose mt-7">
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
        <div data-reveal style={order(1)}>
          <h3 className="block-title-sm">{section.asideHeading}</h3>
          <ul className="check-list">
            {section.aside.map((a) => (
              <li key={a}>
                <CheckCircle size={18} weight="fill" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default async function CityPage({
  params,
}: PageProps<"/locations/[city]">) {
  const location = getLocation((await params).city);
  if (!location) notFound();

  const { detail, name } = location;
  const services = detail.serviceOrder
    .map((slug) => getService(slug))
    .filter((s) => s !== undefined);
  const useCases = detail.useCases
    .map(({ slug, note }) => ({ useCase: getUseCase(slug), note }))
    .filter((u) => u.useCase !== undefined);
  const neighbours = detail.neighbours
    .map((slug) => getLocation(slug))
    .filter((l) => l !== undefined);
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name, path: `/locations/${location.slug}` },
  ];

  return (
    <>
      <JsonLd data={cityJsonLd(crumbs)} />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader current="/locations" />

      <main id="main" tabIndex={-1}>
        <section className="page-hero" aria-labelledby="page-title">
          <div className="legal-glow" aria-hidden="true" />
          <div className="wrap">
            <Breadcrumbs items={crumbs} />
            <p className="city-serving">
              <MapPin size={18} weight="light" aria-hidden="true" />
              <span>{servingLine(name)}</span>
            </p>
            <h1 id="page-title" className="display page-title city-title">
              {detail.headline}
              <span className="dot">.</span>
            </h1>
            <p className="lead mt-8 max-w-[60ch]">{detail.lead}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <PrimaryCta />
              <a href="#use-cases" className="text-link font-medium">
                Use cases for {name} businesses
              </a>
            </div>
            <Scene
              image={LOCATION_IMAGES[location.slug]}
              sizes={HERO_SIZES}
              className="page-hero-media"
              hero
            />
          </div>
        </section>

        {detail.sections.map((s, i) => (
          <Section key={s.heading} section={s} index={i} />
        ))}

        {/* Use cases that fit the local business mix */}
        <section
          id="use-cases"
          className="block"
          aria-labelledby="use-cases-title"
        >
          <div className="wrap">
            <h2 id="use-cases-title" className="h2 words max-w-[22ch]" data-reveal>
              <Words text={`Use cases that fit ${name} businesses`} />
            </h2>
            <p className="lead mt-6 max-w-[54ch]" data-reveal="blur">
              Illustrative scenarios, not client case studies. Each one walks
              through a common problem and how the AI would handle it.
            </p>
            <ul className="uc-grid" data-count="3">
              {useCases.map(({ useCase, note }, i) =>
                useCase ? (
                  <UseCaseTile
                    key={useCase.slug}
                    useCase={useCase}
                    index={i % 3}
                    text={note}
                    showService
                  />
                ) : null,
              )}
            </ul>
          </div>
        </section>

        {/* All eight services, in the order that matters here */}
        <section className="block" aria-labelledby="services-title">
          <div className="wrap split">
            <div data-reveal>
              <h2 id="services-title" className="block-title">
                All eight services, as they apply in {name}
              </h2>
              <p className="muted mt-5 max-w-[44ch]">
                Listed in the order that tends to matter most for businesses
                here. Every service is available everywhere, with the same
                review rules and the same remote-first setup.
              </p>
              <p className="mt-6">
                <Link href="/services" className="text-link font-medium">
                  Compare all services
                </Link>
              </p>
            </div>
            <ul className="nf-links mt-0" data-reveal style={order(1)}>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="nf-link">
                    <span>
                      <span className="nf-link-label">{s.name}</span>
                      <span className="nf-link-text">
                        {detail.serviceNotes[s.slug] ?? s.summary}
                      </span>
                    </span>
                    <ArrowRight size={20} weight="bold" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="block" aria-labelledby="faq-title">
          <div className="wrap">
            <h2 id="faq-title" className="h2 words max-w-[20ch]" data-reveal>
              <Words text={`Questions from ${name} businesses`} />
            </h2>
            <ul className="faq">
              {detail.faqs.map((f) => (
                <li key={f.question} data-reveal>
                  <h3>{f.question}</h3>
                  <p>{f.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Nearby cities */}
        <section className="block" aria-labelledby="nearby-title">
          <div className="wrap split">
            <div data-reveal>
              <h2 id="nearby-title" className="block-title">
                Nearby in Los Angeles County
              </h2>
              <p className="muted mt-5 max-w-[44ch]">
                Each city has a different business mix, so each page takes a
                different angle. The way of working is the same: online,
                remote-first and with a person in charge.
              </p>
            </div>
            <ul className="nf-links mt-0" data-reveal style={order(1)}>
              {neighbours.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="nf-link">
                    <span>
                      <span className="nf-link-label">{l.name}</span>
                      <span className="nf-link-text">{l.detail.angle}</span>
                    </span>
                    <ArrowRight size={20} weight="bold" aria-hidden="true" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="nf-link">
                  <span>
                    <span className="nf-link-label">All locations</span>
                    <span className="nf-link-text">
                      Every city page, and how remote-first service works.
                    </span>
                  </span>
                  <ArrowRight size={20} weight="bold" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <ClosingCta
          title={detail.ctaTitle}
          text={`Book a free AI audit. We look at how your ${name} business handles calls, leads and paperwork today and what AI could take over, over a video call and with no obligation.`}
        />
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
