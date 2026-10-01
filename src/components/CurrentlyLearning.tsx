import React from 'react';
import { Sparkles, Compass } from 'lucide-react';
import { CURRENTLY_LEARNING } from '../data/portfolioData';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Continuous Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Currently Learning &amp; <span className="cyan-gradient-text">Exploring</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Active personal learning interests across software development, data, AI, cloud, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {CURRENTLY_LEARNING.map((item) => (
            <div
              key={item.topic}
              className="glass-panel p-5 rounded-2xl card-hover-interactive text-left space-y-2 flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {item.topic}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {item.note}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/40 px-2.5 py-0.5 rounded-md border border-cyan-800/40 chip-hover-interactive cursor-default">
                  In Progress
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
