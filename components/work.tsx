import { ArrowUpRightIcon, GithubIcon } from 'lucide-react';
import { BrowserFrame } from '@/components/browser-frame';
import { Section } from '@/components/section';
import { projects } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Work() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Things I’ve designed and shipped"
      intro="Most of my day job is internal platform work, so these are the public ones."
    >
      <div className="space-y-16 sm:space-y-24">
        {projects.map((project, index) => (
          <article
            key={project.id}
            id={`project-${project.id}`}
            aria-labelledby={`project-${project.id}-title`}
            className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14"
          >
            <BrowserFrame
              image={project.image}
              url={project.live?.href}
              className={cn(index % 2 === 1 && 'lg:order-2')}
            />
            <div>
              <p className="text-sm text-muted-foreground">{project.meta}</p>
              <h3 id={`project-${project.id}-title`} className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                {project.live && (
                  <a href={project.live.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    {project.live.label}
                    <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                {project.source && (
                  <a href={project.source.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <GithubIcon className="h-4 w-4" aria-hidden="true" />
                    {project.source.label}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
