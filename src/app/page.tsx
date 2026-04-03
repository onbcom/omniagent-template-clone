import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrustedBySection from "@/components/TrustedBySection";
import SignalResponseSection from "@/components/SignalResponseSection";
import ManualVsAISection from "@/components/ManualVsAISection";
import AgentsPipelineSection from "@/components/AgentsPipelineSection";
import ROICalculatorSection from "@/components/ROICalculatorSection";
import CorePillarsSection from "@/components/CorePillarsSection";
import RoleBasedSection from "@/components/RoleBasedSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ScrollReveal>
          <FeaturesSection />
        </ScrollReveal>
        <ScrollReveal>
          <TrustedBySection />
        </ScrollReveal>
        <ScrollReveal>
          <SignalResponseSection />
        </ScrollReveal>
        <ScrollReveal>
          <ManualVsAISection />
        </ScrollReveal>
        <ScrollReveal>
          <AgentsPipelineSection />
        </ScrollReveal>
        <ScrollReveal>
          <ROICalculatorSection />
        </ScrollReveal>
        <ScrollReveal>
          <CorePillarsSection />
        </ScrollReveal>
        <ScrollReveal>
          <RoleBasedSection />
        </ScrollReveal>
        <ScrollReveal>
          <HowItWorksSection />
        </ScrollReveal>
        <ScrollReveal>
          <CaseStudiesSection />
        </ScrollReveal>
        <ScrollReveal>
          <PricingSection />
        </ScrollReveal>
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal>
          <BlogSection />
        </ScrollReveal>
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
