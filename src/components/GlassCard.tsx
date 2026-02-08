"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  intense?: boolean;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  intense = false,
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        rounded-2xl
        ${intense ? "glass-intense" : "glass"}
        ${hover ? "glass-hover" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
