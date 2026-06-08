"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Capa global de "aurora" — gradientes radiales suaves que se desplazan lentamente.
 * Implementada con la utility `bg-aurora` de globals.css.
 * Se posiciona fixed detrás de todo el contenido.
 */
export function AuroraBg() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 bg-aurora opacity-50"
    />
  );
}
