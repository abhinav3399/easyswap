"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    q: "What is EasySwap?",
    a: "EasySwap is a room exchange platform that connects students and professionals to swap rooms instead of paying expensive rent or hotels. Think of it as a community-driven housing solution where you exchange your room with someone else's for a mutually beneficial arrangement.",
  },
  {
    q: "How does room exchange work?",
    a: "You register, verify your identity, list your room, and our AI matches you with compatible users. You chat, agree on terms, confirm the exchange, and swap. It's that simple!",
  },
  {
    q: "Is EasySwap free to use?",
    a: "Yes! Basic membership is free forever. You can browse, match, and connect with users at no cost. Premium features like unlimited messaging and priority listings are available for a small monthly fee.",
  },
  {
    q: "How do you verify users?",
    a: "We use multi-factor verification including government ID verification, social media verification, email and phone verification, and optional background checks. All verifications are handled securely through encrypted channels.",
  },
  {
    q: "Is my personal information safe?",
    a: "Absolutely. We use end-to-end encryption for all communications, secure servers for data storage, and never share your personal information without your explicit consent. We comply with GDPR and CCPA regulations.",
  },
  {
    q: "Can students use EasySwap?",
    a: "Yes! Students are our largest user base. We offer student-specific features including campus proximity filters, semester-based matching, student discounts on premium plans, and integration with university housing offices.",
  },
  {
    q: "What about professionals and remote workers?",
    a: "EasySwap is perfect for professionals. Whether you're hybrid working, relocating for a project, or traveling for business, you can find suitable room exchanges that save money compared to hotels or short-term rentals.",
  },
  {
    q: "How does the AI matching work?",
    a: "Our AI analyzes multiple factors including lifestyle preferences, dietary habits, religion, language, gender preference, distance, availability, and past user reviews. It then calculates a compatibility score and suggests the best matches for you.",
  },
  {
    q: "Can families use EasySwap?",
    a: "Absolutely! We have a dedicated family-friendly section with verified family hosts, safety features, proximity to schools, and larger room options suitable for families with children.",
  },
  {
    q: "What if something goes wrong during a swap?",
    a: "We have a comprehensive dispute resolution system, 24/7 support team, secure payment protection, and user rating system to ensure accountability. Premium members also get swap insurance coverage.",
  },
  {
    q: "How do payments work?",
    a: "Payments are handled securely through our platform. We use encrypted payment processing, support multiple currencies, and hold funds in escrow until both parties confirm the successful swap completion.",
  },
  {
    q: "Can I cancel a swap?",
    a: "Yes, you can cancel a swap within the agreed cancellation window. Our platform has flexible cancellation policies, and we ensure fair treatment for both parties in case of cancellations.",
  },
  {
    q: "How do reviews work?",
    a: "After each swap, both parties can leave anonymous reviews and ratings. This builds trust in the community and helps users make informed decisions. We have measures to prevent fake or malicious reviews.",
  },
  {
    q: "Is there a mobile app?",
    a: "Yes! EasySwap is available on iOS and Android. The mobile app includes all features of the web platform plus push notifications, mobile payments, and location-based matching.",
  },
  {
    q: "What safety measures are in place?",
    a: "Safety is our priority. We have verified profiles, secure messaging with no sharing of personal contacts until both parties agree, in-app emergency reporting, 24/7 moderation, and optional video call verification.",
  },
  {
    q: "Can I swap rooms internationally?",
    a: "Yes! EasySwap supports international room exchanges. Our platform handles multiple currencies, provides translation services, and offers guidance on local housing laws and customs.",
  },
  {
    q: "How long does a typical swap last?",
    a: "Swaps can range from a few days to several months or even years. You and your swap partner agree on the duration beforehand, and our platform supports flexible scheduling.",
  },
  {
    q: "What if I need to extend my stay?",
    a: "You can request extensions through the platform. The other party can approve or decline. If approved, the swap duration is automatically updated in the system.",
  },
  {
    q: "Do you offer group swaps?",
    a: "Yes! Group swaps are supported for friend groups, corporate teams, or families who want to exchange multiple rooms simultaneously. Our AI can handle complex multi-party exchanges.",
  },
  {
    q: "How do I get started?",
    a: "Simply sign up for free, complete your profile verification, list your room or browse available listings, and let our AI find your perfect match. You could be in your new room within days!",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background" id="faq">
      <div className="container-custom max-w-3xl">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about EasySwap. Can't find what you're looking for? Contact our support team."
          gradient="green"
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="rounded-xl border border-border/50 bg-white/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-foreground/5 transition-colors"
              >
                <span className="font-medium text-sm pr-4">{faq.q}</span>
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-3.5 h-3.5 text-primary" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-primary" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-foreground/60 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
