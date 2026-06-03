import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { HoverLift } from "@/components/motion/HoverLift";
import { resourceCategories } from "@/data/resources";
import type { Resource } from "@/lib/types";

const categoryLabel = (id: string) =>
  resourceCategories.find((c) => c.id === id)?.label ?? id;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <HoverLift className="h-full">
      <Link
        href={`/resources/${resource.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-line/70 bg-white shadow-card transition-colors duration-300 hover:border-gold-300/70"
      >
        <div
          className="relative h-40 w-full overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, ${resource.accent.from}, ${resource.accent.to})`,
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
          <span className="absolute left-4 top-4 rounded-pill bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {categoryLabel(resource.category)}
          </span>
          <ArrowUpRight
            className="absolute right-4 top-4 h-5 w-5 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-serif text-lg leading-snug text-navy-900 transition-colors group-hover:text-gold-800">
            {resource.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
            {resource.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-3 text-xs text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {resource.readingTimeMins} min read
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={resource.publishedAt}>{formatDate(resource.publishedAt)}</time>
          </div>
        </div>
      </Link>
    </HoverLift>
  );
}
