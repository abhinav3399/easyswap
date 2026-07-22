import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { FeaturesSection } from "@/components/sections/features";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ComparisonSection } from "@/components/sections/comparison";
import { StudentsSection } from "@/components/sections/students";
import { ProfessionalsSection } from "@/components/sections/professionals";
import { AIMatchingSection } from "@/components/sections/ai-matching";
import { PricingSection } from "@/components/sections/pricing";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { NewsletterSection } from "@/components/sections/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <StudentsSection />
      <ProfessionalsSection />
      <AIMatchingSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
    </>
  );
}
