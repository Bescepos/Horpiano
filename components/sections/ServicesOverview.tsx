import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { ServiceCard } from "@/components/services/ServiceCard";
import { getAllServices } from "@/lib/data/getService";

export function ServicesOverview() {
  const services = getAllServices();
  return (
    <Section background="white" spacing="lg">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Everything your book needs, under one roof"
            subtitle="A complete suite of author services, so you can move from manuscript to market with one trusted partner at every step."
          />
        </Reveal>

        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal className="mt-12 flex justify-center">
          <Button href="/services" variant="secondary">
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
