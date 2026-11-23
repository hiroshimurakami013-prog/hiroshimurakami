import { ABOUT, aboutMarkdown } from "@/content/about";
import { POSTS, plainText } from "@/content/posts";
import { SERVICES, serviceName } from "@/content/services";
import { SAVINGS_CALCULATOR } from "@/content/tools";
import { USE_CASES } from "@/content/use-cases";
import { LLMS_INTRO, listTitle, textResponse } from "@/lib/llms";
import { HOME_DESCRIPTION } from "@/lib/schema";
import { CALENDLY_URL, FACEBOOK, INSTAGRAM, LINKEDIN, SITE_NAME, absoluteUrl } from "@/lib/site";

// /llms-full.txt: the long version of /llms.txt, with the text of the key
// pages as plain markdown. Built from the content modules and prerendered,
// like /llms.txt.

const questions = (faqs: { question: string; answer: string }[]) =>
  faqs.flatMap((f) => ["", `Q: ${f.question}`, `A: ${f.answer}`]);

function body() {
  return [
    `# ${SITE_NAME}: full text of the key pages`,
    "",
    `> ${HOME_DESCRIPTION}`,
    "",
    LLMS_INTRO,
    "",
    `Short version: ${absoluteUrl("/llms.txt")}`,
    "",
    `## ${ABOUT.title}`,
    `URL: ${absoluteUrl(ABOUT.path)}`,
    "",
    ...aboutMarkdown(),
    "",
    "## Services",
    ...SERVICES.flatMap((s) => [
      "",
      `### ${s.name}`,
      `URL: ${absoluteUrl(`/services/${s.slug}`)}`,
      "",
      s.summary,
      "",
      s.intro,
      ...(s.keyFacts?.length ? ["", ...s.keyFacts.map((f) => `- ${f}`)] : []),
      "",
      "#### How it works",
      ...s.steps.map((step, i) => `${i + 1}. ${step.title}: ${step.text}`),
      "",
      "#### Human review",
      s.humanReview,
      "",
      "#### Questions",
      ...questions(s.faqs),
    ]),
    "",
    "## Use cases",
    "",
    "Illustrative scenarios, not client case studies.",
    ...USE_CASES.flatMap((u) => [
      "",
      `### ${u.title}`,
      `URL: ${absoluteUrl(`/use-cases/${u.slug}`)}`,
      `Service: ${serviceName(u.service)}`,
      "",
      u.summary,
    ]),
    "",
    "## Free tool",
    "",
    `### ${SAVINGS_CALCULATOR.name}`,
    `URL: ${absoluteUrl(SAVINGS_CALCULATOR.path)}`,
    "",
    SAVINGS_CALCULATOR.lead,
    "",
    "## Blog",
    ...POSTS.flatMap((p) => [
      "",
      `### ${listTitle(p.title)}`,
      `URL: ${absoluteUrl(`/blog/${p.slug}`)}`,
      `Published: ${p.datePublished}`,
      ...(p.dateModified && p.dateModified !== p.datePublished
        ? [`Updated: ${p.dateModified}`]
        : []),
      `Author: ${p.author}`,
      `Source: ${p.source.publisher}, ${p.source.title}`,
      "",
      p.description,
      "",
      "Main points:",
      ...p.glance.map((g) => `- ${plainText(g)}`),
    ]),
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
