import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Timeline, type TimelineStep } from "@/components/motion/Timeline";

const steps: TimelineStep[] = [
  {
    icon: "idea",
    title: "Idea",
    description:
      "Shape a vague concept into a clear, compelling vision with planning and strategy.",
  },
  {
    icon: "writing",
    title: "Writing",
    description:
      "Get the words down, through ghostwriting, coaching, or accountability that keeps you moving.",
  },
  {
    icon: "editing",
    title: "Editing",
    description:
      "Refine every level of your manuscript, from structure to the final comma.",
  },
  {
    icon: "design",
    title: "Design",
    description:
      "Wrap your story in a cover and interior that look professionally published.",
  },
  {
    icon: "publish",
    title: "Publishing",
    description:
      "Launch across the right platforms with the setup and metadata that drive reach.",
  },
  {
    icon: "marketing",
    title: "Marketing",
    description:
      "Connect your finished book with the readers who have been waiting for it.",
  },
  {
    icon: "growth",
    title: "Author Growth",
    description:
      "Build a brand, a community, and a career that lasts well beyond one book.",
  },
];

export function AuthorJourney() {
  return (
    <Section background="light" spacing="lg">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Author Journey"
            title="From first idea to lasting career"
            subtitle="Wherever you are on the path, we meet you there, and guide you all the way to author success."
          />
        </Reveal>
        <div className="mt-16">
          <Timeline steps={steps} />
        </div>
      </Container>
    </Section>
  );
}
