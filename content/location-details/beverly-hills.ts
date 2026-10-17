import type { LocationDetail } from "../locations.ts";

// Beverly Hills: professional services (law, wealth management,
// accounting), high-end retail and medical, dental and aesthetic practices.
// The angle is discretion and a high standard of service: the AI has to
// sound like the business, protect privacy and know when to step aside.

export const BEVERLY_HILLS: LocationDetail = {
  seoTitle: "Discreet AI for Beverly Hills Practices | Hiroshi Murakami",
  seoDescription:
    "Discreet AI for Beverly Hills medical and aesthetic practices, law and wealth firms and boutiques: call screening, confirmations and polished handovers.",
  headline: "Discreet AI for Beverly Hills practices, firms and boutiques",
  lead: "Beverly Hills businesses are judged on the details. Medical, dental and aesthetic practices, law and wealth management firms, accountants and high-end boutiques all sell an experience as much as a service, and their clients notice a missed call, a clumsy hold message or a question asked twice. AI only belongs here if it raises that standard, protects privacy and steps aside gracefully when a person should take over.",
  angle:
    "Medical and aesthetic practices, law and wealth firms and luxury retail. Discretion, polish and a seamless step to a person.",
  sections: [
    {
      kind: "points",
      heading: "What a high standard of service means for AI",
      intro:
        "Before anything is switched on for a Beverly Hills business, we agree on how the AI behaves. These four principles shape every setup.",
      points: [
        {
          title: "It sounds like your business",
          text: "Greetings, phrasing and tone are written with you and tested on real calls. No robotic menus, no pushy upselling, no over-familiar small talk.",
        },
        {
          title: "It says less, not more",
          text: "The AI confirms identity before discussing an appointment, never reads out sensitive details and keeps summaries to what your team needs.",
        },
        {
          title: "It knows when to step aside",
          text: "Existing clients, VIPs you name, complaints and anything delicate go straight to a person, with a summary so the client never repeats themselves.",
        },
        {
          title: "It is open about what it is",
          text: "It introduces itself as an AI assistant for your business. Clients appreciate the honesty, and anyone can ask for a person.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Medical, dental and aesthetic practices",
      paragraphs: [
        "Practices here often book long, high-value appointments, so a no-show or a missed new patient enquiry is costly. An AI receptionist covers the calls the coordinator cannot take, books consultations into your system and answers practical questions about location, parking and preparation. Confirmation calls a day or two before each visit let patients confirm or move the appointment in a short, courteous conversation, which tends to work better than a text that is easy to ignore.",
        "The AI never gives medical opinions, discusses results or quotes treatment prices you have not approved. Those conversations belong to your team.",
      ],
    },
    {
      kind: "split",
      heading: "Law, wealth and accounting firms",
      paragraphs: [
        "Professional firms receive a steady flow of calls from people who are not a fit: the wrong practice area, a matter below your minimum or a sales pitch. Each one takes a senior person's attention. AI screening asks a few polite questions, routes promising enquiries to the right person with a summary and handles the rest courteously, so nobody feels brushed off.",
        "For firms that manage books for clients, AI reconciliation prepares the monthly matching and flags exceptions for review, which keeps client reporting on schedule without adding staff.",
      ],
      asideHeading: "Privacy, plainly",
      aside: [
        "Calls and messages are only recorded with notice.",
        "Data is kept only as long as you need it and is not used to train public AI models.",
        "Access is limited to the people you name.",
      ],
    },
  ],
  serviceOrder: [
    "ai-receptionist",
    "custom-voice-agents",
    "ai-lead-qualification",
    "ai-customer-support",
    "ai-accounting",
    "ai-follow-ups",
    "custom-crm-and-workflows",
    "ai-agents",
  ],
  serviceNotes: {
    "ai-receptionist":
      "Courteous overflow cover and consultation booking for practices and firms.",
    "custom-voice-agents":
      "Confirmation calls before long, high-value appointments.",
    "ai-lead-qualification":
      "Polite screening so senior people only take the calls that fit.",
    "ai-customer-support":
      "Handovers that pass the full context to a person, so clients never repeat themselves.",
    "ai-accounting":
      "Monthly reconciliation prepared for review, for firms that keep books for clients.",
  },
  useCases: [
    {
      slug: "missed-calls-at-the-front-desk",
      note: "For practices where the coordinator is with a patient and a new enquiry would otherwise reach voicemail.",
    },
    {
      slug: "appointment-confirmation-calls",
      note: "For practices booking long appointments, where an empty chair is expensive and a personal confirmation call fits the experience.",
    },
    {
      slug: "screening-unqualified-sales-calls",
      note: "For law, wealth and accounting firms where senior people field calls that were never a fit.",
    },
    {
      slug: "human-handover-with-context",
      note: "For businesses where the step from AI to a person has to feel seamless to a demanding client.",
    },
    {
      slug: "automated-bank-reconciliation",
      note: "For accounting and wealth firms that keep monthly books for clients.",
    },
  ],
  faqs: [
    {
      question: "Our clients expect a person. Will AI feel impersonal?",
      answer:
        "It is set up as overflow and after-hours cover, not a replacement for your team. Existing clients and anyone you name can be routed straight to a person, and every caller can ask for one. The goal is that nobody reaches voicemail.",
    },
    {
      question: "How is patient and client privacy protected?",
      answer:
        "The AI confirms identity before discussing appointments, keeps sensitive details out of summaries, records only with notice and stores data only as long as you need it. Your data is not used to train public AI models.",
    },
    {
      question: "Can the AI handle VIP clients differently?",
      answer:
        "Yes. Numbers or names you choose can skip the AI entirely, or be greeted by name and passed to a specific person straight away.",
    },
  ],
  neighbours: ["los-angeles", "santa-monica", "culver-city"],
  ctaTitle: "Raise the standard of service at your Beverly Hills business",
};
