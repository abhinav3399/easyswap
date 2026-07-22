"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: "green" | "blue" | "accent" | "all";
  align?: "left" | "center";
  className?: string;
}

const gradientClasses = {
  green: "gradient-text-green",
  blue: "gradient-text-blue",
  accent: "gradient-text",
  all: "gradient-text",
};

export function SectionHeading({
  title,
  subtitle,
  gradient = "all",
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "max-w-3xl mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",
          gradientClasses[gradient]
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
