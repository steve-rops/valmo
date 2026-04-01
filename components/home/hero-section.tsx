import { Button } from "@/components/ui/button";
import { Image } from "@imagekit/next";

export function HeroSection() {
  return (
    <section className="relative min-h-[921px] px-8 max-w-7xl mx-auto overflow-hidden mt-4 md:mt-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center w-full">
        <div className="z-10 w-full">
          {/* <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
            A Modern Sanctuary
          </span> */}
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-4xl md:text-6xl font-light">VALMO Fitness</h1>
            <h2 className="text-2xl md:text-4xl text-primary italic tracking-tight">
              Strength. Balance. Longevity.
            </h2>
            <p className="text-sm md:text-base font-light text-on-surface-variant max-w-lg mb-6 md:mb-12 leading-relaxed">
              Redefining movement through the synthesis of athletic rigor and
              therapeutic grace. Our mission is to build resilient bodies that
              thrive today and endure tomorrow.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
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

        <div className="relative h-[600px] md:h-[800px] w-full flex justify-center">
          {/* Overlapping Editorial Image Composition */}
          <div className=" w-full h-full rounded-3xl overflow-hidden ">
            <Image
              src="/CAT02416.JPG"
              alt="Professional trainer performing focused strength exercise"
              fill
              className="object-cover rounded-lg "
              priority
            />
          </div>
          {/* <div className="absolute left-0 bottom-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl z-10 border-12 border-surface bg-surface-container-high">
            <Image
              src="/images/hero-2.jpg"
              alt="Elegant pilates movement demonstrating flexibility and balance"
              fill
              className="object-cover"
              priority
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
