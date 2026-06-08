"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Counter numérico que se anima desde 0 hasta `value` cuando entra en viewport.
 * Respeta prefers-reduced-motion (salta al valor final instantáneamente).
 */
export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1800,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();
  // Si reduce-motion, saltamos al valor final; el rAF se monta en el effect.
  const [count, setCount] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;

    if (reduce) {
      // No-op: el estado inicial ya es el valor final
      return;
    }

    let start: number | null = null;
    let frame = 0;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
