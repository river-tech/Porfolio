import { HeroSection } from "@/components/HeroSection";
import { TaglineSection } from "@/components/TaglineSection";
import { ProjectsSection } from "@/components/projects";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TaglineSection tagline="Design, code, and valuable systems with purpose — that's what I love." />
      <ProjectsSection />
      <TaglineSection tagline="A blend of technologies that shape how I build, solve, and refine.”" />
      <SkillsSection />
      <TaglineSection tagline="I build modern, scalable applications with React, Next.js, and FastAPI—focusing on product thinking, clarity, and refined execution." />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
