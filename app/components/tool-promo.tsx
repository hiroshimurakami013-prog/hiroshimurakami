import Link from "next/link";
import { ArrowRight, Calculator } from "@phosphor-icons/react/dist/ssr";
import { SAVINGS_CALCULATOR } from "@/content/tools";

// A short link block to the free savings calculator, for AI accounting
// pages and closely related use cases.
export default function ToolPromo({ text }: { text?: string }) {
  return (
    <section className="block" aria-labelledby="tool-promo-title">
      <div className="wrap split">
        <div data-reveal>
          <h2 id="tool-promo-title" className="block-title-sm">
            What could this save you?
          </h2>
          <p className="muted mt-5 max-w-[48ch]">
            {text ?? SAVINGS_CALCULATOR.teaser}
          </p>
        </div>
        <ul className="nf-links mt-0" data-reveal>
          <li>
            <Link href={SAVINGS_CALCULATOR.path} className="nf-link">
              <span>
                <span className="nf-link-label">
                  <Calculator
                    size={20}
                    weight="light"
                    aria-hidden="true"
                    className="mr-2 inline-block align-[-3px]"
                  />
                  Accounting automation savings calculator
                </span>
                <span className="nf-link-text">
                  Free, runs in your browser and stores nothing.
                </span>
              </span>
              <ArrowRight size={20} weight="bold" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
