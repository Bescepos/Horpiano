import type { Metadata, Viewport } from "next";
import "./globals.css";
import { manrope, fraunces } from "@/lib/utils/fonts";
import { siteConfig } from "@/lib/seo/siteConfig";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonld";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingConsultationButton } from "@/components/layout/FloatingConsultationButton";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}: ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "author services",
    "book editing",
    "ghostwriting",
    "self-publishing",
    "book marketing",
    "author branding",
    "book cover design",
    "publishing consultant",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name}: ${siteConfig.tagline}`,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}: ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#101D30",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-off-white font-sans antialiased">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingConsultationButton />
          <ScrollToTop />
        </MotionProvider>
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
