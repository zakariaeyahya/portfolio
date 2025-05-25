"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Certificate = {
  title: string;
  provider: string;
  platform: string;
  issued: string;
  credentialId: string;
  skills: string[];
  providerIcon: string;
  platformIcon: string;
  color: string;
  certificatePreview: string;
  providerIconSize: number;
  platformIconSize: number;
};

const certifications: Certificate[] = [
  {
    title: "DevOps Essentials",
    provider: "IBM",
    platform: "Coursera",
    issued: "November 2023",
    credentialId: "P67DLWJP2GL7",
    skills: ["Test-Driven Development", "Continuous Integration", "Behavior-Driven Development", "Product Development", "DevOps", "Infrastructure as Code"],
    providerIcon: "lineicons:ibm",
    platformIcon: "logos:coursera",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/P67DLWJP2GL7_DEVOPS.png",
    providerIconSize: 64,
    platformIconSize: 88
  },
  {
    title: "Git and GitHub Essentials",
    provider: "IBM",
    platform: "Coursera",
    issued: "January 2023",
    credentialId: "YYQL3U4QAZJF",
    skills: ["Version Control", "Software Development", "Git", "GitHub", "GitLab", "Open Source"],
    providerIcon: "lineicons:ibm",
    platformIcon: "logos:coursera",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/ YYQL3U4QAZJF_GIT_GITHUB.png",
    providerIconSize: 64,
    platformIconSize: 88
  },
  {
    title: "Web Development with HTML, CSS, JavaScript Essentials",
    provider: "IBM",
    platform: "Coursera",
    issued: "January 2023",
    credentialId: "3UPD6SABRD3B",
    skills: ["IBM Cloud", "HTML", "CSS", "Full-Stack Development"],
    providerIcon: "lineicons:ibm",
    platformIcon: "logos:coursera",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/3UPD6SABRD3B_INTRO_WEB.png",
    providerIconSize: 64,
    platformIconSize: 88
  },
  {
    title: "Introduction to Cloud Computing",
    provider: "IBM",
    platform: "Coursera",
    issued: "January 2023",
    credentialId: "verified-credly",
    skills: ["Container", "IaaS", "IBM Cloud", "Architecture", "Cloud Computing", "PaaS", "DevOps"],
    providerIcon: "lineicons:ibm",
    platformIcon: "logos:coursera",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/EXFQ7QMJYUQQ_AWS.png",
    providerIconSize: 64,
    platformIconSize: 88
  },
  {
    title: "Programming in Python",
    provider: "Meta",
    platform: "Coursera",
    issued: "January 2023",
    credentialId: "2AUUVS958L5Y",
    skills: ["Python", "Programming", "Data Structures", "Algorithms"],
    providerIcon: "logos:meta-icon",
    platformIcon: "logos:coursera",
    color: "from-blue-500 to-purple-600",
    certificatePreview: "/certificates/2AUUVS958L5Y_PYTHON.png",
    providerIconSize: 64,
    platformIconSize: 88
  },
  {
    title: "Introduction to Back-End Development",
    provider: "Meta",
    platform: "Coursera",
    issued: "January 2023",
    credentialId: "2Y8NRQC5MP96",
    skills: ["Backend Development", "APIs", "Server-Side Programming", "Web Development"],
    providerIcon: "logos:meta-icon",
    platformIcon: "logos:coursera",
    color: "from-blue-500 to-purple-600",
    certificatePreview: "/certificates/2Y8NRQC5MP96_INTRO_BE.png",
    providerIconSize: 64,
    platformIconSize: 88
  },
  {
    title: "Django Web Framework",
    provider: "Meta",
    platform: "Coursera",
    issued: "February 2023",
    credentialId: "3YRA842UKERB",
    skills: ["Django", "Python", "Web Framework", "MVC Architecture"],
    providerIcon: "logos:meta-icon",
    platformIcon: "logos:coursera",
    color: "from-blue-500 to-purple-600",
    certificatePreview: "/certificates/3YRA842UKERB_DJANGO.png",
    providerIconSize: 64,
    platformIconSize: 88
  },
  {
    title: "Introduction to Databases for Back-End Development",
    provider: "Meta",
    platform: "Coursera",
    issued: "February 2023",
    credentialId: "5FNQEGLH78UD",
    skills: ["Database Design", "SQL", "Backend Development", "Data Management"],
    providerIcon: "logos:meta-icon",
    platformIcon: "logos:coursera",
    color: "from-blue-500 to-purple-600",
    certificatePreview: "/certificates/5FNQEGLH78UD_DATABASES_FOR_BACKEND.png",
    providerIconSize: 64,
    platformIconSize: 88
  },
  {
    title: "Version Control",
    provider: "Meta",
    platform: "Coursera",
    issued: "January 2023",
    credentialId: "BLGJKHN6UTSF",
    skills: ["Git", "Version Control", "Collaboration", "Software Development"],
    providerIcon: "logos:meta-icon",
    platformIcon: "logos:coursera",
    color: "from-blue-500 to-purple-600",
    certificatePreview: "/certificates/BLGJKHN6UTSF_version_control.png",
    providerIconSize: 64,
    platformIconSize: 88
  },
  {
    title: "Introduction to Databases",
    provider: "Meta",
    platform: "Coursera",
    issued: "February 2023",
    credentialId: "N9LJFAWZXTMA",
    skills: ["Database Fundamentals", "SQL", "Data Management", "Database Design"],
    providerIcon: "logos:meta-icon",
    platformIcon: "logos:coursera",
    color: "from-blue-500 to-purple-600",
    certificatePreview: "/certificates/N9LJFAWZXTMA_DATABASES.png",
    providerIconSize: 64,
    platformIconSize: 88
  },
  {
    title: "AWS Cloud Technical Essentials",
    provider: "Amazon Web Services",
    platform: "Coursera",
    issued: "February 2023",
    credentialId: "EXFQ7QMJYUQQ",
    skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM", "VPC"],
    // providerIcon: "logos:aws",
    providerIcon: "skill-icons:aws-dark",
    platformIcon: "logos:coursera",
    color: "from-orange-500 to-red-600 text-black dark:text",
    certificatePreview: "/certificates/EXFQ7QMJYUQQ_AWS.png",
    providerIconSize: 44,
    platformIconSize: 88
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    provider: "Google",
    platform: "Coursera",
    issued: "November 2022",
    credentialId: "6RUAYHXFV5XZ",
    skills: ["Data Analysis", "Data Management", "Statistical Analysis"],
    providerIcon: "logos:google",
    platformIcon: "logos:coursera",
    color: "from-indigo-500 to-purple-600",
    certificatePreview: "/certificates/6RUAYHXFV5XZ.png",
    providerIconSize: 64,
    platformIconSize: 88
  },
  {
    title: "Databases with SQL",
    provider: "CS50",
    platform: "HarvardX",
    issued: "May 2025",
    credentialId: "d7be6646-4c57-431e-88a9-ad7b882864e3",
    skills: ["SQL", "Database", "Data Management", "Data Analysis"],
    providerIcon: "fa-solid:university",
    platformIcon: "simple-icons:edx",
    color: "from-indigo-500 to-purple-600",
    certificatePreview: "/certificates/CS50_SQL.png",
    providerIconSize: 44,
    platformIconSize: 44
  }
];

