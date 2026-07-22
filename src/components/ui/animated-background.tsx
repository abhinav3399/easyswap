"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particleCount = Math.min(Math.floor(window.innerWidth / 15), 80);
    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${p.opacity})`;
        ctx.fill();

        particles.current.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export function FloatingCards() {
  const cards = [
    { emoji: "🏠", label: "Room", x: "15%", y: "20%", delay: 0 },
    { emoji: "🎓", label: "Student", x: "80%", y: "15%", delay: 0.5 },
    { emoji: "💼", label: "Professional", x: "10%", y: "70%", delay: 1 },
    { emoji: "🤝", label: "Match", x: "85%", y: "75%", delay: 1.5 },
    { emoji: "✅", label: "Verified", x: "50%", y: "10%", delay: 2 },
    { emoji: "⭐", label: "4.9 Rating", x: "50%", y: "90%", delay: 2.5 },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-xl p-3 flex items-center gap-2 z-10 shadow-sm"
          style={{ left: card.x, top: card.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { delay: card.delay, duration: 0.5 },
            scale: { delay: card.delay, duration: 0.5 },
            y: {
              delay: card.delay,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <span className="text-lg">{card.emoji}</span>
          <span className="text-xs font-medium text-slate-700">{card.label}</span>
        </motion.div>
      ))}
    </>
  );
}

export function LiveStats() {
  const stats = [
    { value: "50K+", label: "Users" },
    { value: "10K+", label: "Swaps" },
    { value: "95%", label: "Satisfaction" },
    { value: "500+", label: "Cities" },
  ];

  return (
    <div className="flex gap-8 md:gap-12 justify-center">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
        >
          <motion.span
            className="text-2xl md:text-3xl font-bold gradient-text block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
          >
            {stat.value}
          </motion.span>
          <span className="text-sm text-slate-500">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
