import React from 'react';
import { ExternalLink, GitBranch, Terminal, Code2 } from 'lucide-react';
import { FEATURED_REPOSITORIES, CONFIG } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const GitHub: React.FC = () => {
  return (
    <section id="github" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Open Source Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GitHub &amp; <span className="cyan-gradient-text">Open Source</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Selected repositories showcasing source code for threat detection, machine learning, and security log collection.
          </p>
        </div>

        {/* Profile Header Banner */}
        <div className="max-w-4xl mx-auto mb-6 p-6 rounded-2xl glass-panel card-hover-interactive flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-xs font-mono text-slate-400 block">GitHub Profile</span>
              <span className="text-lg font-bold text-white font-mono">{CONFIG.GITHUB_USERNAME}</span>
            </div>
          </div>

          <a
            href={CONFIG.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-xs font-semibold btn-hover-interactive"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* GitHub Codebase Language Distribution Bar */}
        <div className="max-w-4xl mx-auto mb-10 p-5 rounded-2xl glass-panel card-hover-interactive space-y-3.5 text-left">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="text-slate-200 font-semibold flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              Primary Codebase Composition
            </span>
            <span className="text-slate-400 text-[11px]">Open Source Projects &amp; Repositories</span>
          </div>

          {/* Segmented Distribution Bar */}
          <div className="h-2.5 w-full rounded-full bg-slate-900 overflow-hidden flex border border-slate-800">
            <div style={{ width: '48%' }} className="bg-sky-400 h-full" title="Python 48%" />
            <div style={{ width: '28%' }} className="bg-amber-400 h-full" title="JavaScript & TypeScript 28%" />
            <div style={{ width: '14%' }} className="bg-emerald-400 h-full" title="SQL & Databases 14%" />
            <div style={{ width: '6%' }} className="bg-purple-400 h-full" title="HTML & CSS 6%" />
            <div style={{ width: '4%' }} className="bg-rose-400 h-full" title="Shell & Bash 4%" />
          </div>

          {/* Legend Items */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-slate-300 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              <span>Python 48%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span>JavaScript / TS 28%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>SQL &amp; DB 14%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span>HTML / CSS 6%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span>Shell 4%</span>
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {FEATURED_REPOSITORIES.map((repo) => (
            <div
              key={repo.name}
              className="glass-panel p-6 sm:p-7 rounded-2xl card-hover-interactive flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    <GitBranch className="w-4 h-4 text-cyan-400" />
                    <span>{repo.name}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-400 text-[10px] font-mono chip-hover-interactive cursor-default">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {repo.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {repo.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px] font-mono chip-hover-interactive cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={repo.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 btn-hover-interactive"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
