import type { Metadata } from "next";
import { StudentsContent } from "./students-content";

export const metadata: Metadata = {
  title: "For Students | EasySwap - Room Exchange Platform",
  description: "Find affordable, safe, and verified rooms near your campus. Save up to 70% on housing costs with EasySwap room exchange.",
};

export default function StudentsPage() {
  return <StudentsContent />;
}
