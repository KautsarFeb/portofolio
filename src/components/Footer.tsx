import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-5 pb-8 pt-16">
      <div className="mx-auto max-w-7xl text-center">
        <a
          href="#home"
          className="mb-3 inline-block text-2xl font-semibold tracking-[0.2em] text-[var(--text)]"
        >
          KAUTSAR FEBIA NADHA
        </a>
        <p className="mb-2 text-sm text-[var(--text-soft)]">
          Web Developer • Mobile Developer • Game Developer • IT Support
        </p>
        <div className="my-5 flex justify-center gap-4 text-sm">
          <a
            href="#home"
            className="text-[var(--text-soft)] transition-colors hover:text-[var(--text)]"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-[var(--text-soft)] transition-colors hover:text-[var(--text)]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-[var(--text-soft)] transition-colors hover:text-[var(--text)]"
          >
            Contact
          </a>
        </div>
        <div className="mt-6 border-t border-[var(--border)] pt-6">
          <p className="text-sm text-[var(--text-soft)]">
            Copyright © 2026{" "}
            <span className="font-semibold text-[var(--text)]">
              Kautsar Febia Nadha
            </span>
          </p>
          <p className="mt-1 flex items-center justify-center gap-1 text-xs text-[var(--text-soft)]">
            Made with <Heart size={12} className="text-[var(--accent)]" /> using
            React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
