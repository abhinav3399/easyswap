"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeIn, staggerContainer } from "@/lib/motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Student, UC Berkeley",
    avatar: "SJ",
    content: "EasySwap saved me thousands on rent. I found a beautiful room near campus and swapped with a student going abroad. The AI matching was spot on - we had similar lifestyles and study habits.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer, Google",
    avatar: "MC",
    content: "As someone who moves between offices frequently, EasySwap is a game-changer. No more hotel expenses or short-term rental headaches. The verification process gave me complete peace of mind.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Graduate Student, NYU",
    avatar: "PP",
    content: "I was skeptical about room exchanges, but EasySwap made it incredibly smooth. The cultural compatibility matching helped me find a roommate who respects my dietary preferences and study schedule.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Digital Nomad",
    avatar: "JW",
    content: "This platform understood exactly what digital nomads need. I can swap rooms wherever I travel, meet amazing people, and save a fortune compared to co-living spaces. Absolutely brilliant!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Medical Resident",
    avatar: "ER",
    content: "With my irregular hospital shifts, finding compatible housing was nearly impossible. EasySwap matched me with another resident and we swapped rooms based on our schedules. Life-changing!",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    avatar: "DK",
    content: "We use EasySwap for our entire remote team. When team members need to work from different cities, they just swap rooms. It's built incredible camaraderie and saved us thousands in travel costs.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-primary/5">
      <div className="container-custom">
        <SectionHeading
          title="Loved by Thousands"
          subtitle="Hear from our community of students, professionals, and families who found their perfect room match."
          gradient="accent"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="p-6 rounded-2xl border border-border/50 bg-white/50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground/70 leading-relaxed mb-6 text-sm">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-foreground/40">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
