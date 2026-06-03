"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { easePremium } from "./motion.config";

interface CarouselProps {
  slides: ReactNode[];
  ariaLabel?: string;
  autoplay?: boolean;
  interval?: number;
  className?: string;
}

/** Accessible carousel with autoplay, swipe, arrows, and dots. */
export function Carousel({
  slides,
  ariaLabel = "Carousel",
  autoplay = true,
  interval = 6500,
  className,
}: CarouselProps) {
  const reduce = useReducedMotion();
  const baseId = useId();
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (next: number, dir: number) => {
      setState([(next + count) % count, dir]);
    },
    [count],
  );

  const next = useCallback(() => go(index + 1, 1), [go, index]);
  const prev = useCallback(() => go(index - 1, -1), [go, index]);

  // Autoplay (paused on hover/focus, when off-screen tab, or reduced motion)
  useEffect(() => {
    if (!autoplay || reduce || paused || count <= 1) return;
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    const id = window.setInterval(next, interval);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [autoplay, reduce, paused, count, interval, next]);

  const onDragEnd = (_e: unknown, info: PanInfo) => {
    const threshold = 80;
    if (info.offset.x < -threshold || info.velocity.x < -500) next();
    else if (info.offset.x > threshold || info.velocity.x > 500) prev();
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: reduce ? 0 : dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: reduce ? 0 : dir * -60 }),
  };

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: easePremium }}
            drag={count > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={onDragEnd}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}`}
            id={`${baseId}-slide-${index}`}
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-gold-400/60 hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2.5" role="tablist" aria-label="Choose slide">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i, i > index ? 1 : -1)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index
                    ? "w-7 bg-gold-gradient"
                    : "w-2 bg-white/30 hover:bg-white/50",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-gold-400/60 hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
