"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { easePremium, durations, defaultViewport } from "./motion.config";

type RevealVariant = "fade-up" | "fade" | "scale" | "left" | "right";

const offsetFor: Record<RevealVariant, { x?: number; y?: number; scale?: number }> = {
  "fade-up": { y: 24 },
  fade: {},
  scale: { scale: 0.96 },
  left: { x: -32 },
  right: { x: 32 },
};

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  amount?: number;
  once?: boolean;
  className?: string;
}

/** Scroll-triggered reveal wrapper. Renders statically under reduced motion. */
export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  amount = defaultViewport.amount,
  once = true,
  className,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const offset = offsetFor[variant];
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: durations.base, ease: easePremium, delay },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
