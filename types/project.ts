export interface Project {
  slug: string;

  title: string;

  description: string;

  technologies: string[];

  problem: string;

  solution: string;

  architecture: string[];
  results: string[];

  stack: {
    category: string;
    technology: string;
  }[];

  timeline: {
    title: string;
    description: string;
  }[];
  
  gallery: {
    image: string;
    title: string;
    description: string;
  }[];

  github?: string;

  demo?: string;

  year?: string;

  status?: string;
  
}