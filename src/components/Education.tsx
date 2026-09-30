import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic <span className="cyan-gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Computer Applications academic qualifications with strong performance across software and security foundations.
          </p>
        </div>

        {/* Compact Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {EDUCATION_ITEMS.map((edu) => (
            <div
              key={edu.degree}
              className="glass-panel p-6 sm:p-7 rounded-2xl card-hover-interactive text-left space-y-4 group"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/60 text-cyan-400 transition-transform duration-200 group-hover:scale-105">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold chip-hover-interactive cursor-default">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.cgpa}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono text-cyan-400/90 block font-semibold">
                  {edu.field}
                </span>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
