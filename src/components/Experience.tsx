import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Sales Laptop & IT Support',
    company: 'KLIKNKLIK',
    period: 'September 2019 – Desember 2022',
    points: [
      'Konsultasi produk laptop sesuai kebutuhan pelanggan.',
      'Customer Handling dengan pendekatan profesional dan ramah.',
      'Troubleshooting hardware & software perangkat laptop.',
      'Instalasi software (OS, aplikasi, driver, dll).',
      'Penjualan melalui platform E-Commerce (Tokopedia, Shopee, dll).',
      'Memberikan solusi terhadap kendala teknis pelanggan.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.3em] neon-text-cyan mb-2">MY JOURNEY</p>
          <h2 className="font-display text-5xl md:text-6xl gradient-text">EXPERIENCE</h2>
        </motion.div>

        <div className="relative">
          {/* Neon vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" style={{ background: 'linear-gradient(to bottom, #FF2E93, #7C3AED, #22D3EE)', boxShadow: '0 0 10px rgba(255,46,147,0.5)' }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
            >
              {/* Node */}
              <div className="absolute left-4 md:left-auto top-2 w-8 h-8 -translate-x-1/2 rounded-full flex items-center justify-center bg-[var(--bg)] neon-border-pink" style={i % 2 !== 0 ? { left: 'auto', right: '-1rem', transform: 'translateX(50%)' } : { left: '-1rem' }}>
                <Briefcase size={16} className="neon-text-pink" />
              </div>

              <div className="glass rounded-2xl p-6 neon-border-purple">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full neon-border-cyan neon-text-cyan mb-3">{exp.period}</span>
                <h3 className="font-display text-2xl tracking-wide mb-1">{exp.role}</h3>
                <p className="flex items-center gap-2 text-sm neon-text-pink mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}">
                  <MapPin size={14} /> {exp.company}
                </p>
                <ul className={`space-y-2 text-sm text-[var(--text-soft)] ${i % 2 === 0 ? 'md:list-inside md:text-right' : ''}`}>
                  {exp.points.map((p, pi) => (
                    <li key={pi} className="flex gap-2 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}">
                      <span className="neon-text-cyan mt-1">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
