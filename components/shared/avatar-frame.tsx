"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function AvatarFrame() {

  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {

      if (!avatarRef.current) return;

      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;

      avatarRef.current.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (

    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
      style={{ perspective: "1000px" }}
    >

      <div
        ref={avatarRef}
        className="relative w-64 h-80 md:w-80 md:h-96 transition-transform duration-150"
      >

        {/* Marco desplazado */}
        <div className="absolute inset-0 translate-x-4 translate-y-4 border border-primary" />

        {/* Contenedor */}
        <div className="relative w-full h-full overflow-hidden border border-primary bg-card">

          <Image
            src="/avatar.png"
            alt="Denilson Morales"
            sizes="(max-width: 768px) 256px, 320px"
            fill
            className="object-cover grayscale brightness-110"
            priority
          />

        </div>

      </div>

    </motion.div>

  );
}