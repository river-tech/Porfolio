import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { detailProjects } from "@/data/projects";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const numericId = Number(id);
  const project = detailProjects.find((p) => p.id === numericId);

  const title = project ? `${project.name} – Project Preview` : "Project Preview";

  return {
    title,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const numericId = Number(id);
  const project = detailProjects.find((p) => p.id === numericId);

  if (!project) {
    notFound();
  }

  return (
    <main
      className="min-h-screen w-full"
      style={{
        background:
          "linear-gradient(to bottom, #13151A 0%, #1A1D25 53%, #13151A 100%)",
      }}
    >
      <ProjectDetail project={project} />
    </main>
  );
}


