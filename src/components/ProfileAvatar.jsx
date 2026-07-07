import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { personal } from '../data/portfolioData';

export default function ProfileAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="relative mx-auto flex items-center justify-center"
    >
      {/* glass backdrop */}
      <div className="absolute h-72 w-72 rounded-full glass sm:h-80 sm:w-80" />

      {/* rotating gradient ring */}
      <div
        className="absolute h-64 w-64 rounded-full p-[3px] sm:h-72 sm:w-72"
        style={{
          background: 'conic-gradient(from 0deg, #F5B942, #4FD1C5, #F5B942)',
          animation: 'spin 6s linear infinite',
        }}
      >
        <div className="h-full w-full rounded-full bg-paper dark:bg-ink" />
      </div>

      {/* floating photo */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-56 w-56 overflow-hidden rounded-full shadow-2xl shadow-amber-accent/20 ring-4 ring-white/40 dark:ring-white/10 sm:h-64 sm:w-64"
      >
        <img
          src={personal.profileImage}
          alt={`${personal.name}, ${personal.role}`}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="eager"
        />
      </motion.div>

      {/* floating badge */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="glass absolute -right-2 bottom-4 flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg sm:-right-6"
      >
        <FaReact className="animate-spin text-sky-400" style={{ animationDuration: '4s' }} />
        <span className="font-mono text-xs text-ink dark:text-paper">Open to work</span>
      </motion.div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>
    </motion.div>
  );
}
