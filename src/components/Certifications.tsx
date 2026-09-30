import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="security-gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Industry and academic certifications in cybersecurity analysis, ethical hacking, and computer science.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl card-hover-interactive flex flex-col justify-between text-left group hover:border-emerald-500/50"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform duration-200">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/50 chip-hover-interactive cursor-default">
                    {cert.issuer}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Status / Link Footer */}
              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors btn-hover-interactive px-2 py-1 rounded-md"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-slate-500 text-[11px]">Certified</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
