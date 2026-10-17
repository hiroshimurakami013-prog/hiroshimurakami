import type { UseCaseDetail } from "../use-cases.ts";

// Long-form copy for the AI Customer Support Assistants use cases.
// Illustrative scenarios, no client names and no numbers.

export const AI_CUSTOMER_SUPPORT_DETAILS: Record<string, UseCaseDetail> = {
  "repetitive-support-questions": {
    seoTitle: "AI Assistant for Repeat Support Questions | Hiroshi Murakami",
    seoDescription:
      "An AI assistant answers the common questions on chat, email and WhatsApp from your own policies, and hands the rest to a person with full context.",
    lead: "\"Where is my order?\", \"What is your returns policy?\", \"Do you ship to Canada?\" Asked in endless variations, on every channel, every day. This scenario shows an AI assistant answering those from your own information, so your team can focus on the rest.",
    problem: [
      "Picture an online store selling apparel or home goods, a subscription box business or a local gym with a busy membership desk. Support requests arrive by website chat, email, Instagram and WhatsApp. A large share of them are the same handful of questions: order status, delivery times, returns, sizing, opening hours and membership changes.",
      "Your support person, often also the operations person or the owner, spends much of the day copying the same answers, looking up orders and pasting tracking links. Customers with genuinely tricky problems wait behind a queue of easy ones. Replies get shorter and less friendly as the day goes on.",
      "Hiring more support staff is costly, and seasonal peaks such as holiday sales make it hard to staff for the busy weeks without being overstaffed the rest of the year.",
    ],
    usualTools: [
      "FAQ pages and help centres help customers who look for them, but many people prefer to ask. Canned replies in a helpdesk speed up typing without removing the need to read each message and pick the right reply.",
      "Older rule-based chatbots answer only when the customer uses the expected words and often loop people through menus. Helpdesk platforms with AI add-ons are capable, though they are usually priced per agent seat and still need your policies and data connected to give accurate, specific answers.",
    ],
    steps: [
      {
        title: "Gather the answers you already give",
        text: "Your policies, product information, shipping rules, past replies and help articles become the assistant's knowledge. Outdated or conflicting answers are cleaned up first.",
      },
      {
        title: "Connect the systems behind the questions",
        text: "Read access to your store, booking or membership system lets the assistant answer specific questions such as order status or the next available class, not just general ones.",
      },
      {
        title: "Answer on every channel",
        text: "The assistant replies on website chat, email and the messaging channels you use, in your tone, and says clearly that it is an AI assistant.",
      },
      {
        title: "Know its limits",
        text: "Refunds above your limit, complaints, damaged goods and anything it is not sure about are passed to your team rather than guessed.",
      },
      {
        title: "Learn from the conversations",
        text: "Each week you see what customers asked, where the assistant handed over and why, so policies and answers can be improved.",
      },
    ],
    outcomes: [
      "Customers get quick, accurate answers to common questions on the channel they chose.",
      "Your team spends its time on the conversations that genuinely need a person.",
      "Answers are consistent, because they come from one approved source.",
      "Seasonal peaks are easier to absorb without temporary hires.",
    ],
    requirements: [
      "Your policies, product or service information and examples of past replies",
      "Read access to your store, booking or order system",
      "Business accounts for the channels you want covered",
      "Rules for what must always go to a person",
    ],
    humanInTheLoop:
      "The assistant answers only from your approved information and hands over whenever it is unsure, when the customer asks for a person, or when the topic is on your list. Your team can read every conversation and correct answers.",
    privacy:
      "The assistant only sees the order or account data needed to answer the customer it is talking to. Conversations stay in your own systems, access is limited to your team, and nothing is used to train public AI models.",
  },

  "after-hours-customer-support": {
    seoTitle: "After-Hours AI Customer Support | Hiroshi Murakami",
    seoDescription:
      "Customers who write in the evening or at the weekend get a useful answer straight away, and anything that needs a person is ready for the morning.",
    lead: "Your customers do not stop having questions at 5 pm. This scenario shows an AI assistant giving useful answers overnight and at weekends, and preparing everything else so your team can start the day with it sorted.",
    problem: [
      "Think of a software company with small business customers, a vacation rental manager, an online course creator or a furniture store with home delivery. Many customers get round to their questions in the evening, after work, or at the weekend. They send a chat message, an email or a DM and wait.",
      "Monday morning brings a wall of messages. Some customers have already given up and bought elsewhere, asked for a refund or left an annoyed review. The team spends the first hours of the week catching up instead of moving forward.",
      "Staffing evenings and weekends with people is expensive and hard to sustain for a small team, and asking the owner to answer from their phone at night is not a plan.",
    ],
    usualTools: [
      "An auto-reply saying \"we will get back to you on Monday\" is honest but does not help the customer now. Outsourced overnight support teams can work for larger businesses, though they need training on your products and add a significant fixed cost.",
      "A help centre can answer some questions, if the customer finds the right article. Many do not look, and some questions depend on their specific order or booking.",
    ],
    steps: [
      {
        title: "Decide what can be resolved out of hours",
        text: "We agree which requests the assistant can fully resolve, such as order status, how-to questions or rebooking, and which need a person.",
      },
      {
        title: "The assistant covers the quiet hours",
        text: "Outside business hours, the assistant answers on chat, email and messaging, using your information and connected systems.",
      },
      {
        title: "Urgent issues reach someone",
        text: "Genuine emergencies by your definition, such as a guest locked out of a rental, trigger an alert to the person on call.",
      },
      {
        title: "Everything else is prepared",
        text: "Requests that need a person are collected with the details gathered, the customer told when to expect a reply, and the case summarised for the morning.",
      },
      {
        title: "The team starts with a sorted queue",
        text: "The next working day begins with a short, prioritised list of cases ready to act on, rather than a pile of unread messages.",
      },
    ],
    outcomes: [
      "Customers get help in the evening and at weekends instead of waiting for the next working day.",
      "Fewer frustrated follow-up messages pile up while the office is closed.",
      "Your team starts each morning with prepared, prioritised cases.",
      "Out-of-hours emergencies reach the right person, and everything else waits politely.",
    ],
    requirements: [
      "Your business hours and the channels to cover outside them",
      "Which requests may be resolved without a person",
      "Who is on call for emergencies, if anyone, and how to reach them",
      "Access to the systems needed for common requests",
    ],
    humanInTheLoop:
      "Out of hours, the assistant resolves only what you have approved and sets honest expectations for everything else. It never promises refunds or exceptions outside your policy, and your team reviews every handed-over case.",
    privacy:
      "The assistant uses only the customer data needed for each conversation. Conversations are stored in your own systems, visible to your team, and not used to train public AI models.",
  },

  "human-handover-with-context": {
    seoTitle: "AI to Human Support Handover With Context | Hiroshi Murakami",
    seoDescription:
      "When a conversation needs a person, the AI assistant hands it over with a short summary and the details collected, so the customer never starts again.",
    lead: "Nothing frustrates a customer more than explaining their problem to a bot, then explaining it again to a person. This scenario shows a handover where the person picks up exactly where the AI left off.",
    problem: [
      "Imagine a medical billing office, an insurance broker, a property manager or a telecom reseller. Many conversations start simple but turn complicated: a billing dispute, a claim, a repair that needs scheduling around a tenant, a contract question. These need a person, and quickly.",
      "In many setups, the handover is where things break. The chat ends with \"an agent will contact you\". The person who picks it up sees only the customer's name, so they ask for the account number, the problem and the history all over again. The customer, already annoyed, now feels ignored as well.",
      "Customers are increasingly comfortable starting with an AI assistant, but only if it gets them to the right person without making them repeat themselves.",
    ],
    usualTools: [
      "Many chat and helpdesk tools offer a transfer button, but what transfers is often just a transcript, which the person then has to read in full. Large helpdesk platforms can do this well with enough setup, and they are often priced per seat and built for big contact centres.",
      "Asking customers to email instead, or to call a number and start again, solves the routing problem by creating a worse one.",
    ],
    steps: [
      {
        title: "Define when to hand over",
        text: "We agree the triggers: certain topics, signs of frustration, a direct request for a person, high value accounts or anything the assistant is unsure about.",
      },
      {
        title: "Gather what the person will need",
        text: "Before handing over, the assistant collects the details your team always asks for, such as the account, the order or policy number and the key facts, without making it feel like a form.",
      },
      {
        title: "Write a short case summary",
        text: "AI turns the conversation into a brief: who the customer is, what they want, what has been tried and how they are feeling.",
      },
      {
        title: "Route to the right person",
        text: "The case goes to the team or person who handles that topic, in the tool they already use, with the summary at the top and the full conversation below.",
      },
      {
        title: "Keep the customer informed",
        text: "The customer is told honestly who will help them and when, and the person replies on the same channel so the conversation continues in one thread.",
      },
    ],
    outcomes: [
      "Customers explain their problem once.",
      "Your team starts each handed-over case with the facts and context already in front of them.",
      "Complex cases reach the right specialist instead of bouncing between people.",
      "Customers trust the AI assistant more, because there is always a clear route to a person.",
    ],
    requirements: [
      "The topics and situations that must reach a person",
      "Who handles which topics, and the tools they work in",
      "The details your team always needs before they can help",
      "Your customer channels and helpdesk or CRM",
    ],
    humanInTheLoop:
      "This use case is all about the human in the loop. The assistant is designed to recognise its limits early, hand over gracefully and make the person's job easier. Your team can also take over any conversation at any time.",
    privacy:
      "Only the details needed to resolve the case are collected and passed on. Sensitive information such as health or financial details is handled according to your policies, stored in your own systems and never used to train public AI models.",
  },
};
