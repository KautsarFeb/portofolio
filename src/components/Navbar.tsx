import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getHref = (href: string) => {
    return location.pathname === '/' ? href : `/${href}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href={getHref('#home')}
          className="font-display text-2xl tracking-wider gradient-text-sunset"
        >
          KFN<span className="neon-text-pink">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={getHref(l.href)}
              className="text-sm font-medium text-[var(--text-soft)] hover:text-[var(--text)] transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF2E93] to-[#22D3EE] group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          <button
            onClick={toggle}
            className="p-2 rounded-lg neon-border-pink hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="neon-text-orange" />
            ) : (
              <Moon size={18} className="neon-text-purple" />
            )}
          </button>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-lg neon-border-pink"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="neon-text-orange" />
            ) : (
              <Moon size={18} className="neon-text-purple" />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="lg:hidden overflow-hidden glass mx-5 mt-3 rounded-2xl"
      >
        <div className="flex flex-col p-4 gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={getHref(l.href)}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[var(--text-soft)] hover:neon-text-pink transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}