import { stats } from '../data/portfolioData';
import Reveal from './Reveal';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({ stat, delay }) {
  const { ref, value } = useCountUp(stat.value, { decimals: stat.decimals || 0 });

  return (
    <Reveal delay={delay} className="card p-6 text-center">
      <p ref={ref} className="font-display text-4xl font-bold text-amber-accent sm:text-5xl">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink/60 dark:text-paper/60">
        {stat.label}
      </p>
    </Reveal>
  );
}

export default function Stats() {
  return (
    <section className="container-px py-16">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {stats.map((stat, i) => (
          <StatCard key={stat.id} stat={stat} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
