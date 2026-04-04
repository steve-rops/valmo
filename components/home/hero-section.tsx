import { Button } from "@/components/ui/button";
import { Image } from "@imagekit/next";

export function HeroSection() {
  return (
    <section className="relative px-8 max-w-7xl mx-auto overflow-hidden mt-4 md:mt-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center w-full">
        <div className="z-10 w-full">
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-4xl md:text-6xl font-light text-center md:text-start">
              VALMO Fitness
            </h1>
            <h2 className="text-2xl md:text-4xl text-primary italic tracking-tight text-center md:text-start">
              Strength. Balance. Longevity.
            </h2>
            <p className="text-sm md:text-base font-light text-on-surface-variant max-w-lg mb-6 md:mb-12 leading-relaxed text-center md:text-start">
              Redefining movement through the synthesis of athletic rigor and
              therapeutic grace. Our mission is to build resilient bodies that
              thrive today and endure tomorrow.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
            <Button
              size="lg"
              className="bg-primary text-secondary px-10 py-6 rounded-full text-lg font-medium shadow-xl shadow-primary/10 hover:translate-y-[-2px] transition-all"
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-6 rounded-full text-lg border-primary border-2 font-medium  transition-all"
            >
              View Philosophy
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full flex justify-center">
          {/* Overlapping Editorial Image Composition */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image
              src="/valiaKaiMode.jpg"
              alt="Professional trainer performing focused strength exercise"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top rounded-lg "
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
