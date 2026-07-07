import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
        >
          <p className="font-mono text-sm text-paper/70">
            <span className="text-amber-accent">$</span> booting portfolio.jsx
          </p>
          <div className="mt-4 h-1 w-56 overflow-hidden rounded-full bg-white/10">
            <div className="loader-bar h-full bg-amber-accent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
