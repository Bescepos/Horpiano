import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "cream" | "navy" | "aurora";
  spacing?: "sm" | "md" | "lg" | "none";
}

const backgrounds = {
  white: "bg-white",
  light: "bg-light-gray",
  cream: "bg-cream",
  navy: "bg-navy-900 text-white",
  aurora: "bg-navy-900 text-white",
};

const spacings = {
  none: "",
  sm: "py-[56px] md:py-[72px] lg:py-[88px]",
  md: "py-[72px] md:py-[96px] lg:py-[120px]",
  lg: "py-[96px] md:py-[112px] lg:py-[140px]",
};

export function Section({
  children,
  className,
  id,
  background = "white",
  spacing = "md",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative", backgrounds[background], spacings[spacing], className)}
    >
      {children}
    </section>
  );
}
