import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle,
  LockSimple,
  UserCheck,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";
import { citiesForService } from "@/content/locations";
import { SERVICES, getService } from "@/content/services";
import { casesForService } from "@/content/use-cases";
import { serviceJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import AreaBand from "../../components/area-band";
import Breadcrumbs, { type Crumb } from "../../components/breadcrumbs";
import { ClosingCta, PrimaryCta } from "../../components/cta";
import JsonLd from "../../components/json-ld";
import RevealObserver from "../../components/reveal-observer";
import { SERVICE_ICONS } from "../../components/service-icons";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import UseCaseTile from "../../components/use-case-tile";
import Words, { order } from "../../components/words";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const Icon = SERVICE_ICONS[service.slug];
  const useCases = casesForService(service.slug);
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s) => s !== undefined);
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={serviceJsonLd(service, crumbs)} />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader current="/services" />

      <main id="main" tabIndex={-1}>
        <section className="page-hero" aria-labelledby="page-title">
          <div className="legal-glow" aria-hidden="true" />
          <div className="wrap">
            <Breadcrumbs items={crumbs} />
            <span className="service-icon" aria-hidden="true">
              <Icon size={28} weight="light" />
            </span>
            <h1 id="page-title" className="display page-title">
              {service.headline}
              <span className="dot">.</span>
            </h1>
            <p className="lead mt-8 max-w-[56ch]">{service.intro}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <PrimaryCta />
              <a href="#how-it-works" className="text-link font-medium">
                How it works
              </a>
            </div>
          </div>
        </section>

        {/* What it is, and who it is for */}
        <section className="block" aria-label={`About ${service.name}`}>
          <div className="wrap split">
            <div data-reveal>
              <h2 className="block-title">What it is</h2>
              <div className="prose mt-7">
                {service.whatItIs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
            <div data-reveal style={order(1)}>
              <h2 className="block-title-sm">Who it is for</h2>
              <ul className="check-list">
                {service.whoFor.map((w) => (
                  <li key={w}>
                    <CheckCircle size={18} weight="fill" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="block" aria-labelledby="problems-title">
          <div className="wrap">
            <h2
              id="problems-title"
              className="h2 words max-w-[20ch]"
              data-reveal
            >
              <Words text="The problems it solves" />
            </h2>
            <ul
              className="card-grid"
              data-count={service.problems.length === 3 ? "3" : undefined}
            >
              {service.problems.map((p, i) => (
                <li
                  key={p.title}
                  className="info-card"
                  data-reveal
                  style={order(i)}
                >
                  <span className="info-card-icon" aria-hidden="true">
                    <WarningCircle size={22} weight="light" />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="block"
          aria-labelledby="how-it-works-title"
        >
          <div className="wrap">
            <h2
              id="how-it-works-title"
              className="h2 words max-w-[20ch]"
              data-reveal
            >
              <Words text="How it works, step by step" />
            </h2>
            <ol className="steps">
              {service.steps.map((s, i) => (
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

        {service.division ? (
          <section className="block" aria-labelledby="division-title">
            <div className="wrap">
              <h2
                id="division-title"
                className="h2 words max-w-[20ch]"
                data-reveal
              >
                <Words text="What the AI does, and what people decide" />
              </h2>
              <div className="card-grid">
                <div className="info-card" data-reveal>
                  <span className="info-card-icon" aria-hidden="true">
                    <Icon size={22} weight="light" />
                  </span>
                  <h3>The AI prepares</h3>
                  <ul className="check-list mt-1">
                    {service.division.ai.map((t) => (
                      <li key={t}>
                        <CheckCircle size={18} weight="fill" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="info-card" data-reveal style={order(1)}>
                  <span className="info-card-icon" aria-hidden="true">
                    <UserCheck size={22} weight="light" />
                  </span>
                  <h3>People review and decide</h3>
                  <ul className="check-list mt-1">
                    {service.division.people.map((t) => (
                      <li key={t}>
                        <CheckCircle size={18} weight="fill" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* What you provide, human review and privacy */}
        <section className="block" aria-label="Getting started and safeguards">
          <div className="wrap split">
            <div data-reveal>
              <h2 className="block-title">What you provide</h2>
              <p className="muted mt-5 max-w-[52ch]">
                Setup is done for you. To get started, this is what I need
                from your side:
              </p>
              <ul className="check-list">
                {service.youProvide.map((w) => (
                  <li key={w}>
                    <CheckCircle size={18} weight="fill" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal style={order(1)}>
              <h2 className="block-title-sm">Human review and privacy</h2>
              <div className="mt-7">
                <div className="note">
                  <h3>
                    <UserCheck size={22} weight="light" aria-hidden="true" />
                    A person stays in the loop
                  </h3>
                  <p>{service.humanReview}</p>
                </div>
                <div className="note">
                  <h3>
                    <LockSimple size={22} weight="light" aria-hidden="true" />
                    Your data
                  </h3>
                  <p>{service.privacy}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="block" aria-labelledby="use-cases-title">
          <div className="wrap">
            <h2
              id="use-cases-title"
              className="h2 words max-w-[20ch]"
              data-reveal
            >
              <Words text={`${service.name} use cases`} />
            </h2>
            <p className="lead mt-6 max-w-[54ch]" data-reveal="blur">
              Illustrative scenarios, not client case studies: common problems
              and how {service.name} handles them, step by step.
            </p>
            <ul className="uc-grid" data-count="3">
              {useCases.map((u, i) => (
                <UseCaseTile key={u.slug} useCase={u} index={i} />
              ))}
            </ul>
            <p className="mt-8">
              <Link href="/use-cases" className="text-link font-medium">
                See all use cases
              </Link>
            </p>
          </div>
        </section>

        {/* Related services */}
        <section className="block" aria-labelledby="related-title">
          <div className="wrap split">
            <div data-reveal>
              <h2 id="related-title" className="block-title">
                Related services
              </h2>
              <p className="muted mt-5 max-w-[44ch]">
                {service.name} often works best alongside these. Every service
                connects to the same tools and follows the same review rules.
              </p>
            </div>
            <ul className="nf-links mt-0" data-reveal style={order(1)}>
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/services/${r.slug}`} className="nf-link">
                    <span>
                      <span className="nf-link-label">{r.name}</span>
                      <span className="nf-link-text">{r.summary}</span>
                    </span>
                    <ArrowRight size={20} weight="bold" aria-hidden="true" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="nf-link">
                  <span>
                    <span className="nf-link-label">All eight services</span>
                    <span className="nf-link-text">
                      AI automation and AI accounting, side by side.
                    </span>
                  </span>
                  <ArrowRight size={20} weight="bold" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Los Angeles area */}
        <AreaBand
          title={`${service.name} for businesses across Los Angeles County`}
          text={`${service.localNote} Audits, setup and check-ins happen online, so I work with teams anywhere in the county, and with clients worldwide.`}
          cities={citiesForService(service.slug)}
        />

        {/* FAQ */}
        <section className="block border-t-0" aria-labelledby="faq-title">
          <div className="wrap">
            <h2 id="faq-title" className="h2 words max-w-[20ch]" data-reveal>
              <Words text="Questions about this service" />
            </h2>
            <ul className="faq">
              {service.faqs.map((f) => (
                <li key={f.question} data-reveal>
                  <h3>{f.question}</h3>
                  <p>{f.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ClosingCta
          title={`Talk through ${service.name} for your business`}
          text="Book a free AI audit. We look at how this work is done today, what AI could take over and where a person should stay in charge. No obligation."
        />
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
