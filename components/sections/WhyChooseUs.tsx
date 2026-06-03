import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";

const benefits = [
  {
    title: "End-to-End Author Support",
    description:
      "Editing, design, publishing, marketing, and growth, every stage handled by one trusted team.",
  },
  {
    title: "Experienced Specialists",
    description:
      "You work with professionals matched to your genre and goals, not generalists.",
  },
  {
    title: "Personalized Guidance",
    description:
      "Tailored strategy and honest advice for your unique book and ambitions.",
  },
  {
    title: "Publishing Expertise",
    description:
      "Insider knowledge of platforms, metadata, and what actually moves books.",
  },
  {
    title: "Long-Term Growth Focus",
    description:
      "We build careers, not just titles, so your success compounds with every book.",
  },
];

export function WhyChooseUs() {
  return (
    <Section background="navy" spacing="lg" className="overflow-hidden">
      <AuroraBackground grid={false} />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                align="left"
                onDark
                eyebrow="Why Horpiano"
                title="The partner serious authors choose"
                subtitle="We combine the craft of a literary agency with the strategy of a modern publishing consultancy."
              />
              <div className="mt-8">
                <Button href="/about" variant="secondary-dark">
                  Discover our story
                </Button>
              </div>
            </div>
          </Reveal>

          <StaggerContainer className="space-y-4">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-gold-300/40">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-white">{benefit.title}</h3>
                    <p className="mt-1.5 text-navy-100">{benefit.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  );
}
