import { ProjectDetail } from '@/components/project-detail';
import { Footer } from '@/components/footer';
import { getProject, getProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <ProjectDetail project={project} />
      <Footer />
    </div>
  );
}