import { motion } from "framer-motion";
import { Download, FolderGit2, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 pb-16 pt-28"
    >
      <div className="section-shell grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <span className="pro-pill mb-6">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Available for freelance & internships
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-[var(--text)]">Hello, I’m</span>
            <span className="mt-2 block text-[var(--accent)]">
              Kautsar Febia Nadha
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-medium text-[var(--accent)]">
            Information Technology Student & Developer
          </p>
          <p className="mt-3 max-w-xl text-base leading-7 text-[var(--text-soft)]">
            A 7th semester Information Technology student at Universitas Bina
            Sarana Informatika (UBSI) with more than three years of experience
            in laptop sales, technical troubleshooting, customer service, and
            the development of web, mobile, and augmented reality applications.
            Passionate about technology, problem-solving, and creating
            innovative digital solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/cv-kautsar.pdf" download className="btn-primary">
              <Download size={18} /> Download CV
            </a>
            <a href="#projects" className="btn-secondary">
              <FolderGit2 size={18} /> View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="stat-chip">
              <MapPin size={15} /> Tangerang, Indonesia
            </span>
            <span className="stat-chip">Web Developer</span>
            <span className="stat-chip">Mobile Developer</span>
            <span className="stat-chip">IT Support</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="section-card w-full max-w-md rounded-[2rem] p-3 shadow-2xl shadow-slate-950/20">
            <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg-soft)] p-2">
              <img
                src="/images/profile.jpg"
                loading="lazy"
                decoding="async"
                alt="Kautsar Febia Nadha"
                className="h-[480px] w-full rounded-[1.2rem] object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-[var(--text)]">
                  Professional Focus
                </p>
                <p className="text-sm text-[var(--text-soft)]">
                  Building reliable digital experiences
                </p>
              </div>
              <div className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-sm font-semibold text-[var(--accent)]">
                +3 years
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
