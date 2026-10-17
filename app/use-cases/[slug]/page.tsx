import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle,
  Info,
  LockSimple,
  UserCheck,
} from "@phosphor-icons/react/dist/ssr";
import { imageForUseCase } from "@/content/images";
import { getLocation } from "@/content/locations";
import { getService } from "@/content/services";
import { USE_CASES, getUseCase, siblingUseCase } from "@/content/use-cases";
import { scenarioJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import AreaBand from "../../components/area-band";
import Breadcrumbs, { type Crumb } from "../../components/breadcrumbs";
import { ClosingCta, PrimaryCta } from "../../components/cta";
import JsonLd from "../../components/json-ld";
import RevealObserver from "../../components/reveal-observer";
import Scene, { HERO_SIZES } from "../../components/scene";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import Words, { order } from "../../components/words";

export function generateStaticParams() {
  return USE_CASES.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/use-cases/[slug]">): Promise<Metadata> {
  const useCase = getUseCase((await params).slug);
  if (!useCase) return {};
  return pageMetadata({
    title: useCase.detail.seoTitle,
    description: useCase.detail.seoDescription,
    path: `/use-cases/${useCase.slug}`,
  });
}

/** "A, B, C and D" */
const listOf = (names: string[]) =>
  names.length < 2
    ? names.join("")
    : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;

export default async function UseCasePage({
  params,
}: PageProps<"/use-cases/[slug]">) {
  const useCase = getUseCase((await params).slug);
  if (!useCase) notFound();

  const { detail } = useCase;
  const service = getService(useCase.service);
  const related = getService(useCase.relatedService);
  if (!service || !related) notFound();
  const sibling = siblingUseCase(useCase);
  const places = useCase.locations
    .map((slug) => getLocation(slug))
    .filter((l) => l !== undefined);
  const cities = listOf(places.map((l) => l.name));
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Use cases", path: "/use-cases" },
    { name: useCase.title, path: `/use-cases/${useCase.slug}` },
  ];

  const next = [
    {
      href: `/services/${service.slug}`,
      label: service.name,
      text: `The service behind this use case. ${service.summary}`,
    },
    {
      href: `/use-cases/${sibling.slug}`,
      label: sibling.title,
      text: `Another ${service.name} use case. ${sibling.summary}`,
    },
    {
      href: `/services/${related.slug}`,
      label: related.name,
      text: `A related service. ${related.summary}`,
    },
    {
      href: "/use-cases",
      label: "All use cases",
      text: "Every scenario, grouped by service.",
    },
  ];

  return (
    <>
      <JsonLd data={scenarioJsonLd(useCase, crumbs)} />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader current="/use-cases" />

      <main id="main" tabIndex={-1}>
        <section className="page-hero" aria-labelledby="page-title">
          <div className="legal-glow" aria-hidden="true" />
          <div className="wrap">
            <Breadcrumbs items={crumbs} />
            <p className="uc-meta uc-hero-meta">
              <span className="case-label">Use case</span>
              <Link href={`/services/${service.slug}`} className="text-link">
                {service.name}
              </Link>
            </p>
            <h1 id="page-title" className="display page-title uc-page-title">
              {useCase.title}
              <span className="dot">.</span>
            </h1>
            <p className="lead mt-8 max-w-[58ch]">{detail.lead}</p>
            <p className="uc-disclaimer">
              <Info size={18} weight="light" aria-hidden="true" />
              <span>
                An illustrative scenario, not a client case study. It describes
                a common situation and how the system would handle it, with no
                client names and no promised results.
              </span>
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <PrimaryCta />
              <a href="#how-it-works" className="text-link font-medium">
                How the AI handles it
              </a>
            </div>
            <Scene
              image={imageForUseCase(useCase.slug)}
              sizes={HERO_SIZES}
              className="page-hero-media"
              hero
            />
          </div>
        </section>

        {/* The problem, and why the usual tools fall short */}
        <section className="block" aria-label="The problem">
          <div className="wrap split">
            <div data-reveal>
              <h2 className="block-title">The problem</h2>
              <div className="prose mt-7">
                {detail.problem.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
            <div data-reveal style={order(1)}>
              <h2 className="block-title-sm">Why the usual tools fall short</h2>
              <div className="prose mt-7">
                {detail.usualTools.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
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
              <Words text="How the AI solution works" />
            </h2>
            <ol className="steps">
              {detail.steps.map((s, i) => (
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

        {/* What changes, and what is needed */}
        <section className="block" aria-label="What changes and what is needed">
          <div className="wrap split">
            <div data-reveal>
              <h2 className="block-title">What changes</h2>
              <ul className="check-list">
                {detail.outcomes.map((o) => (
                  <li key={o}>
                    <CheckCircle size={18} weight="fill" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal style={order(1)}>
              <h2 className="block-title-sm">What is needed to start</h2>
              <ul className="check-list">
                {detail.requirements.map((r) => (
                  <li key={r}>
                    <CheckCircle size={18} weight="fill" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Safeguards, and where to read next */}
        <section className="block" aria-label="Safeguards and related pages">
          <div className="wrap split">
            <div data-reveal>
              <h2 className="block-title-sm">Human review and privacy</h2>
              <div className="mt-7">
                <div className="note">
                  <h3>
                    <UserCheck size={22} weight="light" aria-hidden="true" />
                    A person stays in the loop
                  </h3>
                  <p>{detail.humanInTheLoop}</p>
                </div>
                <div className="note">
                  <h3>
                    <LockSimple size={22} weight="light" aria-hidden="true" />
                    Your data
                  </h3>
                  <p>{detail.privacy}</p>
                </div>
              </div>
            </div>
            <div data-reveal style={order(1)}>
              <h2 className="block-title-sm">Keep reading</h2>
              <ul className="nf-links mt-7">
                {next.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="nf-link">
                      <span>
                        <span className="nf-link-label">{l.label}</span>
                        <span className="nf-link-text">{l.text}</span>
                      </span>
                      <ArrowRight size={20} weight="bold" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Los Angeles area */}
        <AreaBand
          title="Common across Los Angeles County"
          text={`This scenario comes up often for businesses in ${cities}. Audits, setup and check-ins happen online, so I work with teams anywhere in the county, and with clients worldwide.`}
          cities={places}
        />

        <ClosingCta
          title="Does this sound like your business?"
          text={`Book a free AI audit. We look at how this work is handled today and whether ${service.name} would help, with a person in charge of what matters. No obligation.`}
        />
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
