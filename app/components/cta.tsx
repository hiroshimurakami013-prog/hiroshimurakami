import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { CTA_LABEL, FACEBOOK, INSTAGRAM } from "@/lib/site";
import Magnetic from "./magnetic";
import Words from "./words";

export function PrimaryCta() {
  return (
    <Magnetic>
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        <span>{CTA_LABEL}</span>
        <span className="sr-only"> (opens Instagram in a new tab)</span>
        <span className="btn-icon" aria-hidden="true">
          <ArrowUpRight size={18} weight="bold" />
        </span>
      </a>
    </Magnetic>
  );
}

// The closing call to action panel, with drifting light behind it.
export function ClosingCta({
  title = "Ready to hand off the busywork?",
  text = "Tell me where your team's time goes. I will show you what AI can take off your plate, free of charge.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section
      id="contact"
      aria-labelledby="cta-title"
      className="pb-[clamp(3rem,8vw,6rem)]"
    >
      <div className="wrap">
        <div className="cta" data-glow data-reveal data-loop>
          <span className="cta-orb cta-orb-a" aria-hidden="true" />
          <span className="cta-orb cta-orb-b" aria-hidden="true" />
          <span className="cta-orb cta-orb-c" aria-hidden="true" />
          <h2 id="cta-title" className="display cta-title words" data-reveal>
            <Words text={title} dot={false} />
          </h2>
          <p className="lead mt-8 max-w-[46ch]">{text}</p>
          <div className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-4">
            <PrimaryCta />
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Message on Facebook
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="mt-7 text-[0.95rem] text-text-2">
            Send a message on Instagram or Facebook. No forms, no pressure.
          </p>
        </div>
      </div>
    </section>
  );
}
