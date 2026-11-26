import { CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";

type Scope = { heading: string; can: string[]; cannot: string[] };

/**
 * What a system can and cannot handle, side by side, right under the lead.
 * Renders nothing when a page has none.
 */
export default function ScopeList({ scope }: { scope?: Scope }) {
  if (!scope) return null;
  return (
    <section className="uc-scope" aria-labelledby="uc-scope-title">
      <h2 id="uc-scope-title">{scope.heading}</h2>
      <div className="uc-scope-grid">
        <div>
          <h3>It can</h3>
          <ul className="check-list">
            {scope.can.map((c) => (
              <li key={c}>
                <CheckCircle size={18} weight="fill" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>It cannot</h3>
          <ul className="check-list uc-scope-cannot">
            {scope.cannot.map((c) => (
              <li key={c}>
                <XCircle size={18} weight="fill" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
