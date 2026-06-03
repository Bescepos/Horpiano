import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Divider } from "@/components/ui/Divider";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/seo/siteConfig";

interface FinalCTAProps {
  heading?: string;
  highlight?: string;
  body?: string;
  buttonLabel?: string;
}

export function FinalCTA({
  heading = "Ready to Bring Your Book to Life?",
  highlight,
  body = "Whether you have a finished manuscript or just the spark of an idea, we'll help you take the next step with confidence.",
  buttonLabel = "Book Your Consultation",
}: FinalCTAProps) {
  return (
    <Section background="aurora" spacing="lg" className="overflow-hidden">
      <AuroraBackground />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade">
            <Divider variant="ornament" onDark className="mb-8" />
          </Reveal>
          <Reveal variant="fade-up">
            <h2 className="font-serif text-display-md text-white sm:text-display-lg">
              {heading}
              {highlight && (
                <>
                  {" "}
                  <GradientText>{highlight}</GradientText>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={0.05}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-navy-100">{body}</p>
          </Reveal>
          <Reveal variant="fade-up" delay={0.1}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href={siteConfig.bookingUrl} size="lg">
                {buttonLabel}
              </Button>
              <Button href="/contact" variant="secondary-dark" size="lg">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
