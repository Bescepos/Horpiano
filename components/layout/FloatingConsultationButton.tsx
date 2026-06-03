"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function FloatingConsultationButton() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Don't show on the consultation page itself.
  if (pathname.startsWith("/consultation")) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            href="/consultation"
            className="group flex items-center gap-2.5 rounded-pill bg-gold-gradient px-5 py-3.5 font-semibold text-navy-900 shadow-gold-glow animate-pulse-glow"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Book a Consultation</span>
            <span className="sm:hidden">Consult</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
