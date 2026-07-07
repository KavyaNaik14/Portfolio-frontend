import { useMemo, useState } from 'react';
import { FiGithub, FiExternalLink, FiSearch, FiFolder } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';
import TiltCard from './TiltCard';

export default function Projects() {
  const [query, setQuery] = useState('');
  const [activeTech, setActiveTech] = useState('All');
  const [selected, setSelected] = useState(null);

  const allTech = useMemo(
    () => ['All', ...new Set(projects.flatMap((p) => p.tech))],
    []
  );

  const filtered = projects.filter((p) => {
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
    const matchesTech = activeTech === 'All' || p.tech.includes(activeTech);
    return matchesQuery && matchesTech;
  });

  return (
    <section id="projects" className="container-px py-24">
      <Reveal>
        <p className="eyebrow">05 · projects/</p>
        <h2 className="section-heading mt-2">Projects</h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40 dark:text-paper/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-lg border border-ink/10 dark:border-white/10 bg-white dark:bg-ink-panel py-2 pl-9 pr-3 text-sm text-ink dark:text-paper outline-none focus:border-amber-accent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {allTech.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTech(t)}
              className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${activeTech === t
                  ? 'bg-amber-accent text-ink'
                  : 'border border-ink/10 dark:border-white/10 text-ink/60 dark:text-paper/60 hover:border-amber-accent hover:text-amber-accent'
                }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.1}>
            <TiltCard className="card flex flex-col overflow-hidden">
              <div className="h-52 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-amber-accent/20 to-teal-accent/20">
                    <FiFolder size={40} className="text-ink/30 dark:text-paper/30" />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-paper">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink/60 dark:text-paper/60 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tag">+{project.tech.length - 3}</span>
                  )}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setSelected(project)}
                    className="font-mono text-xs text-amber-accent hover:underline"
                  >
                    View details →
                  </button>
                  <div className="flex gap-3 text-ink/60 dark:text-paper/60">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository" className="hover:text-amber-accent">
                      <FiGithub size={18} />
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo" className="hover:text-amber-accent">
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full text-center text-sm text-ink/50 dark:text-paper/50">
            No projects match that search.
          </p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
