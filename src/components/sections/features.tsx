"use client";

import { motion } from "framer-motion";
import {
  Shield, Sparkles, MapPin, Church, Utensils, Heart, Users,
  Star, MessageCircle, Crown, Bell, Settings
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeIn, staggerContainer } from "@/lib/motion";

const features = [
  { icon: Shield, title: "Verified Users", description: "Every user is verified with ID and background checks for complete safety.", color: "text-green-500" },
  { icon: Sparkles, title: "AI Matching", description: "Smart algorithm matches you with compatible roommates and rooms.", color: "text-blue-500" },
  { icon: MapPin, title: "Location Matching", description: "Find rooms near your workplace, college, or preferred neighborhood.", color: "text-red-500" },
  { icon: Church, title: "Religion Preference", description: "Respect cultural and religious preferences in your matchmaking.", color: "text-purple-500" },
  { icon: Utensils, title: "Food Preference", description: "Match with people who share your dietary habits and preferences.", color: "text-orange-500" },
  { icon: Heart, title: "Lifestyle Matching", description: "Find roommates who match your lifestyle, schedule, and habits.", color: "text-pink-500" },
  { icon: Users, title: "Gender Matching", description: "Choose your preferred gender for roommates with ease.", color: "text-indigo-500" },
  { icon: Users, title: "Family Matching", description: "Find family-friendly accommodations that suit everyone.", color: "text-teal-500" },
  { icon: Star, title: "Ratings & Reviews", description: "Transparent feedback system helps you make informed decisions.", color: "text-yellow-500" },
  { icon: MessageCircle, title: "Secure Chat", description: "Built-in messaging with end-to-end encryption for safe communication.", color: "text-cyan-500" },
  { icon: Crown, title: "Premium Listings", description: "Featured listings with better visibility and priority support.", color: "text-amber-500" },
  { icon: Bell, title: "Smart Notifications", description: "Get instant alerts for new matches, messages, and updates.", color: "text-rose-500" },
];

export function FeaturesSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        <SectionHeading
          title="Powerful Features"
          subtitle="Everything you need for a seamless room exchange experience, all in one platform."
          gradient="blue"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group p-6 rounded-2xl border border-slate-200/50 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
