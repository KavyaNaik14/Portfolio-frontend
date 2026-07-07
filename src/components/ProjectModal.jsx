import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-xl border border-ink/10 dark:border-white/10 bg-white dark:bg-ink-panel p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-xl font-semibold text-ink dark:text-paper">
                {project.title}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="rounded-md p-1 text-ink/50 dark:text-paper/50 hover:text-amber-accent"
              >
                <FiX size={20} />
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <p className="mt-5 font-mono text-xs text-amber-accent">// key features</p>
            <ul className="mt-2 space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-ink/80 dark:text-paper/80">
                  <span className="h-1 w-1 rounded-full bg-teal-accent" /> {f}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
                <FiGithub /> Code
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
