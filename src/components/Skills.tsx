import { motion } from "framer-motion";
import { SiReact, SiAngular, SiVuedotjs } from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <SiReact className="text-cyan-500" />,
    level: "Advanced",
  },
  {
    name: "Angular",
    icon: <SiAngular className="text-red-500" />,
    level: "Intermediate",
  },
  {
    name: "Vue",
    icon: <SiVuedotjs className="text-green-500" />,
    level: "Intermediate",
  },
];

export default function Skills() {
  return (
    <motion.section
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
    >
      <h2 className="text-2xl font-bold text-indigo-500 mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
            whileHover={{ scale: 1.12, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl mb-2 transition-colors">{skill.icon}</div>
            <span className="font-semibold text-lg">{skill.name}</span>
            <span className="text-xs text-gray-500">{skill.level}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 