"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Capa decorativa de "polen" / motas flotando.
 * CSS puro, sin JS en runtime. Las partículas se posicionan pseudoaleatoriamente
 * con durations distintas para evitar uniformidad.
 */
export function FloatingParticles({ count = 14 }: { count?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  // Generamos partículas determinísticas con PRNG simple
  const particles = Array.from({ length: count }, (_, i) => {
    const left = ((i * 73) % 100) + (i % 2 === 0 ? 2 : -2);
    const top = ((i * 41) % 100);
    const size = 3 + ((i * 7) % 6); // 3-9px
    const duration = 10 + ((i * 3) % 12); // 10-22s
    const delay = (i * 0.7) % 8;
    const opacity = 0.25 + ((i * 13) % 35) / 100; // 0.25-0.6
    return { left, top, size, duration, delay, opacity, key: i };
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((p) => (
        <span
          key={p.key}
          className="absolute rounded-full bg-primary/40 mix-blend-multiply dark:mix-blend-screen"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(15px, -25px) scale(1.1);
          }
          66% {
            transform: translate(-10px, 15px) scale(0.9);
          }
          100% {
            transform: translate(20px, -10px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
