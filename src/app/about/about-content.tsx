"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Globe } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeIn, staggerContainer } from "@/lib/motion";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "We believe in the power of community-driven solutions that benefit everyone.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Every user is verified, every listing is checked, every interaction is protected.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "We welcome everyone regardless of background, culture, or lifestyle.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting people across cities, countries, and continents through room exchange.",
  },
];

export function AboutContent() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We&apos;re on a mission to{" "}
              <span className="gradient-text-green">make housing affordable</span> for everyone.
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed">
              EasySwap was born from a simple idea: why pay expensive rent when you can exchange rooms?
              We&apos;re building a global community where students, professionals, and families can find
              affordable accommodation through the power of sharing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-foreground/60 leading-relaxed">
                <p>
                  Founded in 2024, EasySwap emerged from the frustration of skyrocketing rental prices
                  and the lack of flexible housing options for students and professionals.
                </p>
                <p>
                Our founders experienced firsthand the challenges of finding affordable accommodation
                while studying abroad and working remotely. They realized that millions of rooms sit
                empty while people struggle to find housing.
                </p>
                <p>
                The solution was obvious: create a platform where people can exchange rooms instead
                of paying rent. What started as a small community has grown into a global movement
                with thousands of successful swaps.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Target className="w-32 h-32 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-b from-background to-primary/5">
        <div className="container-custom">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do at EasySwap."
            gradient="green"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="p-8 rounded-2xl border border-border/50 bg-white/50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Active Users" },
              { number: "10K+", label: "Successful Swaps" },
              { number: "500+", label: "Cities" },
              { number: "95%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text-green mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
