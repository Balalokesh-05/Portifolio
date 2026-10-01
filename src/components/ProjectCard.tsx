import React from 'react';
import { ExternalLink, ShieldCheck, Info, BarChart2, Layers } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const isSecurity = project.category.toLowerCase().includes('cyber') || project.category.toLowerCase().includes('security');
  const isAI = project.category.toLowerCase().includes('ai') || project.category.toLowerCase().includes('machine');

  return (
    <div className="glass-panel rounded-3xl card-hover-interactive overflow-hidden flex flex-col justify-between group shadow-xl shadow-black/40">
      <div className="relative h-16 w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80 px-6 flex items-center justify-between overflow-hidden tech-grid-bg">
        <div
          className={`absolute -right-6 -top-6 w-28 h-28 rounded-full blur-2xl opacity-20 pointer-events-none ${
            isSecurity ? 'bg-emerald-500' : isAI ? 'bg-cyan-500' : 'bg-indigo-500'
          }`}
        />

        <div className="flex items-center gap-2 z-10">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-700 inline-block" />
            <span className="w-2 h-2 rounded-full bg-slate-700 inline-block" />
            <span className="w-2 h-2 rounded-full bg-slate-700 inline-block" />
          </div>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest pl-1 font-semibold">
            {project.id.replace(/-/g, '_')}
          </span>
        </div>

        <div className="flex items-center gap-2 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{isSecurity ? 'SEC_STREAM' : isAI ? 'ML_PIPELINE' : 'SYS_FLOW'}</span>
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      <div className="p-6 sm:p-8 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>{project.category}</span>
          </div>

          {project.evaluationMetrics && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>94.5% Accuracy</span>
            </span>
          )}
        </div>

        <div className="space-y-3 text-left">
          <h3
            onClick={() => onOpenDetails(project)}
            className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors cursor-pointer leading-snug"
          >
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-2 text-left pt-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
            Core Architecture Highlights:
          </span>
          <ul className="space-y-1.5">
            {project.keyFeatures.slice(0, 3).map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 text-left">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-slate-300 text-[11px] font-mono chip-hover-interactive cursor-default"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-[11px] font-mono chip-hover-interactive cursor-default">
                +{project.technologies.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-8 py-4 bg-slate-950/70 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 text-xs font-mono font-semibold btn-hover-interactive"
        >
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Project Details</span>
          <Info className="w-3 h-3 text-slate-400" />
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold btn-hover-interactive"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub</span>
          <ExternalLink className="w-3 h-3 text-cyan-400" />
        </a>
      </div>

    </div>
  );
};
