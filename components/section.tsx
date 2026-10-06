import { cn } from '@/lib/utils';

export function Section({
  id,
  eyebrow,
  title,
  intro,
  className,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn('py-16 sm:py-24 lg:py-28', className)}>
      <div className="shell">
        <header className="mb-10 max-w-2xl sm:mb-14">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 id={`${id}-heading`} className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
