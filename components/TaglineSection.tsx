"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

type TaglineSectionProps = {
  tagline: string;
};

export function TaglineSection({ tagline }: TaglineSectionProps) {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  // Split tagline thành các cụm theo dấu cách (giữ cả khoảng trắng để render đúng)
  const segments = React.useMemo(
    () => tagline.split(/(\s+)/),
    [tagline]
  );

  return (
    <section
      ref={ref}
      className="tagline-section w-full h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #13151A 0%, #1A1D25 53%, #13151A 100%)",
      }}
    >
      <motion.h1
        className="tagline-text text-center px-6 md:px-8 max-w-4xl text-[32px] md:text-[48px] leading-[150%] font-semibold"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          letterSpacing: "0.05em",
          color: "rgba(255, 255, 255, 0.72)",
        }}
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 20, scale: 0.95 }
        }
        transition={{
          duration: 1.05,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {segments.map((segment, index) =>
          segment.trim().length === 0 ? (
            // Khoảng trắng giữ nguyên
            <span key={index}>{segment}</span>
          ) : (
            <motion.span
              key={index}
              className="inline-block"
              whileHover={{
                color: "rgba(255, 255, 255, 1)",
                textShadow: "0 0 18px rgba(148, 163, 184, 0.9)",
              }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {segment}
            </motion.span>
          )
        )}
      </motion.h1>
    </section>
  );
}
