import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * A custom dot-and-ring cursor. Automatically disabled on touch devices
 * and when the user prefers reduced motion, so the native cursor is never
 * taken away from someone who needs it.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const shouldEnable = !isTouch && !prefersReducedMotion;
    setEnabled(shouldEnable);
    if (shouldEnable) {
      document.body.classList.add('cursor-none');
    }
    return () => document.body.classList.remove('cursor-none');
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setHidden(false);
    };
    const handleOver = (e) => {
      setHovering(Boolean(e.target.closest('a, button, input, textarea, [role="button"]')));
    };
    const handleLeave = () => setHidden(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[70] h-2 w-2 rounded-full bg-amber-accent"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%', opacity: hidden ? 0 : 1 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[70] rounded-full border border-amber-accent/60"
        animate={{ width: hovering ? 48 : 28, height: hovering ? 48 : 28, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
}
