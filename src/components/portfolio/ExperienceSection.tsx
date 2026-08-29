"use client";

import portfolioContent from "@/data/portfolio-content";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection() {
  const { experience } = portfolioContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/3 to-blue-500/3 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10">
        <SectionHeader
          tagText={experience.sectionHeader.tagText}
          tagIcon={experience.sectionHeader.tagIcon}
          heading={experience.sectionHeader.heading}
          showUnderline={false}
          centered={true}
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-6 md:space-y-12 px-4 md:px-6"
        >
          {experience.items.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative group">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 md:gap-8 lg:gap-12">
                <div className="flex-shrink-0 flex flex-col items-center sm:items-start">
                  {exp.companyLogo ? (
                    <motion.div
                      variants={iconVariants}
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-16 sm:w-28 sm:h-18 md:w-32 md:h-20 rounded-2xl md:rounded-3xl bg-white dark:bg-white flex items-center justify-center shadow-xl md:shadow-2xl mb-3 md:mb-4 relative overflow-hidden group-hover:shadow-2xl md:group-hover:shadow-3xl transition-all duration-500 border border-gray-200/60 dark:border-gray-700/60 p-3"
                    >
                      <Image
                        src={exp.companyLogo}
                        alt={`${exp.company} logo`}
                        width={200}
                        height={100}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      variants={iconVariants}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br ${exp.companyColor} flex items-center justify-center shadow-xl md:shadow-2xl mb-3 md:mb-4 relative overflow-hidden group-hover:shadow-2xl md:group-hover:shadow-3xl transition-all duration-500`}
                    >
                      <Icon
                        icon={exp.companyIcon}
                        className="text-white w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 relative z-10"
                        width={40}
                        height={40}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.companyColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    </motion.div>
                  )}
                </div>

                <div className="flex-1 space-y-4 md:space-y-6 min-w-0">
                  <div className="space-y-1 md:space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 md:gap-3 text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium"
                    >
                      <Icon icon="solar:calendar-outline" width={14} height={14} className="md:w-4 md:h-4" />
                      <span>{exp.period}</span>
                      {exp.location && (
                        <>
                          <Icon icon="solar:map-point-outline" width={14} height={14} className="md:w-4 md:h-4" />
                          <span>{exp.location}</span>
                        </>
                      )}
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight"
                    >
                      {exp.role}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold"
                    >
                      {exp.company}
                    </motion.p>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed"
                  >
                    {exp.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-3 md:space-y-4"
                  >
                    <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      <Icon icon="solar:cup-star-bold" className="text-amber-500" width={22} height={22} />
                      {exp.projects ? experience.projectsLabel : experience.achievementsLabel}
                    </h4>
                    <div className="space-y-4 md:space-y-6">
                      {exp.projects ? (
                        exp.projects.map((project, projectIndex) => (
                          <motion.div
                            key={projectIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + projectIndex * 0.2 }}
                            className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 md:p-6 border border-gray-200 dark:border-gray-700"
                          >
                            <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {project.name}
                            </h5>
                            <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm md:text-base">
                              {project.description}
                            </p>
                            <div className="space-y-2">
                              {project.achievements.map((achievement, achIndex) => (
                                <motion.div
                                  key={achIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.8 + projectIndex * 0.2 + achIndex * 0.1 }}
                                  className="flex items-start gap-3 group/achievement hover:translate-x-1 transition-transform duration-300"
                                >
                                  <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mt-0.5 shadow-md group-hover/achievement:scale-110 transition-transform duration-300">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                                  </div>
                                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        exp.achievements?.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + achIndex * 0.1 }}
                            className="flex items-start gap-3 md:gap-4 group/achievement hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300"
                          >
                            <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mt-0.5 shadow-md md:shadow-lg group-hover/achievement:scale-110 transition-transform duration-300">
                              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                              {achievement}
                            </span>
                          </motion.div>
                        ))
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-3 md:space-y-4"
                  >
                    <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      <Icon icon="solar:programming-bold" className="text-purple-500" width={18} height={18} />
                      {experience.technologiesLabel}
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-100/80 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 rounded-lg md:rounded-xl font-medium text-xs md:text-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/80 dark:hover:bg-blue-900/20 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {index < experience.items.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="mt-6 md:mt-12 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent origin-left"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center px-4 md:px-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {experience.stats.map((stat, index) => (
              <motion.div
                key={`${index}-${stat.label}`}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.cardClass} border transition-all duration-500 ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.valueClass} mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium text-base md:text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
