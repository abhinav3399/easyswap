"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Cookie, Mail, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeIn, staggerContainer } from "@/lib/motion";

const sections = [
  {
    icon: Shield,
    title: "Information We Collect",
    content: "We collect information you provide directly to us, including your name, email address, phone number, profile photos, and verification documents. We also collect information about your room listings, preferences, and interactions with other users on our platform.",
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: "Your information is used to create and maintain your account, facilitate room exchanges, improve our AI matching algorithms, send notifications about matches and messages, and provide customer support. We also use aggregated data for analytics and platform improvements.",
  },
  {
    icon: Lock,
    title: "Data Security",
    content: "We implement industry-standard security measures including end-to-end encryption for messages, secure socket layer (SSL) technology for data transmission, and encrypted storage for sensitive information. Our systems are regularly audited for security vulnerabilities.",
  },
  {
    icon: Eye,
    title: "Information Sharing",
    content: "We do not sell your personal information to third parties. Information is shared only with your explicit consent, to facilitate a room exchange, or when required by law. Other users see only the information you choose to include in your public profile.",
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking",
    content: "We use essential cookies for platform functionality, analytics cookies to understand usage patterns, and preference cookies to remember your settings. You can control cookie preferences through your browser settings.",
  },
  {
    icon: Mail,
    title: "Communication Preferences",
    content: "You can control what notifications you receive through your account settings. We may send essential service-related communications regardless of your preferences. Marketing communications can be opted out at any time.",
  },
];

export function PrivacyContent() {
  return (
    <main className="flex flex-col">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="gradient-text-green">Policy</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-4">
              Your privacy matters to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-foreground/40">Last updated: January 15, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="space-y-8">
            {sections.map((section, index) => (
              <motion.div key={index} variants={fadeIn} className="p-8 rounded-2xl border border-border/50 bg-white/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                    <p className="text-foreground/60 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
            <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Right to access your personal data",
                "Right to rectify inaccurate data",
                "Right to delete your data",
                "Right to restrict processing",
                "Right to data portability",
                "Right to object to processing",
              ].map((right, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {right}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-8 rounded-2xl border border-border/50 bg-white/50">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-foreground/60 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer.
            </p>
            <a href="mailto:privacy@easyswap.com" className="text-primary font-medium hover:underline">
              privacy@easyswap.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
