"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Utensils, Church, Languages, Users, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeIn, staggerContainer } from "@/lib/motion";

const factors = [
  { icon: Heart, label: "Lifestyle", score: 95, color: "text-pink-500" },
  { icon: Utensils, label: "Food", score: 90, color: "text-orange-500" },
  { icon: Church, label: "Religion", score: 88, color: "text-purple-500" },
  { icon: Languages, label: "Language", score: 92, color: "text-blue-500" },
  { icon: Users, label: "Gender", score: 85, color: "text-green-500" },
  { icon: MapPin, label: "Distance", score: 80, color: "text-red-500" },
  { icon: Calendar, label: "Availability", score: 93, color: "text-teal-500" },
];

export function AIMatchingSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        <SectionHeading
          title="AI-Powered Matching"
          subtitle="Our advanced algorithm analyzes multiple factors to find your perfect room match with unprecedented accuracy."
          gradient="blue"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-72 h-72 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin-slow opacity-20" />
              <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center">
                <Brain className="w-20 h-20 text-emerald-500" />
              </div>
              {factors.map((factor, i) => {
                const angle = (i * 360) / factors.length;
                const rad = (angle * Math.PI) / 180;
                const r = 130;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-lg flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <factor.icon className={`w-6 h-6 ${factor.color}`} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Scores */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {factors.map((factor, index) => (
              <motion.div key={index} variants={fadeIn} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <factor.icon className={`w-4 h-4 ${factor.color}`} />
                    <span className="text-sm font-medium">{factor.label}</span>
                  </div>
                  <span className="text-sm font-bold gradient-text-blue">{factor.score}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${factor.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
