import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function ThemeToggle({ isDark, setIsDark }: ThemeToggleProps) {
  return (
    <button
      className={`p-3 rounded-xl border transition-all hover:scale-110 ${
        isDark 
          ? 'bg-white/10 border-white/20 hover:bg-white/20' 
          : 'bg-gray-900/10 border-gray-300/20 hover:bg-gray-900/20'
      }`}
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      title="Toggle light/dark mode"
    >
      <motion.span
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FaSun className={`w-5 h-5 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`} />
        ) : (
          <FaMoon className={`w-5 h-5 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`} />
        )}
      </motion.span>
    </button>
  );
} 