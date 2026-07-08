import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-5 overflow-hidden">
      {/* Top gradient glow */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #FF2E93, #7C3AED, #22D3EE, transparent)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 blur-3xl -z-10" style={{ background: 'rgba(255,46,147,0.15)' }} />

      <div className="max-w-7xl mx-auto text-center">
        <a href="#home" className="font-display text-4xl tracking-wider gradient-text-sunset mb-3 inline-block">
          KAUTSAR FEBIA NADHA
        </a>
        <p className="text-sm text-[var(--text-soft)] mb-2">
          Web Developer <span className="neon-text-pink">•</span> Mobile Developer <span className="neon-text-cyan">•</span> Game Developer <span className="neon-text-purple">•</span> IT Support
        </p>
        <div className="flex justify-center gap-4 my-5 text-sm">
          <a href="#home" className="text-[var(--text-soft)] hover:neon-text-pink transition-colors">Home</a>
          <a href="#projects" className="text-[var(--text-soft)] hover:neon-text-cyan transition-colors">Projects</a>
          <a href="#contact" className="text-[var(--text-soft)] hover:neon-text-purple transition-colors">Contact</a>
        </div>
        <div className="border-t border-[var(--text-soft)]/20 pt-6 mt-6">
          <p className="text-sm text-[var(--text-soft)]">
            Copyright © 2026 <span className="neon-text-pink font-semibold">Kautsar Febia Nadha</span>
          </p>
          <p className="text-xs text-[var(--text-soft)]/70 mt-1 flex items-center justify-center gap-1">
            Made with <Heart size={12} className="neon-text-pink fill-current" /> using React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
