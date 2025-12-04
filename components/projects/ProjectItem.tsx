"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectItemProps = {
  project: {
    id: number;
    name: string;
    image: string;
  };
  isActive: boolean;
  offset: number;
  onSelect: () => void;
};

export function ProjectItem({ project, isActive, offset, onSelect }: ProjectItemProps) {
  const size = isActive ? 150 : 90;
  const opacity = isActive ? 1 : 0.75;
  const glowIntensity = isActive ? "0 0 40px rgba(255, 255, 255, 0.4)" : "0 0 20px rgba(255, 255, 255, 0.2)";

  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      style={{
        opacity,
      }}
      whileHover={{
        scale: isActive ? 1.08 : 1.05,
      }}
      onClick={onSelect}
    >
      {/* Circular card with image */}
      <motion.div
        className="relative rounded-full bg-white overflow-hidden flex items-center justify-center"
        style={{
          boxShadow: glowIntensity,
          filter: `drop-shadow(${glowIntensity})`,
        }}
        animate={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          src={project.image ? project.image : "/placeholder.jpg"}
          alt={project.name}
          fill
          className="object-cover"
          sizes={`${size}px`}
        />
      </motion.div>

      {/* Project name */}
      <p
        className="mt-4 text-center font-semibold"
        style={{
          fontFamily: "var(--font-crimson), serif",
          fontSize: "16px",
          color: "rgba(255, 255, 255, 0.88)",
        }}
      >
        {project.name}
      </p>
    </motion.div>
  );
}

