import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Smartphone,
  Gamepad2,
  Wrench,
  Bot,
} from "lucide-react";

const groups = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 80 },
      { name: "Tailwind CSS", level: 78 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Laravel", level: 78 },
      { name: "PHP", level: 75 },
      { name: "MySQL", level: 72 },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: [
      { name: "Flutter", level: 82 },
      { name: "Dart", level: 78 },
    ],
  },
  {
    icon: Gamepad2,
    title: "Game & AR",
    skills: [
      { name: "Unity", level: 80 },
      { name: "Vuforia Engine", level: 78 },
      { name: "Roblox Studio", level: 75 },
    ],
  },
  {
    icon: Wrench,
    title: "IT Support",
    skills: [
      { name: "Troubleshooting Hardware", level: 80 },
      { name: "Troubleshooting Software", level: 90 },
      { name: "Software Installation", level: 95 },
      { name: "Customer Handling", level: 92 },
    ],
  },
  {
    icon: Bot,
    title: "AI Tools",
    skills: [
      { name: "AI-Assisted Development", level: 92 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Code Optimization", level: 88 },
      { name: "Technical Documentation", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="section-eyebrow">What I can do</p>
          <h2 className="section-title">Skills</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: gi * 0.08 }}
                className="section-card rounded-3xl p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--bg-soft)]">
                    <Icon size={22} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text)]">
                    {g.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {g.skills.map((s) => (
                    <div key={s.name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-[var(--text)]">{s.name}</span>
                        <span className="text-[var(--text-soft)]">
                          {s.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[var(--bg-soft)]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="progress-fill h-full rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
