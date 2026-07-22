"use client";

import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, MapPin, Users, Wallet, BookOpen, Clock, Star, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";

const benefits = [
  { icon: Wallet, title: "Save Up to 70%", description: "Exchange rooms instead of paying expensive rent near campus.", stat: "70%", statLabel: "Average Savings" },
  { icon: ShieldCheck, title: "Verified Listings", description: "Every listing is verified for accuracy and safety.", stat: "100%", statLabel: "Verified" },
  { icon: MapPin, title: "Nearby Campuses", description: "Find rooms within walking distance of your university.", stat: "500+", statLabel: "Colleges" },
  { icon: Users, title: "Student Community", description: "Join 50,000+ students already using EasySwap.", stat: "50K+", statLabel: "Students" },
  { icon: BookOpen, title: "Semester Matching", description: "Match based on your academic calendar and study schedule.", stat: "Flexible", statLabel: "Duration" },
  { icon: Clock, title: "Quick Process", description: "From registration to move-in in as little as 48 hours.", stat: "48hrs", statLabel: "Average Time" },
];

const testimonials = [
  { name: "Sarah J.", role: "UC Berkeley", content: "Saved $12,000 this semester by swapping rooms. EasySwap is a game-changer for students!", rating: 5 },
  { name: "Alex M.", role: "NYU", content: "Found the perfect room near campus. The AI matching found me a roommate with the same study schedule.", rating: 5 },
  { name: "Priya K.", role: "UT Austin", content: "As an international student, EasySwap made finding housing so easy. The community is incredibly welcoming.", rating: 5 },
];

export function StudentsContent() {
  return (
    <main className="flex flex-col">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="text-primary font-semibold">For Students</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Student housing,{" "}
              <span className="gradient-text-green">reimagined</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-8">
              Stop overpaying for dorms and apartments. Exchange rooms with fellow students
              and save thousands while building your global network.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Find Student Rooms
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
          <SectionHeading title="Why Students Love EasySwap" subtitle="Designed with student needs in mind." gradient="green" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeIn} className="p-6 rounded-2xl border border-border/50 bg-white/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text-green mb-1">{benefit.stat}</div>
                    <div className="text-xs text-foreground/40 mb-2">{benefit.statLabel}</div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-foreground/60">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background to-primary/5">
        <div className="container-custom">
          <SectionHeading title="What Students Say" subtitle="Real stories from real students." gradient="blue" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl border border-border/50 bg-white/50">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/70 text-sm mb-4">{t.content}</p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-foreground/40">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to save on housing?</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Join thousands of students already saving money with EasySwap.</p>
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
