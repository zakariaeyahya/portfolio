"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  gradient: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="relative group rounded-3xl overflow-hidden border border-gray-200/40 dark:border-gray-700/40 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl shadow-md hover:shadow-xl transition"
    >
      {/* Glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${project.gradient} blur-3xl`}
      />

      {/* Header */}
      <div className="relative p-8">
        <h3 className="text-3xl font-bold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {project.subtitle}
        </p>
      </div>

      {/* Content */}
      <div className="relative px-8 pb-8 space-y-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {project.features.slice(0, 3).map((f, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <Icon
                icon="solar:check-circle-bold"
                className="text-green-500 mt-0.5"
              />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-gray-100/70 dark:bg-gray-800/70 backdrop-blur"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-6 pt-4">
          <Link
            href={project.github}
            className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Icon icon="solar:code-bold" />
            Code
          </Link>

          {project.live !== "#" && (
            <Link
              href={project.live}
              className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
            >
              <Icon icon="solar:arrow-up-outline" />
              Live
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
