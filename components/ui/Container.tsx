import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
  as?: ElementType;
}

const sizes = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  wide: "max-w-[1440px]",
};

export function Container({
  children,
  className,
  size = "default",
  as: Comp = "div",
}: ContainerProps) {
  return (
    <Comp className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </Comp>
  );
}
