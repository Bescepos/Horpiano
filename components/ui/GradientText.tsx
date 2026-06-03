import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function GradientText({
  children,
  className,
  as: Comp = "span",
}: GradientTextProps) {
  return <Comp className={cn("text-gradient-gold", className)}>{children}</Comp>;
}
