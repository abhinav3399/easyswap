import type { Metadata } from "next";
import { NotFoundContent } from "./not-found-content";

export const metadata: Metadata = {
  title: "404 - Page Not Found | EasySwap",
  description: "The page you are looking for does not exist. Return to EasySwap home page.",
};

export default function NotFoundPage() {
  return <NotFoundContent />;
}
