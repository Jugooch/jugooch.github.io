import { ArrowDownIcon, FileTextIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { Starfield } from '@/components/starfield';
import { profile } from '@/lib/site';

const socials = [
  { href: profile.github, label: 'GitHub', icon: GithubIcon },
  { href: profile.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: 'Email', icon: MailIcon },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-border/60 bg-[radial-gradient(120%_90%_at_75%_0%,hsl(258_60%_18%)_0%,hsl(240_40%_8%)_55%,hsl(var(--background))_100%)]"
    >
      <Starfield />
      {/* Softly lit planet: a slow white sheen sweeps the surface while a moon orbits the rim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 hidden h-[640px] w-[640px] -translate-y-1/2 lg:block"
      >
        <div className="absolute inset-0 animate-breathe rounded-full shadow-[0_0_120px_10px_hsl(var(--primary)/0.18),inset_0_0_80px_hsl(var(--primary-soft)/0.12)]" />
        <div className="absolute inset-0 overflow-hidden rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.14),rgba(255,255,255,0.03)_38%,transparent_68%)]">
          <div className="absolute -inset-1/4 animate-orbit-slow bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.16)_50deg,transparent_110deg,transparent_200deg,hsl(var(--primary-soft)/0.08)_250deg,transparent_310deg)] blur-2xl" />
        </div>
        <div className="absolute inset-0 animate-orbit">
          <div className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_5px_hsl(var(--primary-soft)/0.7)]" />
        </div>
      </div>

      <div className="shell relative pb-20 pt-[calc(var(--header-height)+4.5rem)] sm:pb-28 sm:pt-[calc(var(--header-height)+7rem)]">
        <p className="eyebrow mb-5">{profile.role}</p>
        <h1 id="hero-heading" className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I build web and mobile products from the first sketches to launch. At Legends Global, I develop B2B
          commerce software and help lead the team that supports it. I also run Icarian Software Solutions, where
          I work directly with clients to design and build their products.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#work" className="btn-primary px-6 py-3 text-base">
            View selected work
            <ArrowDownIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-6 py-3 text-base"
          >
            <FileTextIcon className="h-4 w-4" aria-hidden="true" />
            View resume
          </a>
        </div>

        <ul className="mt-8 flex items-center gap-1" aria-label="Elsewhere">
          {socials.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