export default function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <>
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
                <div className={`h-20 flex items-center justify-between bg-slate-100 dark:bg-slate-900 px-4 ${cert.color} relative overflow-hidden`}>
                  {/* <div className="absolute inset-0 bg-black/10" /> */}
                  <div className="flex items-center justify-start gap-2">
                    <div className="w-8 h-8 bg-white/20 dark:bg-gray-400/20 rounded-lg flex items-center justify-center">
                      <Icon icon="solar:verified-check-bold" className="text-blue-500" width={24} height={24} />
                    </div>
                    <span className="text-blue-500 text-xs font-medium">Verified</span>
                  </div>
                  <div className="flex items-center justify-end mr-4 gap-1">
                    <Icon icon={cert.providerIcon} className="" width={cert.providerIconSize} height={cert.providerIconSize} />
                    <span className="text-black dark:text-white text-sm font-bold">×</span>
                    <Icon icon={cert.platformIcon} className="" width={cert.platformIconSize} height={cert.platformIconSize} />
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
                      <Icon icon="solar:calendar-outline" className="text-gray-500" width={14} height={14} />
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
                    <button
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      onClick={() => setSelectedCertificate(cert)}
                    >
                      <span>View</span>
                      <Icon icon="solar:arrow-up-outline" width={12} height={12} />
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
              <Icon icon="solar:star-outline" className="text-blue-600 dark:text-blue-400" width={16} height={16} />
              <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">
                13 Professional Certifications
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

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedCertificate.provider} • {selectedCertificate.issued}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <Icon icon="solar:close-outline" className="text-gray-500" width={20} height={20} />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="p-6  flex justify-center bg-none">
                <div className="relative max-w-full max-h-[60vh] bg-none border-none overflow-hidden">
                  <Image
                    src={selectedCertificate.certificatePreview || ""}
                    alt={selectedCertificate.title}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Credential ID: {selectedCertificate.credentialId}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={selectedCertificate.certificatePreview || ""}
                    download={`${selectedCertificate.title}.png`}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Icon icon="solar:download-outline" width={16} height={16} />
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 