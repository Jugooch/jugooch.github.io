import Link from 'next/link';
import { FileTextIcon } from 'lucide-react';
import { navItems, profile } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[var(--header-height)] border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="shell flex h-full items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-tight hover:text-primary-soft">
          <span className="sm:hidden" aria-hidden="true">JG</span>
          <span className="sr-only sm:not-sr-only">{profile.name}</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-7">
          <ul className="flex items-center gap-4 text-sm text-muted-foreground sm:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:border-primary/60 md:inline-flex"
          >
            <FileTextIcon className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
