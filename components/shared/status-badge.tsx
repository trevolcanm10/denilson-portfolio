"use client";

import { motion } from "framer-motion";

interface StatusBadgeProps {
  text?: string;
}

export function StatusBadge({
  text = "AVAILABLE FOR CONTRACTS",
}: StatusBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="
        inline-flex
        items-center
        gap-3
        px-4
        py-2
        border
        border-border
        bg-card
        rounded-md
        w-fit
      "
    >
      {/* Indicador de estado */}
      <span className="relative flex h-2.5 w-2.5">
        {/* Pulso */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />

        {/* Punto */}
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
      </span>

      {/* Texto */}
      <span
        className="
          text-xs
          font-medium
          uppercase
          tracking-[0.18em]
          text-muted-foreground
        "
      >
        {text}
      </span>
    </motion.div>
  );
}