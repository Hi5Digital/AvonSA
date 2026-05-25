"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const OnboardingSteps = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description:
        "Complete a quick online form to create your Avon account. It takes only a few minutes and you can register from your phone. Alternatively, send us a WhatsApp.",
    },
    {
      number: "02",
      title: "Get Connected",
      description:
        "You'll receive a welcome message with your Representative details. Follow the instructions to activate your account and get connected with your support team.",
    },
    {
      number: "03",
      title: "Share & Sell",
      description:
        "Start sending out your digital brochure through WhatsApp, Facebook or SMS. Friends and customers can browse products and place orders through you.",
    },
    {
      number: "04",
      title: "Earn & Grow",
      description:
        "You earn from every order placed with your Representative account. The more you share and stay active, the more your commission grows.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 md:px-8 lg:px-12 bg-cream-light"
      ref={ref}
    >
      <div className="container-max">
        <h2 className="text-center text-luxury-charcoal mb-16">
          The Onboarding Journey
        </h2>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              {/* Step Number */}
              <div className="mb-6">
                <div className="text-6xl font-serif font-light text-luxury-plum/20 mb-2">
                  {step.number}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-luxury-charcoal">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-luxury-taupe leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-luxury-plum/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
