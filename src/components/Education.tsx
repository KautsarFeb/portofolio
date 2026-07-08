import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const education = [
  {
    school: 'Universitas Bina Sarana Informatika',
    degree: 'S1 Teknologi Informasi',
    period: 'Semester 6 · 2023 – Sekarang',
    desc: 'Fokus pada Software Engineering, Mobile Development, dan Augmented Reality.',
  },
  {
    school: 'SMK Negeri 5 Kabupaten Tangerang',
    degree: 'Teknik Komputer dan Jaringan',
    period: '2016 – 2019',
    desc: 'Belajar dasar jaringan komputer, hardware, dan sistem operasi.',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.3em] neon-text-orange mb-2">ACADEMIC BACKGROUND</p>
          <h2 className="font-display text-5xl md:text-6xl gradient-text">EDUCATION</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, #FB923C, #FF2E93, #7C3AED)', boxShadow: '0 0 10px rgba(251,146,60,0.5)' }} />

          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-8 pl-14"
            >
              <div className="absolute left-4 top-2 w-8 h-8 -translate-x-1/2 rounded-full flex items-center justify-center bg-[var(--bg)] neon-border-pink">
                <GraduationCap size={16} className="neon-text-orange" />
              </div>
              <div className="glass rounded-2xl p-6 neon-border-purple">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full neon-border-cyan neon-text-cyan mb-3">{e.period}</span>
                <h3 className="font-display text-2xl tracking-wide mb-1">{e.school}</h3>
                <p className="text-sm neon-text-pink mb-3">{e.degree}</p>
                <p className="text-sm text-[var(--text-soft)]">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
