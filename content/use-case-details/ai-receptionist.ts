import type { UseCaseDetail } from "../use-cases.ts";

// Long-form copy for the AI Receptionist use cases. Illustrative scenarios,
// no client names and no results. Worked examples use assumed figures that
// the page labels as assumptions.

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

  "ai-receptionist-for-accounting-firms": {
    seoTitle: "AI Receptionist for Accounting Firms | Hiroshi Murakami",
    seoDescription:
      "An AI receptionist for CPA and bookkeeping firms: tax season calls answered, documents and appointments handled, and no tax advice from the AI.",
    lead: "An AI receptionist for an accounting firm answers the calls your team cannot take, especially in tax season, handles routine requests such as appointment booking, document drop-off and \"did you receive my forms?\", and passes everything else to the right accountant with a written summary. It does not give tax advice: anything that needs professional judgement goes to a person.",
    problem: [
      "Picture a CPA or bookkeeping firm with eight people. For most of the year the phone is manageable. Then tax season arrives, and the same few people who prepare returns are also expected to answer a phone that rings all day. Clients ask whether their documents arrived, when their return will be ready, where to drop off paperwork and whether they can book a meeting. New callers ask whether the firm is taking clients.",
      "Every one of those calls interrupts focused work, and many go to voicemail because the accountant is with a client. Voicemails pile up, clients call again, and the firm's busiest weeks become its most stressful. Hiring seasonal front desk help is possible, but training someone for a few months each year is hard, and good temporary staff are not easy to find.",
      "Accounting firms also face a particular risk: a well meaning receptionist, human or not, who says something that sounds like tax advice.",
    ],
    usualTools: [
      "Voicemail and a busy signal are the default, and they push clients to email, which adds to the inbox instead. A general answering service takes messages but cannot check whether a client's documents arrived or book into the firm's calendar.",
      "Client portals help with document exchange, and they are worth promoting, but many clients still pick up the phone, especially older clients and small business owners in a hurry.",
    ],
    steps: [
      {
        title: "Agree what the AI may say",
        text: "Together we write the approved answers: office hours, document drop-off and portal instructions, booking rules, fees you are happy to quote and the firm's published deadlines. Everything else is a message for a person.",
      },
      {
        title: "Draw a hard line at advice",
        text: "The receptionist is instructed never to answer questions about deductions, filing positions, notices or amounts owed. It says plainly that an accountant will call back, and takes a summary.",
      },
      {
        title: "Connect the calendar and, where possible, the portal",
        text: "It books meetings into the right accountant's calendar. If your practice software allows a safe connection, it can also confirm whether a client's documents have arrived, after checking who is calling.",
      },
      {
        title: "Route by client and urgency",
        text: "Calls from existing clients go to their accountant's queue with a summary, new client enquiries go to whoever takes them on, and anything urgent, such as a notice with a deadline, is flagged at once.",
      },
      {
        title: "Review in the first weeks",
        text: "The firm reads call summaries in the first weeks and adjusts the approved answers before the busiest part of the season.",
      },
    ],
    outcomes: [
      "Fewer interruptions for the people preparing returns.",
      "Clients get a helpful answer or a booked meeting instead of voicemail.",
      "Messages arrive as written summaries in one place, not as voicemails to transcribe.",
      "New client enquiries are captured during the season instead of lost.",
      "The firm controls exactly what is said on its behalf.",
    ],
    requirements: [
      "Your business number, with call forwarding to the AI when you choose",
      "Approved answers and the questions that must always go to a person",
      "Access to the accountants' calendars for booking",
      "Optional: a connection to your practice or portal software",
    ],
    humanInTheLoop:
      "The receptionist introduces itself as an AI assistant and never gives tax or accounting advice. Any question about a return, a notice, an amount or a filing position becomes a message for an accountant. Callers can always ask for a person.",
    privacy:
      "The AI confirms who is calling before discussing any client matter, keeps tax details out of call summaries unless needed, announces any recording and keeps it only as long as you choose. Call data is not used to train public AI models.",
    example: {
      title: "A worked example: an 8 person CPA firm in tax season",
      intro:
        "Assumed figures to show the arithmetic, not a client result.",
      assumptions: [
        { label: "Calls", value: "About 40 calls a working day at the peak of the season" },
        { label: "Routine share", value: "Assume about half are routine: documents, status, drop-off and booking" },
        { label: "Time per routine call", value: "About 4 minutes, including getting back into the work" },
        { label: "Cost of that time", value: "An assumed $60 an hour for preparer time" },
        { label: "Running cost", value: "An assumed $250 a month for the receptionist and call minutes, a placeholder rather than a quote" },
      ],
      steps: [
        "The AI answers overflow and after-hours calls, and routine calls when the team chooses.",
        "Routine calls are resolved or booked; the rest arrive as summaries in each accountant's queue.",
        "The team returns calls in planned blocks instead of between returns.",
      ],
      result:
        "If 20 routine calls a day no longer interrupt preparers, that is about 80 minutes a day, or roughly 27 hours over a 20 day month, worth about $1,600 at the assumed rate, or about $1,350 after the assumed running cost. The quieter benefit is fewer clients reaching voicemail.",
    },
    faqs: [
      {
        question: "Will the AI receptionist give tax advice?",
        answer:
          "No. It is instructed never to answer questions about deductions, filing positions, notices or amounts owed. Those become a message for an accountant, with a summary of what the caller asked.",
      },
      {
        question: "Can it tell clients whether we received their documents?",
        answer:
          "Only if your practice or portal software allows a safe connection, and only after confirming who is calling. Otherwise it takes the question and passes it on.",
      },
      {
        question: "Can we use it only during tax season?",
        answer:
          "Yes. Call forwarding can be switched on and off, so the firm can use it for the busy months, after hours, or all year.",
      },
      {
        question: "Do callers know they are talking to AI?",
        answer:
          "Yes. It introduces itself as an AI assistant for the firm, and anyone who prefers a person can leave a message or be transferred.",
      },
    ],
  },

  "ai-receptionist-buyer-checklist": {
    seoTitle: "How to Choose an AI Receptionist | Hiroshi Murakami",
    seoDescription:
      "A buyer checklist for an AI receptionist: handover, disclosure, calendar access, call data, a test on 20 past calls and the numbers to track.",
    lead: "An AI receptionist is a phone assistant that answers your business line, handles approved questions, books or takes a message, and hands the call to a person when it should. The one question that matters when you choose one is: what happens when it is wrong? The checklist below helps a small business owner in Los Angeles, or anywhere else, turn that question into things to ask, test and measure before real callers depend on it.",
    keyFacts: [
      "The most important question when choosing an AI receptionist is what happens when it is wrong.",
      "An AI receptionist should say when it does not know an answer, rather than guess a price or make a promise.",
      "Callers should be told that they are speaking to an AI assistant.",
      "Testing an AI receptionist on 20 real past calls shows how it handles a business's own callers before it goes live.",
    ],
    stepsHeading: "The buyer checklist, step by step",
    problem: [
      "Picture the owner of a small repair company in Los Angeles who wants help with the phone. They listen to three sample calls from three providers. In each one a polite caller asks a clear question, the assistant books a visit and everyone sounds pleased. The owner cannot tell the options apart, so they choose by voice and monthly price.",
      "Real callers are less tidy. They call from a car with the window open, ask two things at once, change their mind about the day, want a price for a job nobody has seen, or ask for a technician by first name. What separates one assistant from another is what it does in those moments.",
      "A wrong answer on the phone is also easy to miss. The caller hears a confident voice, believes it and hangs up. The business finds out when a customer arrives for a visit that was never booked, or expects a price nobody agreed to.",
    ],
    usualTools: [
      "A sample call shows the assistant at its best, on a script chosen by the seller. A feature list says that it books appointments, but not whether it writes to your calendar or only sends a request, or what it does when the calendar cannot be reached.",
      "Calling the demo line yourself is better, yet you know how to be an easy caller. Recommendations help with support and setup, but another company's callers ask different things. And a count of calls answered says nothing about whether the answers were right.",
    ],
    steps: [
      {
        title: "List what it should do on a call",
        text: "Write down the five jobs: answer, reply to common questions, book, take a message and hand over to a person. For each one, note what is allowed, what is not, and what a good result looks like for your business. Ask to see each job on a call rather than on a slide.",
      },
      {
        title: "Follow one call through the handover",
        text: "Ask which words or situations trigger a transfer, whether the caller can simply ask for a person, and what happens if nobody picks up. Then look at what the person receives: the caller's name and number, the reason, what was already said and anything promised. A transfer without context makes the caller start again.",
      },
      {
        title: "Settle disclosure and recording",
        text: "Callers should be told they are speaking to an AI assistant. Listen to the exact opening words, and ask whether calls are recorded or transcribed, how callers are told, and whether recording can be switched off. Recording and consent rules vary by state, and your callers may not be in yours, so check with a lawyer. This page is not legal advice.",
      },
      {
        title: "Ask it something it cannot know",
        text: "Ask for a price you never approved, a guarantee, a discount or an opinion on a complaint. The right behaviour is to say it does not know, take a message and say who will follow up. It should never guess a price or make a promise, however often the caller asks.",
      },
      {
        title: "Separate reading from writing",
        text: "For the calendar and the CRM, ask what the assistant can read, what it can create, and what it can change or delete. Reading free times is a smaller risk than moving existing appointments. Start with the least access that works, and ask what the caller hears if the connection is down.",
      },
      {
        title: "Check what changes after hours",
        text: "Find out whether evenings, weekends and holidays can have their own rules: what may be booked, what counts as urgent, who is contacted and what the caller is told when nobody is available. Call at 9 at night yourself and see whether the promised alert arrives.",
      },
      {
        title: "Test it with 20 real past calls",
        text: "Choose 20 past calls from your notes or messages, including awkward ones, and write down the right outcome for each before you start. Replay them by phone with different people as callers and names changed. Mark each result as right, safe but unhelpful, or wrong.",
      },
      {
        title: "Put call data and the exit in writing",
        text: "Ask who owns the recordings, transcripts and caller details, where they are stored, which outside companies process them, whether they train AI models, how long they are kept and how you export and delete them if you leave. Confirm that your phone number stays under your control.",
      },
      {
        title: "Review a week, then measure four things",
        text: "After a limited launch, read a full week of transcripts. Track calls answered, calls booked, calls handed over and wrong answers. The first three are usually easy to count. Wrong answers are much harder to spot unless somebody reads, so decide who does it and how often.",
      },
    ],
    outcomes: [
      "The choice rests on your own callers rather than on a sample call.",
      "You know how the assistant behaves when it does not know the answer.",
      "Handover, disclosure and data questions have answers before you sign.",
      "Calendar and CRM access starts small and grows only when it has earned trust.",
      "You have a baseline of answered, booked, handed over and wrong to compare later months with.",
    ],
    requirements: [
      "Notes or messages from 20 past calls, with the right outcome for each",
      "Approved answers, and a list of things the assistant must never say",
      "Who takes handovers, at which hours, and who covers when they cannot",
      "A test calendar, or access limited to reading free times",
      "One person with time to read a week of transcripts",
      "A lawyer's view on recording and consent for the calls you receive",
    ],
    humanInTheLoop:
      "A person who knows your callers judges the test, not the assistant's own report. At launch, let it cover limited hours or overflow, have every booking checked, and read every transcript for the first week. Widen what it may do one job at a time, and go back a step if wrong answers appear.",
    privacy:
      "Use past calls with care: replace names and numbers, leave out health, payment and legal details, and check that you are allowed to use a recording before sharing it with a provider. Ask for test data to be deleted afterwards. Once live, limit who can open transcripts and keep them only for as long as you have a reason to.",
    example: {
      title: "A worked example: 20 past calls, then one week",
      intro:
        "The figures below are assumptions chosen to show how to read a test. They are not a client result or a measurement of any product.",
      assumptions: [
        { label: "Calls replayed", value: "20: 8 questions, 6 bookings or changes, 4 that need a person and 2 with no approved answer" },
        { label: "First test", value: "15 right, 3 safe but unhelpful and 2 wrong" },
        { label: "Limited launch", value: "One week of overflow calls, 90 in total" },
        { label: "Calls in that week", value: "84 answered and 6 ended before the caller spoke" },
        { label: "Outcome of the 84", value: "26 booked, 14 handed over and 44 given an answer or a message taken" },
        { label: "Found by reading transcripts", value: "3 wrong answers among the 84" },
      ],
      steps: [
        "Look at the 2 wrong results first: one quoted a price that was never approved, and one booked a visit of the wrong length.",
        "Fix both causes: prices become a message for a person, and visit lengths are written into the booking rules.",
        "Replay all 20 calls, not only the 2, because a fix can change other answers. In this example none is wrong the second time, so the limited launch begins.",
        "Read the week of transcripts, sort the 3 wrong answers by cause, and correct the approved answers before adding hours.",
      ],
      result:
        "The first test was wrong on 2 of 20 calls, or 10%, which is a reason to wait. The launch week was wrong on 3 of 84, about 3.6%. Whether that is acceptable depends on the mistakes: three outdated holiday hours are quick to fix, while one invented price is a reason to stop and narrow what it may say. With numbers this small, look at the causes before the percentages.",
    },
    faqs: [
      {
        question: "What should I ask before buying an AI receptionist?",
        answer:
          "Start with what happens when it is wrong or does not know. Then ask how it hands over to a person and with what context, what callers are told, what it can read and change in your calendar and CRM, who owns the call data, and whether you can test it on your own past calls.",
      },
      {
        question: "Should callers be told they are speaking to AI?",
        answer:
          "Yes, in the opening words of the call. Recording and consent rules are a further question and vary by state, so check with a lawyer before you record or transcribe calls. This is not legal advice.",
      },
      {
        question: "Why test with 20 past calls?",
        answer:
          "Twenty is a practical starting number: enough to include routine and awkward calls, and small enough to replay by hand. It is not statistical proof, which is why a limited launch and a week of transcripts come next.",
      },
      {
        question: "Should an AI receptionist have write access to my calendar?",
        answer:
          "Not on the first day. Let it read free times and send booking requests while you test. Allow it to create appointments once its requests are right, and to move or cancel them only if you need that and can see every change.",
      },
      {
        question: "Which numbers show whether it is working?",
        answer:
          "Calls answered, calls booked, calls handed over and wrong answers, looked at together. A high booking count with wrong visit lengths is not a success, and a low handover count may mean that callers who needed a person did not reach one.",
      },
      {
        question: "Do the same questions apply to a receptionist you set up?",
        answer:
          "Yes. I set up AI receptionists, so I have an interest in the answer: put every question on this page to me as well. The free AI audit can also conclude that you do not need one.",
      },
    ],
  },

  "ai-receptionist-vs-answering-service-vs-voicemail": {
    seoTitle: "AI Receptionist vs Answering Service | Hiroshi Murakami",
    seoDescription:
      "Voicemail, an answering service, an in-house person or an AI receptionist: a fair comparison for small businesses, and when AI is a poor fit.",
    lead: "Voicemail fits a small business with few calls that can wait, an answering service fits callers who need a live person, an in-house person fits calls that need judgement or a familiar voice, and an AI receptionist fits frequent, routine calls that arrive after hours or at the same time. Many businesses do best with a mix. This page compares the four for owners in Los Angeles and elsewhere, as categories rather than named products. I set up AI receptionists, so the cases where AI is a poor fit are listed too.",
    keyFacts: [
      "An AI receptionist for a small business suits frequent, routine calls that arrive after hours or several at a time.",
      "A live answering service suits callers who need a human voice when the business itself cannot pick up.",
      "Voicemail is a reasonable choice when calls are few and a reply the next working day is soon enough.",
      "An AI receptionist is a poor fit as the first voice for callers in distress or calls that need professional judgement.",
    ],
    stepsHeading: "The four options compared, side by side",
    problem: [
      "Picture a small home services company in Los Angeles. The owner is on a job, one person covers the office, and the phone rings in bursts: first thing in the morning, at lunch and just after closing. Some callers want opening hours, some want a visit, and a few have a real problem that cannot wait.",
      "The owner has been told to hire someone, to use an answering service, and to let AI pick up. Each suggestion is right for somebody. What makes the choice hard is that the calls are not all the same kind, and nobody has counted them.",
    ],
    usualTools: [
      "Most comparisons start from a product and work backwards to the problem. They set the best version of one option against the worst version of another, and they compare monthly prices without asking what each call needs.",
      "A fair comparison starts with your own calls: when they arrive, how many overlap, how many are routine, and what it costs you when one goes wrong. The answer can differ between lunchtime, the evening and the weekend.",
    ],
    steps: [
      {
        title: "After-hours coverage",
        text: "Voicemail: always on, but it only records. Answering service: people pick up during the hours you pay for, often including nights. In-house person: working hours, unless you staff more shifts. AI receptionist: can cover evenings and weekends with its own rules, as long as somebody is named for urgent calls.",
      },
      {
        title: "Peak call times",
        text: "Voicemail: takes every overlapping call, though some callers hang up. Answering service: shares a team between clients, so ask about waiting times at busy hours. In-house person: one call at a time, with others on hold. AI receptionist: can take several calls at once, within the limits of its phone setup.",
      },
      {
        title: "Consistency",
        text: "Voicemail: the same greeting each time, and no answers. Answering service: follows your script, with some variation between agents. In-house person: learns the business deeply, but varies with workload and absence. AI receptionist: works from the same approved answers on each call, yet can still mishear or answer wrongly, so transcripts need reading.",
      },
      {
        title: "Personal touch",
        text: "Voicemail: none, apart from your own recorded voice. Answering service: a human who can hear worry or anger, but may not know your customers. In-house person: the strongest, because regular callers are recognised. AI receptionist: polite and patient, but not a relationship, and some callers simply prefer a person.",
      },
      {
        title: "Booking into a calendar",
        text: "Voicemail: no booking, someone calls back. Answering service: varies, from taking a request to booking in a system you share. In-house person: books directly and can judge exceptions. AI receptionist: can book where your calendar has a suitable connection and clear rules, and otherwise takes a request for a person to confirm.",
      },
      {
        title: "Disclosure and call data",
        text: "Voicemail: callers know they are being recorded. Answering service: ask how agents introduce themselves and whether calls are recorded. In-house person: the simplest case, unless you record. AI receptionist: callers should be told at the start that they are speaking to AI, and about any recording. Rules vary by state, so check with a lawyer. This is not legal advice.",
      },
      {
        title: "What drives the cost",
        text: "Voicemail: very little money, plus call-back time and callers who do not leave a message. Answering service: call volume or minutes, hours covered and how much the script asks for. In-house person: wages, training, cover for absence and the other work they do. AI receptionist: setup, call minutes, connections to your tools, and the time to review calls and update answers.",
      },
      {
        title: "Choose voicemail, a service or a person when",
        text: "Choose voicemail if calls are few and can wait, with a greeting that says when you call back. Choose an answering service if callers expect a human out of hours, or if calls are urgent and need a person to listen. Choose an in-house person if most calls need judgement, the caller is often standing in front of you too, or relationships bring in the work.",
      },
      {
        title: "Choose AI with human handover when",
        text: "Choose an AI receptionist if many calls are routine, they overlap or arrive after closing, the answers can be written down, and a person can take what it passes on. AI is a poor fit if callers are often distressed, if calls need clinical, legal or emergency judgement, if answers change daily, if volume is too low to repay the setup, or if nobody will read the transcripts.",
      },
    ],
    outcomes: [
      "The choice follows your own mix of calls rather than a sales pitch.",
      "Each part of the day can have the option that suits it.",
      "Calls that need a person are named before any system is set up.",
      "You compare the whole cost, including review and call-backs, rather than the monthly fee.",
      "A decision not to use AI counts as a useful result.",
    ],
    requirements: [
      "Two ordinary weeks of call times, with missed and overlapping calls marked",
      "A rough sort of calls into routine, booking and needs a person",
      "A list of calls that must reach a human straight away",
      "The calendar you use and who may change it",
      "The name of the person who calls back, reviews and keeps answers up to date",
    ],
    humanInTheLoop:
      "Whichever option answers, a person remains responsible for what callers are told. With AI, that means a clear route to a human, a named person for urgent calls, and transcripts read closely at first and sampled after that. Start with overflow or after-hours calls, so the team keeps the rest.",
    privacy:
      "Each option other than your own staff can put caller details in the hands of an outside company. Ask an answering service and an AI provider the same things: what is recorded, where it is kept, who can open it, how long it stays and how it is deleted. Keep health, payment and legal details out of messages unless they are needed.",
    example: {
      title: "A worked example: sorting one month of calls",
      intro:
        "The figures below are assumptions chosen to show the reasoning. They are not a client result, a price or a measurement of any service.",
      assumptions: [
        { label: "Calls in a month", value: "200" },
        { label: "Answered by the office", value: "130" },
        { label: "Not answered", value: "70: 30 while the line was busy and 40 after closing" },
        { label: "What the 70 were about", value: "35 routine questions, 20 booking requests and 15 that need a person" },
      ],
      steps: [
        "Keep the in-house person for the 130 calls that already go well.",
        "With voicemail, all 70 depend on the caller leaving a message and on someone calling back.",
        "With an answering service, a person can take the 70, and how many are finished on the call depends on the script and calendar access.",
        "With an AI receptionist, the 55 routine and booking calls are candidates, and the other 15 need a handover or a prompt call-back.",
      ],
      result:
        "In this example AI as overflow is worth a test, because 55 of the 70 unanswered calls are routine or bookings, with a person on call for the other 15. If the mix were reversed, with 55 calls needing a person, an answering service or another team member would be the better first step. If only 5 calls were missed, a better voicemail greeting may be enough.",
    },
    faqs: [
      {
        question: "Is an AI receptionist better than an answering service?",
        answer:
          "It depends on the calls. An AI receptionist suits routine questions and bookings, especially when several callers ring at once. An answering service suits callers who need a human to listen. Some businesses use AI first and hand over to a person.",
      },
      {
        question: "What is the best AI receptionist for a small business?",
        answer:
          "There is no single best one. The right choice handles your own past calls correctly, says when it does not know, tells callers it is AI and passes them to a person with context. The buyer checklist on this site shows how to test that.",
      },
      {
        question: "When is voicemail good enough?",
        answer:
          "When calls are few, rarely urgent and come mostly from people who know you. Say in the greeting when you will call back, keep to it, and give urgent callers another route.",
      },
      {
        question: "Can I combine an AI receptionist with people?",
        answer:
          "Yes, and it is often the sensible setup. Your team answers first, AI takes overflow and evenings, and anything sensitive goes to a person or an answering service.",
      },
      {
        question: "When should a business not use an AI receptionist?",
        answer:
          "When callers are often distressed, when calls need emergency, clinical or legal judgement, when the answers cannot be written down, or when nobody has time to review calls. A person should answer those first.",
      },
      {
        question: "Do you set up AI receptionists in Los Angeles?",
        answer:
          "Yes, remote-first, for businesses in Los Angeles and elsewhere. The free AI audit on a video call looks at your calls first, and it can conclude that one of the other options suits you better.",
      },
    ],
  },
};
