import { ABOUT, ABOUT_DEFINITION } from "@/content/about";
import { LOCATIONS } from "@/content/locations";
import { POSTS } from "@/content/posts";
import { SERVICES } from "@/content/services";
import { SAVINGS_CALCULATOR } from "@/content/tools";
import { casesForService } from "@/content/use-cases";
import { LLMS_INTRO, listTitle, mdLink as link, textResponse } from "@/lib/llms";
import { HOME_DESCRIPTION } from "@/lib/schema";
import { CALENDLY_URL, FACEBOOK, FEED_PATH, INSTAGRAM, LINKEDIN, SITE_NAME, absoluteUrl } from "@/lib/site";

// /llms.txt: a short, plain summary of the site and its key pages for AI
// assistants and answer engines (llmstxt.org format). Built from the same
// content modules as the pages, with URLs from SITE_URL, and prerendered at
// build time because it reads no request data.

// AI accounting first, then the other services in their usual order.
const services = [
  ...SERVICES.filter((s) => s.group === "accounting"),
  ...SERVICES.filter((s) => s.group !== "accounting"),
];

function body() {
  return [
    `# ${SITE_NAME}`,
    "",
    `> ${HOME_DESCRIPTION}`,
    "",
    LLMS_INTRO,
    "",
    "## Start here",
    link("Home", "/", "who it is for and how an engagement runs"),
    link(ABOUT.title, ABOUT.path, ABOUT_DEFINITION),
    link("Services", "/services", "the eight services side by side"),
    link(SAVINGS_CALCULATOR.name, SAVINGS_CALCULATOR.path, "free browser tool, stores nothing"),
    `- [Full text of the key pages](${absoluteUrl("/llms-full.txt")}): services, use case summaries and posts in one plain text file`,
    `- [Blog RSS feed](${absoluteUrl(FEED_PATH)})`,
    "",
    "## Services",
    ...SERVICES.map((s) => link(s.name, `/services/${s.slug}`, s.summary)),
    "",
    ...services.flatMap((s) => [
      `## ${s.name} use cases`,
      ...casesForService(s.slug).map((u) => link(u.title, `/use-cases/${u.slug}`, u.summary)),
      "",
    ]),
    "## All use cases",
    link("All use cases", "/use-cases"),
    "",
    "## Los Angeles area",
    ...LOCATIONS.map((l) => link(l.name, `/locations/${l.slug}`, l.detail.angle)),
    "",
    "## Blog",
    ...POSTS.map((p) => link(listTitle(p.title), `/blog/${p.slug}`, p.description)),
    "",
    "## Contact",
    `- [Book a free AI audit](${CALENDLY_URL}): 30 minute video call`,
    `- [Instagram](${INSTAGRAM})`,
    `- [Facebook](${FACEBOOK})`,
    `- [LinkedIn](${LINKEDIN})`,
    "",
  ].join("\n");
}

export function GET() {
  return textResponse(body());
}
