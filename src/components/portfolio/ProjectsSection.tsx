"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Checkersvip.com",
    description: "Online multiplayer American checkers game with realtime chat and communication capabilities. Currently in process of official recognition from American Checkers Federation (ACF).",
    tech: ["Next.js", "NextUI", "Tailwind", "DnDKit", "Fastify", "Redis", "Socket.io", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    live: "https://checkersvip.com",
    gradient: "from-blue-500 to-cyan-500",
    status: "Live"
  },
  {
    title: "AskRudy.ai",
    description: "RAG-based AI chatbot that helps users translate and chat with multilingual documents. Features OpenAI multimodal capability for taking screenshots from documents and asking questions or directly translating text.",
    tech: ["Next.js", "NextUI", "Vercel AI SDK", "React-PDF", "Firebase", "LangChain", "OpenAI API", "Stripe"],
    github: "https://github.com",
    live: "https://askrudy.ai",
    gradient: "from-purple-500 to-pink-500",
    status: "Live"
  }
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <span className="text-sm text-gray-600 dark:text-gray-400">({projects.length})</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-full bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden group">
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />

                {/* Animated gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                {/* Floating icons */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-white text-xl"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {["💻", "🚀", "⚡", "🎯"][i]}
                    </motion.div>
                  ))}
                </div>

                <div className="absolute top-4 right-4">
                  <motion.span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Live'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {project.status}
                  </motion.span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-200/80 text-gray-700 dark:bg-gray-800/50 dark:text-gray-300 rounded-md text-xs border border-gray-300 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={project.github}
                    className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 text-sm"
                  >
                    <Icon icon="solar:github-outline" width={14} height={14} />
                    Code
                  </Link>
                  <Link
                    href={project.live}
                    className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    <Icon icon="solar:arrow-up-outline" width={14} height={14} />
                    Live
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 