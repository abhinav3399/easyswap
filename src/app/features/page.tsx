import type { Metadata } from "next";
import { FeaturesContent } from "./features-content";

export const metadata: Metadata = {
  title: "Features | EasySwap - Room Exchange Platform",
  description: "Discover powerful features for room exchange including AI matching, verified users, secure chat, and smart recommendations.",
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
