"use client";

import portfolioContent from "@/data/portfolio-content";
import { motion } from "framer-motion";

export default function AboutSection() {
  const { about } = portfolioContent;

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6">{about.title}</h2>
      <div className="max-w-none">
        {about.paragraphs.map((paragraph, index) => (
          <p
            key={`${index}-${paragraph.slice(0, 20)}`}
            className={`text-gray-700 dark:text-gray-300 leading-relaxed ${
              index < about.paragraphs.length - 1 ? "mb-4" : ""
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </motion.section>
  );
}
