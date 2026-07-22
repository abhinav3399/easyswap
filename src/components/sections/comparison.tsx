"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

const platforms = [
  { name: "EasySwap", color: "text-primary", bg: "bg-primary/5" },
  { name: "Airbnb", color: "text-rose-500", bg: "bg-rose-500/5" },
  { name: "PG", color: "text-orange-500", bg: "bg-orange-500/5" },
  { name: "Hotels", color: "text-blue-500", bg: "bg-blue-500/5" },
  { name: "NoBroker", color: "text-purple-500", bg: "bg-purple-500/5" },
];

const features = [
  "Verified Users",
  "AI Matching",
  "Room Exchange",
  "No Deposit",
  "Flexible Duration",
  "Secure Chat",
  "Ratings & Reviews",
  "Family Friendly",
  "Student Discounts",
  "24/7 Support",
];

const data: Record<string, boolean[]> = {
  EasySwap: [true, true, true, true, true, true, true, true, true, true],
  Airbnb: [true, false, false, false, false, true, true, false, false, true],
  PG: [false, false, false, false, true, false, false, true, false, false],
  Hotels: [true, false, false, false, false, false, true, true, false, true],
  NoBroker: [true, false, false, true, false, true, true, false, false, false],
};

export function ComparisonSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        <SectionHeading
          title="Why EasySwap?"
          subtitle="See how we compare to other housing options."
          gradient="green"
        />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
              <th className="text-left p-4 font-semibold text-slate-500">Features</th>
                {platforms.map((p) => (
                  <th key={p.name} className={cn("p-4 text-center font-semibold", p.color)}>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
              <tr key={feature} className={cn(i % 2 === 0 && "bg-slate-50")}>
                  <td className="p-4 text-sm font-medium">{feature}</td>
                  {platforms.map((p) => (
                    <td key={p.name} className="p-4 text-center">
                      {data[p.name][i] ? (
                        <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
