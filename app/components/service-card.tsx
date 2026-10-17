import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Service } from "@/content/services";
import { SERVICE_ICONS } from "./service-icons";
import { order } from "./words";

// A service card that is one big link. The real link sits on the title, so
// screen readers hear just the service name, and a pseudo-element stretches
// it over the whole card for pointer users.
export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = SERVICE_ICONS[service.slug];
  return (
    <li className="svc-card" data-glow data-reveal style={order(index % 4)}>
      <span className="service-icon" aria-hidden="true">
        <Icon size={24} weight="light" />
      </span>
      <h3 className="svc-title">
        <Link href={`/services/${service.slug}`} className="svc-link">
          {service.name}
        </Link>
      </h3>
      <p className="svc-text">{service.summary}</p>
      <span className="svc-more" aria-hidden="true">
        Learn more
        <ArrowRight size={16} weight="bold" />
      </span>
    </li>
  );
}
