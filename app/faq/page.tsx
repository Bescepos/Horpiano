import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { FAQExplorer } from "@/components/faq/FAQExplorer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about publishing, editing, ghostwriting, marketing, copyright, audiobooks, and author branding with emilybyron.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqPageJsonLd(faqs),
        ]}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
        eyebrow="FAQ"
        title="Frequently asked"
        highlight="questions"
        subtitle="Everything you need to know about working with emilybyron. Filter by topic or browse them all."
      />

      <Section background="white" spacing="lg">
        <Container>
          <Reveal>
            <FAQExplorer />
          </Reveal>
        </Container>
      </Section>

      <FinalCTA
        heading="Still have questions?"
        body="We're happy to help. Reach out and we'll point you in the right direction."
        buttonLabel="Book a Consultation"
      />
    </>
  );
}
