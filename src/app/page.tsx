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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TrustedBySection />
        <SignalResponseSection />
        <ManualVsAISection />
        <AgentsPipelineSection />
        <ROICalculatorSection />
        <CorePillarsSection />
        <RoleBasedSection />
        <HowItWorksSection />
        <CaseStudiesSection />
        <PricingSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
