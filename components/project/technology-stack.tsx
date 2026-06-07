"use client";
import { motion } from "framer-motion";
interface StackItem {
  category: string;
  technology: string;
}

interface TechnologyStackProps {
  stack: StackItem[];
}

export function TechnologyStack({
  stack,
}: TechnologyStackProps) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stack.map((item) => (
        <motion.div
          key={`${item.category}-${item.technology}`}
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            rounded-2xl
            border
            p-6
          "
        >
          <p className="text-sm text-muted-foreground">
            {item.category}
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            {item.technology}
          </h3>
        </motion.div>
      ))}
    </div>
  );
}