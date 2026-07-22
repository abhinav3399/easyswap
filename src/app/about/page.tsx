import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Us | EasySwap - Room Exchange Platform",
  description: "Learn about EasySwap's mission to make housing affordable and accessible through room exchange. We're building a community-driven platform for students and professionals.",
};

export default function AboutPage() {
  return <AboutContent />;
}
