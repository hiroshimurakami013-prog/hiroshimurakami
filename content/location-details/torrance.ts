import type { LocationDetail } from "../locations.ts";

// Torrance: manufacturing, aerospace and automotive supply, machine shops,
// distributors and the trades around them. The angle is the quote to cash
// cycle of a B2B supplier: RFQs, quotes, purchase orders and invoices.

export const TORRANCE: LocationDetail = {
  seoTitle: "AI for Torrance Manufacturers | Hiroshi Murakami",
  seoDescription:
    "AI for Torrance manufacturers, machine shops and distributors: quote follow-ups, invoice and PO capture, pricing calls and data entry across systems.",
  headline: "AI for Torrance manufacturers, machine shops and distributors",
  lead: "Torrance and the wider South Bay have a long industrial tradition, with manufacturers, aerospace and automotive suppliers, machine shops, distributors and the trades that serve them. These businesses sell to other businesses, and their week is shaped by the quote to cash cycle: requests for quotes come in, quotes go out, purchase orders arrive, parts ship and invoices follow. Every step has paperwork, and every gap between steps is a place where money waits.",
  angle:
    "Manufacturing, aerospace and automotive supply, machine shops and distributors. The quote to cash cycle, with less paperwork.",
  sections: [
    {
      kind: "points",
      heading: "The quote to cash cycle, step by step",
      intro:
        "Here is where AI fits in a typical South Bay supplier's week. Most businesses start with one step, not all of them.",
      points: [
        {
          title: "1. Requests for quotes",
          text: "RFQs arrive by email, web form and phone, often with drawings attached. AI triage logs each one, pulls out part numbers, quantities and due dates and routes it to the estimator.",
        },
        {
          title: "2. Quotes that go quiet",
          text: "A quote is sent and the buyer goes silent. AI follow-ups check in at sensible intervals, answer simple questions and tell your team when a buyer is ready to talk.",
        },
        {
          title: "3. Purchase orders and supplier invoices",
          text: "POs from customers and invoices from your own suppliers are read by AI, matched against quotes and orders and entered into your systems, with mismatches flagged.",
        },
        {
          title: "4. Status questions and pricing calls",
          text: "Where is my order? Do you stock this? What is the lead time? A voice agent answers routine questions from your approved information and passes anything technical to a person.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Why spreadsheets and ERP screens slow everyone down",
      paragraphs: [
        "Many smaller manufacturers and distributors run on an ERP or accounting system plus a set of spreadsheets that fill the gaps. Information is typed in more than once: the quote in one place, the order in another, the shipment in a third and the invoice in a fourth. It works, but it ties up skilled people in data entry and makes errors likely when the shop is busy.",
        "AI agents can carry that data between systems the way a careful clerk would, using official connections and imports where they exist. They keep a log of every change and stop to ask a person when something does not match, such as a price that differs from the quote or a quantity that looks wrong.",
      ],
    },
    {
      kind: "split",
      heading: "Respecting how your shop runs",
      paragraphs: [
        "Suppliers in aerospace and other regulated industries often work under strict quality and documentation requirements. AI does not change your quality system or sign off on anything. It handles the clerical steps around it, keeps every original document attached and leaves approvals, certifications and engineering decisions with your people.",
      ],
      asideHeading: "Kept with your team",
      aside: [
        "Pricing, lead time commitments and engineering questions.",
        "Any change to a purchase order or a quality record.",
        "Customer data access, limited to the people you name.",
      ],
    },
  ],
  serviceOrder: [
    "ai-follow-ups",
    "ai-accounting",
    "ai-agents",
    "custom-voice-agents",
    "custom-crm-and-workflows",
    "ai-lead-qualification",
    "ai-receptionist",
    "ai-customer-support",
  ],
  serviceNotes: {
    "ai-follow-ups":
      "Polite check-ins on quotes that went quiet, and reminders on overdue invoices.",
    "ai-accounting":
      "Supplier invoices and customer POs captured, matched and ready for review.",
    "ai-agents":
      "Order and shipment data carried between your ERP, spreadsheets and accounting.",
    "custom-voice-agents":
      "Stock, lead time and order status questions answered from approved information.",
    "ai-lead-qualification":
      "RFQs from email, forms and phone logged and routed to the estimator.",
  },
  useCases: [
    {
      slug: "unanswered-quote-follow-ups",
      note: "The most common gap in a supplier's week: quotes sent to buyers who never reply.",
    },
    {
      slug: "invoice-and-receipt-capture",
      note: "For manufacturers and distributors processing a steady stream of supplier invoices and purchase orders.",
    },
    {
      slug: "data-entry-across-tools",
      note: "For shops where the same order is typed into the ERP, a spreadsheet and the accounting system.",
    },
    {
      slug: "pricing-and-faq-calls",
      note: "For sales and customer service staff interrupted all day by stock, lead time and order status calls.",
    },
  ],
  faqs: [
    {
      question: "Can AI read technical drawings and quote parts for us?",
      answer:
        "No, and it should not. AI can log an RFQ, extract part numbers, quantities and due dates and attach the drawings for your estimator. Pricing and manufacturability decisions stay with your team.",
    },
    {
      question: "We have an older ERP. Can AI still connect to it?",
      answer:
        "Often, through imports, exports or an official connection. If there is no safe way in, we say so and look at alternatives, such as preparing data for a person to import in one step.",
    },
    {
      question: "Will quote follow-ups annoy our buyers?",
      answer:
        "They are spaced out, short and written in your tone, and they stop as soon as the buyer replies or asks you to stop. Most buyers appreciate a reminder when a quote expires or a lead time is about to change.",
    },
  ],
  neighbours: ["long-beach", "inglewood", "los-angeles"],
  ctaTitle: "Shorten the quote to cash cycle at your Torrance business",
};
