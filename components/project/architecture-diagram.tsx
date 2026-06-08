"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Database,
  Brain,
  Cloud,
  Cpu,
  Server,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

interface ArchitectureDiagramProps {
  architecture: string[];
}

const getDetails = (item: string) => {
  let title = item;
  let subtitle = "";

  if (item.includes(" (")) {
    const parts = item.split(" (");
    title = parts[0];
    subtitle = parts[1].replace(")", "");
  } else if (item.includes(" - ")) {
    const parts = item.split(" - ");
    title = parts[0];
    subtitle = parts[1];
  }

  const text = item.toLowerCase();
  let Icon = Server;
  let colorClass = "border-primary/20 bg-primary/5 text-primary";
  let tag = "Servicio";

  if (
    text.includes("flutter") ||
    text.includes("app") ||
    text.includes("react") ||
    text.includes("next.js") ||
    text.includes("frontend") ||
    text.includes("dashboard") ||
    text.includes("html") ||
    text.includes("vite") ||
    text.includes("pdf")
  ) {
    Icon = Layout;
    colorClass = "border-sky-500/20 bg-sky-500/5 text-sky-500 dark:bg-sky-500/10";
    tag = "Interfaz / Vista";
  } else if (
    text.includes("database") ||
    text.includes("postgresql") ||
    text.includes("mongodb") ||
    text.includes("csv") ||
    text.includes("datos") ||
    text.includes("excel")
  ) {
    Icon = Database;
    colorClass = "border-emerald-500/20 bg-emerald-500/5 text-emerald-500 dark:bg-emerald-500/10";
    tag = "Base de Datos";
  } else if (
    text.includes("ml") ||
    text.includes("modelo") ||
    text.includes("scikit") ||
    text.includes("brain") ||
    text.includes("seaborn") ||
    text.includes("matplotlib") ||
    text.includes("pandas") ||
    text.includes("jupyter")
  ) {
    Icon = Brain;
    colorClass = "border-purple-500/20 bg-purple-500/5 text-purple-500 dark:bg-purple-500/10";
    tag = "IA & Análisis";
  } else if (
    text.includes("deploy") ||
    text.includes("docker") ||
    text.includes("vercel") ||
    text.includes("railway")
  ) {
    Icon = Cloud;
    colorClass = "border-amber-500/20 bg-amber-500/5 text-amber-500 dark:bg-amber-500/10";
    tag = "DevOps";
  } else if (
    text.includes("spring") ||
    text.includes("flask") ||
    text.includes("express") ||
    text.includes("api") ||
    text.includes("node") ||
    text.includes("whatsapp")
  ) {
    Icon = Cpu;
    colorClass = "border-rose-500/20 bg-rose-500/5 text-rose-500 dark:bg-rose-500/10";
    tag = "Lógica / API";
  }

  return { title, subtitle, Icon, colorClass, tag };
};

export function ArchitectureDiagram({
  architecture,
}: ArchitectureDiagramProps) {
  return (
    <div className="mt-8 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 md:gap-3">
      {architecture.map((item, index) => {
        const { title, subtitle, Icon, colorClass, tag } = getDetails(item);
        const stepNumber = String(index + 1).padStart(2, "0");

        return (
          <div
            key={item}
            className="flex flex-col md:flex-row items-center w-full md:w-auto"
          >
            {/* Card Block */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="relative flex items-center gap-4 p-5 rounded-2xl border bg-background/60 backdrop-blur shadow-sm hover:shadow-md hover:border-primary/40 transition-all w-full md:w-56 min-h-[96px] group overflow-hidden"
            >
              {/* Card Step Number background */}
              <div className="absolute top-1 right-2 text-xs font-mono text-muted-foreground/30 select-none">
                {stepNumber}
              </div>

              {/* Icon Container */}
              <div className={`p-2.5 rounded-xl border ${colorClass} shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>

              {/* Text details */}
              <div className="space-y-1 pr-4">
                <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                  {tag}
                </span>
                <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                  {title}
                </h4>
                {subtitle && (
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {subtitle}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Connecting Chevron Arrow */}
            {index !== architecture.length - 1 && (
              <div className="my-2 md:my-0 md:mx-1 text-muted-foreground/50 flex items-center justify-center">
                {/* Mobile: Down chevron, Desktop: Right chevron */}
                <ChevronDown className="w-5 h-5 md:hidden" />
                <ChevronRight className="w-5 h-5 hidden md:block" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}