"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const experience = [
  {
    role: "Software Developer",
    company: "Upwork",
    period: "January 2020 — Present",
    type: "Freelance",
    companyIcon: "fa6-brands:square-upwork",
    companyColor: "from-green-500 to-green-600",
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
    companyColor: "from-blue-500 to-blue-600",
    companyIcon: "mdi:hospital-building",
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

export default function ExperienceSection() {
  return (
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
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.companyColor} flex items-center justify-center flex-shrink-0`}>
                <Icon icon={exp.companyIcon!} className="text-white w-12 h-12" width={32} height={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Icon icon="solar:calendar-outline" width={14} height={14} />
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
                        <li key={achIndex} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
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
  );
}
