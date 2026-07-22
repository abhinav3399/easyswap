"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Phone, ArrowRight, Send, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";

const contactMethods = [
  { icon: Mail, title: "Email Us", description: "support@easyswap.com", sub: "We reply within 24 hours" },
  { icon: MessageSquare, title: "Live Chat", description: "Chat with our team", sub: "Available 24/7" },
  { icon: MapPin, title: "Visit Us", description: "San Francisco, CA", sub: "By appointment only" },
  { icon: Phone, title: "Call Us", description: "+1 (555) 123-4567", sub: "Mon-Fri 9am-6pm PST" },
];

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="gradient-text-green">touch</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-12">
              Have a question, feedback, or just want to say hello? We would love to hear from you.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl border border-border/50 bg-white/50 text-center hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xs mb-1">{method.title}</h3>
                  <p className="text-xs text-foreground/70 font-medium">{method.description}</p>
                  <p className="text-[10px] text-foreground/40 mt-1">{method.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeading title="Send us a message" subtitle="Fill out the form and we will get back to you within 24 hours." gradient="blue" />
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-foreground/60 text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border/50 bg-white/50 outline-none focus:border-primary/50 focus:bg-white transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border/50 bg-white/50 outline-none focus:border-primary/50 focus:bg-white transition-all text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-border/50 bg-white/50 outline-none focus:border-primary/50 focus:bg-white transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border/50 bg-white/50 outline-none focus:border-primary/50 focus:bg-white transition-all text-sm">
                      <option>General Inquiry</option>
                      <option>Support</option>
                      <option>Partnership</option>
                      <option>Press</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-white/50 outline-none focus:border-primary/50 focus:bg-white transition-all text-sm resize-none" />
                  </div>
                  <Button variant="primary" type="submit" className="w-full">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="p-8 rounded-2xl border border-border/50 bg-white/50">
                <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                <div className="space-y-3 text-sm text-foreground/60">
                  <div className="flex justify-between"><span>Monday - Friday</span><span className="font-medium text-foreground">9:00 AM - 6:00 PM PST</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-medium text-foreground">10:00 AM - 4:00 PM PST</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-foreground">Closed</span></div>
                </div>
              </div>
              <div className="p-8 rounded-2xl border border-border/50 bg-white/50">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((platform) => (
                    <button key={platform} className="px-4 py-2 rounded-lg bg-foreground/5 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all">
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <h3 className="text-lg font-semibold mb-2">Press & Media</h3>
                <p className="text-sm text-foreground/60 mb-4">For press inquiries, please email our media relations team.</p>
                <a href="mailto:press@easyswap.com" className="text-sm font-medium text-primary hover:underline">press@easyswap.com</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
