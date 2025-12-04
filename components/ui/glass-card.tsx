import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    asChild?: boolean;
    glow?: boolean;
  };

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, asChild, glow, ...props }, ref) => {
    const Comp = asChild ? Slot : motion.div;

    return (
      <Comp
        ref={ref as any}
        className={cn(
          "glass-card relative overflow-hidden border border-slate-700/60 bg-slate-900/70",
          glow &&
            "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%)] before:opacity-80",
          "backdrop-blur-2xl",
          className
        )}
        {...props}
      />
    );
  }
);

GlassCard.displayName = "GlassCard";


