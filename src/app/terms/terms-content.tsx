"use client";

import { motion } from "framer-motion";
import { Scale, FileText, Shield, AlertTriangle, Globe, Ban } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: "By accessing or using EasySwap, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services. We reserve the right to update these terms at any time, and continued use constitutes acceptance of changes.",
  },
  {
    icon: Scale,
    title: "User Responsibilities",
    content: "Users are responsible for maintaining the confidentiality of their account credentials, providing accurate information, and complying with all applicable laws. You agree not to use the platform for any illegal or unauthorized purpose, and to respect the rights of other users.",
  },
  {
    icon: Shield,
    title: "Verification & Trust",
    content: "EasySwap implements a comprehensive verification system to build trust within our community. Users must complete identity verification to access certain features. We reserve the right to suspend or terminate accounts that provide false information or engage in fraudulent activities.",
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content: "EasySwap acts as a platform connecting users for room exchanges. We are not a party to any agreement between users. We are not liable for any damages, losses, or disputes arising from room exchanges. Users participate at their own risk and are encouraged to exercise due diligence.",
  },
  {
    icon: Globe,
    title: "Platform Rules",
    content: "Users must not post fake listings, harass other users, attempt to circumvent platform fees, use the platform for commercial purposes without authorization, or engage in any activity that disrupts the platform's functionality or community standards.",
  },
  {
    icon: Ban,
    title: "Termination",
    content: "We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or pose a risk to other users. Users may terminate their accounts at any time. Certain obligations, such as dispute resolution, will survive termination.",
  },
];

export function TermsContent() {
  return (
    <main className="flex flex-col">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of <span className="gradient-text-blue">Service</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-4">
              Please read these terms carefully before using EasySwap. By using our platform, you agree to be bound by these terms.
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
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <section.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                    <p className="text-foreground/60 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-primary/5 border border-secondary/10">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-foreground/60 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            <a href="mailto:legal@easyswap.com" className="text-secondary font-medium hover:underline">
              legal@easyswap.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
