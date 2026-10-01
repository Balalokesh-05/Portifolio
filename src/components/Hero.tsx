import React, { useState } from 'react';
import { ArrowRight, Mail, ExternalLink, Terminal, Copy, Check, Sparkles, FileText, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { PERSONAL_PROFILE, CONFIG, DEVELOPER_CODE_SNIPPET } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'terminal'>('profile');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; res: string }>>([
    { cmd: 'whoami', res: 'Bala Lokesh Lutukurthi (MCA Graduate | Software, CyberSec, AI/ML)' },
    { cmd: 'status --availability', res: 'Open to Full-Time Engineering Opportunities [Verified]' },
  ]);

  const handleRunCommand = (command: string) => {
    let result = '';
    switch (command) {
      case 'whoami':
        result = `${PERSONAL_PROFILE.name} - ${PERSONAL_PROFILE.secondaryPositioning}`;
        break;
      case 'status':
        result = 'Available for Full-Time Technology Roles (Software, CyberSec, AI/ML, Python)';
        break;
      case 'skills':
        result = 'Primary: Python, JavaScript, SQL | Security: Snort, Wireshark, SOC Logs | ML: Scikit-Learn';
        break;
      case 'contact':
        result = `Direct Email: ${CONFIG.EMAIL || 'contact@example.com'} | GitHub: ${CONFIG.GITHUB_USERNAME}`;
        break;
      default:
        result = `Command '${command}' executed. Status code: 0`;
    }
    setTerminalHistory((prev) => [...prev.slice(-4), { cmd: command, res: result }]);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(DEVELOPER_CODE_SNIPPET);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSocialClick = (url: string, name: string, e: React.MouseEvent) => {
    if (!url) {
      e.preventDefault();
      alert(`${name} URL is currently a placeholder in 'src/data/portfolioData.ts'.`);
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid-bg">
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-12 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{PERSONAL_PROFILE.statusBadge}</span>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                {PERSONAL_PROFILE.name}
              </h1>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono cyan-gradient-text tracking-tight">
                {PERSONAL_PROFILE.primaryTitle}
              </div>

              <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed max-w-2xl pt-1">
                {PERSONAL_PROFILE.supportingLine1}
              </p>
            </motion.div>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl"
            >
              {PERSONAL_PROFILE.supportingLine2}
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-sm shadow-lg shadow-indigo-950/60 btn-hover-interactive"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Bala-Lokesh-Lutukurthi-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 font-semibold text-sm btn-hover-interactive"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-2.5 sm:gap-3 text-slate-400 text-xs"
            >
              <span className="font-mono text-slate-400 font-semibold uppercase tracking-wider shrink-0">Profiles:</span>
              
              <a
                href={CONFIG.GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 chip-hover-interactive"
                title="GitHub: Balalokesh-05"
              >
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Balalokesh-05</span>
              </a>

              <a
                href={CONFIG.LINKEDIN_URL || '#'}
                target={CONFIG.LINKEDIN_URL ? "_blank" : undefined}
                rel="noreferrer"
                onClick={(e) => handleSocialClick(CONFIG.LINKEDIN_URL, 'LinkedIn', e)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 chip-hover-interactive"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={CONFIG.EMAIL ? `mailto:${CONFIG.EMAIL}` : '#'}
                onClick={(e) => handleSocialClick(CONFIG.EMAIL, 'Email', e)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 chip-hover-interactive"
                title="Direct Email"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Email</span>
              </a>
            </motion.div>

          </div>

          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 via-blue-500/20 to-cyan-500/30 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />

              <div className="relative rounded-2xl bg-slate-950 border border-slate-800/90 shadow-2xl overflow-hidden text-left card-hover-interactive">
                
                <div className="flex flex-wrap items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-slate-800 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>

                  <div className="flex items-center gap-1 bg-slate-950/80 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeTab === 'profile'
                          ? 'bg-slate-800 text-cyan-300 font-semibold shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      profile.ts
                    </button>
                    <button
                      onClick={() => setActiveTab('stack')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeTab === 'stack'
                          ? 'bg-slate-800 text-cyan-300 font-semibold shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      stack.config
                    </button>
                    <button
                      onClick={() => setActiveTab('terminal')}
                      className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                        activeTab === 'terminal'
                          ? 'bg-slate-800 text-cyan-300 font-semibold shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Terminal className="w-3 h-3 text-cyan-400" />
                      <span>terminal.sh</span>
                    </button>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:text-white border border-slate-700/80 text-xs font-mono flex items-center gap-1"
                    title="Copy Code"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {activeTab === 'profile' && (
                  <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed space-y-1 bg-slate-950/95 animate-in fade-in duration-150">
                    <div className="text-slate-500">// Early-Career Technology Professional</div>
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-400">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-300">name:</span>{' '}
                      <span className="text-emerald-400">"Bala Lokesh Lutukurthi"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-300">education:</span>{' '}
                      <span className="text-emerald-400">"MCA Graduate"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-300">focus:</span> [
                      <span className="text-amber-300">"Software"</span>,{' '}
                      <span className="text-amber-300">"Cybersecurity"</span>,{' '}
                      <span className="text-amber-300">"AI / ML"</span>,{' '}
                      <span className="text-amber-300">"Python"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-300">mindset:</span>{' '}
                      <span className="text-emerald-400">"Build • Learn • Solve"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-300">availableFor:</span>{' '}
                      <span className="text-emerald-400">"Full-Time Opportunities"</span>
                    </div>
                    <div>&#125;;</div>
                    <div className="pt-2 text-slate-500">// Practical project engineering</div>
                    <div className="text-cyan-400">
                      &gt; developer.buildPracticalSolutions() <span className="animate-pulse">_</span>
                    </div>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="p-5 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed space-y-3 bg-slate-950/95 animate-in fade-in duration-150">
                    <div className="text-slate-500">// Active Technology Specifications</div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                        <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">Core Languages</span>
                        <div className="text-slate-200 text-xs font-semibold">Python (Primary), JS/TS, SQL</div>
                        <span className="text-[10px] text-emerald-400">● Production Ready</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                        <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">Security Operations</span>
                        <div className="text-slate-200 text-xs font-semibold">Snort, Wireshark, SOC Logs</div>
                        <span className="text-[10px] text-emerald-400">● Hands-on Lab &amp; Projects</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                        <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">AI / Data Science</span>
                        <div className="text-slate-200 text-xs font-semibold">Scikit-Learn, Pandas, NumPy</div>
                        <span className="text-[10px] text-emerald-400">● Predictive ML Models</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                        <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">Web &amp; Ecosystem</span>
                        <div className="text-slate-200 text-xs font-semibold">React, Node.js, Linux, Git</div>
                        <span className="text-[10px] text-emerald-400">● Modern Workflow</span>
                      </div>
                    </div>

                    <div className="text-slate-500 text-[11px] pt-1">
                      status: <span className="text-emerald-400 font-semibold">Ready for technical interview &amp; coding challenges</span>
                    </div>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 leading-relaxed space-y-3 bg-slate-950/95 min-h-[220px] flex flex-col justify-between animate-in fade-in duration-150">
                    <div className="space-y-2 overflow-y-auto max-h-[170px] pr-1">
                      <div className="text-slate-500 text-[11px]">
                        $ bala-shell v2.4 (interactive quick terminal)
                      </div>
                      
                      {terminalHistory.map((item, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="text-cyan-400 flex items-center gap-1.5">
                            <span className="text-emerald-400">visitor@bala:~$</span> {item.cmd}
                          </div>
                          <div className="text-slate-300 pl-4 text-[11px] leading-relaxed">
                            {item.res}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="text-[10px] text-slate-500 mb-1.5 flex items-center justify-between">
                        <span>Click command to execute:</span>
                        <button
                          onClick={() => setTerminalHistory([])}
                          className="hover:text-rose-400 text-[10px] transition-colors"
                        >
                          clear
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          onClick={() => handleRunCommand('whoami')}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-950 text-[11px] transition-all"
                        >
                          &gt; whoami
                        </button>
                        <button
                          onClick={() => handleRunCommand('status')}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-950 text-[11px] transition-all"
                        >
                          &gt; status
                        </button>
                        <button
                          onClick={() => handleRunCommand('skills')}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-950 text-[11px] transition-all"
                        >
                          &gt; skills
                        </button>
                        <button
                          onClick={() => handleRunCommand('contact')}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-950 text-[11px] transition-all"
                        >
                          &gt; contact
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    Interactive Workstation
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    System Active
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
