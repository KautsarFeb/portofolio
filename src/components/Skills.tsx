import { motion } from 'framer-motion';
import { Monitor, Server, Smartphone, Gamepad2, Wrench, Bot } from 'lucide-react';

const groups = [
  {
    icon: Monitor, title: 'Frontend', color: 'pink',
    skills: [
      { name: 'HTML', level: 80 },
      { name: 'CSS', level: 80 },
      { name: 'Tailwind CSS', level: 78 },
      { name: 'Bootstrap', level: 75 },
    ],
  },
  {
    icon: Server, title: 'Backend', color: 'cyan',
    skills: [
      { name: 'Laravel', level: 78 },
      { name: 'PHP', level: 75 },
      { name: 'MySQL', level: 72 },
    ],
  },
  {
    icon: Smartphone, title: 'Mobile', color: 'purple',
    skills: [
      { name: 'Flutter', level: 82 },
      { name: 'Dart', level: 78 },
    ],
  },
  {
    icon: Gamepad2, title: 'Game & AR', color: 'orange',
    skills: [
      { name: 'Unity', level: 80 },
      { name: 'Vuforia Engine', level: 78 },
      { name: 'Roblox Studio', level: 75 },
    ],
  },
  {
    icon: Wrench, title: 'IT Support', color: 'pink',
    skills: [
      { name: 'Troubleshooting Hardware', level: 80 },
      { name: 'Troubleshooting Software', level: 90 },
      { name: 'Software Installation', level: 95 },
      { name: 'Customer Handling', level: 92 },
    ],
  },
  {
    icon: Bot, title: 'AI Tools', color: 'cyan',
    skills: [
      { name: 'AI-Assisted Development', level: 92 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'Code Optimization', level: 88 },
      { name: 'Technical Documentation', level: 90 },
    ],
  },
];

const colorMap: Record<string, string> = {
  pink: 'neon-text-pink neon-border-pink',
  cyan: 'neon-text-cyan neon-border-cyan',
  purple: 'neon-text-purple neon-border-purple',
  orange: 'neon-text-orange neon-border-pink',
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.3em] neon-text-pink mb-2">WHAT I CAN DO</p>
          <h2 className="font-display text-5xl md:text-6xl gradient-text">SKILLS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, gi) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className={`glass rounded-2xl p-6 ${colorMap[g.color]} hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--bg-soft)]">
                    <Icon size={24} className={colorMap[g.color].split(' ')[0]} />
                  </div>
                  <h3 className="font-display text-2xl tracking-wide">{g.title}</h3>
                </div>
                <div className="space-y-4">
                  {g.skills.map(s => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[var(--text)]">{s.name}</span>
                        <span className="text-[var(--text-soft)]">{s.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-[var(--bg-soft)] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                          className="h-full progress-bar rounded-full"
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
