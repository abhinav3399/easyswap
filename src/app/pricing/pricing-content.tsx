"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeIn, staggerContainer } from "@/lib/motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with room exchange.",
    features: [
      "Create account & profile",
      "Browse listings",
      "Basic AI matching",
      "Up to 50 messages/month",
      "Standard support",
      "Email notifications",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$9",
    period: "/month",
    description: "For serious swappers who want the best experience.",
    features: [
      "Everything in Free",
      "Advanced AI matching",
      "Unlimited messages",
      "Priority listings",
      "Advanced filters",
      "Verified badge",
      "Priority support",
      "Video calls",
    ],
    cta: "Go Premium",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$29",
    period: "/month",
    description: "For organizations and frequent travelers.",
    features: [
      "Everything in Premium",
      "Team accounts (up to 10)",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "Analytics dashboard",
      "SLA guarantee",
      "Swap insurance",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faq = [
  { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time. No questions asked." },
  { q: "Is there a free trial for Premium?", a: "Yes, we offer a 14-day free trial of Premium with no credit card required." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and cryptocurrencies." },
  { q: "Are there any hidden fees?", a: "No hidden fees whatsoever. The price you see is the price you pay." },
];

export function PricingPageContent() {
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
              Simple pricing,{" "}
              <span className="gradient-text-green">no surprises</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed">
              Start free, upgrade when you need more. Every plan includes core features to help you find and swap rooms.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? "border-primary bg-primary/5 shadow-xl shadow-primary/10 scale-105"
                    : "border-border/50 bg-white hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="primary">Most Popular</Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-foreground/40 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-sm text-foreground/60">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background to-primary/5">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our pricing."
            gradient="green"
          />
          <div className="space-y-4 mt-8">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border/50 bg-white/50"
              >
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-foreground/60">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start your free trial today
            </h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              No credit card required. Cancel anytime.
            </p>
            <Button variant="accent" size="lg">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
