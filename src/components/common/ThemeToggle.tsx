import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative w-14 h-14 rounded-2xl overflow-hidden
                 bg-secondary/70 backdrop-blur-sm
                 hover:bg-secondary/90
                 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.05)]
                 hover:shadow-[3px_3px_10px_rgba(0,0,0,0.15),-3px_-3px_10px_rgba(255,255,255,0.08)]
                 active:scale-95
                 transition-all duration-300
                 focus:outline-none
                 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {/* Glassmorphism overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-600/0
                      group-hover:from-cyan-500/10 group-hover:to-violet-600/10
                      transition-all duration-300" />

      {/* Sun Icon - Aparece no modo light */}
      <Sun
        className={`absolute text-amber-500 transition-all duration-500 ${
          theme === 'light'
            ? 'rotate-0 opacity-100 scale-100'
            : 'rotate-180 opacity-0 scale-50'
        }`}
        size={22}
        strokeWidth={2.5}
      />

      {/* Moon Icon - Aparece no modo dark */}
      <Moon
        className={`absolute text-cyan-400 transition-all duration-500 ${
          theme === 'dark'
            ? 'rotate-0 opacity-100 scale-100'
            : '-rotate-180 opacity-0 scale-50'
        }`}
        size={22}
        strokeWidth={2.5}
      />
    </button>
  );
};
