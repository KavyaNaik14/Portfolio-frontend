import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="container-px py-24">
      <Reveal>
        <p className="eyebrow">03 · experience.log</p>
        <h2 className="section-heading mt-2">Experience</h2>
      </Reveal>

      <div className="mt-12 relative pl-8 md:pl-0">
        <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-accent/60 via-ink/10 to-transparent dark:via-white/10 md:-translate-x-1/2" />

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.1}>
              <div className={`relative md:flex md:items-start md:gap-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
                  className="absolute -left-[26px] md:left-1/2 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-accent ring-4 ring-amber-accent/20"
                />
                <div className="md:w-1/2" />
                <div className={`md:w-1/2 ${i % 2 === 1 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                  <div className="card p-6 inline-block w-full text-left">
                    <p className="font-mono text-xs text-teal-accent">{exp.duration}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ink dark:text-paper">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-ink/60 dark:text-paper/60">{exp.company}</p>

                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-ink/75 dark:text-paper/75">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
