import ExpertsTrainerCard from "./experts-trainer-card";

export function ExpertsSection() {
  return (
    <section className="py-12 my-12 px-4 md:px-18 mx-auto bg-primary">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-medium text-secondary tracking-tight mb-6">
          Guided by Experts
        </h2>
        <div className="w-24 h-1 bg-primary-foreground mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-20">
        {/* Valia */}
        <ExpertsTrainerCard
          name="Valia"
          title="Pilates Lead & Holistic Wellness Specialist"
          description="True strength is found in stillness and control. My philosophy centers on mindful movement—teaching you how to inhabit your body with grace and efficiency."
          ikimage="/valia-expert.jpg"
          studies={["BSc Sports Science", "Certified Reformer"]}
        />

        {/* Mode */}
        <ExpertsTrainerCard
          imageClassName="object-top"
          name="Mode"
          title="Head of Performance & Athletic Longevity"
          description="Longevity is an active pursuit. I focus on building structural integrity through intelligent resistance training, ensuring your body performs at its peak for decades."
          ikimage="/modeExpert.JPG"
          studies={["Strength Coach L3", "Mobility Expert"]}
        />
      </div>
    </section>
  );
}
