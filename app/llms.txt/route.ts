import { LOCATIONS } from "@/content/locations";
import { POSTS } from "@/content/posts";
import { SERVICES } from "@/content/services";
import { SAVINGS_CALCULATOR } from "@/content/tools";
import { USE_CASES } from "@/content/use-cases";
import { HOME_DESCRIPTION } from "@/lib/schema";
import { CALENDLY_URL, FACEBOOK, INSTAGRAM, SITE_NAME, absoluteUrl } from "@/lib/site";

// /llms.txt: a short, plain summary of the site and its key pages for AI
// assistants and answer engines (llmstxt.org format). Built from the same
// content modules as the pages, with URLs from SITE_URL, and prerendered at
// build time because it reads no request data.

const link = (title: string, path: string, note?: string) =>
  `- [${title}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;

function body() {
  const accounting = USE_CASES.filter((u) => u.service === "ai-accounting");
  return [
    `# ${SITE_NAME}`,
    "",
    `> ${HOME_DESCRIPTION}`,
    "",
    "Hiroshi Murakami builds AI automation and AI accounting for small and mid-size businesses, serving Los Angeles County and clients worldwide, remote-first. AI does the first pass of repetitive work and a person reviews what matters. There is no office address, email address or phone number: contact is through the free AI audit booking page, Instagram or Facebook. Use cases on the site are illustrative scenarios, not client case studies, and worked examples use labelled assumptions, not client results.",
    "",
    "## Start here",
    link("Home", "/", "who it is for and how an engagement runs"),
    link("Services", "/services", "the eight services side by side"),
    link(SAVINGS_CALCULATOR.name, SAVINGS_CALCULATOR.path, "free browser tool, stores nothing"),
    "",
    "## Services",
    ...SERVICES.map((s) => link(s.name, `/services/${s.slug}`, s.summary)),
    "",
    "## AI accounting use cases",
    ...accounting.map((u) => link(u.title, `/use-cases/${u.slug}`, u.summary)),
    link("All use cases", "/use-cases"),
    "",
    "## Los Angeles area",
    ...LOCATIONS.map((l) => link(l.name, `/locations/${l.slug}`, l.detail.angle)),
    "",
    "## Blog",
    ...POSTS.map((p) => link(p.title.replace(/\.$/, ""), `/blog/${p.slug}`, p.description)),
    "",
    "## Contact",
    `- [Book a free AI audit](${CALENDLY_URL}): 30 minute video call`,
    `- [Instagram](${INSTAGRAM})`,
    `- [Facebook](${FACEBOOK})`,
    "",
  ].join("\n");
}

export function GET() {
  return new Response(body(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
