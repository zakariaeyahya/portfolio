"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  color: string;
  description: string;
}

const InteractiveSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    // Frontend
    { name: "React", level: 95, category: "Frontend", icon: "⚛️", color: "from-cyan-500 to-blue-500", description: "Building interactive UIs with hooks and modern patterns" },
    { name: "Next.js", level: 92, category: "Frontend", icon: "▲", color: "from-gray-700 to-gray-900", description: "Full-stack React framework with SSR and SSG" },
    { name: "TypeScript", level: 90, category: "Frontend", icon: "🔷", color: "from-blue-600 to-blue-700", description: "Type-safe JavaScript for large applications" },
    { name: "Tailwind CSS", level: 88, category: "Frontend", icon: "🎨", color: "from-cyan-400 to-teal-500", description: "Utility-first CSS framework for rapid UI development" },
    { name: "Framer Motion", level: 85, category: "Frontend", icon: "🎭", color: "from-pink-500 to-rose-500", description: "Production-ready motion library for React" },

    // Backend
    { name: "Node.js", level: 90, category: "Backend", icon: "🟢", color: "from-green-600 to-green-700", description: "Server-side JavaScript runtime environment" },
    { name: "Python", level: 87, category: "Backend", icon: "🐍", color: "from-yellow-500 to-green-500", description: "Versatile programming language for web and AI" },
    { name: "Express.js", level: 88, category: "Backend", icon: "🚂", color: "from-gray-600 to-gray-800", description: "Fast, unopinionated web framework for Node.js" },
    { name: "Django", level: 82, category: "Backend", icon: "🎵", color: "from-green-700 to-green-900", description: "High-level Python web framework" },
    { name: "GraphQL", level: 80, category: "Backend", icon: "🔗", color: "from-pink-600 to-purple-600", description: "Query language for APIs with strong type system" },

    // Database
    { name: "PostgreSQL", level: 85, category: "Database", icon: "🐘", color: "from-blue-600 to-indigo-700", description: "Advanced open-source relational database" },
    { name: "MongoDB", level: 83, category: "Database", icon: "🍃", color: "from-green-600 to-green-800", description: "NoSQL document database for modern applications" },
    { name: "Redis", level: 78, category: "Database", icon: "🔴", color: "from-red-500 to-red-600", description: "In-memory data structure store for caching" },
    { name: "Prisma", level: 80, category: "Database", icon: "⚡", color: "from-indigo-500 to-purple-600", description: "Type-safe database client and ORM" },

    // DevOps
    { name: "Docker", level: 82, category: "DevOps", icon: "🐳", color: "from-blue-500 to-cyan-600", description: "Containerization platform for applications" },
    { name: "AWS", level: 78, category: "DevOps", icon: "☁️", color: "from-orange-500 to-yellow-600", description: "Cloud computing platform and services" },
    { name: "Vercel", level: 85, category: "DevOps", icon: "▲", color: "from-black to-gray-700", description: "Frontend cloud platform for static sites" },
    { name: "Git", level: 90, category: "DevOps", icon: "🌿", color: "from-orange-600 to-red-600", description: "Distributed version control system" },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "DevOps"];

  const categoryIcons = {
    "All": "🚀",
    "Frontend": "🎨",
    "Backend": "⚙️",
    "Database": "🗄️",
    "DevOps": "☁️"
  };

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Interactive Skills</h2>
        <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my technical expertise across different domains. Hover over skills to see detailed descriptions.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 border ${selectedCategory === category
              ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/25"
              : "bg-gray-200/50 hover:bg-gray-300/50 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
          >
            <span className="mr-2">{categoryIcons[category as keyof typeof categoryIcons]}</span>
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="group relative"
          >
            <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 p-6 h-full">
              {/* Skill Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{skill.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.category}
                  </span>
                </div>
                <div className="ml-auto">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: hoveredSkill === skill.name ? 1 : 0,
                  height: hoveredSkill === skill.name ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>

              {/* Skill Level Indicator */}
              <div className="flex justify-between items-center mt-4 text-xs">
                <span className="text-gray-500 dark:text-gray-500">
                  Proficiency
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 rounded-full ${i < Math.floor(skill.level / 20)
                        ? `bg-gradient-to-r ${skill.color}`
                        : "bg-gray-300 dark:bg-gray-700"
                        }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    />
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div className="inline-flex items-center gap-8 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-800/50 rounded-2xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {skills.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Technologies
            </div>
          </div>
          <div className="w-px h-8 bg-blue-300/50"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Avg. Proficiency
            </div>
          </div>
          <div className="w-px h-8 bg-blue-300/50"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              5+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default InteractiveSkills; 