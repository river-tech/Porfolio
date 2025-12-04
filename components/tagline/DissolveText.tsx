"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { dissolveParticlesConfig } from "./particlesConfig";

type DissolveTextProps = {
  text: string;
  trigger: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export function DissolveText({
  text,
  trigger,
  className = "",
  style,
}: DissolveTextProps) {
  const [particlesLoaded, setParticlesLoaded] = React.useState(false);
  const [showParticles, setShowParticles] = React.useState(false);
  const [isDissolving, setIsDissolving] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [textBounds, setTextBounds] = React.useState({ width: 0, height: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLDivElement>(null);

  // Initialize particles engine
  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setParticlesLoaded(true);
    });
  }, []);

  // Update text bounds when text is visible
  React.useEffect(() => {
    if (textRef.current && trigger) {
      const updateBounds = () => {
        if (textRef.current) {
          const rect = textRef.current.getBoundingClientRect();
          setTextBounds({
            width: rect.width,
            height: rect.height,
          });
        }
      };
      updateBounds();
      window.addEventListener("resize", updateBounds);
      return () => window.removeEventListener("resize", updateBounds);
    }
  }, [trigger]);

  // Handle hover - trigger dissolve effect on hover
  const handleMouseEnter = () => {
    if (particlesLoaded && textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setTextBounds({
        width: rect.width,
        height: rect.height,
      });
      
      setIsHovered(true);
      setIsDissolving(true);
      setShowParticles(true);
    }
  };

  // Handle mouse leave - hide particles after delay
  React.useEffect(() => {
    if (!isHovered && showParticles) {
      const timeout = setTimeout(() => {
        setShowParticles(false);
        setIsDissolving(false);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [isHovered, showParticles]);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      ref={containerRef} 
      className="relative inline-block cursor-pointer" 
      style={{
        ...style,
        overflow: "visible",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Text content */}
      <AnimatePresence mode="wait">
        {trigger && (
          <motion.div
            key="text"
            ref={textRef}
            className={className}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={
              isHovered && isDissolving
                ? { opacity: 0, scale: 0.95, y: 20 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{
              duration: isHovered && isDissolving ? 0.4 : 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particles overlay for dissolve effect - contained within text bounds only */}
      {particlesLoaded && showParticles && textBounds.width > 0 && textBounds.height > 0 && (
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-20px",
            left: "-20px",
            width: `${textBounds.width + 40}px`, // Small padding for particles to scatter around text
            height: `${textBounds.height + 40}px`,
            zIndex: 10,
            overflow: "hidden",
          }}
        >
          <Particles
            id="dissolve-particles"
            className="absolute inset-0"
            options={{
              ...dissolveParticlesConfig,
              fullScreen: { enable: false },
            }}
            particlesLoaded={async () => {}}
          />
        </div>
      )}
    </div>
  );
}

