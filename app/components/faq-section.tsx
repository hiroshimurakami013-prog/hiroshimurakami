import type { FaqItem } from "@/lib/schema";
import Words from "./words";

// A visible FAQ block in the same style as the service and city pages. The
// page passes the same questions to faqJsonLd(), so the markup and the
// screen always agree.
export default function FaqSection({
  title,
  faqs,
  id = "faq-title",
  className = "block",
}: {
  title: string;
  faqs: FaqItem[];
  id?: string;
  className?: string;
}) {
  if (!faqs.length) return null;
  return (
    <section className={className} aria-labelledby={id}>
      <div className="wrap">
        <h2 id={id} className="h2 words max-w-[20ch]" data-reveal>
          <Words text={title} />
        </h2>
        <ul className="faq">
          {faqs.map((f) => (
            <li key={f.question} data-reveal>
              <h3>{f.question}</h3>
              <p>{f.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
