"use client";

import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Projects() {
  return (
    <section id="projects" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gradient text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-card rounded-lg overflow-hidden hover-glow"
          >
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1080"
                alt="Space Portfolio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <Link
                  href="https://github.com/your-username/portfolio"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
                  aria-label="View Portfolio source on GitHub"
                >
                  <GithubIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Space Portfolio</h3>
              <p className="text-muted-foreground mb-4">
                A modern, space-themed portfolio website built with Next.js and TypeScript
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Tailwind'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-card rounded-lg overflow-hidden hover-glow"
          >
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
                alt="GCU Mobile App"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <Link
                  href="https://github.com/your-username/gcu-mobile-app"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
                  aria-label="View GCU Mobile App source on GitHub"
                >
                  <GithubIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">GCU Mobile App</h3>
              <p className="text-muted-foreground mb-4">
                A unified mobile application for Grand Canyon University students
              </p>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Firebase', 'Dart'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative bg-card rounded-lg overflow-hidden hover-glow"
          >
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500"
                alt="ODDSpot Sports"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <Link
                  href="https://github.com/your-username/oddspot-sports"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
                  aria-label="View ODDSpot Sports source on GitHub"
                >
                  <GithubIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">ODDSpot Sports</h3>
              <p className="text-muted-foreground mb-4">
                Real-time sports betting odds platform with dynamic updates
              </p>
              <div className="flex flex-wrap gap-2">
                {['Vue', 'C#', 'Azure'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover-glow"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}