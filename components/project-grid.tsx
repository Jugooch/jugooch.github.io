"use client";

import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.article
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group relative bg-card rounded-lg overflow-hidden hover-glow"
        >
          <div className="relative h-48">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
                >
                  <GithubIcon className="w-6 h-6" />
                </Link>
              )}
              {project.links.live && (
                <Link
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
                >
                  <ExternalLinkIcon className="w-6 h-6" />
                </Link>
              )}
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
              <Link href={`/portfolio/${project.slug}`}>
                {project.title}
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}