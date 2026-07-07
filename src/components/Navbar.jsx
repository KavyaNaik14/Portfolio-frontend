import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import { useActiveSection } from '../hooks/useActiveSection';

const links = [
  { label: 'home.jsx', href: '#home', id: 'home' },
  { label: 'about.md', href: '#about', id: 'about' },
  { label: 'stack.json', href: '#stack', id: 'stack' },
  { label: 'experience.log', href: '#experience', id: 'experience' },
  { label: 'projects/', href: '#projects', id: 'projects' },
  { label: 'education.md', href: '#education', id: 'education' },
  { label: 'contact.js', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <a href="#home" className="font-mono text-sm font-semibold text-ink dark:text-paper">
          <span className="text-amber-accent">&lt;</span>Kavya.Naik
          <span className="text-amber-accent"> /&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-1 rounded-lg border border-ink/10 dark:border-white/10 bg-white/50 dark:bg-white/5 p-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeId === link.id ? 'true' : undefined}
              className={`relative rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
                activeId === link.id
                  ? 'text-amber-accent'
                  : 'text-ink/70 dark:text-paper/70 hover:bg-amber-accent/10 hover:text-amber-accent'
              }`}
            >
              {activeId === link.id && (
                <motion.span
                  layoutId="active-nav-pill"
                  className="absolute inset-0 rounded-md bg-amber-accent/10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-ink/10 dark:border-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass"
          >
            <div className="container-px flex flex-col gap-1 py-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 font-mono text-sm ${
                    activeId === link.id
                      ? 'bg-amber-accent/10 text-amber-accent'
                      : 'text-ink/80 dark:text-paper/80 hover:bg-amber-accent/10 hover:text-amber-accent'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
