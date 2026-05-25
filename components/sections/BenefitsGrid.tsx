"use client";

import Card from "@/components/ui/Card";
import { Briefcase, TrendingUp, Users, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BenefitsGrid = () => {
  const { ref, isVisible } = useScrollAnimation();
  const benefits = [
    {
      id: 1,
      title: "Be Your Own Boss",
      description: "Set a schedule that works for you and build your business from anywhere.",
      icon: Briefcase,
    },
    {
      id: 2,
      title: "Earn on Your Terms",
      description: "Make money from every sale, whether you prefer online sharing or face-to-face selling.",
      icon: TrendingUp,
    },
    {
      id: 3,
      title: "Supportive Community",
      description: "Get guidance, mentorship and access to training that helps you boost your earnings.",
      icon: Users,
    },
    {
      id: 4,
      title: "No Experience Needed",
      description: "Anyone can start. We give you the tools, support and know-how from day one.",
      icon: Zap,
    },
  ];

  return (
    <section
      id="why-join"
      className="py-20 px-4 md:px-8 lg:px-12 bg-cream-warm"
      ref={ref}
    >
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-luxury-charcoal mb-4">
            Why Become an Avon Representative?
          </h2>
          <p className="text-lg text-luxury-taupe max-w-2xl mx-auto">
            Becoming an Avon Representative is more than just selling products.
            It's about financial freedom, personal growth and joining a vibrant
            community. Here's what you can expect:
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={benefit.id} className={`transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                <div className="flex items-start gap-4 mb-4">
                  <IconComponent className="text-luxury-plum flex-shrink-0 mt-1" size={24} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-luxury-charcoal mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-luxury-taupe leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
