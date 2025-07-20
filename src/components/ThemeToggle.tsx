import { motion } from "framer-motion";
import { FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  return (
    <button
      className="p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all hover:scale-110"
      onClick={() => {
        // For now, just show a message since we're using fixed dark theme
        alert("Theme toggle functionality can be added later!");
      }}
      aria-label="Toggle theme"
      title="Toggle light/dark mode"
    >
      <motion.span
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        <FaSun className="text-white w-5 h-5" />
      </motion.span>
    </button>
  );
} 