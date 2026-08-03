import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Sales Laptop & IT Support",
    company: "KLIKNKLIK ITC BSD",
    period: "September 2019 – December 2022",
    points: [
      "Consulting laptop products according to customer needs.",
      "Customer handling with a professional and friendly approach.",
      "Troubleshooting hardware & software on laptop devices.",
      "Software installation, driver, and operating system setup.",
      "Sales through e-commerce platforms (Tokopedia, Shopee).",
      "Providing solutions for technical issues faced by customers.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-24">
      <div className="section-shell max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="section-eyebrow">My journey</p>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-sky-400 to-transparent" />

          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-6 pl-12"
            >
              <div className="absolute left-4 top-3 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--bg)]">
                <Briefcase size={14} className="text-[var(--accent)]" />
              </div>
              <div className="section-card rounded-3xl p-6">
                <div className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                  {exp.period}
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-[var(--text)]">
                  {exp.role}
                </h3>
                <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                  <MapPin size={14} /> {exp.company}
                </p>
                <ul className="space-y-2 text-sm leading-7 text-[var(--text-soft)]">
                  {exp.points.map((p, pi) => (
                    <li key={pi} className="flex gap-2">
                      <span className="mt-1 text-[var(--accent)]">•</span>
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
