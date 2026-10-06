import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Project } from '@/lib/site';

/** Restrained browser chrome around a product screenshot. */
export function BrowserFrame({
  image,
  url,
  priority,
  className,
}: {
  image: Project['image'];
  url?: string;
  priority?: boolean;
  className?: string;
}) {
  const host = url ? new URL(url).host.replace(/^www\./, '') : undefined;
  return (
    <figure className={cn('overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40', className)}>
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        {host && (
          <span className="ml-3 truncate rounded-md bg-background/60 px-3 py-0.5 text-xs text-muted-foreground">
            {host}
          </span>
        )}
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes="(min-width: 1024px) 640px, 100vw"
        className="h-auto w-full"
      />
    </figure>
  );
}
