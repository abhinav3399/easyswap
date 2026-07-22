import type { Metadata } from "next";
import { SafetyContent } from "./safety-content";

export const metadata: Metadata = {
  title: "Safety | EasySwap - Room Exchange Platform",
  description: "Your safety is our priority. Learn about our verification process, secure communication, dispute resolution, and community guidelines.",
};

export default function SafetyPage() {
  return <SafetyContent />;
}
