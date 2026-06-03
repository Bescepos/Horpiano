export const siteConfig = {
  name: "emilybyron",
  legalName: "emilybyron",
  /** Update to the production domain when deployed. */
  url: "https://emilybyron.com",
  tagline: "Author Services & Publishing Support",
  description:
    "emilybyron helps writers succeed with professional editing, ghostwriting, publishing, branding, marketing, and author development services, from first idea to a published, growing career.",
  contactEmail: "horpianog@gmail.com",
  /** Additional email shown on the contact page. Leave "" to hide. */
  secondaryEmail: "trustedreviewservices@gmail.com",
  /** WhatsApp number in international format, digits only (country code + number,
   *  no "+", spaces, or dashes), e.g. "15551234567". Leave "" to hide the link. */
  whatsapp: "17823330405",
  /** Telegram username without the "@", e.g. "emilybyron". Leave "" to hide the link. */
  telegram: "Authorstrategist",
  /** Google Calendar appointment scheduling link used by the "Book a Consultation" CTAs. */
  bookingUrl: "https://calendar.app.google/KcuQgTX2FBiLDsAg9",
  locale: "en_US",
  founded: "2026",
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "Instagram", href: "#", platform: "instagram" },
    { label: "LinkedIn", href: "#", platform: "linkedin" },
    { label: "X", href: "#", platform: "x" },
    { label: "Facebook", href: "#", platform: "facebook" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
