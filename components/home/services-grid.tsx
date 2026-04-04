import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Dumbbell, 
  Sprout, 
  Activity, 
  BarChart, 
  Users, 
  Apple 
} from "lucide-react";

export function ServicesGrid() {
  const services = [
    {
      title: "Personal Training",
      icon: Dumbbell,
      description: "One-on-one sessions tailored to your specific biomechanics and goals.",
    },
    {
      title: "Reformer Pilates",
      icon: Sprout,
      description: "Focus on alignment and breathwork for a balanced, mobile body.",
    },
    {
      title: "Mobility & Recovery",
      icon: Activity,
      description: "Strategic movement aimed at increasing joint health and flexibility.",
    },
    {
      title: "Movement Assessment",
      icon: BarChart,
      description: "Deep-dive screening to identify and correct structural imbalances.",
    },
    {
      title: "Semi-Private Pods",
      icon: Users,
      description: "Boutique small group training (max 4) for focused attention.",
    },
    {
      title: "Longevity Coaching",
      icon: Apple,
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
            <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-container-highest border border-transparent">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="p-10 bg-[#f6f5ef] hover:bg-[#f0efe9] transition-colors relative">
                <Icon className="w-6 h-6 text-primary mb-6" />
                <h5 className="text-xl font-medium mb-3">{service.title}</h5>
                <p className="font-light text-on-surface-variant text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
