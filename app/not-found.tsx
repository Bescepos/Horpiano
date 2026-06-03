import Link from "next/link";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-navy-900 px-6 py-32 text-center text-white">
      <AuroraBackground />
      <div className="relative max-w-xl">
        <p className="font-serif text-display-2xl leading-none">
          <GradientText>404</GradientText>
        </p>
        <h1 className="mt-4 font-serif text-display-sm text-white">
          This page wandered off the shelf
        </h1>
        <p className="mt-4 text-navy-100">
          The page you're looking for doesn't exist or has been moved. Let's get you back to
          your story.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/services" variant="secondary-dark" size="lg">
            Browse Services
          </Button>
        </div>
        <p className="mt-8 text-sm text-navy-200">
          Need help?{" "}
          <Link href="/contact" className="font-medium text-gold-300 hover:text-gold-200">
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
}
