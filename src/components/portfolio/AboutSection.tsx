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
          Bonjour, je suis Zakariae YAHYA — un étudiant passionné en Data Science et Intelligence Artificielle à l&apos;ENSA Tétouan, spécialisé dans le développement de solutions innovantes en science des données et l&apos;optimisation de l&apos;utilisation du big data.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Avec une expérience en développement full-stack et en science des données, j&apos;ai perfectionné mes compétences dans des technologies telles que Django, LangChain, LlamaIndex, et divers frameworks de machine learning. Je suis actuellement à la recherche d&apos;un stage pour appliquer et développer davantage mes compétences dans un environnement professionnel.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Au-delà de mes études académiques, j&apos;aime travailler sur des projets personnels impliquant des pipelines ETL, le traitement de données en temps réel, et des tableaux de bord interactifs. Je suis engagé dans l&apos;apprentissage continu et rester à la pointe des avancées technologiques en ingénierie des données et intelligence artificielle.
        </p>
      </div>
    </motion.section>
  );
}
