import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = window.scrollY + 140;
      let current = links[0].href;

      for (const link of links) {
        const section = document.getElementById(link.href.replace("#", ""));

        if (!section) continue;

        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;

        if (offset >= top && offset < bottom) {
          current = link.href;
          break;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const getHref = (href: string) =>
    location.pathname === "/" ? href : `/${href}`;

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const section = document.getElementById(id);

    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => scrollToSection(href), 120);
      return;
    }

    scrollToSection(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div
        className={`mx-auto max-w-7xl px-5 transition-all ${scrolled ? "rounded-full section-card" : ""}`}
      >
        <div className="flex items-center justify-between rounded-full px-4 py-3">
          <a
            href={getHref("#home")}
            className="text-lg font-semibold tracking-[0.2em] text-[var(--text)]"
          >
            KFN<span className="text-[var(--accent)]">.</span>
          </a>

          <div className="hidden lg:flex items-center gap-2">
            {links.map((l) => {
              const isActive = activeSection === l.href;
              return (
                <a
                  key={l.href}
                  href={getHref(l.href)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(l.href);
                  }}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[var(--accent-soft)] text-[var(--text)] shadow-sm"
                      : "text-[var(--text-soft)] hover:bg-[var(--bg-soft)] hover:text-[var(--text)]"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <button
              onClick={toggle}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] p-2.5 transition-transform hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-[var(--accent)]" />
              ) : (
                <Moon size={18} className="text-[var(--accent)]" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggle}
              onPointerDown={(e) => e.currentTarget.blur()}
              type="button"
              className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] p-2.5 min-w-[44px] min-h-[44px] touch-manipulation select-none"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-[var(--accent)]" />
              ) : (
                <Moon size={18} className="text-[var(--accent)]" />
              )}
            </button>
            <button
              onClick={() => setOpen(!open)}
              onPointerDown={(e) => e.currentTarget.blur()}
              type="button"
              className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] p-2.5 min-w-[44px] min-h-[44px] touch-manipulation select-none"
              aria-label="Menu"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mx-5 mt-3 rounded-2xl section-card lg:hidden relative z-[61]">
          <div className="flex flex-col gap-2 p-4">
            {links.map((l) => {
              const isActive = activeSection === l.href;
              return (
                <a
                  key={l.href}
                  href={getHref(l.href)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(l.href);
                  }}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--accent-soft)] text-[var(--text)]"
                      : "text-[var(--text-soft)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
