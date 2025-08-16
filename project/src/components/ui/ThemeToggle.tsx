import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 hover:bg-slate-300 dark:hover:bg-slate-600"
      aria-label="Toggle theme"
    >
      <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-slate-300 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${
        isDark ? 'translate-x-6' : 'translate-x-0'
      }`}>
        <Sun className={`w-3 h-3 text-yellow-500 transition-all duration-300 ${
          isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
        }`} />
        <Moon className={`absolute w-3 h-3 text-slate-600 transition-all duration-300 ${
          isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        }`} />
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-200"></div>
    </button>
  );
}