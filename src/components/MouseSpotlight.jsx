import { useEffect, useRef } from 'react';

/**
 * A soft radial glow that follows the cursor, layered behind content.
 * Disabled on touch devices and for users who prefer reduced motion.
 */
export default function MouseSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return undefined;

    let frame;
    const handleMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.setProperty('--spot-x', `${e.clientX}px`);
          ref.current.style.setProperty('--spot-y', `${e.clientY}px`);
        }
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden sm:block"
      style={{
        background:
          'radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 20%), rgba(245, 185, 66, 0.06), transparent 70%)',
      }}
    />
  );
}
