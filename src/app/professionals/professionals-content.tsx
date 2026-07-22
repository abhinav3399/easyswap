"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Users, Plane, ArrowRight, Wallet, Globe, Clock, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";

const segments = [
  {
    icon: Briefcase,
    title: "Hybrid Workers",
    description: "Perfect for professionals who split time between home and office. Swap rooms in different cities as needed.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Building2,
    title: "Corporate Employees",
    description: "Relocate for work projects without the hassle of traditional rental agreements or hotel costs.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Users,
    title: "Family Users",
    description: "Find family-friendly swaps with verified hosts, safe neighborhoods, and proximity to schools.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Plane,
    title: "Business Travelers",
    description: "Exchange rooms instead of paying for expensive hotels. Save up to 80% on accommodation during work trips.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

const benefits = [
  { icon: Wallet, title: "Save Big", description: "Save 50-80% compared to hotels and short-term rentals.", stat: "80%", statLabel: "Maximum Savings" },
  { icon: Globe, title: "Global Network", description: "Access rooms in 500+ cities worldwide through our community.", stat: "500+", statLabel: "Cities" },
  { icon: Clock, title: "Flexible Duration", description: "Swap for days, weeks, or months. Complete flexibility for your schedule.", stat: "Flexible", statLabel: "Duration" },
  { icon: Star, title: "Premium Experience", description: "Verified premium listings with superior amenities and support.", stat: "4.9", statLabel: "Average Rating" },
];

export function ProfessionalsContent() {
  return (
    <main className="flex flex-col">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-secondary" />
              <span className="text-secondary font-semibold">For Professionals</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Work from anywhere,{" "}
              <span className="gradient-text-blue">live affordably</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-8">
              Whether you are hybrid working, traveling for business, or relocating for a project,
              EasySwap provides flexible accommodation that adapts to your professional lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Find Professional Rooms
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                List Your Room
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading title="Solutions for Every Professional" subtitle="Tailored accommodation solutions for the modern workforce." gradient="blue" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {segments.map((segment, index) => (
              <motion.div key={index} variants={fadeIn} className="p-8 rounded-2xl border border-border/50 bg-white/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl ${segment.bg} flex items-center justify-center shrink-0`}>
                    <segment.icon className={`w-7 h-7 ${segment.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{segment.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{segment.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background to-secondary/5">
        <div className="container-custom">
          <SectionHeading title="Benefits for Professionals" subtitle="Why professionals choose EasySwap." gradient="green" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeIn} className="p-6 rounded-2xl border border-border/50 bg-white/50 hover:bg-white hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text-green mb-1">{benefit.stat}</div>
                <div className="text-xs text-foreground/40 mb-3">{benefit.statLabel}</div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-foreground/60">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-secondary to-primary">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transform your work travel</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Stop paying for hotels. Start exchanging rooms with professionals like you.</p>
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
