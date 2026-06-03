import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface Crumb {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  trail: Crumb[];
  onDark?: boolean;
  className?: string;
}

export function Breadcrumbs({ trail, onDark, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span
                  aria-current="page"
                  className={cn("font-medium", onDark ? "text-gold-200" : "text-navy-700")}
                >
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.path}
                  className={cn(
                    "transition-colors",
                    onDark
                      ? "text-navy-100 hover:text-gold-200"
                      : "text-ink-muted hover:text-gold-700",
                  )}
                >
                  {crumb.name}
                </Link>
              )}
              {!isLast && (
                <ChevronRight
                  className={cn("h-4 w-4", onDark ? "text-white/40" : "text-gray-line")}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
