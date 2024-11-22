import { ProjectGrid } from '@/components/project-grid';
import { getProjects } from '@/lib/projects';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon } from 'lucide-react';

export default async function PortfolioPage() {
  const projects = await getProjects();
  
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-gradient mb-12 text-center">Portfolio</h1>
        {projects.length > 0 ? (
          <ProjectGrid projects={projects} />
        ) : (
          <div className="text-center text-muted-foreground">
            <p>No projects available at the moment.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}