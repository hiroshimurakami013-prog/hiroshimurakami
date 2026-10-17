import type { LocationDetail } from "../locations.ts";

// The broad hub: every kind of business, every language, long distances.
// The angle is variety and scale, so the page is about choosing where to
// start rather than about one industry.

export const LOS_ANGELES: LocationDetail = {
  seoTitle: "AI Automation in Los Angeles | Hiroshi Murakami",
  seoDescription:
    "AI receptionists, follow-ups, custom workflows and AI accounting for small and mid-size businesses in Los Angeles. Remote-first, with a person in charge.",
  headline: "AI automation for Los Angeles businesses, whatever you sell",
  lead: "Los Angeles is not one market. A restaurant group in one neighbourhood, a garment wholesaler downtown, a law practice on the Westside and a contractor in the Valley all live inside the same city limits, and they lose time in very different places. This page is about finding your place on that map and starting with the one piece of AI that pays attention to it.",
  angle:
    "The broad hub: every industry, many languages and a lot of driving. Where to start when your business could be anything.",
  sections: [
    {
      kind: "prose",
      heading: "One city, many kinds of busy",
      paragraphs: [
        "Most Los Angeles small businesses share three pressures, whatever they do. Customers expect a fast answer at any hour. Staff are expensive to hire and hard to keep, so the people you have are stretched across the phone, the inbox and the actual work. And the software stack has grown one subscription at a time, so the same customer lives in four places and nobody is sure which one is right.",
        "The city adds its own twist. Customers and suppliers are spread across a huge area, which means more calls, more messages and more time in the car instead of at a desk. Many businesses serve customers in more than one language. And demand swings with the seasons, with production schedules, with events and with tourism, so the workload is rarely flat.",
        "None of this needs a giant software project. It usually needs one well chosen system that removes the most expensive bottleneck, then a second one once the first is trusted.",
      ],
    },
    {
      kind: "points",
      heading: "Where Los Angeles businesses usually start",
      intro:
        "In a free AI audit we look for the one problem that costs the most, then pick the smallest system that fixes it. These are the starting points that come up most often across the city.",
      points: [
        {
          title: "Calls that nobody picks up",
          text: "Service businesses, clinics and trades lose callers to voicemail during lunch, on busy afternoons and after closing. An AI receptionist answers, books or takes a proper message, and hands anything urgent to a person.",
        },
        {
          title: "Leads that wait until tomorrow",
          text: "In a market with this much competition, the business that replies first often wins the job. AI lead qualification replies to web forms and DMs within minutes and books the good ones straight into a calendar.",
        },
        {
          title: "Tools that do not talk",
          text: "A booking app, a spreadsheet, an accounting package and a group chat. Custom workflows connect them so a job moves from enquiry to invoice without anyone retyping it.",
        },
        {
          title: "Books that are always behind",
          text: "Owners who do their own bookkeeping at night, or wait weeks for an accountant to catch up, start with AI accounting: receipts and invoices captured as they arrive, coded and ready for review.",
        },
      ],
    },
    {
      kind: "split",
      heading: "Many languages, one front desk",
      paragraphs: [
        "Los Angeles is one of the most linguistically diverse places in the country, and plenty of small businesses here already switch between English and Spanish, or Korean, Armenian, Tagalog, Mandarin and others, several times a day. That is a strength, but it is hard to staff for, especially after hours.",
        "Modern AI voice and chat systems can answer in several languages and pass the conversation to a person with a written summary in English. Every language you switch on is tested with real phrases from your customers before it goes live, and a person reviews the first conversations.",
      ],
      asideHeading: "What stays with your team",
      aside: [
        "Anything involving money, health, legal advice or a complaint is handed to a person.",
        "You decide which languages are offered and how the AI introduces itself.",
        "Every conversation is logged, so you can read exactly what was said.",
      ],
    },
  ],
  serviceOrder: [
    "ai-receptionist",
    "ai-lead-qualification",
    "custom-crm-and-workflows",
    "ai-accounting",
    "ai-customer-support",
    "ai-follow-ups",
    "custom-voice-agents",
    "ai-agents",
  ],
  serviceNotes: {
    "ai-receptionist":
      "For the front desks that cannot cover every call across a long day and a wide service area.",
    "ai-lead-qualification":
      "For crowded categories where the fastest reply tends to win the job.",
    "custom-crm-and-workflows":
      "For businesses that grew one app at a time and now retype the same customer into several of them.",
    "ai-customer-support":
      "For shops and service businesses answering the same questions in more than one language.",
  },
  useCases: [
    {
      slug: "after-hours-calls",
      note: "Across a city this size, plenty of customers call after work, on their commute or at the weekend. This scenario shows how those calls stop going to voicemail.",
    },
    {
      slug: "web-form-lead-response",
      note: "When several competitors are a search away, a reply within minutes matters. A good fit for contractors, studios and professional services across the city.",
    },
    {
      slug: "connecting-disconnected-tools",
      note: "Common in Los Angeles businesses that added a new app for every new problem and now copy data between them every day.",
    },
    {
      slug: "repetitive-support-questions",
      note: "Hours, prices, parking, delivery areas: the same questions, often in more than one language, across phone, chat and social messages.",
    },
    {
      slug: "invoice-and-receipt-capture",
      note: "For wholesalers, restaurants and trades that handle stacks of supplier invoices and receipts every week.",
    },
  ],
  faqs: [
    {
      question: "Do you work with businesses anywhere in the City of Los Angeles?",
      answer:
        "Yes. The work is remote-first, so it makes no difference whether you are downtown, on the Westside, in the Valley, in South Los Angeles or near the harbor. Audits, setup and check-ins happen over video calls and messages, which also saves you the drive.",
    },
    {
      question: "My customers speak different languages. Can the AI handle that?",
      answer:
        "Often, yes. Current AI voice and chat systems can work in several languages. Each language is tested with your own phrases before launch, and anything the AI is unsure about goes to a person with a summary in English.",
    },
    {
      question: "We are a small team. Is this only for bigger companies?",
      answer:
        "No. Most of the businesses this is designed for have somewhere between one and a few dozen people. Small teams usually feel the benefit sooner, because one missed call or one late invoice matters more to them.",
    },
    {
      question: "Which service should a Los Angeles business start with?",
      answer:
        "Whichever problem costs you the most today. For many service businesses that is missed calls, for others it is slow lead replies or books that are always behind. The free AI audit exists to find that answer with you, with no obligation.",
    },
  ],
  neighbours: [
    "santa-monica",
    "beverly-hills",
    "culver-city",
    "inglewood",
    "glendale",
    "burbank",
    "pasadena",
    "long-beach",
    "torrance",
  ],
  ctaTitle: "Find the first fix for your Los Angeles business",
};
