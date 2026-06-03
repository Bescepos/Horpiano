"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Globally honor the user's reduced-motion preference for all Framer Motion. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
