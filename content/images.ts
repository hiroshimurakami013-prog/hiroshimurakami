import type { LocationSlug } from "./locations";
import type { ServiceSlug } from "./services";

// Scene images for service pages, use case pages and city pages. They were
// generated in P5 (docs/BUILD-PLAN.md section 7) and committed as optimised
// WebP files under public/images/. next/image serves AVIF or WebP at the
// right width, so the files here are the 1536 by 1024 masters.
//
// Alt text describes what the picture shows, so it stays true even where an
// image is reused. Keep "AI" in capitals and do not stuff keywords.

export type SceneImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const W = 1536;
const H = 1024;

const img = (src: string, alt: string): SceneImage => ({
  src: `/images/${src}.webp`,
  width: W,
  height: H,
  alt,
});

export const SERVICE_IMAGES: Record<ServiceSlug, SceneImage> = {
  "ai-accounting": img(
    "services/ai-accounting-invoices-into-ledger",
    "Invoices and receipts flowing into a glowing AI core and coming out as tidy ledger rows and charts",
  ),
  "ai-receptionist": img(
    "services/ai-receptionist-phone-answering-call",
    "A phone on a reception desk at night answering a call with a glowing AI voice waveform",
  ),
  "custom-voice-agents": img(
    "services/custom-voice-agents-sound-waves",
    "A ribbon of sound light weaving between phone handsets and headsets, one AI voice handling many calls",
  ),
  "ai-agents": img(
    "services/ai-agents-moving-data-between-tools",
    "An AI core sending small agents with blocks of data along lit paths to separate software panels",
  ),
  "ai-follow-ups": img(
    "services/ai-follow-ups-timed-messages",
    "Paper plane messages leaving a desk along a timed arc of clock markers, with one reply coming back",
  ),
  "ai-lead-qualification": img(
    "services/ai-lead-qualification-light-funnel",
    "A funnel of light where an AI ring sorts many incoming leads and lets the best fits through",
  ),
  "custom-crm-and-workflows": img(
    "services/custom-crm-modular-system",
    "Custom glass blocks fitted together and joined by glowing pipelines, a CRM built to fit",
  ),
  "ai-customer-support": img(
    "services/ai-customer-support-chat-to-human",
    "Chat bubbles converging on an AI assistant, with one conversation passed on to a person's desk",
  ),
};

