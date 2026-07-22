import type { Metadata } from "next";
import { ContactPageContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact | EasySwap - Room Exchange Platform",
  description: "Get in touch with the EasySwap team. We are here to help with any questions, feedback, or support needs.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
