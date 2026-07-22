import type { Metadata } from "next";
import { PrivacyContent } from "./privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | EasySwap - Room Exchange Platform",
  description: "Learn how EasySwap collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
