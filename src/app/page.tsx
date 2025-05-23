"use client";

import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Building,
  Calendar,
  Code2,
  CreditCard,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Quote,
  Star,
  Sun
} from "lucide-react";
import Link from "next/link";
import { FaAws } from "react-icons/fa6";
import {
  SiDjango,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

const techStack = [
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Python", icon: SiPython, color: "text-blue-400" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-600" },
  { name: "Django", icon: SiDjango, color: "text-green-700" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "GCP", icon: SiGooglecloud, color: "text-red-400" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Socket.io", icon: SiSocketdotio, color: "text-gray-800" },
  { name: "Prisma", icon: SiPrisma, color: "text-blue-600" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
  { name: "OpenAI", icon: Brain, color: "text-purple-500" },
  { name: "Stripe", icon: CreditCard, color: "text-purple-600" },
];

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

const experience = [
  {
    role: "Software Developer",
    company: "Upwork",
    period: "January 2020 — Present",
    type: "Freelance",
    description: "Delivered high-quality projects across diverse domains, including web and mobile applications, API development, and cloud integrations (AWS, GCP).",
    achievements: [
      "Achieved Top-Rated status with a 91% job success score",
      "Completed 10+ projects focusing on scalable solutions",
      "Consistently praised for skillfulness, quick learning, and strong communication",
      "Earned repeated engagements through reliability and expertise"
    ],
    technologies: ["JavaScript", "Python", "Node.js", "AWS", "GCP", "OpenAI API", "LangChain"]
  },
  {
    role: "HIMS Master Trainer / PACS Specialist",
    company: "Public Health Organization, Islamabad",
    period: "July 2019 — Present",
    type: "Full-time",
    description: "Spearheaded organizational transformation from paper-based manual systems to completely integrated HIMS and PACS (Picture Archiving and Communication System).",
    achievements: [
      "Led integration of 45+ radiology machines (CT, MRI, X-Ray, Ultrasound)",
      "Ensured active monitoring for integration issues",
      "Acted as master trainer and led support team",
      "Communicated issues and requirements to backend teams"
    ],
    technologies: ["HIMS", "PACS", "System Integration", "Healthcare IT", "Training & Support"]
  }
];

const testimonials = [
  {
    content: "Ramzan is great! He is very skillful and fast learner, just what you need in a developer.",
    author: "Alex Chen",
    role: "Technical Lead",
    company: "DevTech Solutions",
    rating: 5,
    project: "Cloud Infrastructure Migration"
  },
  {
    content: "Ramzan produced some really amazing work on the backend. He demonstrated his proficiency and efficiency by using Node.js and Javascript to successfully import a very large dataset into a MySQL database.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "DataFlow Inc",
    rating: 5,
    project: "Backend Development"
  },
  {
    content: "It's been great to work with him! Fast, active and hardworking!",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "TechStart Labs",
    rating: 5,
    project: "JavaScript Applications"
  },
  {
    content: "We had a fantastic experience working with him on a recent project. He consistently delivered high-quality work, showed exceptional attention to detail, and communicated effectively throughout the process.",
    author: "Emily Davis",
    role: "Project Director",
    company: "Innovation Hub",
    rating: 5,
    project: "Full Stack Development"
  },
  {
    content: "Great Developer! Muhammad's expertise in modern web technologies and attention to detail made our project a huge success.",
    author: "David Thompson",
    role: "Engineering Manager",
    company: "WebTech Pro",
    rating: 5,
    project: "Web Platform"
  }
];

const certifications = [
  {
    title: "DevOps Essentials",
    provider: "IBM",
    platform: "Coursera",
    issued: "November 2023",
    credentialId: "verified-credly",
    skills: ["Test-Driven Development", "Continuous Integration", "Behavior-Driven Development", "Product Development", "DevOps", "Infrastructure as Code"],
    logo: "🏢",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Git and GitHub Essentials",
    provider: "IBM",
    platform: "Coursera",
    issued: "January 2023",
    credentialId: "verified-credly",
    skills: ["Version Control", "Software Development", "Git", "GitHub", "GitLab", "Open Source"],
    logo: "🏢",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Web Development with HTML, CSS, JavaScript Essentials",
    provider: "IBM",
    platform: "Coursera",
    issued: "January 2023",
    credentialId: "verified-credly",
    skills: ["IBM Cloud", "HTML", "CSS", "Full-Stack Development"],
    logo: "🏢",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Introduction to Cloud Computing",
    provider: "IBM",
    platform: "Coursera",
    issued: "January 2023",
    credentialId: "verified-credly",
    skills: ["Container", "IaaS", "IBM Cloud", "Architecture", "Cloud Computing", "PaaS", "DevOps"],
    logo: "🏢",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    provider: "Google",
    platform: "Coursera",
    issued: "November 2022",
    credentialId: "6RUAYHXFV5XZ",
    skills: ["Data Analysis", "Data Management", "Statistical Analysis"],
    logo: "🎓",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Databases with SQL",
    provider: "CS50",
    platform: "HarvardX",
    issued: "May 2025",
    credentialId: "d7be6646-4c57-431e-88a9-ad7b882864e3",
    skills: ["SQL", "Database", "Data Management", "Data Analysis"],
    logo: "🎓",
    color: "from-indigo-500 to-purple-600"
  }
];

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen text-gray-900 dark:text-white relative">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-300/15 to-blue-400/15 dark:from-cyan-400/25 dark:to-blue-500/25 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-400/15 to-pink-400/15 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/30 dark:to-black/20" />

        {/* Animated beam of light */}
        <motion.div
          className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-blue-500/50 via-transparent to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              Muhammad Ramazan
            </motion.div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                {["Overview", "About", "Stack", "Experience", "Projects", "Testimonials", "Certifications", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              {/* Theme Toggle */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={18} className="text-yellow-500" />
                ) : (
                  <Moon size={18} className="text-blue-500" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-24">
        {/* Enhanced Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-start gap-6 mb-8">
            <motion.div
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              MR
            </motion.div>
            <div>
              <motion.h1
                className="text-3xl font-bold text-gray-900 dark:text-zinc-50 mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Muhammad Ramazan
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 dark:text-gray-400 mb-4"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                  Creating with code, driven by passion.
                </span>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { href: "https://github.com", icon: Github, label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
                  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-600" },
                  { href: "mailto:ramazan@example.com", icon: Mail, label: "Email", color: "hover:text-green-600" }
                ].map((link) => (
                  <motion.div key={link.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 backdrop-blur-sm rounded-full text-sm transition-all duration-300 border border-gray-300/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl ${link.color}`}
                    >
                      <link.icon size={16} />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200/50 dark:border-green-800/50 rounded-full"
          >
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-700 dark:text-green-300 text-sm font-medium">
              Available for projects
            </span>
          </motion.div>
        </motion.section>

        {/* Overview Section */}
        <motion.section
          id="overview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Building size={18} className="text-blue-400" />
                <span>Senior Full Stack Developer @ Tech Innovation Corp</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Code2 size={18} className="text-green-400" />
                <span>Founder @ Personal Projects</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin size={18} className="text-red-400" />
                <span>Pakistan</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Phone size={18} className="text-purple-400" />
                <span>[Phone protected]</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Mail size={18} className="text-yellow-400" />
                <span>[Email protected]</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Globe size={18} className="text-cyan-400" />
                <span>ramazan.dev</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <div className="max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Hello, World! I am Muhammad Ramazan — a passionate Full Stack Developer & UI/UX enthusiast
              dedicated to creating high-performance, user-centric software solutions with intuitive and engaging designs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              With 5+ years of experience, I specialize in building scalable web and mobile applications using
              React, Next.js, TypeScript, and modern development technologies. I thrive on turning complex problems
              into elegant solutions that users love.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond work, I love exploring emerging technologies, contributing to open-source projects, and
              mentoring aspiring developers. I believe in continuous learning and staying at the forefront of
              technological innovation.
            </p>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          id="stack"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Stack</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <div className="flex flex-col items-center p-4 bg-gray-200/50 hover:bg-gray-300/50 dark:bg-gray-900/50 dark:hover:bg-gray-800/50 rounded-xl border border-gray-300 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600 transition-all duration-300 cursor-pointer">
                  <tech.icon className={`text-2xl ${tech.color} mb-2 group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xs text-gray-600 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300 text-center">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Building size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-400">
                              <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-200/80 text-gray-700 dark:bg-gray-800/50 dark:text-gray-300 rounded-md text-xs border border-gray-300 dark:border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {index < experience.length - 1 && (
                  <div className="ml-6 mt-6 w-px h-8 bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-600"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
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
                        <Github size={14} />
                        Code
                      </Link>
                      <Link
                        href={project.live}
                        className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                      >
                        <ArrowUpRight size={14} />
                        Live
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          id="testimonials"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">What Clients Say</h2>
            <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
              Don&apos;t just take my word for it. Here&apos;s what clients have said about working with me on their projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 p-6 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote size={24} className="text-blue-500" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={16}
                        className="text-yellow-500 fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-semibold">
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-xs">
                        {testimonial.role} at {testimonial.company}
                      </div>
                      <div className="text-blue-600 dark:text-blue-400 text-xs font-medium">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upwork Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
              <Star size={16} className="text-green-500 fill-current" />
              <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                87% Job Success Score on Upwork
              </span>
            </div>
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and credentials that validate my expertise in modern technologies and development practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden">
                  {/* Header with gradient */}
                  <div className={`h-20 bg-gradient-to-r ${cert.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Star size={16} className="text-white" />
                      </div>
                      <span className="text-white text-xs font-medium">Verified</span>
                    </div>
                    <div className="absolute top-4 right-4 text-2xl">
                      {cert.logo}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Certificate Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>

                    {/* Provider Info */}
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Provider:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{cert.provider}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Platform:</span>
                        <span className="font-medium text-blue-600 dark:text-blue-400">{cert.platform}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={14} className="text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">{cert.issued}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                        Skills Validated:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.slice(0, 4).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-gray-200/80 text-gray-700 dark:bg-gray-800/50 dark:text-gray-300 rounded-md text-xs border border-gray-300 dark:border-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 4 && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-md text-xs">
                            +{cert.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">
                        ID: {cert.credentialId}
                      </span>
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                        <span>View</span>
                        <ArrowUpRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-6 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-800/50 rounded-full">
              <div className="flex items-center gap-2">
                <Star size={16} className="text-blue-600 dark:text-blue-400" />
                <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">
                  5 Professional Certifications
                </span>
              </div>
              <div className="w-px h-4 bg-blue-300/50"></div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Verified by Industry Leaders
                </span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Enhanced Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Let&apos;s Work Together
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to bring your ideas to life? I&apos;m always excited to work on interesting projects
              and collaborate with amazing people. Let&apos;s create something extraordinary together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="mailto:ramazan@example.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl shadow-blue-500/25"
                >
                  <Mail size={20} />
                  Send Email
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/CV.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Download size={20} />
                  Download CV
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-300/50 dark:border-gray-800/50">
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>© 2024 Muhammad Ramazan. Built with Next.js, Tailwind CSS, and lots of ☕</p>
          </div>
        </footer>
      </div >
    </div >
  );
} 