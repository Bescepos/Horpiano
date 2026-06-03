import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AuthorJourney } from "@/components/sections/AuthorJourney";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Testimonials } from "@/components/sections/Testimonials";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AuthorJourney />
      <WhyChooseUs />
      <SuccessStories />
      <Testimonials />
      <ResourcesPreview />
      <FinalCTA highlight="" />
    </>
  );
}
