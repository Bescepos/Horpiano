import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { HoverLift } from "@/components/motion/HoverLift";
import type { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = getIcon(service.icon);
  return (
    <HoverLift className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-line/70 bg-white p-7 shadow-card transition-colors duration-300 hover:border-gold-300/70"
      >
        <span
          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold-gradient transition-transform duration-300 group-hover:scale-x-100"
          aria-hidden="true"
        />
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-gold-300">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-sans text-xl font-semibold tracking-tight text-navy-900">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-muted">
          {service.summary}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Link>
    </HoverLift>
  );
}
