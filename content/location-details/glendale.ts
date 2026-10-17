import type { LocationDetail } from "../locations.ts";

// Glendale: healthcare, media and a large retail and services economy,
// with many businesses serving customers in more than one language. The
// angle is patient and customer communication across languages and
// channels.

export const GLENDALE: LocationDetail = {
  seoTitle: "AI for Glendale Healthcare and Services | Hiroshi Murakami",
  seoDescription:
    "AI receptionists, appointment confirmations and lead triage for Glendale clinics, media teams and service businesses, in more than one language.",
  headline: "AI for Glendale clinics, media teams and family businesses",
  lead: "Glendale's economy leans on healthcare, on media and creative companies that spill over from neighbouring Burbank, and on a dense mix of retail and service businesses, many of them family run. Plenty of them serve customers in English, Armenian and Spanish, sometimes in the same hour. That shapes what useful AI looks like here: it has to be patient on the phone, careful with appointments and able to switch language without making a fuss about it.",
  angle:
    "Clinics, media and creative teams and family-run service businesses, often serving customers in more than one language.",
  sections: [
    {
      kind: "prose",
      heading: "Clinics and practices: fewer missed calls, fewer empty slots",
      paragraphs: [
        "Medical, dental, physical therapy and specialist practices in Glendale tend to face two problems at once. Calls are missed when the front desk is busy with patients in the room, and appointments are lost when patients forget or cannot reach anyone to reschedule.",
        "An AI receptionist answers the calls the team cannot get to, books and moves appointments in your scheduling system and takes structured messages for anything else. A voice agent then calls patients a day or two before their visit, confirms, offers to reschedule on the spot and updates the calendar, so a cancelled slot can be offered to someone else instead of sitting empty.",
        "Both are designed to stay well away from clinical territory. They handle logistics, and pass anything about symptoms, results or treatment to your staff.",
      ],
    },
    {
      kind: "split",
      heading: "Serving customers in more than one language",
      paragraphs: [
        "Glendale is widely known for its large Armenian-American community, alongside many Spanish-speaking and other households. For a small business, that often means the one bilingual staff member becomes the bottleneck for every call in that language.",
        "AI voice and chat systems can greet callers and answer common questions in the languages you choose, then pass the conversation to the right person with a summary in English. Before anything goes live, each language is tested with the real phrases and names your customers use, and you hear the results yourself.",
      ],
      asideHeading: "Ground rules for multilingual AI",
      aside: [
        "Only the languages you approve are switched on.",
        "Names, addresses and medication names are confirmed back to the caller.",
        "Any caller can ask for a person at any time.",
      ],
    },
    {
      kind: "points",
      heading: "Media teams and growing service businesses",
      points: [
        {
          title: "Enquiries from everywhere",
          text: "Creative studios, agencies and service businesses get enquiries by email, Instagram DMs, web forms and phone. AI triage reads them all, sorts them by type and urgency and puts each one in front of the right person with a short summary.",
        },
        {
          title: "The person who knows everything",
          text: "In a growing team, one long-serving person tends to hold all the answers. An internal assistant trained on your own documents takes the repeat questions off them, with links to the source.",
        },
      ],
    },
  ],
  serviceOrder: [
    "ai-receptionist",
    "custom-voice-agents",
    "ai-lead-qualification",
    "ai-agents",
    "ai-customer-support",
    "ai-follow-ups",
    "ai-accounting",
    "custom-crm-and-workflows",
  ],
  serviceNotes: {
    "ai-receptionist":
      "Overflow and after-hours calls for clinics and service businesses, in the languages you choose.",
    "custom-voice-agents":
      "Appointment confirmation calls that let patients reschedule on the spot.",
    "ai-lead-qualification":
      "Triage for enquiries that arrive by email, DMs, forms and phone at once.",
    "ai-agents":
      "Internal assistants for growing teams that rely on one person's memory.",
  },
  useCases: [
    {
      slug: "missed-calls-at-the-front-desk",
      note: "The most common starting point for Glendale clinics and practices with a single busy front desk.",
    },
    {
      slug: "appointment-confirmation-calls",
      note: "For practices where a text reminder is easy to ignore and a short confirmation call in the patient's language works better.",
    },
    {
      slug: "inbound-lead-triage",
      note: "For media teams, agencies and service businesses fielding enquiries on several channels at once.",
    },
    {
      slug: "internal-knowledge-assistant",
      note: "For family businesses and growing teams where one person has become the walking manual.",
    },
  ],
  faqs: [
    {
      question: "Can the AI receptionist speak Armenian?",
      answer:
        "Current AI voice systems support many languages, and Armenian is improving but is not yet as strong as English or Spanish. We test it with your own phrases during setup and only switch it on if it is clear and accurate. If not, the AI greets callers, offers English or Spanish and takes a message for your bilingual staff.",
    },
    {
      question: "Will confirmation calls annoy our patients?",
      answer:
        "They are short, polite and sent at the times you choose, usually once per appointment. Patients can confirm, reschedule or ask not to be called again, and the call identifies itself as an AI assistant for your practice.",
    },
    {
      question: "We are a family business with no IT person. Who looks after the system?",
      answer:
        "I set it up, monitor it and adjust it after launch. You get plain language summaries of what it is doing, and changes are made for you. Nobody on your team needs technical skills.",
    },
  ],
  neighbours: ["burbank", "pasadena", "los-angeles"],
  ctaTitle: "Make your Glendale front desk easier to reach",
};
