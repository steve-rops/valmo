import { ApproachSection } from "@/components/home/approach-section/approach-section";
import { CallToAction } from "@/components/home/call-to-action";
import { ExpertsSection } from "@/components/home/experts-section";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesGrid } from "@/components/home/services-grid";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ApproachSection />
      <ExpertsSection />
      <ServicesGrid />
      <CallToAction />
    </main>
  );
}
