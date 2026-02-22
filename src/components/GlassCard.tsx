"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  intense?: boolean;
  hover?: boolean;
  delay?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  intense = false,
  hover = true,
  delay = 0,
  onMouseEnter,
  onMouseLeave,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
