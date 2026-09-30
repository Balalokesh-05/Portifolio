import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';

export const ResumeCTA: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel p-8 sm:p-12 card-hover-interactive overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-left group">
          
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold chip-hover-interactive cursor-default">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full Curriculum Vitae</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              Want the full picture?
            </h2>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Review my verified educational coursework, technical skills breakdown, and project architectures in my complete resume document.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="/Bala-Lokesh-Lutukurthi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono text-xs sm:text-sm font-bold shadow-lg shadow-cyan-950/60 btn-hover-interactive"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
