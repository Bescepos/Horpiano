import type { Transition } from "framer-motion";

/** Expo-out easing used across the brand for a refined, premium feel. */
export const easePremium = [0.22, 1, 0.36, 1] as const;

export const durations = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
} as const;

export const baseTransition: Transition = {
  duration: durations.base,
  ease: easePremium,
};

/** Default viewport config for scroll-triggered reveals. */
export const defaultViewport = { once: true, amount: 0.25 } as const;
