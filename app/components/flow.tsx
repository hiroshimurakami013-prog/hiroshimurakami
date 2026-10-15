"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import {
  Bank,
  Check,
  FilePdf,
  Receipt,
  Envelope,
  UserCheck,
} from "@phosphor-icons/react";

const noop = () => () => {};

const steps = [
  {
    title: "Documents in.",
    text: "Invoices, receipts and bank lines arrive the way they already do: by email, upload or a photo from your phone.",
  },
  {
    title: "AI does the reading.",
    text: "AI pulls out the details, suggests the coding and matches payments to records. A person checks every result.",
  },
  {
    title: "Clean books out.",
    text: "Entries are posted and reconciled, and the month is summed up in a report written in plain language.",
  },
];

const docs = [
  { label: "Supplier invoice", icon: FilePdf, r: "-7deg" },
  { label: "Receipt photo", icon: Receipt, r: "5deg" },
  { label: "Bank statement", icon: Bank, r: "-3deg" },
  { label: "Emailed bill", icon: Envelope, r: "6deg" },
];

const rows = [
  { title: "Supplier invoice", note: "Coded to purchases" },
  { title: "Receipt", note: "Filed under travel" },
  { title: "Bank line", note: "Matched to invoice" },
  { title: "Monthly report", note: "Ready for review" },
];

// Pinned storytelling for the AI accounting flow. One scroll value drives
// everything through a single CSS variable, so the browser does the motion.
// Without JS, or with reduced motion, the whole flow shows as a still diagram.
export default function Flow() {
  const ref = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const meter = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Pinned only on the client, so the server HTML is the still diagram.
  const hydrated = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
  const pinned = hydrated && !reduce;
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // A short hold at both ends, so the first and last frames can be read.
  const update = (v: number) => {
    const p = Math.min(1, Math.max(0, (v - 0.04) / 0.86));
    stage.current?.style.setProperty("--p", p.toFixed(4));
    meter.current
      ?.querySelectorAll<HTMLElement>("i")
      .forEach((bar, i) =>
        bar.style.setProperty(
          "--m",
          Math.min(1, Math.max(0, (p - i / 3) * 3)).toFixed(3),
        ),
      );
    setActive(p < 0.34 ? 0 : p < 0.64 ? 1 : 2);
  };

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (pinned) update(v);
  });

  // Sync once when pinning starts, in case the page loaded mid-scroll.
  useEffect(() => {
    const el = stage.current;
    if (!pinned || !el) return;
    const p = Math.min(1, Math.max(0, (scrollYProgress.get() - 0.04) / 0.86));
    el.style.setProperty("--p", p.toFixed(4));
    return () => {
      el.style.removeProperty("--p");
    };
  }, [pinned, scrollYProgress]);

  return (
    <div ref={ref} className="flow" data-pinned={pinned ? "true" : undefined}>
      <div className="flow-sticky">
        <div className="wrap">
          <div className="flow-grid">
            <div>
              <ol className="flow-steps" aria-label="The flow, step by step">
                {steps.map((s, i) => (
                  <li
                    key={s.title}
                    className="flow-step"
                    data-active={active === i ? "true" : undefined}
                  >
                    <h3 className="flow-step-title">{s.title}</h3>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ol>
              <div className="flow-meter" ref={meter} aria-hidden="true">
                {steps.map((s) => (
                  <span key={s.title}>
                    <i />
                  </span>
                ))}
              </div>
            </div>

            <div
              ref={stage}
              className="flow-stage"
              role="img"
              aria-label="Diagram: invoices, receipts and bank statements flow into an AI core, and come out as reviewed, coded entries and a monthly report."
            >
              <ul className="flow-docs" aria-hidden="true">
                {docs.map((d, i) => (
                  <li
                    key={d.label}
                    className="doc"
                    style={
                      { "--i": i, "--r": d.r } as React.CSSProperties
                    }
                  >
                    <d.icon size={20} weight="light" />
                    <span>{d.label}</span>
                  </li>
                ))}
              </ul>

              <div className="core-col" aria-hidden="true">
                <div className="core">
                  <div className="core-glow" />
                  <div className="core-glow-done" />
                  <div className="core-ring" />
                  <div className="core-disc">
                    <div>
                      <span className="core-ai">AI</span>
                      <span className="core-sub">reads, codes, matches</span>
                    </div>
                  </div>
                </div>
                <span className="core-review">
                  <UserCheck size={16} weight="bold" />A person reviews
                </span>
              </div>

              <ul className="flow-ledger" aria-hidden="true">
                {rows.map((r, i) => (
                  <li
                    key={r.title}
                    className="row"
                    style={{ "--i": i } as React.CSSProperties}
                  >
                    <span className="row-label">
                      <b>{r.title}</b>
                      <span>{r.note}</span>
                    </span>
                    <span className="row-check">
                      <Check size={14} weight="bold" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
