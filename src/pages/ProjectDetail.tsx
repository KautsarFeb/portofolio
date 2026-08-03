import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Target,
  Wrench,
  Lightbulb,
  BookOpen,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Project } from "../types";
import { supabase } from "../lib/supabase";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    async function loadProject() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("id");

      console.log("PARAM ID =", id);
      console.log("DATA =", data);

      if (error) {
        console.error(error);
        return;
      }

      const found = data.find((p) => p.id === Number(id));

      console.log("FOUND =", found);

      setProject(found || null);
      setLoading(false);
    }

    loadProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#FF2E93] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-5">
        <p className="font-display text-4xl neon-text-pink">
          PROJECT NOT FOUND
        </p>
        <Link
          to="/"
          className="neon-border-cyan px-6 py-3 rounded-xl text-sm font-semibold"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  const gallery = project.gallery?.length ? project.gallery : [project.image];

  const goToPrev = () => {
    setActiveImg((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveImg((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const delta = e.changedTouches[0].clientX - touchStartX;
    if (delta > 50) goToPrev();
    if (delta < -50) goToNext();
    setTouchStartX(null);
  };

  const sections = [
    {
      icon: Target,
      title: "Objective",
      content: project.objective,
      color: "pink",
    },
    {
      icon: Cpu,
      title: "Technologies",
      content: project.tech_stack.join(", "),
      color: "cyan",
    },
    {
      icon: Wrench,
      title: "Challenges",
      content: project.challenges,
      color: "purple",
    },
    {
      icon: Lightbulb,
      title: "Solutions",
      content: project.solutions,
      color: "orange",
    },
    {
      icon: BookOpen,
      title: "Lessons Learned",
      content: project.lessons,
      color: "pink",
    },
  ];

  const colorMap: Record<string, string> = {
    pink: "neon-text-pink neon-border-pink",
    cyan: "neon-text-cyan neon-border-cyan",
    purple: "neon-text-purple neon-border-purple",
    orange: "neon-text-orange neon-border-pink",
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-5">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-soft)] hover:neon-text-cyan transition-colors mb-6"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-64 md:h-80 rounded-3xl overflow-hidden neon-border-pink mb-8"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(11,15,26,0.98), rgba(255,46,147,0.3), rgba(34,211,238,0.2))",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full glass neon-text-cyan mb-3">
              {project.category}
            </span>
            <h1 className="font-display text-4xl md:text-6xl gradient-text-sunset">
              {project.name}
            </h1>
          </div>
        </motion.div>

        {/* Gallery */}
        <div className="mb-10">
          <motion.div
            key={activeImg}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="relative mb-4 overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg-soft)] p-3"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex items-center justify-center overflow-hidden rounded-[1.1rem] bg-[var(--bg-soft)]">
              <img
                src={gallery[activeImg]}
                alt={`${project.name} ${activeImg + 1}`}
                className="max-h-[560px] w-full object-contain"
              />
            </div>

            {gallery.length > 1 && (
              <>
                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(7,17,31,0.75)] text-[var(--text)] backdrop-blur"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(7,17,31,0.75)] text-[var(--text)] backdrop-blur"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </motion.div>

          {gallery.length > 1 && (
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`h-2.5 rounded-full transition-all ${activeImg === i ? "w-8 bg-[var(--accent)]" : "w-2.5 bg-[var(--border)]"}`}
                    aria-label={`Show image ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={goToPrev}
                  className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-2 text-sm text-[var(--text-soft)]"
                >
                  Prev
                </button>
                <button
                  onClick={goToNext}
                  className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-2 text-sm text-[var(--text-soft)]"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`flex-shrink-0 h-16 w-24 overflow-hidden rounded-lg border-2 transition-all ${activeImg === i ? "border-[var(--accent)] shadow-[0_0_12px_rgba(59,130,246,0.25)]" : "border-transparent opacity-70 hover:opacity-100"}`}
              >
                <img
                  src={g}
                  alt={`thumb ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 neon-border-purple mb-8"
        >
          <h2 className="font-display text-2xl tracking-wide mb-3 gradient-text">
            Project Description
          </h2>
          <p className="text-sm text-[var(--text-soft)] leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 neon-border-cyan mb-8"
        >
          <h2 className="font-display text-2xl tracking-wide mb-4 gradient-text">
            Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2
                  size={18}
                  className="neon-text-cyan flex-shrink-0 mt-0.5"
                />
                <span className="text-[var(--text-soft)]">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detail sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {sections
            .filter((s) => s.content)
            .map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`glass rounded-2xl p-6 ${colorMap[s.color]}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      size={22}
                      className={colorMap[s.color].split(" ")[0]}
                    />
                    <h3 className="font-display text-xl tracking-wide">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-soft)] leading-relaxed">
                    {s.content}
                  </p>
                </motion.div>
              );
            })}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href={project.demo_url}
            target="_blank"
            rel="noreferrer"
            className="neon-btn neon-border-purple px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <ExternalLink size={18} className="neon-text-purple" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
