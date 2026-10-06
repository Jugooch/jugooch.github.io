import { GamepadIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { profile } from '@/lib/site';

const links = [
  { href: profile.github, label: 'GitHub', icon: GithubIcon },
  { href: profile.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: 'Email', icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60">
      {/* Static, faint stars to bookend the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(1px_1px_at_12%_30%,white,transparent),radial-gradient(1px_1px_at_38%_70%,white,transparent),radial-gradient(1.5px_1.5px_at_64%_25%,white,transparent),radial-gradient(1px_1px_at_82%_60%,white,transparent),radial-gradient(1px_1px_at_92%_20%,white,transparent)]"
      />
      <div className="shell relative flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} · Built with Next.js and Tailwind CSS</p>
        </div>

        <a
          href="https://jugooch.github.io/Cybersweeper/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 self-start rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/60 md:self-auto"
        >
          <GamepadIcon className="h-5 w-5 text-primary-soft" aria-hidden="true" />
          <span>
            <span className="block text-xs text-muted-foreground">Built for fun</span>
            Play CyberSweeper
          </span>
        </a>

        <ul className="flex gap-1">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
