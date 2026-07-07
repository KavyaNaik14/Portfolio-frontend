import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink/10 dark:border-white/10 text-ink dark:text-paper transition-colors hover:border-amber-accent hover:text-amber-accent"
    >
      {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}
