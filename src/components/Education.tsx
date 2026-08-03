import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Universitas Bina Sarana Informatika (UBSI)",
    degree: "S1 Technology Information",
    period: "7th Semester · 2023 – Now",
    desc: "Focused on software engineering, mobile development, and augmented reality.",
  },
  {
    school: "SMK Negeri 5 Kabupaten Tangerang",
    degree: "Teknik Komputer dan Jaringan",
    period: "2016 – 2019",
    desc: "Learned the basics of computer networking, hardware, and operating systems.",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative px-5 py-24">
      <div className="section-shell max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="section-eyebrow">Academic background</p>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />

          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative mb-6 pl-12"
            >
              <div className="absolute left-4 top-3 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--bg)]">
                <GraduationCap size={14} className="text-[var(--accent)]" />
              </div>
              <div className="section-card rounded-3xl p-6">
                <div className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                  {e.period}
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-[var(--text)]">
                  {e.school}
                </h3>
                <p className="mb-2 text-sm font-medium text-[var(--accent)]">
                  {e.degree}
                </p>
                <p className="text-sm leading-7 text-[var(--text-soft)]">
                  {e.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
