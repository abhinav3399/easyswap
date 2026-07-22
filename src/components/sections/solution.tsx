"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, MessageCircle, Home, Star, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";

const steps = [
  {
    icon: Shield,
    title: "Verification",
    description: "Every user and listing is verified for your safety and peace of mind.",
    color: "text-green-500",
  },
  {
    icon: Sparkles,
    title: "AI Matching",
    description: "Smart algorithms find your perfect room match based on preferences.",
    color: "text-blue-500",
  },
  {
    icon: MessageCircle,
    title: "Secure Chat",
    description: "Communicate safely within the platform before making decisions.",
    color: "text-purple-500",
  },
  {
    icon: Home,
    title: "Room Exchange",
    description: "Seamlessly swap rooms with verified users across the globe.",
    color: "text-orange-500",
  },
  {
    icon: Star,
    title: "Review System",
    description: "Transparent reviews and ratings ensure quality experiences.",
    color: "text-yellow-500",
  },
];

export function SolutionSection() {
  return (
    <section className="section-padding section-white">
      <div className="container-custom">
        <SectionHeading
          title="How EasySwap Solves It"
          subtitle="A complete platform designed to make room exchange simple, safe, and smart."
          gradient="green"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative text-center p-6"
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto ${step.color}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-emerald-200 to-emerald-100" />
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="primary" size="lg">
            See How It Works
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
