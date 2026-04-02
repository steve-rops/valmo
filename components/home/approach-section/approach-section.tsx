import TrainerCard from "./trainer-card";

export function ApproachSection() {
  return (
    <section className="py-12 my-12 px-8 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl text-center md:text-start font-medium tracking-tight mb-4 text-primary">
              The Best of Both Worlds
            </h2>
            <p className="text-xl font-light text-primary text-center md:text-start">
              We bridge the gap between high-performance conditioning and
              mindful alignment.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {/* Precision Pilates */}
          <TrainerCard
            image="/images/approach-section/pilatesBeds.jpg"
            title="Precision Pilates"
            name="Valia"
            description="Realign your foundation. Focus on core stability, postural correction, and the intricate mechanics of movement to prevent injury and enhance daily vitality."
            link="#"
            cta="Learn the Method"
            ikimage="/valia.JPG"
            photoIsRight={false}
          />

          {/* Power Training */}
          <TrainerCard
            bgImageTransparency={5}
            image="/images/approach-section/dumbels.jpg"
            title="Power Training"
            name="Mode"
            description="Challenge your limits. Data-driven strength protocols designed to increase bone density, metabolic efficiency, and absolute power without burnout."
            link="#"
            cta="Explore Strength"
            ikimage="/mode.jpg"
            photoIsRight={true}
          />
        </div>
      </div>
    </section>
  );
}
