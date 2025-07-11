"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
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
          Hello, I am Zakariae Yahya — a passionate Data Science and Artificial Intelligence student at ENSA Tétouan, specializing in developing innovative data science solutions and optimizing the use of big data.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          With experience in full-stack development and data science, I have honed my skills in technologies such as Django, LangChain, LlamaIndex, and various machine learning frameworks. I am currently seeking an internship to apply and further develop my skills in a professional setting.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Beyond my academic pursuits, I enjoy working on personal projects involving ETL pipelines, real-time data processing, and interactive dashboards. I am committed to continuous learning and staying at the forefront of technological advancements in data engineering and artificial intelligence.
        </p>
      </div>
    </motion.section>
  );
}
