"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Suscripción que devuelve true solo en cliente (evita hydration mismatch
// y cumple la regla react-hooks/set-state-in-effect de React 19).
const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();
  const reduce = useReducedMotion();

  if (!mounted) {
    // Reservamos el espacio con un placeholder invisible
    return <span className="inline-block w-9 h-9" aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  const animationProps = reduce
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
      }
    : {
        initial: { rotate: -180, opacity: 0, scale: 0.6 },
        animate: { rotate: 0, opacity: 1, scale: 1 },
        exit: { rotate: 180, opacity: 0, scale: 0.6 },
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      className="rounded-lg border p-2 transition-colors hover:bg-muted"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="inline-flex items-center justify-center"
          {...animationProps}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
