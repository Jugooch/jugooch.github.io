import { Section } from '@/components/section';
import { experience, FEATURED_EXPERIENCE_COUNT, projects, type Experience as Role } from '@/lib/site';

export function Experience() {
  const featured = experience.slice(0, FEATURED_EXPERIENCE_COUNT);
  const earlier = experience.slice(FEATURED_EXPERIENCE_COUNT);
  const titles = Object.fromEntries(projects.map((p) => [p.id, p.title]));

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I’ve been building"
      intro="Production platforms, early-stage products, and client work — often at the same time, so part-time and contract roles are marked."
      className="border-y border-border/60 bg-surface"
    >
      <ol className="relative space-y-12 border-l border-border pl-6 sm:pl-10">
        {featured.map((role) => (
          <li key={role.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-surface sm:-left-[45px]"
            />
            <RoleHeader role={role} />
            {role.summary && <p className="mt-3 max-w-3xl text-muted-foreground">{role.summary}</p>}
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed marker:text-primary-soft">
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {role.projects && (
              <p className="mt-4 text-sm text-muted-foreground">
                Projects:{' '}
                {role.projects.map((id, i) => (
                  <span key={id}>
                    {i > 0 && ', '}
                    <a href={`#project-${id}`} className="text-primary-soft underline-offset-4 hover:underline">
                      {titles[id] ?? id}
                    </a>
                  </span>
                ))}
              </p>
            )}
          </li>
        ))}
      </ol>

      {earlier.length > 0 && (
        <div className="mt-16">
          <h3 className="eyebrow mb-6">Earlier</h3>
          <ul className="grid gap-6 md:grid-cols-3">
            {earlier.map((role) => (
              <li key={role.company} className="rounded-xl border border-border bg-card p-5">
                <RoleHeader role={role} compact />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{role.highlights.join(' ')}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}

function RoleHeader({ role, compact }: { role: Role; compact?: boolean }) {
  const Title = compact ? 'h4' : 'h3';
  return (
    <div className={compact ? '' : 'flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6'}>
      <div>
        <Title className={compact ? 'font-semibold' : 'text-xl font-semibold'}>
          {role.role}
          <span className="text-muted-foreground"> · {role.company}</span>
        </Title>
        {role.type && <span className="tag mt-2 inline-block">{role.type}</span>}
      </div>
      <p className={`shrink-0 text-sm text-muted-foreground ${compact ? 'mt-2' : ''}`}>
        {role.start} – {role.end}
      </p>
    </div>
  );
}
