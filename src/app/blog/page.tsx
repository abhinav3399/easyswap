import type { Metadata } from "next";
import { BlogContent } from "./blog-content";

export const metadata: Metadata = {
  title: "Blog | EasySwap - Room Exchange Platform",
  description: "Explore articles about room exchange, student housing, hybrid work tips, and the future of flexible living.",
};

export default function BlogPage() {
  return <BlogContent />;
}
