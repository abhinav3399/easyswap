"use client";

import { motion } from "framer-motion";
import { UserCheck, Shield, FileText, Search, MessageCircle, Handshake, RefreshCw, Star, ArrowRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const steps = [
  { icon: UserCheck, title: "Register", description: "Create your account with email or Google sign-in. It takes less than 2 minutes.", details: ["Sign up with email or social login", "Complete your profile", "Set your preferences", "Upload a profile photo"], duration: "2 minutes" },
  { icon: Shield, title: "Verify", description: "Complete our multi-step verification to build trust in the community.", details: ["Government ID verification", "Email verification", "Phone verification", "Optional background check"], duration: "24 hours" },
  { icon: FileText, title: "Create Listing", description: "Showcase your room with photos, details, and amenities.", details: ["Add high-quality photos", "Describe your room & space", "Set availability dates", "Define swap preferences"], duration: "10 minutes" },
  { icon: Search, title: "Find Match", description: "AI finds compatible matches based on your preferences.", details: ["Browse AI recommendations", "View compatibility scores", "Filter by preferences", "Save favorite listings"], duration: "Instant" },
  { icon: MessageCircle, title: "Chat", description: "Connect with potential swap partners via secure messaging.", details: ["Send and receive messages", "Share additional photos", "Schedule video calls", "Discuss swap terms"], duration: "Flexible" },
  { icon: Handshake, title: "Confirm", description: "Agree on terms and confirm the exchange details.", details: ["Review swap agreement", "Set move-in/move-out dates", "Confirm terms", "Secure payment"], duration: "48 hours" },
  { icon: RefreshCw, title: "Swap", description: "Execute the swap and move into your new space.", details: ["Coordinate move dates", "Key exchange instructions", "Move-in checklist", "Welcome guide"], duration: "Scheduled" },
  { icon: Star, title: "Review", description: "Rate your experience to help the community.", details: ["Leave honest feedback", "Rate your swap partner", "Report any issues", "Build your reputation"], duration: "2 minutes" },
];

export function HowItWorksContent() {
  return (
    <main className="flex flex-col">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get started in{" "}
              <span className="gradient-text-green">minutes</span>,{" "}
              swap in days
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed">
              Follow these simple steps to find your perfect room match. From registration to move-in,
              we guide you through every step of the process.
            </p>
          </motion.div>
        </div>
      </section>

      {steps.map((step, index) => (
        <section
          key={index}
          className={`section-padding ${index % 2 === 0 ? "bg-background" : "bg-gradient-to-b from-background to-primary/5"}`}
        >
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                index % 2 === 0 ? "" : "lg:direction-rtl"
              )}
            >
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-semibold">Step {index + 1}</div>
                    <h2 className="text-3xl font-bold">{step.title}</h2>
                  </div>
                </div>
                <p className="text-lg text-foreground/60 mb-6">{step.description}</p>
                <ul className="space-y-3 mb-6">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-sm text-foreground/40">
                  <Clock className="w-4 h-4" />
                  Takes about {step.duration}
                </div>
              </div>
              <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-border/50">
                  <step.icon className="w-24 h-24 text-primary/30" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Join thousands of happy swappers. Your perfect room match is waiting.
            </p>
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
