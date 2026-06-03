import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        navy: {
          50: "#EEF2F8",
          100: "#D8E1EF",
          200: "#B3C3DC",
          300: "#8299BF",
          400: "#516E9E",
          500: "#33517F",
          600: "#27416A",
          700: "#1E3354",
          800: "#172841",
          900: "#101D30",
          950: "#0A1320",
        },
        gold: {
          50: "#FBF6EA",
          100: "#F5E9C8",
          200: "#EDD79A",
          300: "#E4C46B",
          400: "#D9AF45",
          500: "#C8992E",
          600: "#A87C20",
          700: "#86621A",
          800: "#634914",
          900: "#43320F",
          950: "#2A1F09",
        },
        charcoal: {
          DEFAULT: "#1C2026",
          light: "#3A4049",
        },
        ink: {
          muted: "#5B636E",
        },
        "light-gray": "#EFEDE8",
        "gray-line": "#E4E1D9",
        "off-white": "#F8F7F4",
        cream: "#FAF6EC",
        // Semantic aliases
        primary: "#101D30",
        accent: "#C8992E",
        success: "#1E7A52",
        error: "#C0392B",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["5.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-xl": ["4.5rem", { lineHeight: "1.07", letterSpacing: "-0.022em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.12", letterSpacing: "-0.018em" }],
        "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgb(16 29 48 / 0.08), 0 4px 16px -4px rgb(16 29 48 / 0.06)",
        elevated:
          "0 12px 32px -8px rgb(16 29 48 / 0.18), 0 4px 12px -4px rgb(16 29 48 / 0.10)",
        card: "0 1px 2px rgb(16 29 48 / 0.04), 0 8px 24px -10px rgb(16 29 48 / 0.12)",
        "gold-glow":
          "0 0 0 1px rgb(217 175 69 / 0.25), 0 8px 30px -6px rgb(200 153 46 / 0.35)",
        glass:
          "inset 0 1px 0 rgb(255 255 255 / 0.15), 0 16px 40px -12px rgb(10 19 32 / 0.45)",
        "inner-top": "inset 0 1px 0 0 rgb(255 255 255 / 0.6)",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        "2xl": "28px",
        "3xl": "40px",
        pill: "9999px",
      },
      backdropBlur: {
        xs: "2px",
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #E4C46B 0%, #C8992E 50%, #A87C20 100%)",
        "gold-text":
          "linear-gradient(120deg, #F5E9C8 0%, #D9AF45 45%, #C8992E 100%)",
        "navy-aurora":
          "radial-gradient(ellipse at 20% 0%, rgba(51,81,127,0.5), transparent 55%), radial-gradient(ellipse at 90% 20%, rgba(200,153,46,0.18), transparent 50%), linear-gradient(180deg, #101D30, #0A1320)",
        sheen:
          "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.35) 50%, transparent 65%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 1px rgb(217 175 69 / 0.2), 0 6px 20px -6px rgb(200 153 46 / 0.3)" },
          "50%": { boxShadow: "0 0 0 1px rgb(217 175 69 / 0.4), 0 12px 36px -6px rgb(200 153 46 / 0.55)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "gradient-pan": "gradient-pan 14s ease infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.5s ease both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 40s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      typography: () => ({
        navy: {
          css: {
            "--tw-prose-body": "#3A4049",
            "--tw-prose-headings": "#101D30",
            "--tw-prose-lead": "#5B636E",
            "--tw-prose-links": "#A87C20",
            "--tw-prose-bold": "#1C2026",
            "--tw-prose-counters": "#A87C20",
            "--tw-prose-bullets": "#C8992E",
            "--tw-prose-hr": "#DCE1E8",
            "--tw-prose-quotes": "#101D30",
            "--tw-prose-quote-borders": "#D9AF45",
            "--tw-prose-captions": "#5B636E",
            "--tw-prose-th-borders": "#DCE1E8",
            "--tw-prose-td-borders": "#EEF1F5",
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({ strategy: "class" }),
    require("tailwindcss-animate"),
  ],
};

export default config;
