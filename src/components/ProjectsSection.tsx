"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "🛒",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "📋",
    tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI Chat Application",
    description: "An intelligent chat application powered by OpenAI's GPT model with real-time messaging and conversation history.",
    image: "🤖",
    tech: ["React", "Express", "OpenAI API", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website with modern animations, dark theme, and optimized performance for showcasing projects and skills.",
    image: "💼",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Weather Dashboard",
    description: "A comprehensive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "🌤️",
    tech: ["Vue.js", "Express", "Weather API", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Social Media App",
    description: "A social media platform with user profiles, posts, comments, real-time notifications, and image sharing capabilities.",
    image: "📱",
    tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-pink-500 to-rose-500"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in full-stack development,
            UI/UX design, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02]">
                {/* Project Image/Icon */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="relative z-10">{project.image}</span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Link
                      href={project.github}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <Github size={24} className="text-white" />
                    </Link>
                    <Link
                      href={project.live}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink size={24} className="text-white" />
                    </Link>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </Link>
                    <Link
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Projects</span>
            <ExternalLink size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 