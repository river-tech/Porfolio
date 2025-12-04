"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import type { DetailProject } from "@/data/projects";
import Link from "next/link";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiPostgresql,
  SiFastapi,
  SiPrisma,
  SiMysql,
  SiExpo,
  SiDocker,
  SiNginx,
  SiCloudflare,
  SiCloudinary,
  SiPython,
  SiShadcnui,
  SiSocketdotio,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";

type ProjectDetailProps = {
  project: DetailProject;
};

const getTechDotClass = (tech: string): string => {
  const name = tech.toLowerCase();

  if (name.includes("next")) return "bg-white shadow-[0_0_10px_rgba(248,250,252,0.9)]";
  if (name.includes("react")) return "bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]";
  if (name.includes("tailwind")) return "bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.9)]";
  if (name.includes("shadcn")) return "bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]";
  if (name.includes("redux")) return "bg-violet-300 shadow-[0_0_10px_rgba(196,181,253,0.9)]";

  if (name.includes("postgres")) return "bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]";
  if (name.includes("fastapi")) return "bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]";
  if (name.includes("prisma")) return "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]";
  if (name.includes("mysql")) return "bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.9)]";

  if (name.includes("websocket")) return "bg-indigo-300 shadow-[0_0_10px_rgba(165,180,252,0.9)]";
  if (name.includes("cloudflare")) return "bg-orange-300 shadow-[0_0_10px_rgba(253,186,116,0.9)]";
  if (name.includes("cloudinary")) return "bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.9)]";
  if (name.includes("docker")) return "bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]";
  if (name.includes("nginx")) return "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]";

  return "bg-slate-300 shadow-[0_0_8px_rgba(148,163,184,0.9)]";
};

