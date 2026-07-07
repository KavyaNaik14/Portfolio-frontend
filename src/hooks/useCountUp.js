import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Animates a number from 0 to `end` once the element scrolls into view.
 * Respects prefers-reduced-motion by jumping straight to the final value.
 */
export function useCountUp(end, { duration = 1400, decimals = 0 } = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setValue(end);
      return;
    }

    let start;
    let frame;

    const step = (timestamp) => {
      if (start === undefined) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Number((eased * end).toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration, decimals]);

  return { ref, value };
}
