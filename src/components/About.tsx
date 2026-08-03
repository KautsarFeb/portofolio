import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Sparkles } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "UBSI Student",
    desc: "A seventh-semester Information Technology student passionate about continuously enhancing technical expertise through hands-on, real-world projects.",
    color: "accent",
  },
  {
    icon: Briefcase,
    title: "3+ Years of Experience",
    desc: "Experienced in working in customer-focused environments with consistent responsibilities.",
    color: "sky",
  },
  {
    icon: Code2,
    title: "Multi-Discipline Dev",
    desc: "Focused on web, mobile, and augmented reality with various technology stacks.",
    color: "blue",
  },
  {
    icon: Sparkles,
    title: "Lifelong Learner",
    desc: "Passionate about learning new things and staying updated with the latest technology trends.",
    color: "slate",
  },
];

const colorMap: Record<string, string> = {
  accent: "text-[var(--accent)]",
  sky: "text-sky-400",
  blue: "text-blue-400",
  slate: "text-slate-300",
};

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="section-eyebrow">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--text-soft)]"></p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="section-card rounded-3xl p-6 transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--bg-soft)]">
                  <Icon size={24} className={colorMap[c.color]} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[var(--text)]">
                  {c.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--text-soft)]">
                  {c.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
