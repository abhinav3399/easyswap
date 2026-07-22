import type { Metadata } from "next";
import { TermsContent } from "./terms-content";

export const metadata: Metadata = {
  title: "Terms of Service | EasySwap - Room Exchange Platform",
  description: "Read the terms and conditions for using EasySwap room exchange platform. Understand your rights and responsibilities.",
};

export default function TermsPage() {
  return <TermsContent />;
}
