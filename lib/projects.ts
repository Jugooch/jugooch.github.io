import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import remarkGfm from 'remark-gfm';

export interface Project {
  slug: string;
  title: string;
  date: string;
  summary: string;
  coverImage: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
  content: any;
  gallery?: {
    url: string;
    caption: string;
  }[];
}

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function getProjects(): Promise<Project[]> {
  // Create projects directory if it doesn't exist
  if (!fs.existsSync(projectsDirectory)) {
    fs.mkdirSync(projectsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const project = await getProject(slug);
        return project;
      })
  );

  // Filter out null projects and sort by date
  return projects
    .filter((project): project is Project => project !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Validate required fields
    if (!data.title || !data.date || !data.summary || !data.coverImage || !data.technologies) {
      console.warn(`Project ${slug} is missing required fields`);
      return null;
    }

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    });

    return {
      slug,
      content: mdxSource,
      title: data.title,
      date: data.date,
      summary: data.summary,
      coverImage: data.coverImage,
      technologies: data.technologies,
      links: data.links || {},
      gallery: data.gallery || [],
    };
  } catch (error) {
    console.error(`Error processing project ${slug}:`, error);
    return null;
  }
}