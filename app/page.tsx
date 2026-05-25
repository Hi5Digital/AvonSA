import Hero from "@/components/sections/Hero";
import SignUpForm from "@/components/sections/SignUpForm";
import ImageGrid from "@/components/sections/ImageGrid";
import ValueProp from "@/components/sections/ValueProp";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import TrustBanner from "@/components/sections/TrustBanner";
import OnboardingSteps from "@/components/sections/OnboardingSteps";
import RequirementsVsSupport from "@/components/sections/RequirementsVsSupport";
import BrochureSection from "@/components/sections/BrochureSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SignUpForm />
      <ImageGrid />
      <ValueProp />
      <BenefitsGrid />
      <TrustBanner />
      <OnboardingSteps />
      <RequirementsVsSupport />
      <BrochureSection />
    </>
  );
}
