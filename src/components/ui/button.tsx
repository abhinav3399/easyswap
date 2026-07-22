"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white hover:brightness-110 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40",
        secondary: "bg-white border-2 border-slate-200 text-slate-900 hover:border-primary hover:text-primary shadow-sm hover:shadow-md",
        accent: "bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white hover:brightness-110 shadow-lg shadow-amber-500/25",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-slate-600 hover:text-primary hover:bg-primary/5",
        dark: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20",
        glass: "bg-white/70 backdrop-blur-xl border border-slate-200/80 text-slate-900 hover:bg-white/90 hover:border-primary/30 shadow-sm",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...(props as HTMLMotionProps<"button">)}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
