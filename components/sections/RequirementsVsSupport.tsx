"use client";

import Card from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const RequirementsVsSupport = () => {
  const { ref, isVisible } = useScrollAnimation();
  const requirements = ["An ID/Passport", "A mobile phone", "Motivation to Succeed"];
  const support = [
    "A team leader who supports your goals",
    "Digital brochures you can share instantly",
    "Free online training and product updates",
    "Tips to grow your customer base and increase your earnings",
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-white" ref={ref}>
      <div className="container-max">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Requirements */}
          <Card noBorder className={`bg-cream-warm transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <h3 className="font-serif text-2xl font-semibold text-luxury-charcoal mb-6">
              What You'll Need to Get Started
            </h3>
            <ul className="space-y-4">
              {requirements.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-luxury-plum flex-shrink-0 mt-1" size={20} />
                  <span className="text-luxury-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Support */}
          <Card noBorder className={`bg-cream-warm transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}>
            <h3 className="font-serif text-2xl font-semibold text-luxury-charcoal mb-2">
              How We Support You
            </h3>
            <p className="text-sm text-luxury-taupe mb-6">
              From day one, you're never on your own. You'll get:
            </p>
            <ul className="space-y-4 mb-6">
              {support.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-luxury-plum flex-shrink-0 mt-1" size={20} />
                  <span className="text-luxury-charcoal">{item}</span>
                </li>
              ))}
            </ul>
            <p className="italic text-sm text-luxury-taupe font-serif">
              "The more you learn, the more you earn."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RequirementsVsSupport;
