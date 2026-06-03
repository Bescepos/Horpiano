import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  onDark?: boolean;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
  onDark = false,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow flex items-center gap-3",
            onDark ? "text-gold-300" : "text-gold-600",
          )}
        >
          <span className="h-px w-8 bg-gold-gradient" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <Heading
        className={cn(
          "font-serif",
          Heading === "h1"
            ? "text-display-lg sm:text-display-xl"
            : "text-display-md sm:text-display-lg",
          onDark ? "text-white" : "text-navy-900",
          align === "center" && "max-w-3xl",
          titleClassName,
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed",
            onDark ? "text-navy-100" : "text-ink-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
