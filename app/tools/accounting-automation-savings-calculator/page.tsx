import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "@phosphor-icons/react/dist/ssr";
import { SAVINGS_ASSUMPTIONS as A, SAVINGS_CALCULATOR as TOOL } from "@/content/tools";
import { getUseCase } from "@/content/use-cases";
import { toolJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import Breadcrumbs, { type Crumb } from "../../components/breadcrumbs";
import { ClosingCta } from "../../components/cta";
import FaqSection from "../../components/faq-section";
import JsonLd from "../../components/json-ld";
import RevealObserver from "../../components/reveal-observer";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import { order } from "../../components/words";
import SavingsCalculator from "./calculator";

export const metadata: Metadata = pageMetadata({
  title: TOOL.seoTitle,
  description: TOOL.seoDescription,
  path: TOOL.path,
});

const pct = (n: number) => `${Math.round(n * 100)}%`;

// The same values the calculator uses, written out for the reader.
const assumptions = [
  `A month has ${(A.weeksPerMonth).toFixed(2)} weeks, so weekly hours are multiplied by ${(A.weeksPerMonth).toFixed(2)}.`,
  `Each supplier invoice saves ${A.minutesPerInvoice.low} to ${A.minutesPerInvoice.high} minutes: manual entry and filing, minus the time to review the AI's draft.`,
  `Each bank, card or processor account saves ${A.hoursPerAccount.low} to ${A.hoursPerAccount.high} hours of matching a month, after the time spent reviewing exceptions.`,
  `AI takes on ${pct(A.otherShare.low)} to ${pct(A.otherShare.high)} of the remaining bookkeeping hours, such as coding expenses and chasing missing receipts.`,
  `The estimate never exceeds ${pct(A.cap)} of the hours you entered, because review, judgement and advice stay with people.`,
  "The value is the hours saved multiplied by the hourly cost you entered. Software, AI usage and setup costs are not deducted.",
];

const sources = [
  "automated-bank-reconciliation",
  "ai-accounts-payable-invoice-capture",
  "ai-expense-categorization",
  "ai-month-end-close-checklist",
]
  .map((slug) => getUseCase(slug))
  .filter((u) => u !== undefined);

export default function SavingsCalculatorPage() {
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: TOOL.name, path: TOOL.path },
  ];

  return (
    <>
      <JsonLd
        data={toolJsonLd(
          { path: TOOL.path, name: TOOL.name, description: TOOL.seoDescription },
          crumbs,
          TOOL.faqs,
        )}
      />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className="page-hero" aria-labelledby="page-title">
          <div className="legal-glow" aria-hidden="true" />
          <div className="wrap">
            <Breadcrumbs items={crumbs} />
            <h1 id="page-title" className="display page-title">
              Accounting automation savings calculator
              <span className="dot">.</span>
            </h1>
            <p className="lead mt-8 max-w-[58ch]">{TOOL.lead}</p>
            <p className="uc-disclaimer">
              <Info size={18} weight="light" aria-hidden="true" />
              <span>
                Free to use, no sign-up. Your numbers stay in your browser and
                are never sent or stored.
              </span>
            </p>
          </div>
        </section>

        <section className="block" aria-labelledby="calc-title">
          <div className="wrap">
            <h2 id="calc-title" className="block-title">
              Enter your numbers
            </h2>
            <div className="mt-8">
              <SavingsCalculator />
            </div>
          </div>
        </section>

        <section className="block" aria-label="How the estimate works">
          <div className="wrap split">
            <div data-reveal>
              <h2 className="block-title">How the estimate works</h2>
              <p className="muted mt-5 max-w-[52ch]">
                These are general assumptions, not measurements from any
                client. They are deliberately cautious at the low end. Your
                real figures depend on how tidy the books are and how much
                review you keep.
              </p>
              <ul className="calc-assumptions mt-6">
                {assumptions.map((a) => (
                  <li key={a.slice(0, 40)}>{a}</li>
                ))}
              </ul>
            </div>
            <div data-reveal style={order(1)}>
              <h2 className="block-title-sm">Where the hours come from</h2>
              <p className="muted mt-5 max-w-[44ch]">
                Each part of the estimate matches a use case you can read in
                full, step by step.
              </p>
              <ul className="nf-links mt-7">
                {sources.map((u) => (
                  <li key={u.slug}>
                    <Link href={`/use-cases/${u.slug}`} className="nf-link">
                      <span>
                        <span className="nf-link-label">{u.title}</span>
                        <span className="nf-link-text">{u.summary}</span>
                      </span>
                      <ArrowRight size={20} weight="bold" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services/ai-accounting" className="nf-link">
                    <span>
                      <span className="nf-link-label">AI Accounting</span>
                      <span className="nf-link-text">
                        The service behind the estimate: capture, matching and
                        month-end, with a person reviewing.
                      </span>
                    </span>
                    <ArrowRight size={20} weight="bold" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <FaqSection title="Questions about the calculator" faqs={TOOL.faqs} />

        <ClosingCta
          title="Want real numbers instead of an estimate?"
          text="Book a free AI audit. In 30 minutes we look at your actual books and workload, replace these assumptions with figures from your own business and see what a person should keep reviewing. No obligation."
        />
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
