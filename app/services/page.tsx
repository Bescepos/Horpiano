import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceCategoryAccordion } from "@/components/services/ServiceCategoryAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { getAllServices } from "@/lib/data/getService";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Horpiano's full suite of author services, editorial, ghostwriting, design, publishing, branding, marketing, coaching, audiobooks, rights, and more.",
  path: "/services",
});

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        eyebrow="Our Services"
        title="Comprehensive author services for"
        highlight="every stage"
        subtitle="From the first spark of an idea to a thriving author career, explore the full range of ways we help writers succeed."
      >
        <Button href="/consultation" size="lg">
          Book a Consultation
        </Button>
        <Button href="/contact" variant="secondary-dark" size="lg">
          Talk to Us
        </Button>
      </PageHero>

      <Section background="white" spacing="lg">
        <Container size="narrow">
          <Reveal>
            <p className="mb-10 text-center text-lg leading-relaxed text-ink-muted">
              Eleven service families, dozens of specialized offerings, all delivered by
              specialists who understand your genre and your goals. Expand any area to see
              exactly how we can help.
            </p>
          </Reveal>
          <Reveal>
            <ServiceCategoryAccordion services={services} />
          </Reveal>
        </Container>
      </Section>

      <FinalCTA
        heading="Not sure where to start?"
        body="Book a free consultation and we'll map the exact services your book needs."
        buttonLabel="Book Your Consultation"
      />
    </>
  );
}
