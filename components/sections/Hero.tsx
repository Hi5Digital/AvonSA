import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 lg:px-12 bg-cream-warm">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-luxury-charcoal">
              Start Your Avon Journey Today
            </h1>
            <p className="text-lg text-luxury-taupe leading-relaxed max-w-lg">
              Become your own boss, earn extra income and build a flexible
              business that fits your lifestyle, backed by the trusted Avon
              brand.
            </p>
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <Button variant="primary">Join Avon</Button>
              <Button variant="secondary">Contact Us</Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-sm overflow-hidden bg-gradient-to-br from-luxury-plum/10 to-luxury-berry/10 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">💄</div>
              <p className="text-luxury-taupe font-serif text-xl">
                Premium Beauty Opportunity
              </p>
              <p className="text-sm text-luxury-taupe">
                High-fashion, editorial-style journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
