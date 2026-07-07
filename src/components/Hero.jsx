import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiSend, FiFolder, FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import { personal } from '../data/portfolioData';
import ProfileAvatar from './ProfileAvatar';

const floatingIcons = [
  { Icon: FaReact, className: 'top-4 left-4 md:left-10 text-sky-400', delay: 0 },
  { Icon: SiMongodb, className: 'top-20 right-2 md:right-8 text-green-500', delay: 1 },
  { Icon: FaNodeJs, className: 'bottom-20 left-2 md:left-6 text-green-600', delay: 2 },
  { Icon: SiExpress, className: 'bottom-6 right-6 md:right-16 text-ink dark:text-paper', delay: 1.5 },
  { Icon: SiTailwindcss, className: 'top-1/2 left-0 md:-left-4 text-cyan-400', delay: 0.5 },
  { Icon: FaGitAlt, className: 'top-6 right-1/3 text-orange-500 hidden md:block', delay: 2.5 },
];

function useTypedRoles(roles) {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setRoleIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

export default function Hero() {
  const typed = useTypedRoles(personal.typingRoles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden container-px pt-24 pb-16"
    >
      {/* animated gradient + blobs */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-accent/5 via-transparent to-teal-accent/5" />
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-amber-accent/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-accent/20 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      {/* floating tech icons */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute hidden sm:block text-3xl opacity-60 animate-float ${className}`}
          style={{ animationDelay: `${delay}s` }}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <p className="eyebrow mb-4">Hi, my name is</p>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink dark:text-paper sm:text-5xl lg:text-6xl">
            {personal.name}
          </h1>
          <div className="mt-3 h-10 font-mono text-lg text-amber-accent sm:text-xl">
            {typed}
            <span className="animate-blink">▍</span>
          </div>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/70 dark:text-paper/70">
            {personal.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={personal.resumeUrl} download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a href="#projects" className="btn-secondary">
              <FiFolder /> View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              <FiSend /> Contact Me
            </a>
            <a href="#contact" className="btn-secondary border-amber-accent text-amber-accent">
              Hire Me <FiArrowRight />
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/10 dark:border-white/10 text-ink dark:text-paper hover:border-amber-accent hover:text-amber-accent"
            >
              <FiGithub size={17} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/10 dark:border-white/10 text-ink dark:text-paper hover:border-amber-accent hover:text-amber-accent"
            >
              <FiLinkedin size={17} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/10 dark:border-white/10 text-ink dark:text-paper hover:border-amber-accent hover:text-amber-accent"
            >
              <FiMail size={17} />
            </a>
          </div>
        </motion.div>

        <div className="order-1 md:order-2">
          <ProfileAvatar />
        </div>
      </div>
    </section>
  );
}
