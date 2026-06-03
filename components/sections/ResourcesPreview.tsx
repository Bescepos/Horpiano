import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { getLatestResources } from "@/lib/data/getResources";

export function ResourcesPreview() {
  const latest = getLatestResources(3);
  return (
    <Section background="light" spacing="lg">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Resources"
            title="Insights to help you write, publish, and grow"
            subtitle="Practical writing tips, publishing guides, and marketing strategies from our team."
          />
        </Reveal>

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
          {latest.map((resource) => (
            <StaggerItem key={resource.id} className="h-full">
              <ResourceCard resource={resource} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal className="mt-12 flex justify-center">
          <Button href="/resources" variant="secondary">
            Explore all resources
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
