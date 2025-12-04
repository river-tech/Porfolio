export type SkillSection = {
  id: number;
  title: string;
  subtitle?: string;
  items: string[];
};

export const skills: SkillSection[] = [
  {
    id: 1,
    title: "Frontend Development",
    items: [
      "React, Next.js, TypeScript",
      "Tailwind CSS, modern UI patterns",
      "State management (Redux, Redux toolkit)",
      "Responsive, accessible UI design",
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    items: [
      "FastAPI, Node.js",
      "RESTful API design",
      "Authentication & authorization",
      "API documentation & versioning",
    ],
  },
  {
    id: 3,
    title: "Database & ORM",
    items: [
      "PostgreSQL, SQLite",
      "Prisma ORM",
      "Schema design & migrations",
      "Query optimization basics",
    ],
  },
  {
    id: 4,
    title: "Infra & DevOps",
    items: [
      "Cloudflare (Tunnel / DNS / Zero Trust)",
      "Vercel & Netlify deployment",
      "GitHub Actions (CI/CD basics)",
      "Monitoring and error tracking",
    ],
  },
  {
    id: 5,
    title: "Mobile Development",
    items: [
      "React Native / Expo",
      "Cross-platform UI systems",
      "Navigation & deep linking",
      "Publishing workflows (TestFlight / stores)",
    ],
  },
  {
    id: 6,
    title: "AI / Tools",
    items: [
      "OpenAI API, LLM prompting",
      "Design tools (Figma, Framer)",
      "Productivity tooling setup",
      "Experimentation & rapid prototyping",
    ],
  },
  {
    id: 7,
    title: "Soft Skills",
    items: [
      "Clear, structured communication",
      "Problem solving & ownership",
      "Working in small product teams",
      "Learning quickly & self-driven",
    ],
  },
];

