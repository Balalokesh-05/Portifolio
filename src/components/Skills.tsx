import React, { useState } from 'react';
import {
  Code2,
  Database,
  Shield,
  Network,
  Wrench,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'software_dev':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'data_ai':
        return <Database className="w-4 h-4 text-indigo-400" />;
      case 'cybersecurity':
        return <Shield className="w-4 h-4 text-emerald-400" />;
      case 'systems_networking':
        return <Network className="w-4 h-4 text-sky-400" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <Layers className="w-4 h-4 text-cyan-400" />;
    }
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="cyan-gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A balanced overview of technical capabilities across software development, data &amp; AI, defensive cybersecurity, systems, and developer tooling.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Skill categories">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold btn-hover-interactive ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-950/50 border border-cyan-400/50'
                : 'bg-slate-900/90 text-slate-300 border border-slate-800'
            }`}
          >
            All Categories
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold btn-hover-interactive ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-950/50 border border-cyan-400/50'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="glass-panel p-6 rounded-2xl card-hover-interactive flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/60 transition-transform duration-200 group-hover:scale-105">
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className="text-sm font-bold font-mono text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold">
                    {category.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-mono font-medium chip-hover-interactive cursor-default"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400/80" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
