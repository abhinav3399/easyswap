"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const categories = [
  {
    name: "Getting Started",
    faqs: [
      { q: "What is EasySwap?", a: "EasySwap is a room exchange platform that connects students and professionals to swap rooms instead of paying expensive rent or hotels. Its a community-driven housing solution where you exchange your room with someone elses for a mutually beneficial arrangement." },
      { q: "How do I create an account?", a: "You can sign up using your email address or Google account. The process takes less than 2 minutes. Just provide your basic information and verify your email." },
      { q: "Is EasySwap free?", a: "Yes! Basic membership is free forever. You can browse, match, and connect with users at no cost. Premium features are available for a small monthly fee." },
      { q: "How does room exchange work?", a: "Register, verify your identity, list your room, and our AI matches you with compatible users. You chat, agree on terms, confirm the exchange, and swap." },
      { q: "Can I use EasySwap on mobile?", a: "Yes! EasySwap is available on iOS and Android. The mobile app includes all features of the web platform plus push notifications." },
    ],
  },
  {
    name: "Safety & Verification",
    faqs: [
      { q: "How do you verify users?", a: "We use multi-factor verification including government ID verification, social media verification, email and phone verification, and optional background checks." },
      { q: "Is my personal information safe?", a: "Absolutely. We use end-to-end encryption for all communications, secure servers for data storage, and never share your personal information without your explicit consent." },
      { q: "What if something goes wrong?", a: "We have a comprehensive dispute resolution system, 24/7 support team, secure payment protection, and user rating system to ensure accountability." },
      { q: "How do you prevent fake listings?", a: "AI-powered photo verification analyzes listing images for authenticity. Combined with user verification and community reporting, fake listings are quickly identified and removed." },
    ],
  },
  {
    name: "Matching & Listings",
    faqs: [
      { q: "How does AI matching work?", a: "Our AI analyzes multiple factors including lifestyle preferences, dietary habits, religion, language, gender preference, distance, availability, and past user reviews to calculate a compatibility score." },
      { q: "Can I filter my matches?", a: "Yes, you can filter by location, price range, gender, religion, food preferences, lifestyle, availability, and many other criteria." },
      { q: "How long does matching take?", a: "AI matching is instant. Once your profile is complete, you will receive match suggestions immediately. Finding the perfect match typically takes a few days." },
      { q: "Can I list multiple rooms?", a: "Yes, you can list multiple rooms. Each listing can have different preferences and availability dates." },
    ],
  },
  {
    name: "Payments & Premium",
    faqs: [
      { q: "How do payments work?", a: "Payments are handled securely through our platform. We use encrypted payment processing and support multiple currencies." },
      { q: "What payment methods do you accept?", a: "We accept all major credit cards, debit cards, PayPal, and select cryptocurrencies." },
      { q: "Can I cancel my Premium subscription?", a: "Yes, you can cancel anytime. Your Premium benefits continue until the end of your billing period." },
      { q: "Is there a free trial?", a: "Yes, we offer a 14-day free trial of Premium with no credit card required." },
      { q: "Are there any hidden fees?", a: "No hidden fees whatsoever. The price you see is the price you pay." },
    ],
  },
  {
    name: "Swaps & Logistics",
    faqs: [
      { q: "How long can I swap for?", a: "Swaps can range from a few days to several months. You and your swap partner agree on the duration beforehand." },
      { q: "Can I extend my swap?", a: "Yes, you can request extensions through the platform. The other party can approve or decline." },
      { q: "What about my belongings?", a: "We recommend securing personal valuables and getting renters insurance. Premium members get swap insurance coverage." },
      { q: "Can I cancel a swap?", a: "Yes, you can cancel within the agreed cancellation window. Our platform has flexible cancellation policies." },
    ],
  },
];

export function FAQPageContent() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const allFaqs = categories.flatMap((cat) => cat.faqs);
  const filteredFaqs = searchQuery
    ? allFaqs.filter((faq) =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <main className="flex flex-col">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently asked{" "}
              <span className="gradient-text-green">questions</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-8">
              Everything you need to know about EasySwap. Cant find what you are looking for?
              Contact our support team.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border/50 bg-white/50 outline-none focus:border-primary/50 focus:bg-white transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {searchQuery ? (
        <section className="section-padding bg-background">
          <div className="container-custom max-w-3xl">
            <p className="text-sm text-foreground/40 mb-6">
              Found {filteredFaqs?.length} results for &ldquo;{searchQuery}&rdquo;
            </p>
            <div className="space-y-3">
              {filteredFaqs?.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="rounded-xl border border-border/50 bg-white/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === `search-${index}` ? null : `search-${index}`)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-foreground/5 transition-colors"
                  >
                    <span className="font-medium text-sm pr-4">{faq.q}</span>
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      {openIndex === `search-${index}` ? (
                        <Minus className="w-3.5 h-3.5 text-primary" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-primary" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === `search-${index}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm text-foreground/60 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        categories.map((category, catIndex) => (
          <section
            key={catIndex}
            className={`section-padding ${catIndex % 2 === 0 ? "bg-background" : "bg-gradient-to-b from-background to-primary/5"}`}
          >
            <div className="container-custom max-w-3xl">
              <SectionHeading
                title={category.name}
                subtitle=""
                gradient={catIndex % 2 === 0 ? "green" : "blue"}
              />
              <div className="space-y-3">
                {category.faqs.map((faq, index) => {
                  const uniqueKey = `${catIndex}-${index}`;
                  return (
                    <motion.div
                      key={uniqueKey}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="rounded-xl border border-border/50 bg-white/50 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === uniqueKey ? null : uniqueKey)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-foreground/5 transition-colors"
                      >
                        <span className="font-medium text-sm pr-4">{faq.q}</span>
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          {openIndex === uniqueKey ? (
                            <Minus className="w-3.5 h-3.5 text-primary" />
                          ) : (
                            <Plus className="w-3.5 h-3.5 text-primary" />
                          )}
                        </div>
                      </button>
                      <AnimatePresence>
                        {openIndex === uniqueKey && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-sm text-foreground/60 leading-relaxed">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        ))
      )}

      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Our support team is here to help you 24/7.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all"
            >
              Contact Support
              <Plus className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
