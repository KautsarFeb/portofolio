import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import type { Certificate } from "../types";

type Props = {
  certificates: Certificate[];
};

export default function Certificates({ certificates }: Props) {
  return (
    <section id="certificates" className="relative px-5 py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="section-eyebrow">Achievements</p>
          <h2 className="section-title">Certificates</h2>
        </motion.div>

        {certificates.length === 0 ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--accent)] border-t-transparent" />
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="section-card group overflow-hidden rounded-[1.6rem] transition-transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,17,31,0.95)] via-[rgba(7,17,31,0.25)] to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-[var(--border)] bg-[rgba(15,23,42,0.7)] px-3 py-1 text-xs font-semibold text-slate-100">
                    {cert.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Award size={18} className="text-[var(--accent)]" />
                    <h3 className="text-xl font-semibold text-[var(--text)]">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-soft)]">
                    {cert.issuer}
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-soft)]">
                    Issued: {cert.issue_date}
                  </p>

                  {cert.credential_id && (
                    <p className="mt-2 mb-5 text-xs text-[var(--text-soft)]">
                      Credential ID: {cert.credential_id}
                    </p>
                  )}

                  <div className="flex gap-3">
                    {cert.pdf_url && (
                      <a
                        href={cert.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1"
                      >
                        <ExternalLink size={15} /> View
                      </a>
                    )}
                    {cert.credential_url && (
                      <a
                        href={cert.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1"
                      >
                        Verify
                      </a>
                    )}
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
