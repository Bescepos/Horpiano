import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  padding?: "none" | "sm" | "md" | "lg";
  tone?: "light" | "cream";
  interactive?: boolean;
}

const paddings = {
  none: "",
  sm: "p-6",
  md: "p-8",
  lg: "p-10",
};

export function Card({
  children,
  className,
  as: Comp = "div",
  padding = "md",
  tone = "light",
  interactive = false,
}: CardProps) {
  return (
    <Comp
      className={cn(
        "rounded-2xl border shadow-card",
        tone === "light" ? "border-gray-line/70 bg-white" : "border-gold-200/60 bg-cream",
        paddings[padding],
        interactive &&
          "transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-gold-300/70 hover:shadow-elevated",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
