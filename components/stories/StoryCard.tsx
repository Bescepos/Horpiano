import { BookCoverMock } from "@/components/art/BookCoverMock";
import { Badge } from "@/components/ui/Badge";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { HoverLift } from "@/components/motion/HoverLift";
import type { Story } from "@/lib/types";

const kindLabel: Record<Story["kind"], string> = {
  "success-story": "Success Story",
  "featured-book": "Featured Book",
  "case-study": "Case Study",
};

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <HoverLift className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-line/70 bg-white shadow-card">
        <div className="flex gap-5 p-6">
          <div className="w-24 shrink-0 sm:w-28">
            <BookCoverMock
              title={story.title}
              author={story.author}
              from={story.cover.from}
              to={story.cover.to}
            />
          </div>
          <div className="flex flex-1 flex-col">
            <Badge variant="soft" size="sm">
              {kindLabel[story.kind]}
            </Badge>
            <h3 className="mt-3 font-serif text-xl leading-tight text-navy-900">
              {story.title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              by {story.author}
              {story.genre ? ` · ${story.genre}` : ""}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-light">
              {story.summary}
            </p>
          </div>
        </div>

        {story.metrics && story.metrics.length > 0 && (
          <div className="mt-auto grid grid-cols-3 divide-x divide-gray-line/70 border-t border-gray-line/70 bg-light-gray/40">
            {story.metrics.map((metric) => (
              <div key={metric.label} className="px-3 py-4 text-center">
                <div className="font-serif text-xl text-navy-900">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </div>
                <div className="mt-1 text-[0.7rem] leading-tight text-ink-muted">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </article>
    </HoverLift>
  );
}
