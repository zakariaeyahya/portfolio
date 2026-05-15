"use client";

import portfolioContent from "@/data/portfolio-content";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection() {
  const { projects } = portfolioContent;
  const domainOptions = [
    projects.allDomainsLabel,
    ...new Set(projects.items.map((project) => project.domain)),
  ];
  const [selectedDomain, setSelectedDomain] = useState(projects.allDomainsLabel);
  const filteredProjects =
    selectedDomain === projects.allDomainsLabel
      ? projects.items
      : projects.items.filter((project) => project.domain === selectedDomain);

  return (
    <section id="projects" className="py-16 md:py-24">
      <SectionHeader
        tagText={projects.sectionHeader.tagText}
        tagIcon={projects.sectionHeader.tagIcon}
        heading={projects.sectionHeader.heading}
        description={projects.sectionHeader.description}
        centered
      />

      <div className="max-w-6xl mx-auto px-4 mb-8 md:mb-10">
        <div className="rounded-3xl border border-gray-200/50 bg-white/75 p-4 shadow-md backdrop-blur-xl dark:border-gray-700/40 dark:bg-gray-900/60 md:p-5">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {projects.filterLabel}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {filteredProjects.length} projet{filteredProjects.length > 1 ? "s" : ""} affiche{filteredProjects.length > 1 ? "s" : ""}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {domainOptions.map((domain) => {
                const isActive = selectedDomain === domain;

                return (
                  <button
                    key={domain}
                    type="button"
                    onClick={() => setSelectedDomain(domain)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border-blue-500 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                        : "border-gray-200/70 bg-white/80 text-gray-700 hover:border-blue-300 hover:text-blue-600 dark:border-gray-700/60 dark:bg-gray-950/60 dark:text-gray-300 dark:hover:text-blue-400"
                    }`}
                  >
                    {domain}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 px-4 md:grid-cols-2 md:gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

        {filteredProjects.length === 0 && (
          <div className="rounded-3xl border border-dashed border-gray-300/70 bg-white/60 px-6 py-12 text-center text-gray-600 dark:border-gray-700/70 dark:bg-gray-900/50 dark:text-gray-400">
            {projects.emptyState}
          </div>
        )}
      </div>
    </section>
  );
}
