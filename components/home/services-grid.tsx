import { Button } from "@/components/ui/button";

export function ServicesGrid() {
  const services = [
    {
      title: "Personal Training",
      icon: "fitness_center",
      description: "One-on-one sessions tailored to your specific biomechanics and goals.",
    },
    {
      title: "Reformer Pilates",
      icon: "spa",
      description: "Focus on alignment and breathwork for a balanced, mobile body.",
    },
    {
      title: "Mobility & Recovery",
      icon: "self_improvement",
      description: "Strategic movement aimed at increasing joint health and flexibility.",
    },
    {
      title: "Movement Assessment",
      icon: "analytics",
      description: "Deep-dive screening to identify and correct structural imbalances.",
    },
    {
      title: "Semi-Private Pods",
      icon: "group",
      description: "Boutique small group training (max 4) for focused attention.",
    },
    {
      title: "Longevity Coaching",
      icon: "nutrition",
      description: "A holistic roadmap for sustainable health and lifelong vitality.",
    },
  ];

  return (
    <section className="py-24 px-8 bg-surface-container-highest">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10">
          <h2 className="text-4xl font-medium">Curated Wellness Services</h2>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-6 rounded-full font-medium transition-all flex items-center gap-2 group"
          >
            Book a discovery call
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              calendar_today
            </span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {services.map((service) => (
            <div key={service.title} className="p-10 bg-surface/50 hover:bg-surface transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-6">
                {service.icon}
              </span>
              <h5 className="text-xl font-medium mb-3">{service.title}</h5>
              <p className="font-light text-on-surface-variant">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
