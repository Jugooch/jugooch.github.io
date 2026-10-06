import Image from 'next/image';
import { Section } from '@/components/section';
import { education, skills } from '@/lib/site';

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Design-minded, engineering-first">
      <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-14 lg:grid-cols-[260px_1fr]">
        <Image
          src="/me.webp"
          alt="Portrait of Justice Gooch"
          width={640}
          height={640}
          sizes="(min-width: 1024px) 260px, (min-width: 768px) 220px, 180px"
          className="h-auto w-44 rounded-2xl border border-border object-cover md:w-full"
        />
        <div className="max-w-[65ch] space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I work in the overlap between product design and engineering, and I think about products from
            the interface in. I like being the person who can sit with a client, sketch the flow in Figma,
            and then go build the API, the data model, and the deploy pipeline behind it.
          </p>
          <p>
            Outside of work, I dabble in music and play video games, especially MMOs like Final Fantasy XIV.
            I also love hiking, and walkable cities where I can spend an afternoon exploring
            neighborhoods, trying restaurants, and stopping into little shops along the way.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Skills</h3>
          <p className="mt-2 text-sm text-muted-foreground">What I reach for day to day.</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Core skills">
            {skills.core.map((skill) => (
              <li key={skill} className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-foreground">
                {skill}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">Also comfortable with</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skills.supporting.join(' · ')}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Education</h3>
          <ul className="mt-5 space-y-6">
            {education.map((item) => (
              <li key={item.school}>
                <p className="font-medium">{item.degree}</p>
                <p className="text-muted-foreground">{item.school}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.honors}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
