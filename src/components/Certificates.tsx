import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import type { Certificate } from "../types";

type Props = {
  certificates: Certificate[];
};

export default function Certificates({ certificates }: Props) {
  return (
    <section id="certificates" className="relative py-24 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.3em] neon-text-purple mb-2">
            ACHIEVEMENTS
          </p>

          <h2 className="font-display text-5xl md:text-6xl gradient-text">
            CERTIFICATES
          </h2>
        </motion.div>

        {certificates.length === 0 ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-[#FF2E93] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {certificates.map((cert, index) => (

              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group glass rounded-2xl overflow-hidden neon-border-cyan hover:scale-[1.03] transition-all duration-300"
              >

                {/* Image */}
                <div className="relative h-56 overflow-hidden">

                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(11,15,26,0.95), rgba(124,58,237,0.15), rgba(34,211,238,0.1))",
                    }}
                  />

                  <span className="absolute top-3 left-3 glass px-3 py-1 rounded-full text-xs font-semibold neon-text-cyan">
                    {cert.category}
                  </span>

                </div>

                {/* Body */}
                <div className="p-6">

                  <div className="flex items-center gap-2 mb-3">
                    <Award size={20} className="neon-text-pink" />
                    <h3 className="font-display text-2xl gradient-text">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[var(--text-soft)]">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-[var(--text-soft)] mt-1">
                    Issued: {cert.issue_date}
                  </p>

                  {cert.credential_id && (
                    <p className="text-xs text-[var(--text-soft)] mt-2 mb-5">
                      Credential ID: {cert.credential_id}
                    </p>
                  )}

                  <div className="flex gap-3">

                    {cert.pdf_url && (
                      <a
                        href={cert.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 neon-btn neon-border-cyan px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        View Certificate
                      </a>
                    )}

                    {cert.credential_url && (
                      <a
                        href={cert.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 neon-btn neon-border-pink px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
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