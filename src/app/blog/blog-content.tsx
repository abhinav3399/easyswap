"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User, Tag, Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeIn, staggerContainer } from "@/lib/motion";

const posts = [
  {
    title: "The Future of Student Housing: Why Room Exchange is the Answer",
    excerpt: "As tuition costs rise and housing becomes more expensive, students are turning to room exchange as a smart alternative to traditional dorms and apartments.",
    author: "Sarah Chen",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    category: "Student Life",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop",
  },
  {
    title: "10 Tips for a Successful Room Exchange Experience",
    excerpt: "From setting clear expectations to communicating effectively, learn the best practices for making your room swap smooth and enjoyable.",
    author: "Mike Johnson",
    date: "Jan 12, 2026",
    readTime: "7 min read",
    category: "Tips & Guides",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
  },
  {
    title: "Hybrid Work is Here to Stay: How Professionals are Adapting",
    excerpt: "Discover how hybrid workers are using room exchange to maintain flexibility without the burden of multiple rental agreements.",
    author: "Alex Rivera",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    category: "Professional Life",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    title: "AI Matching: How Technology is Revolutionizing Roommate Selection",
    excerpt: "Our AI matching algorithm goes beyond basic preferences to find truly compatible roommates based on lifestyle, habits, and personality.",
    author: "Dr. Emily Park",
    date: "Jan 8, 2026",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    title: "Safety First: How EasySwap Protects Its Community",
    excerpt: "Learn about the multi-layered safety measures we have implemented to ensure every swap is secure and trustworthy.",
    author: "David Kim",
    date: "Jan 5, 2026",
    readTime: "4 min read",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
  },
  {
    title: "The Economics of Room Exchange: Save Thousands Per Year",
    excerpt: "A detailed breakdown of how room exchange can save you 50-80% compared to traditional housing and hotel costs.",
    author: "Lisa Thompson",
    date: "Jan 3, 2026",
    readTime: "6 min read",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
  },
  {
    title: "Building Community: The Social Benefits of Room Exchange",
    excerpt: "Beyond saving money, room exchange creates meaningful connections and builds a global community of like-minded individuals.",
    author: "James Wilson",
    date: "Dec 28, 2025",
    readTime: "5 min read",
    category: "Community",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
  },
  {
    title: "Sustainable Living: How Room Exchange Reduces Housing Waste",
    excerpt: "Room exchange is not just affordable - it is environmentally friendly. Learn about the sustainability benefits of sharing spaces.",
    author: "Emma Green",
    date: "Dec 22, 2025",
    readTime: "4 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
  },
  {
    title: "Navigating Cultural Differences in Room Exchange",
    excerpt: "Tips for building cultural awareness and respect when swapping rooms with people from different backgrounds.",
    author: "Priya Sharma",
    date: "Dec 18, 2025",
    readTime: "7 min read",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Student Life", "Professional Life", "Technology", "Tips & Guides", "Safety", "Finance", "Community", "Sustainability", "Culture"];

export function BlogContent() {
  return (
    <main className="flex flex-col">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text-green">blog</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-8">
              Insights, tips, and stories about room exchange, flexible living, and building community.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border/50 bg-white/50 outline-none focus:border-primary/50 focus:bg-white transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-foreground/5 text-foreground/70 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {posts.map((post, index) => (
              <motion.article
                key={index}
                variants={fadeIn}
                className="group rounded-2xl border border-border/50 bg-white/50 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="primary">{post.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-foreground/40 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs text-foreground/40">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-primary font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
