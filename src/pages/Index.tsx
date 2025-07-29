import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero-section" className="scroll-mt-20">
        <HeroSection />
      </section>
      
      {/* Benefits Section */}
      <section id="benefits-section" className="scroll-mt-20">
        <BenefitsSection />
      </section>
      
      {/* Target Audience Section */}
      <section id="audience-section" className="scroll-mt-20">
        <TargetAudienceSection />
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials-section" className="scroll-mt-20">
        <TestimonialsSection />
      </section>
      
      {/* Pricing Section */}
      <section id="pricing-section" className="scroll-mt-20">
        <PricingSection />
      </section>
      
      {/* CTA Section */}
      <section id="cta-section" className="scroll-mt-20">
        <CTASection />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;