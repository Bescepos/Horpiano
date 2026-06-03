import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  intensity?: "subtle" | "medium" | "strong";
}

const intensities = {
  subtle: "bg-white/5 backdrop-blur-sm",
  medium: "bg-white/10 backdrop-blur-md",
  strong: "bg-white/15 backdrop-blur-lg",
};

/** Translucent card for use over dark / aurora surfaces. */
export function GlassCard({
  children,
  className,
  as: Comp = "div",
  intensity = "medium",
}: GlassCardProps) {
  return (
    <Comp
      className={cn(
        "rounded-2xl border border-white/15 shadow-glass",
        intensities[intensity],
        className,
      )}
    >
      {children}
    </Comp>
  );
}
