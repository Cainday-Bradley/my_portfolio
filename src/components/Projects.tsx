import { motion } from "framer-motion";

const projects = [
  {
    name: "Quote Lab",
    url: "https://quotlabpuptcapstone.online/",
    role: "Front-End Developer",
    description: "A quote management platform for students and teachers.",
  },
  {
    name: "iSync",
    url: "https://isyncpuptcapstone.net/",
    role: "Front-End Developer",
    description: "A collaborative productivity tool for academic teams.",
  },
  {
    name: "Wolfie Match",
    url: "https://gd.games/purplewolfe/wolfie-match",
    role: "Game Graphic Artist",
    description: "A fun and engaging puzzle game for web browsers.",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
    >
      <h2 className="text-2xl font-bold text-indigo-500 mb-6 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <motion.a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-lg border border-transparent hover:border-indigo-400 hover:shadow-2xl transition-all hover:-translate-y-1"
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="font-semibold text-lg mb-1 text-indigo-500">{project.name}</h3>
            <span className="inline-block mb-2 px-2 py-1 text-xs rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-medium">
              {project.role}
            </span>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
} 