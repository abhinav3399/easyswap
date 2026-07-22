"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Users, Plane, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/motion";

const segments = [
  {
    icon: Briefcase,
    title: "Hybrid Workers",
    description: "Perfect for professionals who work remotely and need flexible accommodation.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Building2,
    title: "Corporate Employees",
    description: "Relocate for work without the hassle of traditional rental agreements.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Users,
    title: "Family Users",
    description: "Find family-friendly swaps with verified hosts and safe neighborhoods.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Plane,
    title: "Business Travelers",
    description: "Exchange rooms instead of paying for expensive hotels during travel.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export function ProfessionalsSection() {
  return (
    <section className="section-padding section-white">
      <div className="container-custom">
        <SectionHeading
          title="For Professionals"
          subtitle="Designed for the modern workforce. Flexible, affordable, and professional-grade accommodation solutions."
          gradient="blue"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {segments.map((segment, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl ${segment.bg} flex items-center justify-center shrink-0`}>
                    <segment.icon className={`w-7 h-7 ${segment.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{segment.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{segment.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="secondary" size="lg">
            Find Professional Rooms
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
