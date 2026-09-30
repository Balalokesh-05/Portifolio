import React, { useEffect } from 'react';
import {
  X,
  Shield,
  Layers,
  BarChart3,
  Cpu,
  AlertCircle,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-7 my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Category & Close */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-slate-950 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-semibold">
              {project.category}
            </span>
            {project.dataset && (
              <span className="hidden sm:inline-flex text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
                Dataset: {project.dataset}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="btn-hover-interactive p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-slate-700 focus:outline-none"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2">
          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-cyan-300 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card-hover-interactive p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>The Problem</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="card-hover-interactive p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>The Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Clean Architecture Diagram */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>System Architecture Flow</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 overflow-x-auto">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 min-w-[620px]">
              {project.architectureSteps.map((step, idx) => (
                <React.Fragment key={step.step}>
                  <div className="card-hover-interactive flex-1 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center flex flex-col justify-center min-w-[120px]">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                      Step {step.step}
                    </span>
                    <h3 className="text-xs font-bold text-white mt-1 leading-tight">
                      {step.label}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                      {step.detail}
                    </p>
                  </div>

                  {idx < project.architectureSteps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center text-slate-600">
                      <ArrowRight className="w-4 h-4 text-cyan-500/70" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Key Engineering Features</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feat) => (
              <div
                key={feat}
                className="card-hover-interactive flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Evaluation Metrics (if applicable) */}
        {project.evaluationMetrics && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-wider">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <span>Project Evaluation Metrics</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Developer Benchmark Evaluation
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {project.evaluationMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="card-hover-interactive p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-center"
                >
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                    {metric.label}
                  </span>
                  <span className="text-lg font-bold font-mono text-cyan-300 block mt-0.5">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {project.evaluationNote && (
              <p className="text-[11px] font-mono text-slate-400 italic">
                * {project.evaluationNote}
              </p>
            )}
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="space-y-2.5">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
            Technology Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="chip-hover-interactive px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & Future Work */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="card-hover-interactive p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-1">
            <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              Technical Challenges
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          <div className="card-hover-interactive p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-1">
            <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              Future Roadmap
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              {project.futureImprovements}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold shadow-lg shadow-cyan-950/60"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="btn-hover-interactive px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono font-semibold text-slate-300 hover:text-white"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
