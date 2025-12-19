import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ConvergenceSection } from "@/components/sections/ConvergenceSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ConvergenceSection />
        <HowItWorksSection />
        <AudienceSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
