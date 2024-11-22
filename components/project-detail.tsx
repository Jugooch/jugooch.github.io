"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ExternalLink, Github } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          <h1 className="text-4xl font-bold text-gradient mb-4">{project.title}</h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{project.date}</span>
            </div>
            <div className="flex gap-4">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <div className="relative aspect-video mb-12 rounded-lg overflow-hidden">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <MDXRemote {...project.content} />
          </div>

          {project.gallery && (
            <div className="mt-12 space-y-8">
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid gap-8">
                {project.gallery.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={image.url}
                        alt={image.caption}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {image.caption && (
                      <p className="text-sm text-muted-foreground text-center">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}