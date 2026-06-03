import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { Accordion, type AccordionItemData } from "@/components/ui/Accordion";
import type { Service } from "@/lib/types";

interface ServiceCategoryAccordionProps {
  services: Service[];
}

export function ServiceCategoryAccordion({ services }: ServiceCategoryAccordionProps) {
  const items: AccordionItemData[] = services.map((service) => {
    const Icon = getIcon(service.icon);
    return {
      id: service.slug,
      question: (
        <span className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          {service.title}
        </span>
      ),
      answer: (
        <div>
          <p className="mb-5 max-w-2xl text-charcoal-light">{service.summary}</p>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {service.subServices.map((sub) => (
              <li key={sub.title}>
                <p className="font-semibold text-navy-900">{sub.title}</p>
                <p className="text-sm text-ink-muted">{sub.description}</p>
              </li>
            ))}
          </ul>
          <Link
            href={`/services/${service.slug}`}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 transition-colors hover:text-gold-800"
          >
            Explore {service.title}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      ),
    };
  });

  return <Accordion items={items} type="multiple" defaultOpenId={services[0]?.slug} />;
}
