import type { Metadata } from "next";
import { FAQPageContent } from "./faq-content";

export const metadata: Metadata = {
  title: "FAQ | EasySwap - Room Exchange Platform",
  description: "Frequently asked questions about EasySwap room exchange platform. Find answers about pricing, safety, matching, and more.",
};

export default function FAQPage() {
  return <FAQPageContent />;
}
