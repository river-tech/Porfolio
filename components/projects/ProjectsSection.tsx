"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { ProjectItem } from "./ProjectItem";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = React.useState(2); // Start with center item (index 2)
  const [spacing, setSpacing] = React.useState(190);
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const router = useRouter();

  // Handle responsive spacing
  React.useEffect(() => {
    const updateSpacing = () => {
      setSpacing(window.innerWidth > 768 ? 190 : 140);
    };
    updateSpacing();
    window.addEventListener("resize", updateSpacing);
    return () => window.removeEventListener("resize", updateSpacing);
  }, []);

  const handleProjectSelect = (index: number) => {
    // Nếu đã là project ở giữa (đang active) → redirect sang trang detail
    if (index === activeIndex) {
      const project = projects[index];
      router.push(`/projects/${project.id}`);
      return;
    }

    // Nếu là project ở 2 bên → chỉ đổi active, chưa redirect
    setActiveIndex(index);
  };

  const goNext = () => {
    setActiveIndex((i) => (i + 1) % projects.length);
  };

  const goPrev = () => {
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  };

  // Calculate offset for each item relative to active index (circular)
  // Ensures smooth looping: offsets stay in range [-half, +half]
  const getOffset = (index: number) => {
    const total = projects.length;
    const half = Math.floor(total / 2);
    let offset = index - activeIndex;

    if (offset > half) {
      offset -= total;
    } else if (offset < -half) {
      offset += total;
    }

    return offset;
  };

  // Check if item should be visible (fade out items too far from center)
  const isVisible = (offset: number) => {
    return Math.abs(offset) <= 2; // Show only 2 items on each side
  };

  return (
    <section
      ref={ref}
      id="projects-section"
      className="w-full min-h-screen flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #13151A 0%, #1A1D25 53%, #13151A 100%)",
      }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-center font-semibold mb-16 px-6 text-[28px] md:text-[36px]"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          color: "rgba(255, 255, 255, 0.88)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Featured Projects
      </motion.h2>

      {/* Projects slider */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden px-4 md:px-0"
        style={{ minHeight: "320px" }}
      >
        {/* Hidden Left Navigation Zone */}
        <div
          className="absolute left-0 top-0 bottom-0 cursor-pointer z-20"
          style={{
            width: "20%",
            opacity: 0,
          }}
          onClick={goPrev}
        />

        {/* Projects List - All items centered, positioned absolutely */}
        <div className="relative flex items-center justify-center w-full h-[260px] sm:h-[320px] md:h-[400px]">
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {projects.map((project, index) => {
              const offset = getOffset(index);
              const visible = isVisible(offset);

              return (
                <motion.div
                  key={project.id}
                  className="absolute"
                  initial={{ opacity: 0, x: -40 }}
                  animate={
                    isInView
                      ? {
                          opacity: visible ? (index === activeIndex ? 1 : 0.75) : 0,
                          x: offset * spacing, // Responsive spacing
                          scale: index === activeIndex ? 1.05 : 1,
                        }
                      : { opacity: 0, x: -40, scale: 1 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: isInView ? index * 0.08 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    pointerEvents: visible ? "auto" : "none",
                  }}
                >
                  <ProjectItem
                    project={project}
                    isActive={index === activeIndex}
                    offset={offset}
                    onSelect={() => handleProjectSelect(index)}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Hidden Right Navigation Zone */}
        <div
          className="absolute right-0 top-0 bottom-0 cursor-pointer z-20"
          style={{
            width: "15%",
            opacity: 0,
          }}
          onClick={goNext}
        />
      </div>

    </section>
  );
}

