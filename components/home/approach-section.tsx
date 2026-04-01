import Image from "next/image";

export function ApproachSection() {
  return (
    <section className="py-12 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              The Best of Both Worlds
            </h2>
            <p className="text-xl font-light text-on-surface-variant">
              We bridge the gap between high-performance conditioning and
              mindful alignment.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="material-symbols-outlined text-primary text-6xl opacity-20">
              all_inclusive
            </span>
          </div>
        </div>

        <div className="space-y-12">
          {/* Precision Pilates */}
          <div className="group relative overflow-hidden rounded-[2.5rem] h-[500px] flex items-center bg-surface-container-high">
            <div className="absolute inset-0 w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700">
              <Image
                src="/images/approach-pilates.jpg"
                alt="Serene pilates studio with reformer equipment"
                fill
                className="object-cover brightness-75"
              />
            </div>
            <div className="relative z-10 p-12 md:p-20 text-white max-w-xl">
              <h3 className="text-4xl font-medium mb-6">Precision Pilates</h3>
              <p className="text-lg font-light text-white/90 leading-relaxed mb-8">
                Realign your foundation. Focus on core stability, postural
                correction, and the intricate mechanics of movement to prevent
                injury and enhance daily vitality.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-semibold tracking-wide uppercase text-sm border-b-2 border-white/30 pb-1 hover:border-white transition-all"
              >
                Learn the Method
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Power Training */}
          <div className="group relative overflow-hidden rounded-[2.5rem] h-[500px] flex items-center justify-end text-right bg-surface-container-high">
            <div className="absolute inset-0 w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700">
              <Image
                src="/images/approach-power.jpg"
                alt="Modern fitness equipment in a minimalist gym setting"
                fill
                className="object-cover brightness-75"
              />
            </div>
            <div className="relative z-10 p-12 md:p-20 text-white max-w-xl">
              <h3 className="text-4xl font-medium mb-6">Power Training</h3>
              <p className="text-lg font-light text-white/90 leading-relaxed mb-8">
                Challenge your limits. Data-driven strength protocols designed
                to increase bone density, metabolic efficiency, and absolute
                power without burnout.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-semibold tracking-wide uppercase text-sm border-b-2 border-white/30 pb-1 hover:border-white transition-all flex-row-reverse"
              >
                Explore Strength
                <span className="material-symbols-outlined text-lg ml-2">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
