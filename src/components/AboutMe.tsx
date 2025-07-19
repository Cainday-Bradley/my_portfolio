import { motion } from "framer-motion";
import { FaUserAstronaut } from "react-icons/fa";

export default function AboutMe() {
  return (
    <motion.section
      className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl mb-12 flex flex-col md:flex-row items-center gap-8 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <div className="flex-shrink-0">
        {/* Avatar or placeholder */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-indigo-400 to-pink-300 flex items-center justify-center shadow-lg border-4 border-indigo-100 dark:border-slate-800">
          {/* Use your own image by replacing the icon below */}
          <img
            src="/profile.jpg"
            alt="Brielle"
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <FaUserAstronaut className="w-16 h-16 text-white/80 absolute" />
        </div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          <span className="text-indigo-500">Brielle</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-pink-400 mb-4">
          Aspiring Front-End Developer
        </h2>
        <p className="text-gray-700 dark:text-gray-200 text-lg mb-2">
          Passionate about building beautiful, user-friendly web experiences.
          <span className="block text-indigo-500 font-semibold">
            Core skills: React, Angular, Vue
          </span>
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Adaptable to back-end tech when needed. <br />
          <span className="italic text-pink-400">I love playing games in my free time.</span>
        </p>
      </div>
      {/* Decorative gradient blob */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-40 pointer-events-none" />
    </motion.section>
  );
} 