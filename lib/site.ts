// Resume-backed site content. Keep this in sync with public/Justice_Gooch_Resume.pdf.

export const profile = {
  name: 'Justice Gooch',
  role: 'Full-Stack Software Engineer',
  email: 'justicegooch@gmail.com',
  github: 'https://github.com/Jugooch',
  linkedin: 'https://www.linkedin.com/in/justicegooch/',
  resume: '/Justice_Gooch_Resume.pdf',
  siteUrl: 'https://jugooch.github.io',
};

export const navItems = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export interface Project {
  id: string;
  title: string;
  meta: string;
  summary: string;
  tags: string[];
  image: { src: string; alt: string; width: number; height: number };
  live?: { label: string; href: string };
  source?: { label: string; href: string };
}

// Homepage order is the array order.
export const projects: Project[] = [
  {
    id: 'contrack',
    title: 'ConTrack',
    meta: 'Mobile + web product · Icarian Software Solutions',
    summary:
      'General contractors text jobs to their subcontractors. Subs open a link — no app to install — and submit photos, notes, and a signature for approval.',
    tags: ['Product design', 'Full-stack', 'Next.js', 'Twilio'],
    image: {
      src: '/images/work/contrack-surfaces.webp',
      alt: 'The ConTrack GC mobile app showing a job next to the subcontractor’s browser view of the same job with Accept and Decline buttons.',
      width: 1100,
      height: 810,
    },
    live: { label: 'Visit ConTrack', href: 'https://www.contrack-app.com/' },
  },
  {
    id: 'gender-violence-project',
    title: 'The Gender Violence Project',
    meta: 'Nonprofit website · Icarian Software Solutions',
    summary:
      'Resource and outreach site for a coalition of ASU law students — designed so crisis hotlines and a quick-exit button are always one glance away.',
    tags: ['UI/UX design', 'Next.js', 'Vercel'],
    image: {
      src: '/images/work/gvp-home.webp',
      alt: 'The Gender Violence Project homepage with an emergency hotline bar, Quick Exit button, and the headline “Supporting Survivors. Advocating for Change.”',
      width: 1440,
      height: 900,
    },
    live: { label: 'Visit website', href: 'https://www.thegenderviolenceproject.com/' },
  },
  {
    id: 'cybersweeper',
    title: 'CyberSweeper',
    meta: 'Browser game · Built for fun',
    summary: 'Minesweeper with a neon terminal look — four grid sizes, four difficulty levels, and a live timer.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: {
      src: '/images/work/cybersweeper-board.webp',
      alt: 'A CyberSweeper game in progress: a dark 12 by 12 grid with glowing green numbers, a timer, and a mine counter.',
      width: 880,
      height: 690,
    },
    live: { label: 'Play CyberSweeper', href: 'https://jugooch.github.io/Cybersweeper/' },
    source: { label: 'Source', href: 'https://github.com/Jugooch/Cybersweeper' },
  },
];

export interface Experience {
  company: string;
  role: string;
  type?: 'Part-time' | 'Contract';
  start: string;
  end: string;
  summary?: string;
  highlights: string[];
  /** Ids from `projects` that came out of this role */
  projects?: string[];
}

export const experience: Experience[] = [
  {
    company: 'Legends Global',
    role: 'Full-Stack E-Commerce Developer',
    start: 'Sep 2025',
    end: 'Present',
    summary:
      'Multi-tenant B2B e-commerce platform serving five enterprise clients and 100+ storefronts, built on a Next.js frontend and Java microservices backend.',
    highlights: [
      'Took on day-to-day leadership of the nine-person Core Commerce development and support team after a management transition, coordinating priorities, production support, and feature delivery.',
      'Reduced the active engineering backlog from 100+ items to about 10 by restructuring ticket prioritization around high-impact issues and technical improvements.',
      'Meet with clients weekly to gather requirements and turn business priorities into actionable work for the team.',
    ],
  },
  {
    company: 'Icarian Software Solutions LLC',
    role: 'Founder & Lead Software Engineer',
    type: 'Part-time',
    start: 'Jul 2025',
    end: 'Present',
    summary:
      'A software consultancy focused on rapid prototyping and product development across web and mobile.',
    highlights: [
      'Own the full lifecycle for each product: research, UX design, architecture, development, testing, deployment, and user feedback.',
      'Designed and launched the production website for nonprofit client The Gender Violence Project.',
      'Build with Next.js, Vue.js, Flutter, Supabase, and Tailwind CSS, integrating Stripe, Supabase Auth, OpenAI, and Firebase.',
    ],
    projects: ['contrack', 'gender-violence-project'],
  },
  {
    company: 'Vortex Computation',
    role: 'Software Developer',
    type: 'Contract',
    start: 'Sep 2025',
    end: 'Mar 2026',
    highlights: [
      'Designed and deployed a scheduling application with Power Apps, Dataverse, and Power BI, replacing a client’s Excel-based workflow with a centralized drag-and-drop calendar.',
      'Worked in a three-person team to design and ship a client-facing Next.js application from design through production.',
    ],
  },
  {
    company: 'ClarityLA',
    role: 'Founding Engineer',
    type: 'Part-time',
    start: 'Sep 2024',
    end: 'Jun 2025',
    highlights: [
      'Architected and delivered the first version of an AI-powered EdTech platform with the founding team.',
      'Led early product strategy and UX design while building most of the full-stack application with Next.js, Python, Supabase, and Vercel.',
    ],
  },
  {
    company: 'Reynolds and Reynolds',
    role: 'Software Developer',
    start: 'Aug 2024',
    end: 'May 2025',
    highlights: [
      'Built full-stack features for Auto Vision, a dealership web app for viewing, tracking, and selling vehicles, using Vue.js and C#.',
      'Recognized as Team MVP for leading the UX design and integration of an AI-powered chatbot and messaging system.',
    ],
  },
  {
    company: 'ClearStack AI',
    role: 'UI/UX Developer',
    type: 'Contract',
    start: 'May 2024',
    end: 'Dec 2024',
    highlights: [
      'Designed client interfaces in Figma and built frontend features in Vue.js, including ClearStack’s production landing page.',
    ],
  },
  {
    company: 'Kinective (formerly CFM)',
    role: 'Software Development Intern',
    start: 'Oct 2022',
    end: 'Aug 2023',
    highlights: [
      'Built Vue.js and Spring Boot software connecting banking hardware, backend systems, and teller applications, plus an internal automated QA tool.',
    ],
  },
];

/** Roles shown in full; the rest render as a compact "Earlier" list. */
export const FEATURED_EXPERIENCE_COUNT = 4;

export const skills = {
  core: [
    'Next.js',
    'React',
    'Vue.js',
    'JavaScript',
    'Tailwind CSS',
    'Java',
    'C#',
    'Figma',
    'AI integrations',
  ],
  supporting: [
    'TypeScript',
    'Python',
    'SQL',
    'Flutter',
    'Spring Boot',
    'ASP.NET',
    'REST APIs',
    'Microservices',
    'PostgreSQL / MySQL',
    'Supabase',
    'Firebase',
    'Azure',
    'Vercel',
    'Cloudflare',
    'CI/CD',
  ],
};

export const education = [
  {
    school: 'Grand Canyon University',
    degree: 'B.S. in Software Development, Minor in Web Design',
    honors: 'Summa cum laude · Honors · Dean’s List · President’s Scholarship · Resident Assistant',
  },
  {
    school: 'Hill College',
    degree: 'A.A. in Computer Science',
    honors: 'Honors · President’s List · Baseball Scholarship',
  },
];
