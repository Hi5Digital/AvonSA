"use client";

import Button from "@/components/ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BrochureSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-cream-light" ref={ref}>
      <div className="container-max">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Visual */}
          <div className="relative h-96 rounded-sm overflow-hidden bg-gradient-to-br from-luxury-rose/20 to-luxury-plum/20 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-7xl">📕</div>
              <p className="text-luxury-taupe font-serif text-lg">
                January 2026 Brochure
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-luxury-charcoal">
              Want to Place an Order?
            </h2>
            <p className="text-lg text-luxury-taupe leading-relaxed">
              The digital Avon brochure is packed with beauty favourites,
              monthly deals and new launches. Have a look through the latest
              products and order whenever you're ready.
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-luxury-taupe font-medium">
                Avon Brochure January 2026
              </p>
              <Button variant="primary" size="lg">
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
