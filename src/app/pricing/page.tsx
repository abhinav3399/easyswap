import type { Metadata } from "next";
import { PricingPageContent } from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing | EasySwap - Room Exchange Platform",
  description: "Start free, upgrade when you need more. Simple pricing for room exchange with no hidden fees.",
};

export default function PricingPage() {
  return <PricingPageContent />;
}
