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
      "Basic matching",
      "Limited messages",
      "Standard support",
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
      "AI-powered matching",
      "Unlimited messages",
      "Priority listings",
      "Advanced filters",
      "Verified badge",
      "Priority support",
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
      "Team accounts",
      "API access",
      "Custom integrations",
      "Dedicated manager",
      "Analytics dashboard",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="section-padding bg-background" id="pricing">
      <div className="container-custom">
        <SectionHeading
          title="Simple Pricing"
          subtitle="Start free, upgrade when you need more. No hidden fees, no surprises."
          gradient="green"
        />

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
                  ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
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
  );
}
