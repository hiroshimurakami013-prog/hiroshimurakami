// The eight services. Names and slugs are fixed by docs/BUILD-PLAN.md
// section 6, and the slugs become /services/<slug> once those pages exist.
// `summary` is the one-line benefit shown on cards.

export type ServiceSlug =
  | "ai-accounting"
  | "ai-receptionist"
  | "custom-voice-agents"
  | "ai-agents"
  | "ai-follow-ups"
  | "ai-lead-qualification"
  | "custom-crm-and-workflows"
  | "ai-customer-support";

export type Service = {
  slug: ServiceSlug;
  name: string;
  summary: string;
};

export const SERVICES: Service[] = [
  {
    slug: "ai-receptionist",
    name: "AI Receptionist",
    summary:
      "Every call answered, day or night. Questions handled, bookings made and messages passed to the right person.",
  },
  {
    slug: "custom-voice-agents",
    name: "Custom Voice Agents",
    summary:
      "Natural phone conversations that confirm appointments, answer pricing questions and call new leads back quickly.",
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    summary:
      "Software helpers that move data between your tools, prepare reports and answer team questions from your documents.",
  },
  {
    slug: "ai-follow-ups",
    name: "AI Follow-Ups",
    summary:
      "Polite, timely follow-ups on quotes, overdue invoices and reviews, so nothing depends on someone remembering.",
  },
  {
    slug: "ai-lead-qualification",
    name: "AI Lead Qualification",
    summary:
      "Leads from forms, calls, email and DMs sorted, qualified and routed while they are still warm.",
  },
  {
    slug: "custom-crm-and-workflows",
    name: "Custom CRM and Workflow Automation",
    summary:
      "A CRM and workflows shaped around how your business actually runs, instead of bending your process to a tool.",
  },
  {
    slug: "ai-customer-support",
    name: "AI Customer Support Assistants",
    summary:
      "Clear answers on chat, email and WhatsApp, with a clean handover to a person when it matters.",
  },
  {
    slug: "ai-accounting",
    name: "AI Accounting",
    summary:
      "Invoices captured and coded, bank lines reconciled and month-end reports ready, with a person reviewing the results.",
  },
];
