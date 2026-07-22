import type { Metadata } from "next";
import { ProfessionalsContent } from "./professionals-content";

export const metadata: Metadata = {
  title: "For Professionals | EasySwap - Room Exchange Platform",
  description: "Flexible room exchange for hybrid workers, corporate employees, and business travelers. Save on hotels and short-term rentals.",
};

export default function ProfessionalsPage() {
  return <ProfessionalsContent />;
}
