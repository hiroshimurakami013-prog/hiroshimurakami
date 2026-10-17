import type { UseCaseDetail } from "../use-cases.ts";

// Long-form copy for the AI Receptionist use cases. Illustrative scenarios,
// no client names and no numbers.

export const AI_RECEPTIONIST_DETAILS: Record<string, UseCaseDetail> = {
  "missed-calls-at-the-front-desk": {
    seoTitle: "AI Receptionist for Missed Calls | Hiroshi Murakami",
    seoDescription:
      "Front desk at lunch, out sick or on another line? See how an AI receptionist answers the calls your team cannot, books appointments and passes on details.",
    lead: "A good receptionist is worth a lot, and they are still one person. This scenario shows how an AI receptionist covers the moments a person cannot, without replacing the people your patients or customers know.",
    problem: [
      "Think of a dental or physiotherapy practice with one receptionist and a busy waiting room. Between 12 and 1 the receptionist takes lunch. At 9 in the morning, two patients are checking in while the phone rings for the third time. On a Tuesday in flu season, the receptionist is off sick and the practice manager is covering between their own tasks.",
      "Each of those moments sends callers to voicemail. Some leave a message, which then waits for a call back that may come too late. Many simply hang up and try the next practice on the search results. The business never sees those lost calls, only a quieter diary.",
      "Hiring a second receptionist to cover the gaps is expensive. Wages and payroll costs for front desk staff have risen, good candidates are hard to find, and a second full-time person is still idle for much of the day.",
    ],
    usualTools: [
      "A human receptionist is a person. They take breaks, eat lunch, get sick, go on holiday and can only hold one conversation at a time. That is not a criticism, it is simply how people work, and it means some calls will always be missed.",
      "Voicemail captures a message but does not help the caller. Answering services staffed by people can cover overflow, but they usually take a message rather than book, they rarely know your services in detail, and the cost grows with every minute. Hunt groups that ring several desk phones just pull clinicians and managers away from what they are doing.",
    ],
    steps: [
      {
        title: "Calls overflow to the AI",
        text: "Your phone system rings the front desk first. If nobody picks up within a few rings, or the line is busy, the call forwards to the AI receptionist. You choose the timing.",
      },
      {
        title: "The caller gets a real answer",
        text: "The AI introduces itself as the practice's AI assistant and handles the common requests: opening hours, directions and parking, what a treatment involves, and whether you accept a type of insurance, using only the answers you approved.",
      },
      {
        title: "Appointments are booked or moved",
        text: "Where your booking system allows it, the AI checks availability and books, reschedules or cancels during the call, following your rules about appointment types and lengths.",
      },
      {
        title: "Urgent calls reach a person",
        text: "Anything urgent, clinical or sensitive is transferred to a person, or flagged for an immediate call back, using the rules you set.",
      },
      {
        title: "Your team gets a summary",
        text: "Every call ends with a short written summary sent to the front desk: who called, what they wanted and what was done, so nothing relies on a voicemail.",
      },
    ],
    outcomes: [
      "Callers reach someone helpful even when the front desk is at lunch, off sick or already on a call.",
      "Your receptionist can give full attention to the person standing in front of them.",
      "Bookings that would have gone to voicemail land in the diary instead.",
      "Every call leaves a written trail, so follow-ups are not lost.",
      "Your team stays, and does more of the work that needs a person.",
    ],
    requirements: [
      "Call forwarding on your business line, set to ring the AI when the desk does not answer",
      "Your services, hours, approved answers and booking rules",
      "Access to your booking system, if you want the AI to book",
      "Which calls must always go to a person, and how to reach them",
    ],
    humanInTheLoop:
      "Your receptionist stays the first point of contact. The AI covers only the calls they cannot take, always says it is an AI assistant, and hands over anything urgent or sensitive. You can read every summary and change the script whenever you like.",
    privacy:
      "Callers are told when a call is recorded or transcribed. Health details are kept out of summaries unless needed for the booking, recordings are kept only as long as you choose, access is limited to your team, and nothing is used to train public AI models.",
  },

  "after-hours-calls": {
    seoTitle: "AI Answering for After-Hours Calls | Hiroshi Murakami",
    seoDescription:
      "Evening and weekend callers get a helpful answer and a booking or message from an AI receptionist, not a voicemail that sends them to a competitor.",
    lead: "Many customers only have time to call after work or at the weekend, exactly when nobody is there to answer. This scenario shows how an AI receptionist turns those calls into bookings and clear messages.",
    problem: [
      "Picture a plumbing or HVAC company, a family law office or an auto repair shop. The owner finishes the day, the office closes at 5, and the phone keeps ringing. A homeowner with a leaking water heater calls at 8 in the evening. Someone who has been putting off a legal question finally calls on a Saturday morning. A driver calls on Sunday to ask whether they can drop a car off first thing Monday.",
      "Each of them hears a recording. Some leave a message, many do not. The next business on the list may have someone, or something, that answers. By Monday morning, the caller has often booked elsewhere, and the voicemails that did arrive take the first hour of the day to work through.",
      "Covering evenings and weekends with staff means paying for overtime or extra shifts, and asking owners to answer their own phones at night is a quick route to burnout.",
    ],
    usualTools: [
      "Voicemail is free and familiar, but it puts all the effort on the caller and offers them nothing in return. A forwarding rule to the owner's mobile just moves the problem into family time.",
      "Overnight answering services staffed by people can take messages, and for some businesses that is enough. Most cannot quote, book or tell a real emergency from a routine request, and they bill for every call, so volume spikes become expensive.",
    ],
    steps: [
      {
        title: "Out-of-hours calls go to the AI",
        text: "Your phone system routes calls outside your opening hours to the AI receptionist, and you decide whether it also covers lunch or public holidays.",
      },
      {
        title: "It works out what the caller needs",
        text: "The AI asks a few natural questions to understand the request: what the problem is, where they are, how urgent it feels and how they would like to be contacted.",
      },
      {
        title: "Routine requests are handled",
        text: "Common questions are answered, and appointments or estimates are booked into the next available slot where your calendar allows it.",
      },
      {
        title: "Real emergencies are escalated",
        text: "If a call matches your emergency rules, such as an active leak or a no-heat call in winter, the AI passes it to the person on call by text or a warm transfer.",
      },
      {
        title: "The morning starts with a clear list",
        text: "Your team arrives to a short list of summaries, sorted by urgency, with bookings already in the diary and call backs ready to make.",
      },
    ],
    outcomes: [
      "Evening and weekend callers get help straight away instead of a recording.",
      "Fewer callers move on to the next business while they wait for a call back.",
      "Genuine emergencies reach the on-call person, and routine requests wait politely for the morning.",
      "Owners stop answering the business phone at the dinner table.",
    ],
    requirements: [
      "Your business number, opening hours and how calls are routed after hours",
      "What counts as an emergency for you, and who is on call",
      "Your calendar or booking tool, if the AI should book",
      "The answers you are happy to give out of hours, such as call-out policies",
    ],
    humanInTheLoop:
      "Out-of-hours rules are yours. The AI only books the kinds of appointment you allow, says plainly that it is an AI assistant, and sends anything urgent to a person. Your team reviews the summaries each morning and can change the playbook at any time.",
    privacy:
      "Callers are told if calls are recorded. Addresses and contact details are shared only with your team, kept for as long as you need them, and never used to train public AI models.",
  },

  "appointment-booking-and-rescheduling": {
    seoTitle: "AI Appointment Booking by Phone | Hiroshi Murakami",
    seoDescription:
      "An AI receptionist books, moves and cancels appointments by phone in one call, straight into your calendar, so the front desk can look after customers.",
    lead: "Booking and rescheduling by phone sounds simple, until it fills half the front desk's day. This scenario shows how an AI receptionist handles those calls end to end, inside your existing booking rules.",
    problem: [
      "Imagine a busy salon, a med spa or a physiotherapy clinic. A large share of the calls are not new questions, they are diary changes: \"Can I move Thursday to next week?\", \"Do you have anything earlier with the same stylist?\", \"I need to cancel, can I rebook?\" Each one needs the receptionist to open the calendar, juggle options, and often call back when the first option does not work.",
      "Meanwhile the client at the desk waits to pay, the phone rings again and someone in the waiting room wonders why nobody has said hello. Mistakes creep in when people book under pressure, such as the wrong service length, the wrong practitioner or a double booking.",
      "Online booking helps some clients, but many still prefer to call, especially for complicated changes, and they expect the business to pick up.",
    ],
    usualTools: [
      "Online booking widgets are excellent for simple, new bookings by people who like booking online. They are less helpful for changes that involve a conversation, for clients who prefer the phone, and for services with rules such as a consultation before a treatment.",
      "The front desk itself can do all of this, of course, but only one call at a time and only while not looking after the people in the room. Adding more staff to cover the phone adds cost without solving the peaks.",
    ],
    steps: [
      {
        title: "Your booking rules are written down",
        text: "Service lengths, buffers, which practitioner does what, deposit and cancellation policies, and services that need a consultation first become the AI's playbook.",
      },
      {
        title: "The AI connects to your calendar",
        text: "It reads live availability from your booking system where it allows connections, so it never offers a slot that is already taken.",
      },
      {
        title: "Callers book or change in one call",
        text: "The AI finds the existing appointment, offers suitable alternatives, confirms the change aloud and sends a confirmation by text or email.",
      },
      {
        title: "Edge cases go to a person",
        text: "Requests outside the rules, such as squeezing in an extra appointment or waiving a fee, are passed to the front desk with the details collected.",
      },
      {
        title: "The diary stays tidy",
        text: "Cancelled slots open up immediately, and if you keep a waiting list the AI can offer the freed slot to the next person.",
      },
    ],
    outcomes: [
      "Booking and rescheduling calls are handled without pulling the receptionist away from the desk.",
      "Changes follow your rules every time, so fewer bookings have the wrong length or practitioner.",
      "Cancelled slots are visible straight away and can be filled.",
      "Clients who prefer the phone get the same convenience as those who book online.",
    ],
    requirements: [
      "A booking system or calendar that allows connections",
      "Your services, durations, practitioners and booking policies",
      "How you want confirmations sent, and from which number or address",
      "The requests that should always be handled by the front desk",
    ],
    humanInTheLoop:
      "The AI books only within the rules you approve and introduces itself as an AI assistant. Exceptions, complaints and anything involving money beyond your standard policy go to a person. Your team can see every change in the calendar and in the call summaries.",
    privacy:
      "Only the details needed for the booking are collected and stored in your own booking system. Recordings, if enabled, are announced to callers, kept as long as you choose and never used to train public AI models.",
  },
};
