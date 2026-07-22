"use client";

import { motion } from "framer-motion";
import { Shield, Fingerprint, MessageCircle, FileText, Users, AlertTriangle, CheckCircle, ArrowRight, Camera, Lock, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";

const safetyFeatures = [
  {
    icon: Fingerprint,
    title: "Identity Verification",
    description: "Multi-factor verification including government ID, social media, and email verification to ensure every user is who they claim to be.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Camera,
    title: "Photo Verification",
    description: "AI-powered photo analysis verifies that listing photos accurately represent the actual room and space.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Lock,
    title: "Secure Communication",
    description: "End-to-end encrypted messaging ensures your conversations remain private and secure.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Our support team is available around the clock to handle any issues or concerns.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: FileText,
    title: "Secure Agreements",
    description: "Digital agreements with legal backing protect both parties during the exchange.",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: AlertTriangle,
    title: "Dispute Resolution",
    description: "Fair and transparent dispute resolution process with dedicated mediators.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Users,
    title: "Community Reporting",
    description: "Report suspicious behavior or violations directly through the platform.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Shield,
    title: "Swap Insurance",
    description: "Premium members get insurance coverage for their belongings during swaps.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
];

const guidelines = [
  "Never share personal contact information before matching",
  "Always communicate through the platform's secure chat",
  "Verify the other person's identity before agreeing to a swap",
  "Take photos of your room before moving out",
  "Read reviews and ratings carefully",
  "Report any suspicious behavior immediately",
  "Keep all agreements and communications within the platform",
  "Use video calls to verify the room before swapping",
];

export function SafetyContent() {
  return (
    <main className="flex flex-col">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-background to-blue-500/10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-primary font-semibold">Safety First</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your safety is our{" "}
              <span className="gradient-text-green">top priority</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-8">
              We have built multiple layers of protection to ensure every swap is safe, secure, and worry-free.
              From identity verification to dispute resolution, we have you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Learn About Safety
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Safety Features"
            subtitle="Comprehensive safety measures protecting every aspect of your swap."
            gradient="green"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="p-6 rounded-2xl border border-border/50 bg-white/50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center shrink-0`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground/60 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background to-primary/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Safety Guidelines"
                subtitle="Follow these guidelines for a safe swap experience."
                gradient="blue"
              />
              <ul className="space-y-3">
                {guidelines.map((guideline, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 text-sm text-foreground/70"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {guideline}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Shield className="w-32 h-32 text-primary/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Swap with confidence
            </h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Every safety feature is designed to protect you. Start your first swap with peace of mind.
            </p>
            <Button variant="accent" size="lg">
              Get Started Safely
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
