import { ProjectDetail } from '@/components/project-detail';
import { Footer } from '@/components/footer';
import { getProject, getProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Link from "next/link";
import {HomeIcon} from "lucide-react";

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
          <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
              <div className="container mx-auto px-4 py-4">
                  <Link
                      href="/"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
                  >
                      <HomeIcon className="w-4 h-4"/>
                      <span>Back to Home</span>
                  </Link>
              </div>
          </div>
          <ProjectDetail project={project}/>
          <Footer/>
      </div>
  );
}