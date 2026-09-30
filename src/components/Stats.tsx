import React from 'react';
import { GraduationCap, Code2, ShieldAlert, Cpu } from 'lucide-react';
import { QUICK_STATS } from '../data/portfolioData';

export const Stats: React.FC = () => {
  const iconList = [
    { icon: GraduationCap, color: 'text-indigo-400', border: 'border-indigo-500/30' },
    { icon: Code2, color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { icon: ShieldAlert, color: 'text-emerald-400', border: 'border-emerald-500/30' },
    { icon: Cpu, color: 'text-blue-400', border: 'border-blue-500/30' },
  ];

  return (
    <section className="py-8 bg-slate-950/70 border-y border-slate-800/80 relative" aria-label="Quick Profile Highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_STATS.map((stat, idx) => {
            const iconItem = iconList[idx % iconList.length];
            const Icon = iconItem.icon;

            return (
              <div
                key={stat.label}
                className="glass-panel p-5 rounded-2xl flex items-center gap-4 card-hover-interactive group"
              >
                <div className={`p-3 rounded-xl bg-slate-900 border ${iconItem.border} shrink-0 transition-transform duration-200 group-hover:scale-105`}>
                  <Icon className={`w-5 h-5 ${iconItem.color}`} />
                </div>
                
                <div className="flex flex-col min-w-0 text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {stat.tag}
                  </span>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight truncate">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 truncate">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
