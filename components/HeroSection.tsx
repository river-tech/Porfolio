"use client";

import * as React from "react";
import { HeroCard } from "./HeroCard";

function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function HeroSection() {
  return (
    <section
      className="w-full min-h-screen lg:h-screen flex items-center justify-center py-16 lg:py-0"
      style={{
        background:
          "linear-gradient(to bottom, #20232C 0%, #1A1D25 50%, #13151A 100%)",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-5 px-4">
        {/* Left card - Technical Skillset */}
        <HeroCard
          variant="left"
          frontContent={<div className="w-full h-full" />}
          backContent={
            <div
              className="w-full h-full p-8 flex flex-col text-white/90"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              <h2
                className="font-semibold text-center mb-6 text-[18px] md:text-[24px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Technical Skillset
              </h2>
              <div
                className="flex-1 space-y-5 text-[12px] md:text-[17px]"
                style={{ lineHeight: "1.9" }}
              >
                <div>
                  <p className="font-semibold mb-2">Frontend</p>
                  <div className="ml-4 space-y-1">
                    <p>TypeScript</p>
                    <p>React</p>
                    <p>Tailwind CSS</p>
                    <p>Redux</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Backend</p>
                  <div className="ml-4 space-y-1">
                    <p>FastAPI</p>
                    <p>PostgreSQL</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Infra</p>
                  <div className="ml-4 space-y-1">
                    <p>Cloudflare (Tunnel / DNS / Zero Trust)</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection("skills-section")}
                className="italic text-right mt-auto text-[18px] text-white/75 hover:text-white"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                <span className="link-underline-hero">And more</span>
              </button>
            </div>
          }
        />

        {/* Center card - About Me */}
        <HeroCard
          variant="center"
          frontContent={
            <img
              src="/haPorfo.png"
              className="w-full h-full object-cover"
              alt="Hero"
            />
          }
          backContent={
            <div
              className="w-full h-full p-8 flex flex-col text-white/90"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              <h2
                className="font-semibold text-center mb-6 text-[18px] md:text-[24px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                About Me
              </h2>
              <div
                className="flex-1 space-y-3 text-[12px] md:text-[17px]"
                style={{ lineHeight: "1.9" }}
              >
                <p>
                  I'm Nguyễn Hà — River Nguyen. Currently a student at Danang University of Science and Technology, with a passion for turning ideas into
                  minimal, elegant web experiences.
                </p>
                <p>
                  I enjoy working at the intersection of design and
                  engineering — creating interfaces that feel clear,
                  intentional, and modern.
                </p>
                <p>
                  Design, code, and simple systems with purpose — that's what I
                  love.
                </p>
              </div>
              <p className="italic text-right mt-auto text-[14px] md:text-[18px]">
                River
              </p>
            </div>
          }
        />

        {/* Right card - Featured Projects */}
        <HeroCard
          variant="right"
          frontContent={<div className="w-full h-full" />}
          backContent={
            <div
              className="w-full h-full p-8 flex flex-col text-white/90"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              <h2
                className="font-semibold text-center mb-6 text-[18px] md:text-[24px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Featured Projects
              </h2>
              <div
                className="flex-1 space-y-5 text-[12px] md:text-[17px]"
                style={{ lineHeight: "1.9" }}
              >
                <div>
                  <p className="font-semibold mb-1">Usitech</p>
                  <p className="ml-4">
                    A workflow marketplace with authentication, product
                    listing, and purchase flow.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Booking Photo</p>
                  <p className="ml-4">
                    A Next.js web app for browsing and booking photography
                    packages.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Planify</p>
                  <p className="ml-4">
                    A lightweight task planner built with Expo to simplify
                    daily workflows.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">OwnMeal</p>
                  <p className="ml-4">
                    A mobile app for tracking calories and meal habits with a
                    clean dashboard.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection("projects-section")}
                className="italic text-right mt-auto text-[18px] text-white/75 hover:text-white"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                <span className="link-underline-hero">And more</span>
              </button>
            </div>
          }
        />
      </div>
    </section>
  );
}

