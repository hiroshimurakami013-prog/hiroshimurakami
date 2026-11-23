import type { Metadata } from "next";
import { ArrowUpRight, ProhibitInset, UserCheck } from "@phosphor-icons/react/dist/ssr";
import { ABOUT, ABOUT_DEFINITION, ABOUT_PATH } from "@/content/about";
import { HIROSHI_PORTRAIT } from "@/content/images";
import { PROCESS_STEPS, SERVICES } from "@/content/services";
import { aboutJsonLd } from "@/lib/schema";
import { FACEBOOK, INSTAGRAM, LINKEDIN, pageMetadata } from "@/lib/site";
import Breadcrumbs, { type Crumb } from "../components/breadcrumbs";
import { ClosingCta, PrimaryCta } from "../components/cta";
import FaqSection from "../components/faq-section";
import JsonLd from "../components/json-ld";
import KeyFacts from "../components/key-facts";
import LastUpdated from "../components/last-updated";
import ProcessSteps from "../components/process-steps";
import RevealObserver from "../components/reveal-observer";
import Scene from "../components/scene";
import ServiceCard from "../components/service-card";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import Words, { order } from "../components/words";

// TODO (owner): the LinkedIn headline, experience and education can be added
// to this page once the owner supplies them. Nothing is guessed until then.

export const metadata: Metadata = pageMetadata({
  title: ABOUT.seoTitle,
  description: ABOUT.seoDescription,
  path: ABOUT_PATH,
});

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "About", path: ABOUT_PATH },
];

const profiles = [
  { href: LINKEDIN, label: "LinkedIn", text: "Hiroshi Murakami on LinkedIn." },
  { href: INSTAGRAM, label: "Instagram", text: "Send a message or follow along on Instagram." },
  { href: FACEBOOK, label: "Facebook", text: "Send a message through the Facebook Page." },
];

const PORTRAIT_SIZES =
  "(min-width: 1400px) 540px, (min-width: 960px) 38vw, (min-width: 520px) 440px, 92vw";

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd(ABOUT.seoDescription, crumbs, ABOUT.faqs)} />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader current={ABOUT_PATH} />

      <main id="main" tabIndex={-1}>
        <section className="page-hero" aria-labelledby="page-title">
          <div className="legal-glow" aria-hidden="true" />
          <div className="wrap">
            <Breadcrumbs items={crumbs} />
            <div className="split about-hero">
              <div>
                <h1 id="page-title" className="display page-title">
                  {ABOUT.title}
                  <span className="dot">.</span>
                </h1>
                <p className="lead mt-8 max-w-[56ch]">{ABOUT_DEFINITION}</p>
                <LastUpdated path={ABOUT_PATH} />
                <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <PrimaryCta />
                  <a href="#how-i-work" className="text-link font-medium">
                    How I work
                  </a>
                </div>
              </div>
              <Scene
                image={HIROSHI_PORTRAIT}
                sizes={PORTRAIT_SIZES}
                className="about-portrait"
                hero
              />
            </div>
            <KeyFacts facts={ABOUT.keyFacts} />
          </div>
        </section>

        <section className="block" aria-labelledby="what-i-do-title">
          <div className="wrap">
            <h2 id="what-i-do-title" className="h2 words max-w-[18ch]" data-reveal>
              <Words text="What I do" />
            </h2>
            <p className="lead mt-6 max-w-[54ch]" data-reveal="blur">
              {ABOUT.whatIDo}
            </p>
            <ul className="svc-grid mt-12 md:mt-16">
              {SERVICES.map((s, i) => (
                <ServiceCard key={s.slug} service={s} index={i} />
              ))}
            </ul>
          </div>
        </section>

        <section id="how-i-work" className="block" aria-labelledby="how-i-work-title">
          <div className="wrap">
            <h2 id="how-i-work-title" className="h2 words max-w-[18ch]" data-reveal>
              <Words text="How I work" />
            </h2>
            <p className="lead mt-6 max-w-[54ch]" data-reveal="blur">
              {ABOUT.howIWork}
            </p>
            <div className="mt-14 md:mt-20">
              <ProcessSteps steps={PROCESS_STEPS} />
            </div>
            <div className="note mt-14 max-w-[62rem]" data-reveal>
              <h3>
                <UserCheck size={22} weight="light" aria-hidden="true" />
                A person reviews what matters
              </h3>
              <p>{ABOUT.humanReview}</p>
            </div>
          </div>
        </section>

        <section className="block" aria-labelledby="boundaries-title">
          <div className="wrap">
            <h2 id="boundaries-title" className="h2 words max-w-[18ch]" data-reveal>
              <Words text="What I do not do" />
            </h2>
            <ul className="card-grid" data-count="3">
              {ABOUT.boundaries.map((b, i) => (
                <li key={b.title} className="info-card" data-reveal style={order(i)}>
                  <span className="info-card-icon" aria-hidden="true">
                    <ProhibitInset size={22} weight="light" />
                  </span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="block" aria-labelledby="profiles-title">
          <div className="wrap">
            <h2 id="profiles-title" className="h2 words max-w-[18ch]" data-reveal>
              <Words text="Where to find me" />
            </h2>
            <ul className="nf-links">
              {profiles.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="nf-link"
                  >
                    <span>
                      <span className="nf-link-label">{p.label}</span>
                      <span className="nf-link-text">{p.text}</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                    <ArrowUpRight size={20} weight="bold" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FaqSection title="Common questions" faqs={ABOUT.faqs} />

        <ClosingCta />
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
