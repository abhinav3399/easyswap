"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Utensils, Church, Languages, Users, MapPin, Calendar, ArrowRight, Check, Sparkles, Clock, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/motion";

const factors = [
  { icon: Heart, label: "Lifestyle", score: 95, color: "text-pink-500", description: "Matches based on daily routines, social habits, and living preferences." },
  { icon: Utensils, label: "Food Preferences", score: 90, color: "text-orange-500", description: "Aligns dietary habits including vegetarian, vegan, and religious dietary requirements." },
  { icon: Church, label: "Religion & Culture", score: 88, color: "text-purple-500", description: "Respects and matches based on religious practices and cultural backgrounds." },
  { icon: Languages, label: "Language", score: 92, color: "text-blue-500", description: "Matches users who speak the same or compatible languages." },
  { icon: Users, label: "Gender", score: 85, color: "text-green-500", description: "Respects gender preferences for comfortable living arrangements." },
  { icon: MapPin, label: "Distance", score: 80, color: "text-red-500", description: "Optimizes matches based on geographic proximity and commute times." },
  { icon: Calendar, label: "Availability", score: 93, color: "text-teal-500", description: "Aligns schedules and availability dates for seamless swaps." },
];

const algorithms = [
  { title: "Collaborative Filtering", description: "Analyzes patterns from thousands of successful swaps to predict compatible matches." },
  { title: "Natural Language Processing", description: "Understands listing descriptions and user preferences to find semantic matches." },
  { title: "Computer Vision", description: "Analyzes room photos to verify listings and suggest visually similar spaces." },
  { title: "Real-time Learning", description: "Our AI continuously improves based on user feedback and swap outcomes." },
];

export function AIMatchingContent() {
  return (
    <main className="flex flex-col">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-secondary" />
              <span className="text-secondary font-semibold">AI-Powered Matching</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart matching that{" "}
              <span className="gradient-text-blue">understands you</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-8">
              Our advanced AI analyzes multiple dimensions of compatibility to find your perfect room match.
              It is like having a personal matchmaker who knows exactly what you need.
            </p>
            <Button variant="primary" size="lg">
              See Your Matches
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading title="How Our AI Scores Compatibility" subtitle="Seven key factors analyzed for every match." gradient="blue" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin-slow opacity-20" />
                <div className="absolute inset-6 rounded-full bg-background flex items-center justify-center">
                  <Brain className="w-24 h-24 text-primary" />
                </div>
                {factors.map((factor, i) => {
                  const angle = (i * 360) / factors.length - 90;
                  const rad = (angle * Math.PI) / 180;
                  const r = 150;
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-14 h-14 rounded-2xl bg-white border border-border/50 shadow-lg flex items-center justify-center"
                      style={{
                        left: `calc(50% + ${x}px - 28px)`,
                        top: `calc(50% + ${y}px - 28px)`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <factor.icon className={`w-7 h-7 ${factor.color}`} />
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
              {factors.map((factor, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <factor.icon className={`w-4 h-4 ${factor.color}`} />
                      <span className="text-sm font-medium">{factor.label}</span>
                    </div>
                    <span className="text-sm font-bold gradient-text-blue">{factor.score}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-foreground/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${factor.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-xs text-foreground/40 mt-1">{factor.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background to-secondary/5">
        <div className="container-custom">
          <SectionHeading title="The Technology Behind the Magic" subtitle="Advanced AI algorithms working together to find your perfect match." gradient="green" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {algorithms.map((algo, index) => (
              <motion.div key={index} variants={fadeIn} className="p-8 rounded-2xl border border-border/50 bg-white/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{algo.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-sm">{algo.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading title="Why AI Matching Matters" subtitle="Traditional housing platforms lack personalization. EasySwap changes that." gradient="accent" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Better Compatibility", description: "Our AI finds matches you would never discover on your own, leading to happier living situations." },
              { icon: Clock, title: "Save Time", description: "Stop scrolling through endless listings. Get personalized matches delivered to you." },
              { icon: Shield, title: "Reduce Risk", description: "AI-verified compatibility reduces the chance of conflicts and bad living experiences." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-secondary to-primary">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience the power of AI matching</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Let our algorithm find your perfect room match today.</p>
            <Button variant="accent" size="lg">
              Find My Match
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
