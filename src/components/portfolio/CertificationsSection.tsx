"use client";

import portfolioContent from "@/data/portfolio-content";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

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
  verifyUrl?: string;
};

export default function CertificationsSection() {
  const { certifications } = portfolioContent;
  const certificateItems = certifications.items as Certificate[];
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.section
        id="certifications"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute top-20 right-16 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl"
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: "3s" }}
            className="absolute bottom-16 left-16 w-48 h-48 bg-gradient-to-br from-green-400/25 to-cyan-400/25 rounded-full blur-2xl"
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: "6s" }}
            className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-xl"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <SectionHeader
            tagText={certifications.sectionHeader.tagText}
            tagIcon={certifications.sectionHeader.tagIcon}
            heading={certifications.sectionHeader.heading}
            description={certifications.sectionHeader.description}
            showUnderline={false}
            centered={true}
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
          >
            {certificateItems.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group h-full"
              >
                <div className="h-full bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden">
                  <div className={`h-20 flex items-center justify-between bg-slate-100 dark:bg-slate-900 px-4 ${cert.color} relative overflow-hidden`}>
                    <div className="flex items-center justify-end mr-4 gap-1">
                      <Icon icon={cert.providerIcon} width={cert.providerIconSize} height={cert.providerIconSize} />
                      <span className="text-black dark:text-white text-sm font-bold">×</span>
                      <Icon icon={cert.platformIcon} width={cert.platformIconSize} height={cert.platformIconSize} />
                    </div>
                    <div className="flex items-center justify-start gap-0">
                      <div className="relative w-8 h-8 rounded-lg flex items-center justify-center">
                        <div className="absolute top-1/5 left-1/4 w-1/2 h-1/2 bg-white rounded-lg -z-0" />
                        <Icon icon="solar:verified-check-bold" className="text-blue-500 z-10" width={26} height={26} />
                      </div>
                      <span className="text-blue-500 text-sm font-medium">{certifications.verifiedLabel}</span>
                    </div>
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
                    <div className="absolute top-6 right-8 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-500" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="space-y-3 mb-6 bg-gray-50/50 dark:bg-gray-800/30 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/30">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md flex items-center justify-center">
                          <Icon icon="solar:buildings-2-bold" className="text-white" width={12} height={12} />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium">{certifications.labels.provider}</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{cert.provider}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-md flex items-center justify-center">
                          <Icon icon="solar:monitor-smartphone-bold" className="text-white" width={12} height={12} />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium">{certifications.labels.platform}</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{cert.platform}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-green-600 rounded-md flex items-center justify-center">
                          <Icon icon="solar:calendar-bold" className="text-white" width={12} height={12} />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium">{certifications.labels.issued}</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">{cert.issued}</span>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md flex items-center justify-center">
                          <Icon icon="solar:star-bold" className="text-white" width={10} height={10} />
                        </div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                          {certifications.labels.skills}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200/80 dark:from-gray-700/50 dark:to-gray-800/50 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-medium border border-gray-300/60 dark:border-gray-600/50 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 hover:border-blue-300/60 dark:hover:border-blue-600/50 hover:text-blue-800 dark:hover:text-blue-200 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/60 dark:border-gray-700/50">
                      <Link href={cert.verifyUrl || "#"} target="_blank">
                        <div className="flex items-center gap-2">
                          <Icon icon="solar:arrow-right-up-bold" className="text-green-500" width={14} height={14} />
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            ID: <span className="text-gray-700 dark:text-gray-300 font-mono">{cert.credentialId}</span>
                          </span>
                          <Icon icon="solar:link-bold" className="text-gray-500" width={14} height={14} />
                        </div>
                      </Link>
                      <button
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 rounded-lg border border-blue-200/60 dark:border-blue-700/50 hover:border-blue-300/80 dark:hover:border-blue-600/70 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30 transition-all duration-300 text-xs font-medium shadow-sm hover:shadow-md"
                        onClick={() => setSelectedCertificate(cert)}
                      >
                        <Icon icon="solar:eye-bold" width={12} height={12} />
                        <span>{certifications.actions.view}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-900/95 dark:to-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden relative border border-white/20 dark:border-gray-700/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {selectedCertificate.provider} • {selectedCertificate.issued}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCertificate(null)}
                  className="p-3 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <Icon icon="solar:close-outline" className="text-gray-500" width={20} height={20} />
                </motion.button>
              </div>
              <div className="p-6 flex justify-center bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50">
                <iframe
                  src={selectedCertificate.certificatePreview}
                  className="w-full h-[60vh]"
                  style={{ border: "none" }}
                />
              </div>
              <div className="flex items-center justify-between p-6 border-t border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {certifications.labels.credentialId}{" "}
                  <span className="text-gray-800 dark:text-gray-200">{selectedCertificate.credentialId}</span>
                </div>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCertificate(null)}
                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border border-red-500/50"
                  >
                    <Icon icon="solar:close-circle-bold" className="text-white" width={20} height={20} />
                    {certifications.actions.close}
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedCertificate.certificatePreview}
                    download
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border border-blue-500/50"
                  >
                    <Icon icon="solar:download-bold" width={16} height={16} />
                    {certifications.actions.download}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
