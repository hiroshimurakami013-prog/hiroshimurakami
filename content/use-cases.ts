import type { LocationSlug } from "./locations";
import type { ServiceSlug } from "./services";
import { AI_ACCOUNTING_DETAILS } from "./use-case-details/ai-accounting.ts";
import { AI_AGENTS_DETAILS } from "./use-case-details/ai-agents.ts";
import { AI_CUSTOMER_SUPPORT_DETAILS } from "./use-case-details/ai-customer-support.ts";
import { AI_FOLLOW_UPS_DETAILS } from "./use-case-details/ai-follow-ups.ts";
import { AI_LEAD_QUALIFICATION_DETAILS } from "./use-case-details/ai-lead-qualification.ts";
import { AI_RECEPTIONIST_DETAILS } from "./use-case-details/ai-receptionist.ts";
import { CUSTOM_CRM_AND_WORKFLOWS_DETAILS } from "./use-case-details/custom-crm-and-workflows.ts";
import { CUSTOM_VOICE_AGENTS_DETAILS } from "./use-case-details/custom-voice-agents.ts";

// Use cases are illustrative scenarios, never client case studies. Each one
// is labelled "Use case" wherever it appears, with no client names and no
// metrics.
//
// Three per service (docs/BUILD-PLAN.md section 6), each rendered at
// /use-cases/<slug> by app/use-cases/[slug]/page.tsx. The cards below hold
// what the hub, the service pages and the home page show. The long-form
// page copy lives in content/use-case-details/, one file per service.

export type UseCaseStep = { title: string; text: string };

/** The long-form page content. */
export type UseCaseDetail = {
  /** Page title, 60 characters or fewer. */
  seoTitle: string;
  /** Meta description, 155 characters or fewer. */
  seoDescription: string;
  /** The lead paragraph under the H1. */
  lead: string;
  /** The problem in plain business terms. */
  problem: string[];
  /** Why the usual tools and workarounds fall short. */
  usualTools: string[];
  /** How the AI solution works, step by step. */
  steps: UseCaseStep[];
  /** What changes, described qualitatively. No invented numbers. */
  outcomes: string[];
  /** What is needed to start. */
  requirements: string[];
  /** Where a person stays in the loop. */
  humanInTheLoop: string;
  /** How data is handled. */
  privacy: string;
};

export type UseCase = {
  slug: string;
  /** The parent service. */
  service: ServiceSlug;
  title: string;
  /** Two sentences at most, shown on cards and service pages. */
  summary: string;
  /** One more service worth reading about, linked from the page. */
  relatedService: ServiceSlug;
  /** Cities whose business mix makes this scenario especially common. */
  locations: LocationSlug[];
  /** Shown on the home page, one per service. */
  highlight?: boolean;
  detail: UseCaseDetail;
};

const DETAILS: Record<string, UseCaseDetail> = {
  ...AI_ACCOUNTING_DETAILS,
  ...AI_RECEPTIONIST_DETAILS,
  ...CUSTOM_VOICE_AGENTS_DETAILS,
  ...AI_AGENTS_DETAILS,
  ...AI_FOLLOW_UPS_DETAILS,
  ...AI_LEAD_QUALIFICATION_DETAILS,
  ...CUSTOM_CRM_AND_WORKFLOWS_DETAILS,
  ...AI_CUSTOMER_SUPPORT_DETAILS,
};

