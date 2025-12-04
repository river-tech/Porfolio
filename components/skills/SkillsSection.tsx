"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/skills";

export function SkillsSection() {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector<HTMLElement>(
      `[data-skill-index='${index}']`
    );
    if (!card) return;

    // Tính vị trí cần scroll để card nằm giữa viewport, dùng scrollTo để tránh giật
    const targetLeft =
      card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;

    container.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
  };

  const handleNext = (currentIndex: number) => {
    const nextIndex = (currentIndex + 1) % skills.length;
    scrollToIndex(nextIndex);
  };

  const handlePrev = (currentIndex: number) => {
    const prevIndex = (currentIndex - 1 + skills.length) % skills.length;
    scrollToIndex(prevIndex);
  };

  return (
    <section
      ref={ref}
      id="skills-section"
      className="w-full h-screen flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #13151A 0%, #1A1D25 53%, #13151A 100%)",
      }}
    >
      {/* <motion.h2
        className="text-center font-semibold mb-12 px-6 text-[28px] md:text-[36px]"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          color: "rgba(255, 255, 255, 0.88)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Skills & Stack
      </motion.h2> */}

      <div className="w-full h-full">
        <motion.div
          ref={scrollContainerRef}
          className="flex h-full w-full overflow-x-auto snap-x snap-mandatory no-scrollbar"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {skills.map((section, index) => (
            <article
              key={section.id}
              data-skill-index={index}
              className="relative flex-shrink-0 snap-center w-full h-full flex items-center justify-center px-6 sm:px-8 md:px-32 text-white/90"
            >
              <div className="relative max-w-5xl w-full flex flex-col gap-6 md:gap-9">
                <header>
                  <h3
                    className="text-[24px] md:text-[30px] font-semibold mb-5"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {section.title}
                  </h3>
                </header>

                <ul className="space-y-2.5 text-[16px] md:text-[18px] leading-[1.9]">
                  {section.items.map((item) => (
                    <li key={item} className="list-disc list-inside text-white/85">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handlePrev(index)}
                    className="text-[16px] md:text-[18px] text-white/90 link-underline-reverse inline-flex items-center gap-3"
                    style={{ fontFamily: "var(--font-crimson), serif" }}
                  >
                    <span className="h-px w-6 bg-gradient-to-r from-sky-400 to-indigo-400" />

                    <span>Previous section</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNext(index)}
                    className="text-[16px] md:text-[18px] text-white/90 link-underline inline-flex items-center gap-3"
                    style={{ fontFamily: "var(--font-crimson), serif" }}
                  >
                    <span>Next section</span>
                    <span className="h-px w-6 bg-gradient-to-r from-sky-400 to-indigo-400" />
                  </button>
                </div>
              </div>

              {/* Right semi-circle accent */}
              <div className="pointer-events-none absolute -right-40 top-0 h-full w-72 rounded-[999px] bg-gradient-to-l from-[#1f2937] via-[#020617] to-transparent opacity-70" />
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

