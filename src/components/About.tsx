import React from 'react';
import { UserCheck, Shield, Cpu, Code2 } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {ABOUT_DATA.heading}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-full mt-1" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Broad Professional Narrative */}
          <div className="lg:col-span-6 space-y-5 text-left">
            {ABOUT_DATA.paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {p}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Core Engineering Capabilities
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Software & Web Engineering',
                  'Python Programming',
                  'Data Analysis & SQL',
                  'Machine Learning (Random Forest)',
                  'SIEM & Log Monitoring',
                  'Network & Systems Fundamentals',
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono chip-hover-interactive cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Focus Pillars Cards */}
          <div className="lg:col-span-6 space-y-4">
            {ABOUT_DATA.focusPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-panel p-6 rounded-2xl card-hover-interactive flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-700/60 shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-105">
                  {getIcon(pillar.icon)}
                </div>
                
                <div className="space-y-1.5 text-left">
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
