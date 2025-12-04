"use client";

import * as React from "react";
import { motion, useMotionValue } from "framer-motion";

/**
 * Premium dot + outline custom cursor.
 * - Uses motion values + springs for smooth trailing
 * - Reacts to elements with data-cursor="hover"
 */
const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const [isEnabled, setIsEnabled] = React.useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable on coarse pointers (touch devices)
    if (window.matchMedia && !window.matchMedia("(pointer: fine)").matches) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      // Ensure cursor becomes visible as soon as the user moves the mouse
      setIsVisible(true);
    };

    const handlePointerEnter = () => {
      setIsVisible(true);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    const selector =
      'button, a, [role="button"], [data-cursor="hover"], [data-cursor="focus"]';

    const handlePointerOver = (event: PointerEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      const interactive = event.target.closest(selector);
      setIsHovering(Boolean(interactive));
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      const related = event.relatedTarget as HTMLElement | null;
      if (related && related.closest && related.closest(selector)) {
        // Still inside an interactive tree
        return;
      }
      setIsHovering(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerenter", handlePointerEnter);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerenter", handlePointerEnter);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
    };
  }, [mouseX, mouseY]);

  if (!isEnabled) return null;

  const baseOpacity = isVisible ? 1 : 0;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen">
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        style={{ x: mouseX, y: mouseY }}
        animate={{
          opacity: baseOpacity,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.3)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="h-9 w-9 rounded-full border border-current" />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        style={{ x: mouseX, y: mouseY }}
        animate={{
          opacity: baseOpacity,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="h-2 w-2 rounded-full bg-white" />
      </motion.div>
    </div>
  );
};

export default CustomCursor;

