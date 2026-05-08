"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  align?: "left" | "center";
  size?: "default" | "large";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "default",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleSize = size === "large" ? "text-4xl lg:text-5xl" : "text-3xl lg:text-4xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`space-y-6 ${align === "center" ? "mx-auto max-w-3xl" : ""}`}
    >
      {/* Eyebrow */}
      <div className={`flex gap-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="jr-rule-gold" />
        <span className="jr-eyebrow">{eyebrow}</span>
      </div>

      {/* Title */}
      <h2 className={`jr-h2 ${titleSize} text-white ${alignClass}`}>
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className={`jr-body text-lg lg:text-xl max-w-3xl ${alignClass}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
