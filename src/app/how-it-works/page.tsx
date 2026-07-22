import type { Metadata } from "next";
import { HowItWorksContent } from "./how-it-works-content";

export const metadata: Metadata = {
  title: "How It Works | EasySwap - Room Exchange Platform",
  description: "Learn how EasySwap works. Register, verify, find matches, chat, confirm, swap, and review. Get started in minutes.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
