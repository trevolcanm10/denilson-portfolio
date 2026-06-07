export interface Project {
  slug: string;

  title: string;

  description: string;

  technologies: string[];

  stack: {
    category: string;
    technology: string;
  }[];

  problem: string;

  solution: string;

  architecture: string[];

  results: string[];

  github?: string;

  demo?: string;

  year?: string;

  status?: string;
  
}