import type { Metadata } from "next";
import { AIMatchingContent } from "./ai-matching-content";

export const metadata: Metadata = {
  title: "AI Matching | EasySwap - Room Exchange Platform",
  description: "Discover how our AI-powered matching algorithm finds your perfect room match based on lifestyle, preferences, and compatibility.",
};

export default function AIMatchingPage() {
  return <AIMatchingContent />;
}
