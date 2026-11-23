/**
 * A few plain sentences that each make sense on their own, near the top of a
 * service, use case or city page. Renders nothing when a page has none.
 */
export default function KeyFacts({ facts }: { facts?: string[] }) {
  if (!facts?.length) return null;
  return (
    <section className="key-facts" aria-labelledby="key-facts-title">
      <h2 id="key-facts-title">The short version</h2>
      <ul>
        {facts.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </section>
  );
}
