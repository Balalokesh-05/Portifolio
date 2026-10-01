import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = ['All', 'Software', 'Cybersecurity', 'AI/ML'];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Software') return p.category.includes('Software') || p.technologies.includes('React') || p.technologies.includes('JavaScript');
    if (activeFilter === 'Cybersecurity') return p.category.includes('Cybersecurity');
    if (activeFilter === 'AI/ML') return p.category.includes('AI/ML') || p.technologies.includes('scikit-learn');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected <span className="cyan-gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Practical engineering projects demonstrating software development, machine learning threat detection, and log monitoring pipelines.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Project filter options">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold btn-hover-interactive ${
                activeFilter === opt
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-950/50 border border-cyan-400/50'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
