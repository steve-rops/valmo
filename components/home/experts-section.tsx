import { Image } from "@imagekit/next";

export function ExpertsSection() {
  return (
    <section className="py-12 my-12 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-medium tracking-tight mb-6">
          Guided by Experts
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-20">
        {/* Valia */}
        <div className="flex flex-col gap-8">
          <div className="relative aspect-4/5 rounded-4xl overflow-hidden bg-surface-container-high">
            <Image
              src="/valia-expert.jpg"
              alt="Portrait of trainer Valia in a serene studio setting"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="px-4">
            <h4 className="text-3xl font-medium mb-2">Valia</h4>
            <p className="text-primary font-medium tracking-widest uppercase text-xs mb-6">
              Pilates Lead & Holistic Wellness Specialist
            </p>
            <p className="text-on-surface-variant font-light leading-relaxed mb-6">
              &quot;True strength is found in stillness and control. My
              philosophy centers on mindful movement—teaching you how to inhabit
              your body with grace and efficiency.&quot;
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed rounded-full text-sm font-medium">
                BSc Sports Science
              </span>
              <span className="px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed rounded-full text-sm font-medium">
                Certified Reformer
              </span>
            </div>
          </div>
        </div>

        {/* Mode */}
        <div className="flex flex-col gap-8 md:mt-24">
          <div className="relative aspect-4/5 rounded-4xl overflow-hidden bg-surface-container-high">
            <Image
              src="/images/expert-mode.jpg"
              alt="Portrait of trainer Mode focused and professional"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="px-4">
            <h4 className="text-3xl font-medium mb-2">Mode</h4>
            <p className="text-primary font-medium tracking-widest uppercase text-xs mb-6">
              Head of Performance & Athletic Longevity
            </p>
            <p className="text-on-surface-variant font-light leading-relaxed mb-6">
              &quot;Longevity is an active pursuit. I focus on building
              structural integrity through intelligent resistance training,
              ensuring your body performs at its peak for decades.&quot;
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed rounded-full text-sm font-medium">
                Strength Coach L3
              </span>
              <span className="px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed rounded-full text-sm font-medium">
                Mobility Expert
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
