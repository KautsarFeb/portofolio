import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Sparkles } from 'lucide-react';

const cards = [
  { icon: GraduationCap, title: 'Mahasiswa UBSI', desc: 'Mahasiswa Teknologi Informasi UBSI Semester 6, aktif belajar dan mengembangkan project nyata.', color: 'pink' },
  { icon: Briefcase, title: '3+ Tahun Pengalaman', desc: 'Pengalaman kerja lebih dari 3 tahun di bidang penjualan laptop, IT support, dan customer service.', color: 'cyan' },
  { icon: Code2, title: 'Multi-Discipline Dev', desc: 'Fokus pada Web Development, Mobile Development, dan Augmented Reality dengan berbagai tech stack.', color: 'purple' },
  { icon: Sparkles, title: 'Lifelong Learner', desc: 'Menyukai belajar teknologi baru, selalu antusias mengikuti perkembangan dunia IT terkini.', color: 'orange' },
];

const colorMap: Record<string, string> = {
  pink: 'neon-text-pink neon-border-pink',
  cyan: 'neon-text-cyan neon-border-cyan',
  purple: 'neon-text-purple neon-border-purple',
  orange: 'neon-text-orange neon-border-pink',
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.3em] neon-text-cyan mb-2">GET TO KNOW ME</p>
          <h2 className="font-display text-5xl md:text-6xl gradient-text">ABOUT ME</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass rounded-2xl p-6 ${colorMap[c.color]} hover:scale-[1.03] transition-transform group`}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-[var(--bg-soft)] group-hover:rotate-6 transition-transform">
                  <Icon size={28} className={colorMap[c.color].split(' ')[0]} />
                </div>
                <h3 className="font-display text-xl tracking-wide mb-2">{c.title}</h3>
                <p className="text-sm text-[var(--text-soft)] leading-relaxed">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
