import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { stats } from "@/data/stats";

export function TrustStats() {
  return (
    <Section background="cream" spacing="md">
      <Container>
        <StaggerContainer className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.id} className="text-center">
              <div className="font-serif text-display-md text-navy-900 sm:text-display-lg">
                <span className="text-gradient-gold">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </span>
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-ink-muted">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
