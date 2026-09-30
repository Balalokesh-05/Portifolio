import React from 'react';
import { Briefcase, CheckCircle2, Shield, Globe, Terminal } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getContextIcon = (id: string) => {
    switch (id) {
      case 't-hub-experience':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'appleton-innovations':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'skilldizire-internship':
        return <Globe className="w-5 h-5 text-sky-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internships &amp; Project <span className="cyan-gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Practical technical engagements across security systems, IoT research, and web development.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EXPERIENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl card-hover-interactive text-left group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700/60 shrink-0 transition-transform duration-200 group-hover:scale-105">
                    {getContextIcon(item.id)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {item.organization}
                    </h3>
                    <span className="text-cyan-400 font-mono text-xs font-semibold">
                      {item.roleOrContext} • {item.focusArea}
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-mono text-[11px] chip-hover-interactive cursor-default">
                  Verified Engagement
                </span>
              </div>

              {/* Responsibilities / Practical Contributions */}
              <ul className="space-y-2.5 pt-4">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400/80 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
