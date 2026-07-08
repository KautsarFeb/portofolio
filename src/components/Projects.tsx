import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import type { Project } from '../types';

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="relative py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.3em] neon-text-purple mb-2">FEATURED WORK</p>
          <h2 className="font-display text-5xl md:text-6xl gradient-text">PROJECTS</h2>
        </motion.div>

        {projects.length === 0 ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-[#FF2E93] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group glass rounded-2xl overflow-hidden neon-border-pink hover:scale-[1.03] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img src={p.image} loading="lazy" decoding="async" alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,15,26,0.95), rgba(255,46,147,0.2), rgba(34,211,238,0.15))' }} />
                  <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full glass neon-text-cyan">{p.category}</span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-wide mb-2 gradient-text">{p.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tech_stack.map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md bg-[var(--bg-soft)] text-[var(--text-soft)] border border-[#7C3AED]/30">{t}</span>
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-soft)] mb-4 line-clamp-3">{p.description}</p>

                  <div className="flex gap-2">
                    <a href={`/project/${p.id}`} className="neon-btn flex-1 neon-border-pink px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 hover:scale-105 transition-transform">
                      Detail <ArrowRight size={14} />
                    </a>
                    <a href={p.demo_url} target="_blank" rel="noreferrer" className="neon-border-purple px-3 py-2 rounded-lg hover:scale-105 transition-transform" aria-label="Live Demo">
                      <ExternalLink size={18} className="neon-text-purple" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
