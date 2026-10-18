import type { CSSProperties } from "react";
import {
  Check,
  Envelope,
  FilePdf,
  PhoneIncoming,
  Browser,
  UserCheck,
} from "@phosphor-icons/react/dist/ssr";
import FlowPin from "./flow-pin";

const steps = [
  {
    title: "Work comes in.",
    text: "Calls, web forms, emails and invoices arrive the way they already do. Nothing changes for your customers or suppliers.",
  },
  {
    title: "AI does the first pass.",
    text: "AI answers, reads, sorts and drafts: it books the call, qualifies the lead, codes the invoice. A person checks what matters.",
  },
  {
    title: "Work goes out done.",
    text: "Appointments are booked, leads reach the right person, replies are sent and the books are reconciled, all logged in one place.",
  },
];

const docs = [
  { label: "Missed call", icon: PhoneIncoming, r: "-7deg" },
  { label: "Web form lead", icon: Browser, r: "5deg" },
  { label: "Customer email", icon: Envelope, r: "-3deg" },
  { label: "Supplier invoice", icon: FilePdf, r: "6deg" },
];

const rows = [
  { title: "Call", note: "Answered and booked" },
  { title: "Lead", note: "Qualified and routed" },
  { title: "Email", note: "Reply drafted for review" },
  { title: "Invoice", note: "Coded and reconciled" },
];

// Pinned storytelling for an AI workflow, rendered on the server with its
// icons, then pinned and driven from scroll by FlowPin. Without JS, or with
// reduced motion, the whole flow shows as a still diagram.
export default function Flow() {
  return (
    <FlowPin>
      <div className="flow-sticky">
        <div className="wrap">
          <div className="flow-grid">
            <div>
              <ol className="flow-steps" aria-label="The flow, step by step">
                {steps.map((s) => (
                  <li key={s.title} className="flow-step">
                    <h3 className="flow-step-title">{s.title}</h3>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ol>
              <div className="flow-meter" aria-hidden="true">
                {steps.map((s) => (
                  <span key={s.title}>
                    <i />
                  </span>
                ))}
              </div>
            </div>

            <div
              className="flow-stage"
              data-loop
              role="img"
              aria-label="Diagram: missed calls, web form leads, customer emails and supplier invoices flow into an AI core, and come out as booked appointments, routed leads, drafted replies and reconciled books, with a person reviewing."
            >
              <ul className="flow-docs" aria-hidden="true">
                {docs.map((d, i) => (
                  <li
                    key={d.label}
                    className="doc"
                    style={
                      { "--i": i, "--r": d.r } as CSSProperties
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
                      <span className="core-sub">answers, sorts, drafts</span>
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
                    style={{ "--i": i } as CSSProperties}
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
    </FlowPin>
  );
}
