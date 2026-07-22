"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NotFoundContent() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <div className="relative mb-8">
          <div className="text-[12rem] font-bold leading-none gradient-text-green opacity-20 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Search className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Page not found
        </h1>
        <p className="text-lg text-foreground/60 leading-relaxed mb-8">
          Oops! The page you are looking for does not exist or has been moved.
          Let us help you find your way back.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="lg">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-foreground/40">
          <a href="/features" className="hover:text-primary transition-colors">Features</a>
          <a href="/pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="/faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </motion.div>
    </main>
  );
}
