"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

const FOOTER_TEXT =
  "Thank you for taking the time to explore my work — I hope something here sparked an idea.";

export function FooterSection() {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const segments = React.useMemo(
    () => FOOTER_TEXT.split(/(\s+)/),
    []
  );

  return (
    <footer
      ref={ref}
      className="w-full flex items-center justify-center border-t border-white/5"
      style={{
        background:
          "linear-gradient(to bottom, #13151A 0%, #1A1D25 53%, #13151A 100%)",
        paddingTop: "1.75rem",
        paddingBottom: "1.75rem",
      }}
    >
      <motion.p
        className="text-center px-6 md:px-8 max-w-4xl text-[15px] md:text-[18px] leading-[150%] font-semibold"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          letterSpacing: "0.05em",
          color: "rgba(255, 255, 255, 0.7)",
        }}
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 16, scale: 0.97 }
        }
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {segments.map((segment, index) =>
          segment.trim().length === 0 ? (
            <span key={index}>{segment}</span>
          ) : (
            <motion.span
              key={index}
              className="inline-block"
              whileHover={{
                color: "rgba(255, 255, 255, 1)",
                textShadow: "0 0 16px rgba(148, 163, 184, 0.9)",
              }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {segment}
            </motion.span>
          )
        )}
      </motion.p>
    </footer>
  );
}

