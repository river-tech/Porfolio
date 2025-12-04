"use client";

import * as React from "react";
import { motion } from "framer-motion";

type FlipCardProps = {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  isFlipped?: boolean;
};

export function FlipCard({ front, back, className, isFlipped = false }: FlipCardProps) {
  return (
    <div
      className={`relative h-full w-full [perspective:1600px] ${className ?? ""}`}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {front}
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {back}
        </div>
      </motion.div>
    </div>
  );
}


