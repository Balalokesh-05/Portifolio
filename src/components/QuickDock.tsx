import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Check, Layers } from 'lucide-react';
import { CONFIG } from '../data/portfolioData';

export const QuickDock: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    if (!CONFIG.EMAIL) return;
    navigator.clipboard.writeText(CONFIG.EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Actions Dock"
      className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 p-1.5 rounded-full bg-slate-950/85 border border-slate-800/90 backdrop-blur-xl shadow-2xl shadow-black/70 animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <button
        onClick={handleCopyEmail}
        className="chip-hover-interactive flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
        title="Copy Email Address"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Copied!</span>
          </>
        ) : (
          <>
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Email</span>
          </>
        )}
      </button>

      <a
        href="#projects"
        className="chip-hover-interactive flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
        title="Jump to Featured Projects"
      >
        <Layers className="w-3.5 h-3.5 text-indigo-400" />
        <span>Projects</span>
      </a>

      <button
        onClick={scrollToTop}
        className="btn-hover-interactive p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300"
        title="Scroll to Top"
        aria-label="Scroll to top of page"
      >
        <ArrowUp className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
