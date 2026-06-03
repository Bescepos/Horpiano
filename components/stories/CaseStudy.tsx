import { BookCoverMock } from "@/components/art/BookCoverMock";
import { Badge } from "@/components/ui/Badge";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { getServiceBySlug } from "@/lib/data/getService";
import { cn } from "@/lib/utils/cn";
import type { Story } from "@/lib/types";

interface CaseStudyProps {
  story: Story;
  reversed?: boolean;
}

export function CaseStudy({ story, reversed }: CaseStudyProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Visual */}
      <Reveal
        variant={reversed ? "right" : "left"}
        className={cn(reversed && "lg:order-2")}
      >
        <div className="mx-auto max-w-xs">
          <div className="mx-auto w-56">
            <BookCoverMock
              title={story.title}
              author={story.author}
              from={story.cover.from}
              to={story.cover.to}
            />
          </div>
          {story.metrics && (
            <div className="mt-8 grid grid-cols-3 gap-3">
              {story.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-gray-line/70 bg-white p-3 text-center shadow-soft"
                >
                  <div className="font-serif text-lg text-navy-900">
                    <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
                  </div>
                  <div className="mt-1 text-[0.65rem] leading-tight text-ink-muted">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Reveal>

      {/* Text */}
      <Reveal variant={reversed ? "left" : "right"}>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="gold" size="sm">
              Case Study
            </Badge>
            {story.genre && (
              <span className="text-sm text-ink-muted">{story.genre}</span>
            )}
          </div>
          <h3 className="mt-4 font-serif text-display-sm text-navy-900">{story.title}</h3>
          <p className="mt-1 text-ink-muted">by {story.author}</p>

          <dl className="mt-6 space-y-4">
            {story.challenge && (
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-gold-700">
                  The Challenge
                </dt>
                <dd className="mt-1 text-charcoal-light">{story.challenge}</dd>
              </div>
            )}
            {story.solution && (
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-gold-700">
                  Our Solution
                </dt>
                <dd className="mt-1 text-charcoal-light">{story.solution}</dd>
              </div>
            )}
            {story.outcome && (
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-gold-700">
                  The Outcome
                </dt>
                <dd className="mt-1 text-charcoal-light">{story.outcome}</dd>
              </div>
            )}
          </dl>

          {story.servicesUsed && story.servicesUsed.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {story.servicesUsed.map((slug) => {
                const svc = getServiceBySlug(slug);
                return (
                  <Badge key={slug} variant="soft" size="sm">
                    {svc?.title ?? slug}
                  </Badge>
                );
              })}
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}
