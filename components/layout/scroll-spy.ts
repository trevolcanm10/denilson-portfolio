"use client";

import { useEffect, useState } from "react";

/**
 * Hook que detecta qué sección (por id) está actualmente más visible en el viewport.
 * Usa IntersectionObserver y devuelve el id de la sección con mayor intersección.
 *
 * @param ids Lista de ids de secciones a observar
 * @param options Umbral mínimo de visibilidad para considerar "activa" (0-1)
 */
export function useScrollSpy(ids: string[], options: { threshold?: number; rootMargin?: string } = {}) {
  const { threshold = 0.3, rootMargin = "-20% 0px -50% 0px" } = options;
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Track ratio por id
    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio);
        }
        // Encontrar el id con mayor ratio
        let bestId: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestRatio >= threshold && bestId) {
          setActiveId(bestId);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin }
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [ids, threshold, rootMargin]);

  return activeId;
}
