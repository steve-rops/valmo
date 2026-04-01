import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex items-center px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center w-full">
        <div className="z-10">
          {/* <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
            A Modern Sanctuary
          </span> */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-tight mb-8">
            VALMO Fitness <br />
            <span className="text-primary italic">
              Strength. Balance. Longevity.
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light text-on-surface-variant max-w-lg mb-12 leading-relaxed">
            Redefining movement through the synthesis of athletic rigor and
            therapeutic grace. Our mission is to build resilient bodies that
            thrive today and endure tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-on-primary px-10 py-6 rounded-full text-lg font-medium shadow-xl shadow-primary/10 hover:translate-y-[-2px] transition-all"
            >
              Start Your Journey
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="bg-surface-container-high text-on-surface px-10 py-6 rounded-full text-lg font-medium hover:bg-surface-container-highest transition-all"
            >
              View Philosophy
            </Button>
          </div>
        </div>

        <div className="relative h-[600px] md:h-[800px] w-full flex justify-end">
          {/* Overlapping Editorial Image Composition */}
          <div className="absolute right-0 top-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-0 translate-x-4 bg-surface-container-high">
            <Image
              src="/images/hero-1.jpg"
              alt="Professional trainer performing focused strength exercise"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute left-0 bottom-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl z-10 border-12 border-surface bg-surface-container-high">
            <Image
              src="/images/hero-2.jpg"
              alt="Elegant pilates movement demonstrating flexibility and balance"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
