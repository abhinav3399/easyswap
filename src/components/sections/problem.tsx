"use client";

import { motion } from "framer-motion";
import { Building2, DollarSign, Shield, Hotel, Briefcase, Globe } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeIn, staggerContainer } from "@/lib/motion";

const problems = [
  {
    icon: DollarSign,
    title: "High Rent",
    description: "Skyrocketing rental prices make it impossible to find affordable housing in major cities.",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: Shield,
    title: "Advance Deposits",
    description: "Massive security deposits lock up your savings for months or even years.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: Building2,
    title: "Unsafe Accommodation",
    description: "Unverified listings and shady landlords put your safety at risk.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Hotel,
    title: "Hotels",
    description: "Paying for hotels during relocation or travel is expensive and unsustainable.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Briefcase,
    title: "Hybrid Work Costs",
    description: "Working remotely from expensive hotels or coworking spaces adds financial strain.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Globe,
    title: "Culture Mismatch",
    description: "Finding roommates who share your lifestyle, food habits, and values is challenging.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-emerald-50/50">
      <div className="container-custom">
        <SectionHeading
          title="The Housing Problem"
          subtitle="Finding affordable, safe, and compatible housing shouldn't be this hard. Yet millions face these challenges every day."
          gradient="all"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group relative p-8 rounded-2xl border border-slate-200/50 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 card-hover"
            >
              <div className={`w-14 h-14 rounded-xl ${problem.bg} flex items-center justify-center mb-5`}>
                <problem.icon className={`w-7 h-7 ${problem.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-slate-500 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
