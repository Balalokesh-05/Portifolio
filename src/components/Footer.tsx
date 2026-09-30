import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { PERSONAL_PROFILE, CONFIG } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSocialClick = (url: string, name: string, e: React.MouseEvent) => {
    if (!url) {
      e.preventDefault();
      alert(`${name} URL is currently a placeholder in 'src/data/portfolioData.ts'.`);
    }
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left: Brand Identity */}
        <div className="space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-white font-bold tracking-tight text-sm font-sans">
              {PERSONAL_PROFILE.name}
            </span>
          </div>
          <p className="text-slate-400 text-xs font-mono">
            {PERSONAL_PROFILE.primaryTitle}
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400">
          <a
            href={CONFIG.GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="chip-hover-interactive px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-300 flex items-center gap-1.5"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span>GitHub</span>
          </a>

          <a
            href={CONFIG.LINKEDIN_URL || '#'}
            target={CONFIG.LINKEDIN_URL ? "_blank" : undefined}
            rel="noreferrer"
            onClick={(e) => handleSocialClick(CONFIG.LINKEDIN_URL, 'LinkedIn', e)}
            className="chip-hover-interactive px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-sky-300 flex items-center gap-1.5"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href={CONFIG.EMAIL ? `mailto:${CONFIG.EMAIL}` : '#'}
            onClick={(e) => handleSocialClick(CONFIG.EMAIL, 'Email', e)}
            className="chip-hover-interactive px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-emerald-300 flex items-center gap-1.5"
            title="Direct Email"
          >
            <span>Email</span>
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-slate-400">
            © {CURRENT_YEAR} {PERSONAL_PROFILE.name}
          </span>

          <button
            onClick={scrollToTop}
            className="btn-hover-interactive px-3 py-1.5 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 flex items-center gap-1 text-[11px]"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
