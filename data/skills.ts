import {
  Code2,
  Database,
  Cpu,
  Layout,
  Server,
  Braces,
} from "lucide-react";

export const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "APIs REST"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "AI / ML",
    icon: Cpu,
    items: ["Python", "Scikit-learn", "Modelos predictivos"],
  },
  {
    category: "Lenguajes",
    icon: Braces,
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Otros",
    icon: Code2,
    items: ["Git", "Docker", "Vercel"],
  },
];