"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Pause the scroll while hovered. */
  pauseOnHover?: boolean;
}

/** Continuous horizontal marquee. Renders a static, wrapped row under reduced motion. */
export function Marquee({ children, className, pauseOnHover = true }: MarqueeProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-x-12 gap-y-6", className)}>
        {children}
      </div>
    );
  }

  return (
    <div className={cn("group mask-fade-x overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max animate-marquee items-center gap-12",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
