import type { UseCaseDetail } from "../use-cases.ts";

// Long-form copy for the Custom Voice Agents use cases. Illustrative
// scenarios, no client names and no numbers.

export const CUSTOM_VOICE_AGENTS_DETAILS: Record<string, UseCaseDetail> = {
  "appointment-confirmation-calls": {
    seoTitle: "AI Appointment Confirmation Calls | Hiroshi Murakami",
    seoDescription:
      "A voice agent calls customers the day before to confirm, reschedule or cancel, so empty slots can be filled. An illustrative AI scenario.",
    lead: "Reminder texts are easy to ignore. A short, friendly call that lets the customer confirm or move the appointment there and then is much harder to miss. This scenario shows how a voice agent makes those calls for you.",
    problem: [
      "Think of a clinic, a home services company with booked visits or a professional office with consultations. Every no-show is a slot that could have gone to someone else, a technician driving to an empty house or a professional waiting for a client who forgot.",
      "The business already sends automated reminder texts. They help, but many people glance at them and move on, or mean to reply later and forget. The customers who need to reschedule often do not, because it means calling during working hours and waiting on hold.",
      "Some practices ask the front desk to phone everyone the day before. It works, but it takes hours, it happens while the desk is busy with everything else, and it is the first job dropped on a hectic day.",
    ],
    usualTools: [
      "Text and email reminders are cheap and worth keeping. Their weakness is that they are one way: the customer has to act, and changing an appointment usually means a separate phone call.",
      "Calling every customer by hand gets the best response, but it costs staff time every single day. Basic automated dialers that play a recording and ask the customer to press 1 can feel robotic, and they cannot handle \"actually, could we make it the afternoon?\"",
    ],
    steps: [
      {
        title: "Tomorrow's appointments are pulled each day",
        text: "At a time you choose, the voice agent reads the next day's appointments from your calendar or booking system.",
      },
      {
        title: "Each customer gets a short call",
        text: "The agent introduces itself as the business's AI assistant, confirms the date, time and place, and mentions anything the customer should bring or prepare.",
      },
      {
        title: "Changes are made in the same call",
        text: "If the customer needs to move, the agent offers open slots and rebooks on the spot. If they cancel, the slot is released straight away.",
      },
      {
        title: "No answer means a polite fallback",
        text: "If nobody picks up, the agent leaves a brief message and sends a text with a link or number to confirm, following the retry rules you set.",
      },
      {
        title: "The team sees the results",
        text: "Confirmed, moved, cancelled and unreachable appointments are marked in your system, so the front desk can fill gaps or call the few that need a person.",
      },
    ],
    outcomes: [
      "Customers get a personal reminder they can respond to without hunting for a phone number.",
      "Cancellations surface the day before, while there is still time to offer the slot to someone else.",
      "The front desk no longer spends its afternoons making reminder calls.",
      "Technicians and practitioners arrive to appointments that have actually been confirmed.",
    ],
    requirements: [
      "A calendar or booking system the agent can read and update",
      "The wording you want for confirmations, plus any preparation instructions",
      "Your rules for rescheduling, cancellations and retries",
      "Consent from customers to receive calls, which most booking flows already collect",
    ],
    humanInTheLoop:
      "The agent only confirms, moves or cancels within your rules. Customers who want to discuss something else, are upset or ask for a person are passed to your team with a note. You can listen to calls and adjust the script at any time.",
    privacy:
      "Calls are made only to customers with an existing appointment and a reason to expect contact. The agent announces recording where used, does not discuss sensitive details beyond the booking, and data is not used to train public AI models.",
  },

  "pricing-and-faq-calls": {
    seoTitle: "AI Voice Agent for Pricing and FAQ Calls | Hiroshi Murakami",
    seoDescription:
      "A voice agent answers repeat questions about prices, service areas and availability with your approved wording, and passes genuine enquiries to your team.",
    lead: "Every interruption to answer \"how much do you charge?\" or \"do you cover my area?\" costs focus, and the answers are almost always the same. This scenario shows a voice agent taking those calls with your approved wording.",
    problem: [
      "Picture a moving company, a cleaning business, an equipment rental yard or a repair shop. The phone rings all day with the same few questions: rough prices, which neighborhoods you serve, whether you are open on Saturdays, how far ahead people need to book and whether you handle a particular job.",
      "Whoever is nearest picks up, often the owner, an estimator or a technician in the middle of something else. The answers are quick, but the interruptions are not: it takes time to get back into a quote, a repair or a spreadsheet. On busy days, calls go unanswered and some of them were real customers ready to book.",
      "Hiring a person just to answer the phone is hard to justify when most calls are short and repetitive, and staff costs keep climbing.",
    ],
    usualTools: [
      "A detailed website and a FAQ page help, but plenty of people would rather call than read, and many of the questions depend on details such as size, distance or date.",
      "Phone menus that ask callers to press 1 for prices and 2 for hours tend to frustrate people and rarely answer the actual question. A general AI receptionist may also be more than you need when the job is mainly to answer a specific set of questions well and route the rest.",
    ],
    steps: [
      {
        title: "Your answers are gathered",
        text: "Price ranges you are happy to quote, what affects the price, service areas, hours, lead times and the jobs you do not take are written into an approved script.",
      },
      {
        title: "The agent takes the calls you choose",
        text: "It can answer all calls, only overflow calls or a dedicated line on your website. It introduces itself as an AI assistant and asks what the caller needs.",
      },
      {
        title: "Questions get specific answers",
        text: "Instead of a generic speech, the agent asks the one or two details that matter, such as the size of the move or the ZIP code, and gives the matching range or answer.",
      },
      {
        title: "Real enquiries are captured",
        text: "When the caller wants a quote or a booking, the agent collects the details your team needs and sends them as a tidy summary, or transfers the call if you prefer.",
      },
      {
        title: "Answers are kept current",
        text: "When prices or policies change, you update the script once and every call uses the new wording from then on.",
      },
    ],
    outcomes: [
      "Your team is interrupted far less by questions with standard answers.",
      "Callers get a clear, consistent answer instead of whatever the busiest person remembers.",
      "Serious enquiries arrive with the details already collected, so the follow-up call is shorter.",
      "Out-of-area and out-of-scope calls are handled politely without anyone stopping work.",
    ],
    requirements: [
      "The questions you get most often and the answers you are happy to give",
      "Price ranges and the factors that change them, or a clear rule never to quote",
      "Which line the agent should answer, and when",
      "Where enquiries should go: email, text or your CRM",
    ],
    humanInTheLoop:
      "The agent sticks to the answers you approve and says when it does not know. It never commits to a firm price unless you allow it, and anything unusual is passed to a person. You can review call summaries at any time.",
    privacy:
      "Callers are told if calls are recorded. Only enquiry details are kept, stored with access limited to your team, and not used to train public AI models.",
  },

  "instant-callback-for-web-leads": {
    seoTitle: "AI Instant Callback for Web Leads | Hiroshi Murakami",
    seoDescription:
      "A voice agent calls new web leads back moments after they submit your form, answers first questions and books a call while their interest is fresh.",
    lead: "Speed matters most in the first minutes after someone fills in your form. In this scenario, a voice agent calls the lead straight back, answers first questions and books a time with your team.",
    problem: [
      "Imagine a solar installer, a home renovation firm or a private school. Leads arrive from the website and from ads at all hours. The sales team calls back when they can: sometimes within the hour, often the next day, occasionally not at all because the lead got lost in an inbox.",
      "By then the person has filled in two other forms, spoken to a competitor or simply moved on with their day. The call back lands in voicemail, and the lead that cost money to attract goes cold.",
      "Paid advertising has become more expensive for many small businesses, so every lead that is never reached is a bigger waste than it used to be. Yet keeping a salesperson waiting by the phone for forms to arrive is not a good use of anyone's time.",
    ],
    usualTools: [
      "Automatic confirmation emails tell the lead their form was received, and they are worth having, but they do not start a conversation. Round-robin assignment in a CRM routes the lead to someone, who still has to be free to call.",
      "Scheduling links let leads book a time, and some will. Many will not, especially on mobile, and those who do may book days away when they were ready to talk now.",
    ],
    steps: [
      {
        title: "The form triggers a call",
        text: "When a new lead arrives from your website or ad platform, the voice agent calls the number given, usually within moments, inside the calling hours you allow.",
      },
      {
        title: "A friendly, short conversation",
        text: "The agent introduces itself as your AI assistant, thanks the lead for the enquiry and confirms what they asked about.",
      },
      {
        title: "First questions are answered",
        text: "Using your approved information, the agent answers common early questions and asks a few qualifying ones, such as timing, location or the type of project.",
      },
      {
        title: "A time is booked with your team",
        text: "If the lead is a fit, the agent books a call or visit straight into a salesperson's calendar and sends a confirmation.",
      },
      {
        title: "Everything lands in the CRM",
        text: "The lead record is updated with a summary, the answers given and the booking, so the salesperson starts the conversation already informed.",
      },
    ],
    outcomes: [
      "Leads hear from you while their interest is still fresh, not the next day.",
      "Your salespeople spend time on booked, briefed conversations instead of chasing voicemails.",
      "Leads that arrive at night or at the weekend get the same quick response as those during office hours.",
      "Every lead has a recorded outcome, so none are silently lost.",
    ],
    requirements: [
      "Your web forms and ad lead sources, connected by webhook or your CRM",
      "Calling hours and consent wording that suit your market",
      "The questions to ask and the answers you approve",
      "Calendars for the people who take the booked calls",
    ],
    humanInTheLoop:
      "The agent never closes a sale or makes promises outside your script. Leads who want a person straight away can be transferred, and your sales team sees every summary before they call. You decide the calling hours and how many attempts are made.",
    privacy:
      "Calls are made only to people who submitted a form and agreed to be contacted, within the hours and consent rules you set. Lead data stays in your CRM, access is limited to your team, and nothing is used to train public AI models.",
  },
};
