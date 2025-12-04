"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FlipCard } from "./ui/flip-card";

type HeroCardVariant = "left" | "center" | "right";

type HeroCardProps = {
  variant: HeroCardVariant;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
  children?: React.ReactNode;
};

export function HeroCard({ variant, frontContent, backContent, children }: HeroCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);
  const baseClasses =
    "rounded-[36px] border border-[rgba(255,255,255,0.05)] shadow-[0_0_40px_rgba(255,255,255,0.06)] overflow-hidden w-full h-full";

  const gradientClasses =
    variant === "left"
      ? "bg-gradient-to-r from-[#2C333E] via-[#18212E] to-[#08090B]"
      : variant === "right"
      ? "bg-gradient-to-r from-[#08090B] via-[#18212E] to-[#2C333E]"
      : "bg-gradient-to-b from-[#1A1D25] via-[#1D212A] to-[#13151A]";

  const sizeClasses =
    variant === "center"
      ? "w-[320px] h-[540px] md:w-[420px] md:h-[680px]"
      : "w-[300px] h-[520px] md:w-[380px] md:h-[680px]";

  // Back gradient với 3 điểm màu: #13151A (0%) → #1A1D25 (53%) → #13151A (100%)
  const backGradientStyle = {
    background: "linear-gradient(to bottom, #13151A 0%, #1A1D25 53%, #13151A 100%)"
  };

  const content = frontContent || children;
  const hasBackContent = !!backContent;

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch =
      window.matchMedia &&
      window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
  }, []);

  // If no backContent, return simple card without flip
  if (!hasBackContent) {
    return (
      <div className={cn(baseClasses, gradientClasses, sizeClasses)}>
        {content}
      </div>
    );
  }

  // With backContent, use FlipCard with overlay wrapper
  const front = (
    <div className={cn(baseClasses, gradientClasses)}>
      {content}
    </div>
  );

  const back = (
    <div className={cn(baseClasses)} style={backGradientStyle}>
      {backContent}
    </div>
  );

  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setIsFlipped(false);
  };

  const handleClick = () => {
    if (!isTouchDevice) return;
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={cn(sizeClasses, "relative")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Lớp overlay chỉ để bắt hover, không chặn click/hover bên trong */}
      <div className="absolute inset-0 z-10 pointer-events-none" />

      {/* FlipCard bên trong */}
      <FlipCard front={front} back={back} isFlipped={isFlipped} />
    </div>
  );
}
