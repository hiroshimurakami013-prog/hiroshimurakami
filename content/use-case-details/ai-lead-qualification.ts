import type { UseCaseDetail } from "../use-cases.ts";

// Long-form copy for the AI Lead Qualification use cases. Illustrative
// scenarios, no client names and no numbers.

export const AI_LEAD_QUALIFICATION_DETAILS: Record<string, UseCaseDetail> = {
  "web-form-lead-response": {
    seoTitle: "AI Response for Web Form Leads | Hiroshi Murakami",
    seoDescription:
      "Every web form lead gets a quick, helpful reply and a few qualifying questions, so the best ones reach your sales team first. An illustrative AI scenario.",
    lead: "A web form lead is warmest in the minutes after it is sent. This scenario shows how AI replies straight away, asks the questions your team would ask, and hands over the leads worth calling first.",
    problem: [
      "Picture a law firm, a financial planner, a wedding venue or a B2B services company. The website brings in a steady flow of contact form submissions. Some are ideal clients. Some are students, job seekers, vendors or people looking for a service you do not offer. They all arrive in the same inbox.",
      "Someone has to read each one, work out whether it is worth a call, and reply. That someone is usually busy with paying clients, so replies go out hours or days later, in no particular order. The best lead of the week might get the slowest response simply because it arrived on a Friday evening.",
      "Marketing budgets are under pressure, so a lead that was paid for and then left waiting is a double loss: the money is spent and the opportunity goes to whoever replied first.",
    ],
    usualTools: [
      "Auto-responders confirm that the form was received, which is polite but does not move anything forward. Longer forms with many required fields can qualify leads, though they also put people off, especially on mobile.",
      "Marketing automation platforms can score leads, but they are often priced for larger teams, take time to configure and score on clicks and page views rather than on what the person actually needs.",
    ],
    steps: [
      {
        title: "Instant, relevant reply",
        text: "Within moments of a form arriving, the AI sends a personal reply by email or text that responds to what the person actually wrote, not a generic acknowledgement.",
      },
      {
        title: "A few natural questions",
        text: "The reply asks the two or three questions that matter for your business, such as the type of matter, the timeline or the budget range, and the conversation continues if the person answers.",
      },
      {
        title: "Leads are sorted",
        text: "Based on the answers and your criteria, each lead is marked as a strong fit, a possible fit or not a fit, with a one-line reason.",
      },
      {
        title: "Strong leads go to the front of the queue",
        text: "Your team is notified of strong leads right away, with a summary, and can be offered a booking link to send or a call slot already arranged.",
      },
      {
        title: "Everyone else is looked after",
        text: "Possible fits get helpful information and a way to book. People who are not a fit are thanked and, where you like, pointed somewhere useful.",
      },
    ],
    outcomes: [
      "Every lead gets a quick, thoughtful first reply, whatever time it arrives.",
      "Your team calls the strongest leads first, already knowing what they need.",
      "Short forms can stay short, because qualifying happens in the conversation.",
      "Leads that are not a fit are handled politely without taking anyone's time.",
    ],
    requirements: [
      "Your website forms or form tool, connected by webhook or email",
      "What makes a lead a strong fit, a possible fit or not a fit",
      "Your tone, and anything the AI must never say, such as legal or financial advice",
      "Where qualified leads should go: email, your CRM or a team chat",
    ],
    humanInTheLoop:
      "The AI gathers information and sorts; it never gives professional advice or agrees terms. Your team makes every decision about who to take on, and can see and correct how each lead was classified.",
    privacy:
      "Only details the person chose to share are stored, inside your CRM or inbox. Sensitive matters described in a form are not repeated in summaries beyond what your team needs, and nothing is used to train public AI models.",
  },

  "screening-unqualified-sales-calls": {
    seoTitle: "AI Screening for Unqualified Sales Calls | Hiroshi Murakami",
    seoDescription:
      "AI asks about need, location, timing and budget up front, so your salespeople spend their calls on the leads most likely to buy.",
    lead: "Every salesperson knows the sinking feeling ten minutes into a call that was never going to go anywhere. This scenario shows AI asking the screening questions first, so calendars fill with better conversations.",
    problem: [
      "Imagine a commercial solar company, a home remodeler, a software reseller or a high-end interior designer. Sales calls are booked from the website and ads. Many of them turn out to be outside the service area, far below the minimum project size, months away from deciding or simply curious.",
      "Each of those calls takes up a slot that could have gone to a serious buyer, plus the preparation and the follow-up email. Salespeople get frustrated, and the good leads wait longer for an appointment because the calendar is full of poor ones.",
      "As hiring experienced salespeople has become more expensive, their time is one of the most valuable things the business has, and spending it on screening is hard to justify.",
    ],
    usualTools: [
      "Booking forms with screening questions help, but long forms reduce bookings and people sometimes pick whichever answer gets them through. A junior person screening by phone works well and is a real cost, and screening calls also need to be scheduled.",
      "Large CRMs can build complex qualification workflows. They are powerful, but they still depend on someone gathering the answers in the first place.",
    ],
    steps: [
      {
        title: "Agree what qualified means",
        text: "Together we write down your real criteria: service area, project size, timeline, decision maker and budget range, and which are deal breakers.",
      },
      {
        title: "Screening happens before the booking",
        text: "When someone asks for a call, AI asks the screening questions conversationally, by chat, text or a short voice call, and explains why it is asking.",
      },
      {
        title: "Good fits book straight in",
        text: "Leads who meet your criteria are offered a slot in a salesperson's calendar right away, with their answers attached to the booking.",
      },
      {
        title: "Others get a better next step",
        text: "Leads outside your criteria are offered something useful instead: a guide, a smaller package, a referral or a reminder to come back when the timing is right.",
      },
      {
        title: "Criteria improve over time",
        text: "Your team flags calls that were misjudged, and the screening rules are adjusted so the next ones are judged better.",
      },
    ],
    outcomes: [
      "Sales calendars fill with conversations that have a real chance of closing.",
      "Salespeople start every call already knowing the basics.",
      "Leads who are not a fit yet are treated well and may return when they are ready.",
      "Your qualification criteria become explicit, shared and easy to adjust.",
    ],
    requirements: [
      "Your current qualification criteria, even if informal",
      "The calendars or booking tool your salespeople use",
      "The alternatives you can offer leads who are not a fit",
      "Your CRM, if answers should be recorded there",
    ],
    humanInTheLoop:
      "AI screens, people decide. Borderline leads go to a salesperson to judge rather than being turned away automatically, and your team can override any decision. Screening rules never discriminate on protected characteristics.",
    privacy:
      "The AI only asks for information needed to qualify, explains why, and stores answers in your own CRM. Nothing is used to train public AI models.",
  },

  "inbound-lead-triage": {
    seoTitle: "AI Lead Triage for Email, DMs and Forms | Hiroshi Murakami",
    seoDescription:
      "Enquiries from email, Instagram and Facebook DMs and web forms are gathered in one place, sorted by AI and routed to the right person.",
    lead: "Enquiries now arrive everywhere: the website, the shared inbox, Instagram, Facebook, WhatsApp and the owner's personal email. This scenario shows AI gathering them in one place and making sure each one reaches the right person.",
    problem: [
      "Picture a creative studio, an event company, a fitness business or a boutique with an online shop. A potential client sends an Instagram DM. Another fills in the website form. A third emails the owner directly after a referral. A fourth leaves a Facebook message on a Sunday night.",
      "Each channel is checked by a different person, or by nobody in particular. Messages are seen on a phone and forgotten. Two people reply to the same enquiry, or nobody does because each assumed the other had. There is no single list of who has asked for what, so following up is guesswork.",
      "Customers expect a reply on the channel they chose, and quickly. Businesses keep adding channels to meet them there, but rarely add the people to watch them all.",
    ],
    usualTools: [
      "Each platform has its own inbox and notifications, which is exactly the problem: there are too many places to check. Shared inbox tools that combine channels exist and are useful, though many charge per seat and still need someone to read, sort and assign every message.",
      "Forwarding everything to one email address centralises the noise without sorting it, and replies then come from the wrong channel.",
    ],
    steps: [
      {
        title: "Channels are connected",
        text: "The website forms, shared inbox and business messaging accounts on Instagram, Facebook and WhatsApp are connected through their official business tools.",
      },
      {
        title: "Every message is read and labelled",
        text: "AI identifies what each message is: a new enquiry, an existing customer, a supplier, a job applicant or spam, and pulls out the key details.",
      },
      {
        title: "Enquiries are routed",
        text: "New enquiries go to the right person based on the service, location or size, existing customers go to their usual contact and everything else goes where it belongs.",
      },
      {
        title: "A quick first reply on the same channel",
        text: "Where you allow it, the AI acknowledges the message on the channel it came from and answers simple questions, so nobody waits in silence.",
      },
      {
        title: "One list, nothing forgotten",
        text: "All enquiries appear in one list or your CRM with their status, and anything unanswered after a set time is flagged.",
      },
    ],
    outcomes: [
      "No enquiry is lost because it came in through the less-watched channel.",
      "Each message reaches the person best placed to answer it.",
      "Customers get a timely reply where they wrote, even out of hours.",
      "You have one clear view of every open enquiry.",
    ],
    requirements: [
      "Business accounts on the messaging channels you use, and access for setup",
      "The categories of message you receive and who handles each",
      "What the AI may answer on its own, and what must wait for a person",
      "Your CRM or a simple shared list to collect enquiries",
    ],
    humanInTheLoop:
      "The AI sorts, routes and acknowledges; your team handles the real conversations. You decide which replies it may send on its own, and any message it is unsure about is left for a person.",
    privacy:
      "Channels are connected through their official business tools, following each platform's rules. Messages stay in your accounts and CRM, access is limited to your team, and nothing is used to train public AI models.",
  },
};
