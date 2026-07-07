import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="container-px border-t border-ink/10 dark:border-white/10 py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-ink/50 dark:text-paper/50">
          Designed &amp; developed by {personal.name} · © {new Date().getFullYear()}
        </p>
        <div className="flex gap-4 text-ink/50 dark:text-paper/50">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-amber-accent">
            <FiGithub size={16} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-amber-accent">
            <FiLinkedin size={16} />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email" className="hover:text-amber-accent">
            <FiMail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
