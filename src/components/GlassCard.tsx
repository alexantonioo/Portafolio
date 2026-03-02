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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px", amount: 0.05 }}
      transition={{
        duration: 0.3,
        delay,
        ease: "easeOut",
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
