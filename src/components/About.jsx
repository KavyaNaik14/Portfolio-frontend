import { about } from '../data/portfolioData';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="container-px py-24">
      <Reveal>
        <p className="eyebrow">01 · about.md</p>
        <h2 className="section-heading mt-2">About Me</h2>
      </Reveal>

      <div className="mt-10 grid gap-12 md:grid-cols-5">
        <Reveal delay={0.1} className="md:col-span-3 space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-ink/70 dark:text-paper/70">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-2">
          <div className="card p-6">
            <p className="font-mono text-xs text-amber-accent mb-4">// quick facts</p>
            <ul className="space-y-3">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-ink/80 dark:text-paper/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