const getTechIcon = (tech: string): React.ReactNode | null => {
  const name = tech.toLowerCase();

  if (name.includes("next")) return <RiNextjsFill />;
  if (name.includes("react native")) return <TbBrandReactNative />;
  if (name.includes("react")) return <SiReact />;
  if (name.includes("typescript")) return <SiTypescript />;
  if (name.includes("tailwind")) return <SiTailwindcss />;
  if (name.includes("shadcn")) return <SiShadcnui />;
  if (name.includes("redux")) return <SiRedux />;
  if (name.includes("react query")) return <SiReactquery />;
  if (name.includes("expo")) return <SiExpo />;

  if (name.includes("postgres")) return <SiPostgresql />;
  if (name.includes("fastapi")) return <SiFastapi />;
  if (name.includes("prisma")) return <SiPrisma />;
  if (name.includes("mysql")) return <SiMysql />;
  if (name.includes("python")) return <SiPython />;

  if (name.includes("socket")) return <SiSocketdotio />;

  if (name.includes("cloudflare")) return <SiCloudflare />;
  if (name.includes("cloudinary")) return <SiCloudinary />;
  if (name.includes("docker")) return <SiDocker />;
  if (name.includes("nginx")) return <SiNginx />;

  // Nếu không có icon riêng, trả về null để dùng dot fallback
  return null;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const totalSlides = 3;

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector<HTMLElement>(
      `[data-project-slide-index='${index}']`
    );
    if (!card) return;

    const targetLeft =
      card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;

    container.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
  };

  const handleNext = (currentIndex: number) => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    scrollToIndex(nextIndex);
  };

  const handlePrev = (currentIndex: number) => {
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    scrollToIndex(prevIndex);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(to bottom, #13151A 0%, #1A1D25 53%, #13151A 100%)",
      }}
    >
      {/* Header */}
      <header className="px-6 sm:px-8 md:px-16 pt-6 md:pt-8 flex items-center justify-between gap-4">
        <div className="space-y-2">
          <p
            className="text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-slate-400"
            style={{ fontFamily: "var(--font-crimson), serif" }}
          >
            Project Preview
          </p>
          <h1
            className="text-[22px] md:text-[30px] font-semibold text-white/90"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {project.name}
          </h1>
        </div>

        <Link
          href="/#projects-section"
          className="text-[13px] md:text-[14px] text-white/80 hover:text-white link-underline-hero"
          style={{ fontFamily: "var(--font-crimson), serif" }}
          data-cursor="hover"
        >
          Back to projects
        </Link>
      </header>

      {/* Slides container */}
      <div className="w-full flex-1 mt-6 md:mt-10">
        <motion.div
          ref={scrollContainerRef}
          className="flex h-full w-full overflow-x-auto snap-x snap-mandatory no-scrollbar"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Slide 1: Overview */}
          <article
            data-project-slide-index={0}
            className="relative flex-shrink-0 snap-center w-full h-full flex items-center justify-center px-6 sm:px-10 md:px-24 lg:px-40 text-white/90"
          >
            <div className="relative max-w-5xl w-full rounded-3xl border border-white/7 bg-gradient-to-b from-[#141821] via-[#111827] to-[#0b1120] px-7 py-8 md:px-10 md:py-10 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
              <p
                className="text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-slate-400 mb-4"
                style={{ fontFamily: "var(--font-crimson), serif" }}
              >
                Project Overview
              </p>
              <h2
                className="text-[22px] md:text-[26px] font-semibold text-white/90 mb-4"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {project.name}
              </h2>
              <p className="text-[13px] md:text-[15px] text-slate-200/90 leading-relaxed mb-4">
                {project.tagline}
              </p>
              <p className="text-[13px] md:text-[15px] text-slate-300 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="space-y-4">
                <p
                  className="inline-flex items-center rounded-full bg-slate-100/5 border border-white/10 px-4 py-1.5 text-[11px] md:text-[12px] text-slate-200/90"
                  style={{ fontFamily: "var(--font-crimson), serif" }}
                >
                  {project.overview_tech}
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] md:text-[12px] text-slate-300/90">
                  {project.core.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900/40 px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handlePrev(0)}
                  className="text-[13px] md:text-[15px] text-white/90 link-underline-reverse inline-flex items-center gap-3"
                  style={{ fontFamily: "var(--font-crimson), serif" }}
                >
                  <span className="h-px w-6 bg-gradient-to-r from-sky-400 to-indigo-400" />
                  <span>Previous slide</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNext(0)}
                  className="text-[13px] md:text-[15px] text-white/90 link-underline inline-flex items-center gap-3"
                  style={{ fontFamily: "var(--font-crimson), serif" }}
                >
                  <span>Next slide</span>
                  <span className="h-px w-6 bg-gradient-to-r from-sky-400 to-indigo-400" />
                </button>
              </div>
            </div>
          </article>

          {/* Slide 2: Tech stack */}
          <article
            data-project-slide-index={1}
            className="relative flex-shrink-0 snap-center w-full h-full flex items-center justify-center px-6 sm:px-10 md:px-24 lg:px-40 text-white/90"
          >
            <div className="relative max-w-5xl w-full rounded-3xl border border-white/7 bg-gradient-to-b from-[#0f172a] via-[#020617] to-[#020617] px-7 py-8 md:px-10 md:py-10 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
              <p
                className="text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-slate-400 mb-4"
                style={{ fontFamily: "var(--font-crimson), serif" }}
              >
                Tech Stack
              </p>
              <h2
                className="text-[20px] md:text-[24px] font-semibold text-white/90 mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                How it’s built
              </h2>

              <div className="grid grid-cols-3 gap-6 text-[12px] md:text-[13px] text-slate-200">
                <div>
                  <p className="font-semibold mb-2 text-slate-100">Frontend</p>
                  <ul className="space-y-1.5">
                    {project.tech.frontend.map((item) => (
                      <li
                        key={item}
                        className="text-slate-300 flex items-center gap-2"
                      >
                        <span
                          className={`flex h-4 w-4 items-center justify-center text-[14px] ${getTechDotClass(
                            item
                          )} rounded-full text-slate-950`}
                        >
                          {getTechIcon(item) ?? null}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-slate-100">Backend</p>
                  {project.tech.backend.length > 0 ? (
                    <ul className="space-y-1.5">
                      {project.tech.backend.map((item) => (
                        <li
                          key={item}
                          className="text-slate-300 flex items-center gap-2"
                        >
                          <span
                            className={`flex h-4 w-4 items-center justify-center text-[14px] ${getTechDotClass(
                              item
                            )} rounded-full text-slate-950`}
                          >
                            {getTechIcon(item) ?? null}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-500 text-[11px]">Client-side only</p>
                  )}
                </div>
                <div>
                  <p className="font-semibold mb-2 text-slate-100">
                    Infra / DevOps
                  </p>
                  {project.tech.devops.length > 0 ? (
                    <ul className="space-y-1.5">
                      {project.tech.devops.map((item) => (
                        <li
                          key={item}
                          className="text-slate-300 flex items-center gap-2"
                        >
                          <span
                            className={`flex h-4 w-4 items-center justify-center text-[14px] ${getTechDotClass(
                              item
                            )} rounded-full text-slate-950`}
                          >
                            {getTechIcon(item) ?? null}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-500 text-[11px]">Lightweight setup</p>
                  )}
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handlePrev(1)}
                  className="text-[13px] md:text-[15px] text-white/90 link-underline-reverse inline-flex items-center gap-3"
                  style={{ fontFamily: "var(--font-crimson), serif" }}
                >
                  <span className="h-px w-6 bg-gradient-to-r from-sky-400 to-indigo-400" />
                  <span>Previous slide</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNext(1)}
                  className="text-[13px] md:text-[15px] text-white/90 link-underline inline-flex items-center gap-3"
                  style={{ fontFamily: "var(--font-crimson), serif" }}
                >
                  <span>Next slide</span>
                  <span className="h-px w-6 bg-gradient-to-r from-sky-400 to-indigo-400" />
                </button>
              </div>
            </div>
          </article>

          {/* Slide 3: Preview / demo */}
          <article
            data-project-slide-index={2}
            className="relative flex-shrink-0 snap-center w-full h-full flex items-center justify-center px-6 sm:px-10 md:px-24 lg:px-40 text-white/90"
          >
            <div className="relative max-w-5xl w-full rounded-3xl border border-white/7 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] px-7 py-8 md:px-10 md:py-10 shadow-[0_18px_60px_rgba(15,23,42,0.9)] flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p
                    className="text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-slate-400"
                    style={{ fontFamily: "var(--font-crimson), serif" }}
                  >
                    Project Preview
                  </p>
                  <p className="mt-2 text-[13px] md:text-[14px] text-slate-200/90">
                    A quick look at the live interface.
                  </p>
                </div>
              </div>

              <div className="relative mt-4 w-full h-[220px] sm:h-[260px] md:h-[340px] lg:h-[420px] rounded-2xl border border-white/8 bg-gradient-to-b from-slate-800/70 via-slate-900/80 to-slate-950 overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
                {project.demoVideo ? (
                  <video
                    className="w-full h-full object-contain bg-black"
                    src={project.demoVideo}
                    controls
                    preload="metadata"
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[11px] md:text-[12px] text-slate-300 text-center px-6 leading-relaxed">
                      Demo video coming soon. This area is reserved for a short
                      walkthrough of{" "}
                      <span className="font-semibold">{project.name}</span>.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handlePrev(2)}
                  className="text-[13px] md:text-[15px] text-white/90 link-underline-reverse inline-flex items-center gap-3"
                  style={{ fontFamily: "var(--font-crimson), serif" }}
                >
                  <span className="h-px w-6 bg-gradient-to-r from-sky-400 to-indigo-400" />
                  <span>Previous slide</span>
                </button>

                <div className="flex flex-col items-end gap-1 text-right">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[12px] md:text-[13px] text-sky-300 hover:text-sky-100 link-underline-hero"
                      style={{ fontFamily: "var(--font-crimson), serif" }}
                    >
                      Visit live site ↗
                    </a>
                  ) : (
                    <p
                      className="text-[11px] md:text-[12px] text-slate-400"
                      style={{ fontFamily: "var(--font-crimson), serif" }}
                    >
                      Run locally to explore this project.
                    </p>
                  )}

                  <p
                    className="text-[11px] md:text-[12px] text-slate-500"
                    style={{ fontFamily: "var(--font-crimson), serif" }}
                  >
                    {project.demoVideo
                      ? "Preview is shown above."
                      : "You’ll be able to embed a live demo or video here."}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}


