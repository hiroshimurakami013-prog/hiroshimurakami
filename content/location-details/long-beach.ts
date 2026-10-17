import type { LocationDetail } from "../locations.ts";

// Long Beach: the port and the logistics businesses around it (trucking,
// warehousing, freight forwarding, customs brokerage), plus healthcare and
// tourism. The angle is paperwork volume and round-the-clock operations.

export const LONG_BEACH: LocationDetail = {
  seoTitle: "AI for Long Beach Logistics and Trade | Hiroshi Murakami",
  seoDescription:
    "AI for Long Beach logistics, trucking and warehousing: document capture, data entry across systems, after-hours dispatch calls and rate questions.",
  headline: "AI for Long Beach logistics, from the dispatch phone to the carrier invoice",
  lead: "Long Beach is home to one of the busiest ports in the country, and around it sits a dense network of trucking companies, warehouses, freight forwarders, customs brokers and the service businesses that support them. That work never really stops, and it runs on paperwork: delivery receipts, rate confirmations, carrier invoices and status updates that someone has to read, key in and pass along. That is where AI earns its place here.",
  angle:
    "The port and the logistics businesses around it. Round-the-clock operations and a constant flow of documents.",
  sections: [
    {
      kind: "split",
      heading: "The paperwork problem",
      paragraphs: [
        "A small trucking or warehousing company can receive hundreds of documents a week as PDFs, phone photos and email attachments. Each one gets read, and key details are typed into a transportation management system, an accounting package and often a spreadsheet as well. It is slow, it is easy to get a container number or an amount wrong and it pulls experienced dispatchers away from moving freight.",
        "AI document capture reads those files as they arrive, pulls out the details that matter, such as load references, dates, amounts and carrier names, and enters them into your systems. Anything it is unsure about is flagged for a person, and the original document is always attached to the record so it can be checked.",
      ],
      asideHeading: "Documents it can read",
      aside: [
        "Carrier and vendor invoices, including scanned ones.",
        "Delivery receipts and proof of delivery photos.",
        "Rate confirmations and booking emails.",
      ],
    },
    {
      kind: "points",
      heading: "Operations that run around the clock",
      points: [
        {
          title: "Calls after the office closes",
          text: "Drivers, shippers and receivers call at night and at weekends. An AI receptionist answers, logs the details, gives routine status updates where your system allows and wakes the on-call person only when something truly needs them.",
        },
        {
          title: "Rate and service questions",
          text: "Which lanes do you cover? Do you handle hazmat or reefer? What does a drayage move cost from the port? A voice agent answers from your approved information and books a quote callback for anything that needs a person.",
        },
        {
          title: "Status copied between systems",
          text: "When a load is delivered, the TMS, the customer portal, the invoice and the driver settlement all need updating. AI agents move that data across, so nobody retypes the same delivery four times.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Beyond logistics",
      paragraphs: [
        "Long Beach is also a city of healthcare providers, restaurants, hotels and neighbourhood service businesses. For them, the same principles apply on a smaller scale: answer every call, stop retyping data and keep the books current. The services below cover all of that, and the free audit is where we work out which one comes first.",
      ],
    },
  ],
  serviceOrder: [
    "ai-agents",
    "ai-accounting",
    "ai-receptionist",
    "custom-voice-agents",
    "custom-crm-and-workflows",
    "ai-follow-ups",
    "ai-lead-qualification",
    "ai-customer-support",
  ],
  serviceNotes: {
    "ai-agents":
      "Delivery and load data moved between the TMS, portals and accounting without retyping.",
    "ai-accounting":
      "Carrier and vendor invoices captured from PDFs and photos, coded and ready for review.",
    "ai-receptionist":
      "Night and weekend calls from drivers and customers, with urgent ones passed to on-call staff.",
    "custom-voice-agents":
      "Lane, service and rate questions answered from your approved information.",
    "custom-crm-and-workflows":
      "One place for shippers, carriers and loads, connected to the tools you already use.",
  },
  useCases: [
    {
      slug: "data-entry-across-tools",
      note: "The core problem for small logistics firms: the same load details typed into several systems by hand.",
    },
    {
      slug: "invoice-and-receipt-capture",
      note: "For trucking, warehousing and forwarding companies receiving a steady stream of carrier invoices and delivery paperwork.",
    },
    {
      slug: "after-hours-calls",
      note: "For operations that keep moving at night and at weekends, when the office phone usually goes to voicemail.",
    },
    {
      slug: "pricing-and-faq-calls",
      note: "For carriers and brokers whose dispatchers are interrupted all day by rate and coverage questions.",
    },
    {
      slug: "connecting-disconnected-tools",
      note: "For firms running a TMS, an accounting package, email and spreadsheets that do not share data.",
    },
  ],
  faqs: [
    {
      question: "Can AI read our transportation management system's documents?",
      answer:
        "AI can read most PDFs, scans and photos. Getting data into your TMS depends on whether it has an official connection or import. Many do, and we confirm what is possible with your system before building anything.",
    },
    {
      question: "What happens when the AI misreads a container number or an amount?",
      answer:
        "Every extracted field has a confidence check. Anything below the threshold, and anything that does not match the expected format, is flagged for a person to confirm before it is saved. The original document stays attached for reference.",
    },
    {
      question: "Can the after-hours line reach our on-call dispatcher?",
      answer:
        "Yes. You set the rules: which issues are urgent, who is on call and how they are reached. Routine calls are logged for the morning, urgent ones are passed on straight away with a short summary.",
    },
  ],
  neighbours: ["torrance", "inglewood", "los-angeles"],
  ctaTitle: "Cut the paperwork out of your Long Beach operation",
};
