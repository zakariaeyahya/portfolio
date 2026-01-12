"use client";

import ProjectCard from "./ProjectCard";
import projets from "./projets.json";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <SectionHeader
        tagText="Portfolio"
        tagIcon="solar:code-square-bold"
        heading="Featured Projects"
        description="Quelques projets représentatifs de mon travail en Data Engineering & IA"
        centered
      />

      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:gap-12">
        {projets.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
