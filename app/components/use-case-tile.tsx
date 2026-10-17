import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { imageForUseCase } from "@/content/images";
import { serviceName } from "@/content/services";
import type { UseCase } from "@/content/use-cases";
import Scene, { TILE_SIZES } from "./scene";
import { order } from "./words";

// A use case tile that is one big link, like the service cards: the real
// link sits on the title and a pseudo-element stretches it over the tile.
export default function UseCaseTile({
  useCase,
  index,
  showService = false,
  text,
}: {
  useCase: UseCase;
  index: number;
  showService?: boolean;
  /** Replaces the summary, for example with a note on why it fits a city. */
  text?: string;
}) {
  return (
    <li className="uc-tile" data-reveal style={order(index)}>
      <Scene
        image={imageForUseCase(useCase.slug)}
        sizes={TILE_SIZES}
        className="uc-media"
        decorative
      />
      <span className="uc-meta">
        <span className="case-label">Use case</span>
        {showService ? (
          <span className="uc-service">{serviceName(useCase.service)}</span>
        ) : null}
      </span>
      <h3 className="uc-title">
        <Link href={`/use-cases/${useCase.slug}`} className="uc-link">
          {useCase.title}
        </Link>
      </h3>
      <p className="uc-text">{text ?? useCase.summary}</p>
      <span className="uc-more" aria-hidden="true">
        Read the use case
        <ArrowRight size={16} weight="bold" />
      </span>
    </li>
  );
}
