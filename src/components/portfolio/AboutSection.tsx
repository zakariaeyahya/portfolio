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
          Bonjour, je suis Zakariae YAHYA — étudiant ingénieur en Data & IA à l&apos;ENSA Tétouan, je me spécialise dans l&apos;IA générative et le MLOps. Fort de 10 mois d&apos;expérience, j&apos;ai conçu des architectures scalables, optimisé des systèmes RAG (-96% de latence) et industrialisé des modèles via Docker, Kafka et MLflow.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Mes expériences chez Izemx et DIGITAL PLACE m&apos;ont permis de développer des solutions complètes en Big Data et IA générative, notamment un pipeline ETL distribué capable de traiter 5k+ transactions/minute et un système RAG multilingue optimisant le temps de réponse de 40%.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Je recherche un stage de fin d&apos;études pour contribuer au déploiement de solutions IA robustes et à impact. Passionné par l&apos;apprentissage continu, je reste constamment à la pointe des avancées technologiques en ingénierie des données et intelligence artificielle.
        </p>
      </div>
    </motion.section>
  );
}
