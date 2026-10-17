import type { LocationDetail } from "../locations.ts";

// Inglewood: major sports and entertainment venues, businesses that serve
// event crowds, and aviation-related services near the airport. The angle
// is demand that spikes: quiet weekdays, then an event or a rush that
// floods every channel at once.

export const INGLEWOOD: LocationDetail = {
  seoTitle: "AI for Inglewood Businesses on Event Days | Hiroshi Murakami",
  seoDescription:
    "AI for Inglewood restaurants, event services and airport-area businesses: support on busy days, after-hours calls, enquiry triage and clean handoffs.",
  headline: "AI for Inglewood businesses that live with event days and airport hours",
  lead: "Inglewood has become one of the region's best known destinations for major sports and concerts, and it sits right next to Los Angeles International Airport. For local restaurants, bars, parking operators, hospitality and event service companies, and for the freight, travel and aviation-related businesses nearby, that means demand that does not arrive evenly. A quiet Tuesday can be followed by a night when every phone line, inbox and DM channel lights up at once.",
  angle:
    "Restaurants, event services and airport-area businesses. Demand that spikes on event days and runs late into the night.",
  sections: [
    {
      kind: "prose",
      heading: "Staffing for the peak is expensive",
      paragraphs: [
        "The usual answers to uneven demand are to staff for the peak and pay people to wait on quiet days, or staff for the average and let customers wait on busy ones. Neither is great. On a big event day, the same handful of questions arrives over and over: are you open late, can I book a table for after the show, where do I park, do you deliver to the venue area, can I change my booking.",
        "AI support assistants and receptionists scale with that demand. They answer the routine questions instantly on phone, chat and social channels, take bookings where your system allows and pass anything unusual to a person with a summary. On a quiet day they cost very little, and on a busy one they stop the queue from forming.",
      ],
    },
    {
      kind: "points",
      heading: "What an event-ready setup looks like",
      intro: "For a restaurant, bar or event service business near the venues, a typical setup covers four things.",
      points: [
        {
          title: "Event-day answers",
          text: "You add the event schedule, special hours and menus, and the assistant answers questions about them across every channel you use.",
        },
        {
          title: "Triage when everything arrives at once",
          text: "Group bookings, catering requests, supplier messages and complaints are sorted by type and urgency, so the important ones are not buried under fifty questions about parking.",
        },
        {
          title: "Late-night calls",
          text: "Calls after a show or late at night are answered, logged and, if urgent, passed to whoever is on duty.",
        },
        {
          title: "A clean handoff the next morning",
          text: "Requests that need a person, such as a large catering order, reach the right team with every detail, ready to act on when the doors open.",
        },
      ],
    },
    {
      kind: "split",
      heading: "Airport-area and freight businesses",
      paragraphs: [
        "Businesses tied to the airport, such as freight and cargo services, travel and transport companies and aviation-related suppliers, work around flight schedules rather than office hours. Customers call at odd times, shipments need status updates and paperwork moves between several parties.",
        "An after-hours AI receptionist and automated handoffs between dispatch, operations and billing keep things moving overnight, without asking someone to sit by the phone.",
      ],
      asideHeading: "What stays with people",
      aside: [
        "Refunds, complaints and anything involving safety.",
        "Pricing for large or unusual orders.",
        "Decisions about who is on call and when to escalate.",
      ],
    },
  ],
  serviceOrder: [
    "ai-customer-support",
    "ai-receptionist",
    "ai-lead-qualification",
    "custom-crm-and-workflows",
    "ai-follow-ups",
    "custom-voice-agents",
    "ai-agents",
    "ai-accounting",
  ],
  serviceNotes: {
    "ai-customer-support":
      "Event-day questions answered across phone, chat and social channels at once.",
    "ai-receptionist":
      "Late-night and overflow calls for restaurants, event services and airport-area businesses.",
    "ai-lead-qualification":
      "Group bookings and catering requests sorted from the flood of routine messages.",
    "custom-crm-and-workflows":
      "Handoffs between bookings, operations and billing that do not wait for the morning.",
    "ai-follow-ups":
      "Review requests and rebooking messages after a busy event night.",
  },
  useCases: [
    {
      slug: "repetitive-support-questions",
      note: "Event days bring the same questions about hours, parking and bookings on every channel at once.",
    },
    {
      slug: "after-hours-calls",
      note: "For businesses busiest after a show ends, and for airport-area services working around flight times.",
    },
    {
      slug: "inbound-lead-triage",
      note: "For event service and catering businesses whose valuable requests get buried on busy days.",
    },
    {
      slug: "automated-handoffs",
      note: "For operations where a booking has to reach the kitchen, the crew and billing without anyone forwarding emails.",
    },
    {
      slug: "review-requests-and-rebooking",
      note: "For restaurants and hospitality businesses that want event-night visitors to come back on a quieter evening.",
    },
  ],
  faqs: [
    {
      question: "Can the assistant know about specific events and special hours?",
      answer:
        "Yes. You, or I on your behalf, add the schedule, special hours and menus. The assistant answers from that information and says so plainly when it does not know.",
    },
    {
      question: "What happens if hundreds of messages arrive in one evening?",
      answer:
        "AI handles many conversations at the same time, so there is no queue. Anything it cannot answer, or anything that looks urgent, is flagged for a person and sorted by priority.",
    },
    {
      question: "We are a small, family-run restaurant. Is this too much for us?",
      answer:
        "Not necessarily. A simple setup that answers hours, booking and parking questions on the phone and on Instagram can be enough. The free audit is about finding the smallest useful step, not selling the biggest system.",
    },
  ],
  neighbours: ["culver-city", "los-angeles", "torrance", "long-beach"],
  ctaTitle: "Get your Inglewood business ready for the next big night",
};
