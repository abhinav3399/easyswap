"use client";

import { motion } from "framer-motion";
import {
  Shield, Sparkles, MapPin, Church, Utensils, Heart, Users,
  Star, MessageCircle, Crown, Bell, Settings, Search, Filter,
  Camera, Video, FileText, CreditCard, Clock, RefreshCw,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeIn, staggerContainer } from "@/lib/motion";

const featureCategories = [
  {
    title: "Matching & Discovery",
    features: [
      { icon: Sparkles, title: "AI-Powered Matching", description: "Our advanced algorithm analyzes lifestyle, preferences, and compatibility to find your perfect room match." },
      { icon: Search, title: "Smart Search", description: "Filter by location, price, amenities, and compatibility score to find exactly what you need." },
      { icon: Filter, title: "Advanced Filters", description: "Narrow down results by gender, religion, food preference, lifestyle, and more." },
      { icon: MapPin, title: "Location-Based", description: "Find rooms near your campus, workplace, or preferred neighborhood with interactive maps." },
    ],
  },
  {
    title: "Safety & Verification",
    features: [
      { icon: Shield, title: "Identity Verification", description: "Multi-factor verification including government ID, social media, and email verification." },
      { icon: Camera, title: "Photo Verification", description: "AI-powered photo verification ensures listings match reality." },
      { icon: Video, title: "Video Calls", description: "Schedule video calls with potential swap partners within the platform." },
      { icon: FileText, title: "Background Checks", description: "Optional background checks for extra peace of mind." },
    ],
  },
  {
    title: "Communication",
    features: [
      { icon: MessageCircle, title: "Secure Chat", description: "End-to-end encrypted messaging with built-in translation and smart replies." },
      { icon: Bell, title: "Smart Notifications", description: "Get instant alerts for matches, messages, and swap requests." },
      { icon: Star, title: "Ratings & Reviews", description: "Transparent feedback system with verified reviews only." },
      { icon: Users, title: "Community", description: "Join interest groups and connect with like-minded swappers." },
    ],
  },
  {
    title: "Platform Features",
    features: [
      { icon: CreditCard, title: "Secure Payments", description: "Escrow-protected payments with multiple currency support." },
      { icon: Crown, title: "Premium Listings", description: "Featured listings with better visibility and priority support." },
      { icon: Settings, title: "Admin Panel", description: "Comprehensive dashboard for managing listings, swaps, and preferences." },
      { icon: Clock, title: "Flexible Scheduling", description: "Set your availability and match with compatible schedules." },
    ],
  },
];

export function FeaturesContent() {
  return (
    <main className="flex flex-col">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Everything you need for{" "}
              <span className="gradient-text-green">seamless room exchange</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed">
              From AI-powered matching to secure communication, EasySwap provides all the tools
              you need to find and swap rooms safely.
            </p>
          </motion.div>
        </div>
      </section>

      {featureCategories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`section-padding ${catIndex % 2 === 0 ? "bg-background" : "bg-gradient-to-b from-background to-primary/5"}`}
        >
          <div className="container-custom">
            <SectionHeading
              title={category.title}
              subtitle=""
              gradient={catIndex % 2 === 0 ? "green" : "blue"}
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {category.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-6 rounded-2xl border border-border/50 bg-white/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1.5">{feature.title}</h3>
                      <p className="text-sm text-foreground/60 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}
    </main>
  );
}
