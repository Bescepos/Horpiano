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
  y = -4,
  scale = 1.012,
}: HoverLiftProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y, scale }}
      whileTap={{ scale: 0.992 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
