import type { ServiceSlug } from "./services";

// Use cases are illustrative scenarios, never client case studies. Each one
// is labelled "Use case" wherever it appears. For now this holds one
// headline problem per service, shown on the home page. The full use case
// pages extend this module later.

export type UseCaseHighlight = {
  service: ServiceSlug;
  title: string;
  summary: string;
};

export const USE_CASE_HIGHLIGHTS: UseCaseHighlight[] = [
  {
    service: "ai-receptionist",
    title: "Calls missed while the front desk is busy",
    summary:
      "Lunch breaks, sick days and two calls at once. An AI receptionist picks up, answers and books, then passes the details on.",
  },
  {
    service: "custom-voice-agents",
    title: "New web leads waiting hours for a callback",
    summary:
      "A voice agent calls the lead back right after the form arrives, while they still remember why they asked.",
  },
  {
    service: "ai-agents",
    title: "Copying the same data between tools",
    summary:
      "An AI agent moves orders, contacts and notes between systems that do not talk to each other, and flags anything odd.",
  },
  {
    service: "ai-follow-ups",
    title: "Quotes sent and never answered",
    summary:
      "Friendly follow-ups go out on a schedule you set, and every reply lands with the right person.",
  },
  {
    service: "ai-lead-qualification",
    title: "Web form leads that go cold",
    summary:
      "Each lead gets a helpful reply and a few qualifying questions, so the best ones reach your sales team first.",
  },
  {
    service: "custom-crm-and-workflows",
    title: "A big CRM that does not fit your business",
    summary:
      "Salesforce is a powerful CRM, but it is built for generic workflows. A custom CRM follows your process instead.",
  },
  {
    service: "ai-customer-support",
    title: "The same questions on every channel, all day",
    summary:
      "An AI assistant answers the common ones on chat, email and WhatsApp, and hands the rest to a person with full context.",
  },
  {
    service: "ai-accounting",
    title: "Bank reconciliation that eats days each month",
    summary:
      "Bank lines are matched to invoices and receipts automatically, leaving a short list of exceptions for a person.",
  },
];