const CARDS: Omit<UseCase, "detail">[] = [
  // AI Accounting
  {
    slug: "invoice-and-receipt-capture",
    service: "ai-accounting",
    title: "Invoices and receipts typed in by hand",
    summary:
      "Supplier invoices and receipts are collected from email and phone photos, read by AI and coded from your past entries, ready for a person to approve.",
    relatedService: "ai-agents",
    locations: ["los-angeles", "torrance", "long-beach", "glendale"],
  },
  {
    slug: "automated-bank-reconciliation",
    service: "ai-accounting",
    title: "Bank reconciliation that eats days each month",
    summary:
      "Bank lines are matched to invoices and receipts automatically, leaving a short list of exceptions for a person.",
    relatedService: "ai-follow-ups",
    locations: ["los-angeles", "pasadena", "beverly-hills", "torrance"],
    highlight: true,
  },
  {
    slug: "faster-month-end-reporting",
    service: "ai-accounting",
    title: "Month-end reports held up by messy books",
    summary:
      "With books coded and reconciled through the month, a close checklist and the core reports are ready for review soon after month end.",
    relatedService: "custom-crm-and-workflows",
    locations: ["los-angeles", "pasadena", "culver-city", "santa-monica"],
  },

  // AI Receptionist
  {
    slug: "missed-calls-at-the-front-desk",
    service: "ai-receptionist",
    title: "Calls missed while the front desk is busy",
    summary:
      "Lunch breaks, sick days and two calls at once. An AI receptionist picks up, answers and books, then passes the details on.",
    relatedService: "ai-customer-support",
    locations: ["beverly-hills", "glendale", "pasadena", "los-angeles"],
    highlight: true,
  },
  {
    slug: "after-hours-calls",
    service: "ai-receptionist",
    title: "After-hours calls that go to voicemail",
    summary:
      "Evening and weekend callers get a helpful answer and a booking or a message, instead of a recording that sends them to the next business.",
    relatedService: "ai-lead-qualification",
    locations: ["los-angeles", "long-beach", "torrance", "inglewood"],
  },
  {
    slug: "appointment-booking-and-rescheduling",
    service: "ai-receptionist",
    title: "Booking and rescheduling that fills the front desk's day",
    summary:
      "Callers book, move or cancel appointments in one conversation, straight into your calendar, while your team looks after the people in the room.",
    relatedService: "custom-voice-agents",
    locations: ["beverly-hills", "santa-monica", "glendale", "pasadena"],
  },

  // Custom Voice Agents
  {
    slug: "appointment-confirmation-calls",
    service: "custom-voice-agents",
    title: "No-shows that a reminder text did not prevent",
    summary:
      "A voice agent calls the day before to confirm, and lets the customer reschedule or cancel on the spot, so the slot can go to someone else.",
    relatedService: "ai-receptionist",
    locations: ["beverly-hills", "pasadena", "glendale", "santa-monica"],
  },
  {
    slug: "pricing-and-faq-calls",
    service: "custom-voice-agents",
    title: "Pricing and FAQ calls that interrupt the team",
    summary:
      "The same questions about prices, service areas and availability are answered on the phone with your approved wording, and real enquiries are passed on.",
    relatedService: "ai-customer-support",
    locations: ["los-angeles", "burbank", "torrance", "long-beach"],
  },
  {
    slug: "instant-callback-for-web-leads",
    service: "custom-voice-agents",
    title: "New web leads waiting hours for a callback",
    summary:
      "A voice agent calls the lead back right after the form arrives, while they still remember why they asked.",
    relatedService: "ai-lead-qualification",
    locations: ["los-angeles", "santa-monica", "culver-city", "long-beach"],
    highlight: true,
  },

  // AI Agents
  {
    slug: "data-entry-across-tools",
    service: "ai-agents",
    title: "Copying the same data between tools",
    summary:
      "An AI agent moves orders, contacts and notes between systems that do not talk to each other, and flags anything odd.",
    relatedService: "custom-crm-and-workflows",
    locations: ["long-beach", "torrance", "los-angeles", "inglewood"],
    highlight: true,
  },
  {
    slug: "automated-research-and-reporting",
    service: "ai-agents",
    title: "Research and weekly reports built by hand",
    summary:
      "An agent checks prices, listings or competitor pages on a schedule and writes a short weekly summary with links to its sources.",
    relatedService: "ai-accounting",
    locations: ["santa-monica", "culver-city", "burbank", "los-angeles"],
  },
  {
    slug: "internal-knowledge-assistant",
    service: "ai-agents",
    title: "Team questions answered by the one person who knows",
    summary:
      "An internal assistant answers staff questions from your own policies, price lists and guides, and links to the source so people can check.",
    relatedService: "ai-customer-support",
    locations: ["pasadena", "glendale", "burbank", "culver-city"],
  },

  // AI Follow-Ups
  {
    slug: "unanswered-quote-follow-ups",
    service: "ai-follow-ups",
    title: "Quotes sent and never answered",
    summary:
      "Friendly follow-ups go out on a schedule you set, and every reply lands with the right person.",
    relatedService: "ai-lead-qualification",
    locations: ["los-angeles", "torrance", "long-beach", "glendale"],
    highlight: true,
  },
  {
    slug: "overdue-invoice-reminders",
    service: "ai-follow-ups",
    title: "Overdue invoices that feel awkward to chase",
    summary:
      "Courteous reminders go out before and after the due date and stop the moment the customer pays, while disputes go straight to a person.",
    relatedService: "ai-accounting",
    locations: ["los-angeles", "burbank", "culver-city", "torrance"],
  },
  {
    slug: "review-requests-and-rebooking",
    service: "ai-follow-ups",
    title: "No review request and no rebooking after the job",
    summary:
      "After each completed job, customers get a thank-you, a review link and, where it fits, a reminder to book the next visit.",
    relatedService: "custom-voice-agents",
    locations: ["santa-monica", "beverly-hills", "pasadena", "inglewood"],
  },

  // AI Lead Qualification
  {
    slug: "web-form-lead-response",
    service: "ai-lead-qualification",
    title: "Web form leads that go cold",
    summary:
      "Each lead gets a helpful reply and a few qualifying questions, so the best ones reach your sales team first.",
    relatedService: "custom-voice-agents",
    locations: ["los-angeles", "santa-monica", "pasadena", "long-beach"],
    highlight: true,
  },
  {
    slug: "screening-unqualified-sales-calls",
    service: "ai-lead-qualification",
    title: "Sales calls with people who were never a fit",
    summary:
      "A few questions up front about need, location, timing and budget mean your salespeople spend their calls on the leads most likely to buy.",
    relatedService: "custom-crm-and-workflows",
    locations: ["beverly-hills", "culver-city", "torrance", "los-angeles"],
  },
  {
    slug: "inbound-lead-triage",
    service: "ai-lead-qualification",
    title: "Enquiries scattered across email, DMs and forms",
    summary:
      "Messages from every channel are gathered in one place, sorted and routed to the right person, with nothing left unanswered.",
    relatedService: "ai-customer-support",
    locations: ["santa-monica", "burbank", "inglewood", "glendale"],
  },

  // Custom CRM and Workflow Automation
  {
    slug: "when-salesforce-does-not-fit",
    service: "custom-crm-and-workflows",
    title: "A big CRM that does not fit your business",
    summary:
      "Salesforce is a powerful CRM, but it is built for generic workflows. A custom CRM follows your process instead.",
    relatedService: "ai-agents",
    locations: ["culver-city", "burbank", "santa-monica", "los-angeles"],
    highlight: true,
  },
  {
    slug: "connecting-disconnected-tools",
    service: "custom-crm-and-workflows",
    title: "Five tools that do not talk to each other",
    summary:
      "Forms, calendar, CRM, invoicing and messaging are connected, so a customer is entered once and every tool stays up to date.",
    relatedService: "ai-agents",
    locations: ["long-beach", "torrance", "glendale", "los-angeles"],
  },
  {
    slug: "automated-handoffs",
    service: "custom-crm-and-workflows",
    title: "Manual handoffs where leads and jobs get lost",
    summary:
      "When a lead is won or a job is finished, the next step starts on its own: scheduling, invoicing or a follow-up, with the right person notified.",
    relatedService: "ai-follow-ups",
    locations: ["burbank", "pasadena", "inglewood", "long-beach"],
  },

  // AI Customer Support Assistants
  {
    slug: "repetitive-support-questions",
    service: "ai-customer-support",
    title: "The same questions on every channel, all day",
    summary:
      "An AI assistant answers the common ones on chat, email and WhatsApp, and hands the rest to a person with full context.",
    relatedService: "ai-agents",
    locations: ["los-angeles", "santa-monica", "long-beach", "inglewood"],
    highlight: true,
  },
  {
    slug: "after-hours-customer-support",
    service: "ai-customer-support",
    title: "Customer support that stops at closing time",
    summary:
      "Customers who write in the evening or at the weekend get a useful answer straight away, and anything that needs a person is ready for the morning.",
    relatedService: "ai-receptionist",
    locations: ["santa-monica", "culver-city", "glendale", "los-angeles"],
  },
  {
    slug: "human-handover-with-context",
    service: "ai-customer-support",
    title: "Handovers where the customer has to start again",
    summary:
      "When a conversation needs a person, the assistant passes it over with a short summary and the details already collected.",
    relatedService: "custom-crm-and-workflows",
    locations: ["beverly-hills", "pasadena", "burbank", "torrance"],
  },
];

// A missing detail fails the build rather than shipping a thin page.
export const USE_CASES: UseCase[] = CARDS.map((card) => {
  const detail = DETAILS[card.slug];
  if (!detail) throw new Error(`No page copy for use case "${card.slug}"`);
  return { ...card, detail };
});

export function getUseCase(slug: string): UseCase | undefined {
  return USE_CASES.find((u) => u.slug === slug);
}

export function casesForService(service: ServiceSlug): UseCase[] {
  return USE_CASES.filter((u) => u.service === service);
}

/** The next use case of the same service, linked as a sibling. */
export function siblingUseCase(useCase: UseCase): UseCase {
  const own = casesForService(useCase.service);
  return own[(own.indexOf(useCase) + 1) % own.length];
}

/** One headline use case per service, for the home page. */
export const USE_CASE_HIGHLIGHTS: UseCase[] = USE_CASES.filter(
  (u) => u.highlight,
);
