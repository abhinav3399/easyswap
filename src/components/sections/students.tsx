"use client";

import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, MapPin, Users, ArrowRight, Wallet } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";

const benefits = [
  {
    icon: Wallet,
    title: "Save Big",
    description: "Save up to 70% compared to traditional housing with our exchange model.",
    stat: "70%",
    statLabel: "Average Savings",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Verified",
    description: "All hosts and listings are verified for student safety and peace of mind.",
    stat: "100%",
    statLabel: "Verified Listings",
  },
  {
    icon: MapPin,
    title: "Nearby Colleges",
    description: "Find rooms within walking distance of your campus or university.",
    stat: "500+",
    statLabel: "Colleges Covered",
  },
  {
    icon: Users,
    title: "Student Community",
    description: "Join a community of 50,000+ trusted student users worldwide.",
    stat: "50K+",
    statLabel: "Student Users",
  },
];

export function StudentsSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        <SectionHeading
          title="For Students"
          subtitle="Find affordable, safe, and verified rooms near your campus. Exchange instead of paying expensive rent."
          gradient="green"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative p-8 rounded-2xl border border-slate-200/50 bg-white hover:shadow-xl transition-all duration-300 group card-hover"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold gradient-text-green mb-1">{benefit.stat}</div>
                  <div className="text-xs text-slate-400 font-medium mb-3">{benefit.statLabel}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="primary" size="lg">
            Find Student Rooms
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
