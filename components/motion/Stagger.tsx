"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { staggerContainer, staggerItem } from "./variants";
import { defaultViewport } from "./motion.config";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  once?: boolean;
  as?: ElementType;
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0.05,
  amount = defaultViewport.amount,
  once = true,
  as = "div",
}: StaggerContainerProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduce) {
    const Static = as as ElementType;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </Comp>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Static = as as ElementType;
    return <Static className={className}>{children}</Static>;
  }

  const Comp = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <Comp className={className} variants={staggerItem}>
      {children}
    </Comp>
  );
}
