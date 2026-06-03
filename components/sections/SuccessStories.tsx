import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { StoryCard } from "@/components/stories/StoryCard";
import { stories } from "@/data/stories";

export function SuccessStories() {
  const featured = stories.filter((s) => s.featured).slice(0, 3);
  return (
    <Section background="white" spacing="lg">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Success Stories"
            title="Books we helped bring to life"
            subtitle="Real authors, real results. From debut novels to business bestsellers, here's what's possible with the right team behind you."
          />
        </Reveal>

        <StaggerContainer className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((story) => (
            <StaggerItem key={story.id} className="h-full">
              <StoryCard story={story} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal className="mt-12 flex justify-center">
          <Button href="/success-stories" variant="secondary">
            Read more success stories
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
