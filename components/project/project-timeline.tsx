"use client";
import { motion } from "framer-motion";
interface TimelineItem {
  title: string;
  description: string;
}

interface ProjectTimelineProps {
  timeline: TimelineItem[];
}

export function ProjectTimeline({
  timeline,
}: ProjectTimelineProps) {
  return (
    <div className="mt-8">
      <div className="space-y-8">
        {timeline.map((item, index) => (
        <motion.div
            key={item.title}
            initial={{
                opacity: 0,
                x: -20,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.4,
            }}
            className="flex gap-6"
            >
            <div className="flex flex-col items-center">
              <div
                className="
                  h-4
                  w-4
                  rounded-full
                  border-2
                "
              />

              {index !== timeline.length - 1 && (
                <div
                  className="
                    mt-2
                    h-full
                    min-h-[60px]
                    w-px
                    bg-border
                  "
                />
              )}
            </div>

            <div className="pb-6">
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="mt-2 text-muted-foreground">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}