"use client";

import { motion } from "framer-motion";
import { Shield, UserCheck, FileText, Search, MessageCircle, Handshake, RefreshCw, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const steps = [
  { icon: UserCheck, title: "Register", description: "Create your account with email or social login.", time: "2 min" },
  { icon: Shield, title: "Verify", description: "Complete identity verification for trust.", time: "24 hrs" },
  { icon: FileText, title: "Create Listing", description: "List your room with photos and details.", time: "10 min" },
  { icon: Search, title: "Find Match", description: "AI finds compatible matches for you.", time: "Instant" },
  { icon: MessageCircle, title: "Chat", description: "Connect and discuss details securely.", time: "Flexible" },
  { icon: Handshake, title: "Confirm", description: "Agree on terms and confirm the exchange.", time: "48 hrs" },
  { icon: RefreshCw, title: "Swap", description: "Move in and start your new living experience.", time: "Scheduled" },
  { icon: Star, title: "Review", description: "Rate your experience to help the community.", time: "2 min" },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding section-white" id="how-it-works">
      <div className="container-custom">
        <SectionHeading
          title="How It Works"
          subtitle="Get started in minutes. Complete the full cycle in days, not weeks."
          gradient="accent"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-blue-400 to-amber-400 -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={cn(
                "relative flex items-center gap-8 mb-12 last:mb-0",
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Content */}
              <div className={cn(
                "flex-1 p-6 rounded-2xl border border-slate-200/50 bg-white hover:shadow-lg transition-all duration-300 card-hover",
                index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"
              )}>
                <div className={cn(
                  "flex items-center gap-3 mb-2",
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                )}>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <span className="text-xs text-slate-400">{step.time}</span>
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed text-sm mt-2">{step.description}</p>
              </div>

              {/* Timeline Node */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 text-white items-center justify-center text-sm font-bold shadow-lg z-10">
                {index + 1}
              </div>

              {/* Spacer */}
              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
