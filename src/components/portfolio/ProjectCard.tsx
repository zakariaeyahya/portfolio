"use client";

import type { PortfolioContent } from "@/data/portfolio-content";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

type Project = PortfolioContent["projects"]["items"][number];

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="relative group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200/40 bg-white/70 shadow-md backdrop-blur-xl transition hover:shadow-xl dark:border-gray-700/40 dark:bg-gray-900/60"
    >
      <div
        className={`absolute inset-0 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100 bg-gradient-to-br ${project.gradient}`}
      />

      <div className="relative p-8">
        <span className="mb-4 inline-flex items-center rounded-full border border-blue-200/70 bg-blue-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-300">
          {project.domain}
        </span>

        <h3 className="text-3xl font-bold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          {project.subtitle}
        </p>
      </div>

      <div className="relative flex flex-1 flex-col px-8 pb-8">
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        <ul className="mt-6 space-y-2">
          {project.features.slice(0, 3).map((feature, index) => (
            <li
              key={index}
              className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <Icon
                icon="solar:check-circle-bold"
                className="mt-0.5 text-green-500"
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100/70 px-3 py-1 text-xs backdrop-blur dark:bg-gray-800/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-6 pt-6">
          <Link
            href={project.github}
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            <Icon icon="solar:code-bold" />
            Code
          </Link>

          {project.live !== "#" && (
            <Link
              href={project.live}
              className="flex items-center gap-2 text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
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
