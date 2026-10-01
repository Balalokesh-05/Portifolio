import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Copy, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }).toString(),
    })
      .then(() => {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
          });
        } catch {
          // Confetti fallback
        }

        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 5000);
      })
      .catch((error) => {
        console.error('Netlify form submission error:', error);
      });
  };

  const handleCopyEmail = () => {
    if (!CONFIG.EMAIL) {
      alert("Email address is currently set to placeholder in 'src/data/portfolioData.ts'. Please configure CONFIG.EMAIL.");
      return;
    }
    navigator.clipboard.writeText(CONFIG.EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleLinkClick = (url: string, name: string, e: React.MouseEvent) => {
    if (!url) {
      e.preventDefault();
      alert(`${name} URL is currently a placeholder in 'src/data/portfolioData.ts'. Please configure it with your active link.`);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Opportunities &amp; Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="cyan-gradient-text">Connect</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-medium">
            Open to full-time opportunities across software development, cybersecurity, AI/ML, data, and IT.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Communication Channels
            </h3>

            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl card-hover-interactive flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400 shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                  <span className="text-sm font-bold text-white truncate block group-hover:text-cyan-300 transition-colors">
                    {CONFIG.EMAIL ? CONFIG.EMAIL : '[Email Configured in Data File]'}
                  </span>
                </div>
              </div>

              {CONFIG.EMAIL && (
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 btn-hover-interactive shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>

            {/* LinkedIn Card */}
            <a
              href={CONFIG.LINKEDIN_URL || '#'}
              target={CONFIG.LINKEDIN_URL ? "_blank" : undefined}
              rel="noopener noreferrer"
              onClick={(e) => handleLinkClick(CONFIG.LINKEDIN_URL, 'LinkedIn', e)}
              className="glass-panel p-5 rounded-2xl card-hover-interactive flex items-center justify-between gap-4 group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-blue-400 shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Professional Network</span>
                  <span className="text-sm font-bold text-white block group-hover:text-cyan-300 transition-colors">
                    {CONFIG.LINKEDIN_URL ? 'LinkedIn Profile' : '[LinkedIn Configured in Data File]'}
                  </span>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={CONFIG.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl card-hover-interactive flex items-center justify-between gap-4 group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Source Code Repository</span>
                  <span className="text-sm font-bold text-white block font-mono group-hover:text-cyan-300 transition-colors">
                    {CONFIG.GITHUB_USERNAME}
                  </span>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 text-left">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Transmitted</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm">
                    Thank you for reaching out. Your message has been received.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 text-xs sm:text-sm font-mono transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 text-xs sm:text-sm font-mono transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Opportunity / Technical Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 text-xs sm:text-sm font-mono transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Share details regarding your opportunity or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 text-xs sm:text-sm font-mono transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono text-xs font-bold shadow-lg shadow-cyan-950/60 btn-hover-interactive flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
