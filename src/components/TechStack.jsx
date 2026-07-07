import { motion } from 'framer-motion';
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';

import {
  SiExpress,
  SiFlask,
  SiMongodb,
  SiMysql,
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';

import { techStack } from '../data/portfolioData';
import Reveal from './Reveal';

const iconMap = {
  Java: FaJava,
  Python: FaPython,
  JavaScript: FaJs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  'React.js': FaReact,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  Flask: SiFlask,
  'REST APIs': SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: FaGitAlt,
  GitHub: FaGithub,
  'VS Code': VscVscode,
};

export default function TechStack() {
  return (
    <section
      id="stack"
      className="container-px py-24 bg-ink/[0.02] dark:bg-white/[0.02]"
    >
      <Reveal>
        <p className="eyebrow">02 · stack.json</p>
        <h2 className="section-heading mt-2">Tech Stack</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, gi) => (
          <Reveal
            key={group.category}
            delay={gi * 0.08}
            className="card p-6"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-wide text-muted">
              {group.category}
            </p>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => {
                const Icon = iconMap[item];

                return (
                  <motion.div
                    key={item}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 rounded-lg border border-ink/10 dark:border-white/10 px-3 py-2 text-sm text-ink/80 dark:text-paper/80 shadow-sm hover:shadow-lg"
                  >
                    {Icon && <Icon size={18} className="text-amber-accent" />}
                    <span>{item}</span>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}