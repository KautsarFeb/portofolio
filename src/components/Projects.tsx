import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "../types";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="relative px-5 py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="section-eyebrow">Featured work</p>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        {projects.length === 0 ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--accent)] border-t-transparent" />
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="section-card group overflow-hidden rounded-[1.6rem] transition-transform hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    loading="lazy"
                    decoding="async"
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,17,31,0.95)] via-[rgba(7,17,31,0.25)] to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-[var(--border)] bg-[rgba(15,23,42,0.7)] px-3 py-1 text-xs font-semibold text-slate-100">
                    {p.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-semibold text-[var(--text)]">
                    {p.name}
                  </h3>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {p.tech_stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-2.5 py-1 text-xs text-[var(--text-soft)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mb-5 text-sm leading-7 text-[var(--text-soft)]">
                    {p.description}
                  </p>

                  <div className="flex gap-2">
                    <a
                      href={`/project/${p.id}`}
                      className="btn-secondary flex-1"
                    >
                      Detail <ArrowRight size={14} />
                    </a>
                    <a
                      href={p.demo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-3 transition-transform hover:scale-105"
                      aria-label="Live Demo"
                    >
                      <ExternalLink
                        size={16}
                        className="text-[var(--accent)]"
                      />
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
