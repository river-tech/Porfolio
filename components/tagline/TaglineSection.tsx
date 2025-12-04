"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { DissolveText } from "./DissolveText";

type TaglineSectionProps = {
  tagline: string;
};

export function TaglineSection({ tagline }: TaglineSectionProps) {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <section
      ref={ref}
      className="tagline-section w-full h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #13151A 0%, #1A1D25 53%, #13151A 100%)",
      }}
    >
      <DissolveText
        text={tagline}
        trigger={isInView}
        className="text-center px-6 md:px-8 max-w-4xl text-[32px] md:text-[48px] leading-[150%] font-semibold"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          letterSpacing: "0.05em",
          color: "rgba(255, 255, 255, 0.88)",
        }}
      />
    </section>
  );
}


