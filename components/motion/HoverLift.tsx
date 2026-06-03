"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface HoverLiftProps {
  children: ReactNode;
  className?: string;
  y?: number;
  scale?: number;
}

/** Subtle spring lift on hover/tap. No motion when reduced motion is requested. */
export function HoverLift({
  children,
  className,
  y = -6,
  scale = 1.02,
}: HoverLiftProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y, scale }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