export const USE_CASE_IMAGES: Record<string, SceneImage> = {
  "invoice-and-receipt-capture": img(
    "use-cases/invoice-receipt-capture-scan",
    "Paper receipts scanned by a beam of light and turned into neat, sorted digital records",
  ),
  "automated-bank-reconciliation": img(
    "use-cases/bank-reconciliation-matching-rows",
    "Bank and ledger rows matched pair by pair with threads of light, one row left for review",
  ),
  "faster-month-end-reporting": img(
    "use-cases/month-end-reporting-clean-dashboard",
    "Scattered paperwork resolving into a clean dashboard of charts at month end",
  ),
  "missed-calls-at-the-front-desk": img(
    "use-cases/missed-calls-front-desk",
    "An empty front desk while an AI voice catches several incoming calls and turns them into messages",
  ),
  "after-hours-calls": img(
    "use-cases/after-hours-calls-closed-shop",
    "A closed shop at night where a phone on the counter is answered by an AI voice",
  ),
  "appointment-booking-and-rescheduling": img(
    "use-cases/appointment-booking-calendar-tiles",
    "Calendar tiles rearranging themselves as an AI books and moves appointments",
  ),
  "appointment-confirmation-calls": img(
    "use-cases/appointment-confirmation-calls",
    "An AI voice calling out to a row of appointments, each one lighting up as confirmed",
  ),
  "pricing-and-faq-calls": img(
    "use-cases/pricing-faq-calls-workshop",
    "A quiet workshop bench while a phone nearby uses AI to answer a stream of questions",
  ),
  "instant-callback-for-web-leads": img(
    "use-cases/instant-callback-web-lead",
    "A web form on a laptop sending a streak of light to a phone that rings back straight away",
  ),
  "data-entry-across-tools": img(
    "use-cases/data-entry-across-tools",
    "An AI agent carrying the same data between three app windows instead of retyping it",
  ),
  "automated-research-and-reporting": img(
    "use-cases/research-and-reporting-gathering",
    "An AI agent gathering points of light from across the web into a single weekly report",
  ),
  "internal-knowledge-assistant": img(
    "use-cases/internal-knowledge-assistant-library",
    "An AI pulling the right page from shelves of company documents and handing it to a desk",
  ),
  "unanswered-quote-follow-ups": img(
    "use-cases/unanswered-quote-follow-ups",
    "A quote on a desk sending a polite series of follow-ups until a reply comes back",
  ),
  "overdue-invoice-reminders": img(
    "use-cases/overdue-invoice-reminders",
    "An overdue invoice sending calm reminders until a payment arrives",
  ),
  "review-requests-and-rebooking": img(
    "use-cases/review-requests-and-rebooking",
    "A tidy workspace after a finished job, a phone sending a review request and a rebooking",
  ),
  "web-form-lead-response": img(
    "use-cases/web-form-lead-response",
    "A web form going cold, warmed by an instant AI reply",
  ),
  "screening-unqualified-sales-calls": img(
    "use-cases/screening-sales-calls-gate",
    "Incoming calls passing through an AI gate, good fits sent to sales and others to helpful answers",
  ),
  "inbound-lead-triage": img(
    "use-cases/inbound-lead-triage-lanes",
    "Emails, messages and form entries pulled into three ordered lanes by AI triage",
  ),
  "when-salesforce-does-not-fit": img(
    "use-cases/generic-crm-versus-custom-fit",
    "A heavy generic machine full of levers and empty seats beside a small custom mechanism glowing with light",
  ),
  "connecting-disconnected-tools": img(
    "use-cases/connecting-disconnected-tools",
    "Floating islands, each holding a different tool, joined by bridges of light so data flows between them",
  ),
  "automated-handoffs": img(
    "use-cases/automated-handoffs-relay",
    "Batons of light passed smoothly between stations along a curved track, with a dropped grey one lying below",
  ),
  "repetitive-support-questions": img(
    "use-cases/repetitive-support-questions",
    "A flood of identical questions from many channels, each answered calmly by an AI assistant",
  ),
  "after-hours-customer-support": img(
    "use-cases/after-hours-customer-support",
    "A shop counter after closing, where a laptop and phone keep answering customer chats with AI",
  ),
  "human-handover-with-context": img(
    "use-cases/human-handover-with-context",
    "An AI handing a folder with the full conversation history to a person's open hands at a desk",
  ),
};

const LA_NIGHT = img(
  "shared/los-angeles-basin-at-night",
  "An aerial view of a coastal city grid at night with glowing boulevards and hills behind, linked by arcs of light",
);
const COAST = img(
  "shared/coast-and-harbour-at-night",
  "A harbour at night with cranes, container ships and a lit city behind, linked by arcs of light",
);
const VALLEY = img(
  "shared/valley-and-hills-at-blue-hour",
  "A valley at blue hour with hills, palm trees and lit rooftops, linked by arcs of light",
);

/** The locations hub uses the basin view; each city gets the closest match. */
export const LOCATIONS_HUB_IMAGE = LA_NIGHT;

export const LOCATION_IMAGES: Record<LocationSlug, SceneImage> = {
  "los-angeles": LA_NIGHT,
  "santa-monica": COAST,
  pasadena: VALLEY,
  glendale: VALLEY,
  burbank: VALLEY,
  "long-beach": COAST,
  "beverly-hills": LA_NIGHT,
  "culver-city": LA_NIGHT,
  torrance: COAST,
  inglewood: LA_NIGHT,
};

export function imageForUseCase(slug: string): SceneImage | undefined {
  return USE_CASE_IMAGES[slug];
}
