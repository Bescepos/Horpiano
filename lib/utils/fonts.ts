import { Manrope, Fraunces } from "next/font/google";

/** Body + UI text. */
export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

/**
 * Editorial display serif for headings. Variable, with the optical-size axis
 * enabled so large headlines render with the refined, high-contrast character
 * of a premium editorial typeface.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  style: ["normal", "italic"],
  axes: ["opsz"],
});
