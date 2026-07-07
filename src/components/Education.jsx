import { motion } from 'framer-motion';
import { education, certifications, achievements } from '../data/portfolioData';
import Reveal from './Reveal';
import { FiAward, FiCheckCircle } from 'react-icons/fi';

export default function Education() {
  return (
    <section id="education" className="container-px py-24 bg-ink/[0.02] dark:bg-white/[0.02]">
      <Reveal>
        <p className="eyebrow">04 · education.md</p>
        <h2 className="section-heading mt-2">Education</h2>
      </Reveal>

      <div className="mt-10 space-y-4">
        {education.map((edu, i) => (
          <Reveal key={edu.id} delay={i * 0.08} className="card flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold text-ink dark:text-paper">{edu.degree}</h3>
              {edu.institution && <p className="text-sm text-ink/60 dark:text-paper/60">{edu.institution}</p>}
            </div>
            <div className="flex items-center gap-4">
              {edu.duration && <span className="font-mono text-xs text-teal-accent">{edu.duration}</span>}
              <span className="tag">{edu.detail}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">Certifications</p>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -3 }}
                className="card flex items-center gap-3 p-4 transition-shadow hover:shadow-lg hover:shadow-teal-accent/10"
              >
                <FiCheckCircle className="text-teal-accent shrink-0" size={20} />
                <div>
                  <p className="text-sm font-medium text-ink dark:text-paper">{cert.title}</p>
                  <p className="text-xs text-ink/50 dark:text-paper/50">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-4">Achievements</p>
          <div className="space-y-3">
            {achievements.map((ach) => (
              <motion.div
                key={ach.id}
                whileHover={{ y: -3 }}
                className="card flex items-start gap-3 p-4 transition-shadow hover:shadow-lg hover:shadow-amber-accent/10"
              >
                <FiAward className="mt-0.5 text-amber-accent shrink-0" size={20} />
                <div>
                  <p className="text-sm font-medium text-ink dark:text-paper">{ach.title}</p>
                  {ach.detail && <p className="mt-1 text-xs text-ink/50 dark:text-paper/50">{ach.detail}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
