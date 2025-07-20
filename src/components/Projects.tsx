import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaAngular } from "react-icons/fa";

interface ProjectsProps {
  isDark: boolean;
}

const UnityIcon = (
  <svg viewBox="0 0 32 32" width="1.5em" height="1.5em" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <polygon fill="#222" points="16,2 30,9.5 30,22.5 16,30 2,22.5 2,9.5"/>
      <polygon fill="#fff" points="16,5 27,11 27,21 16,27 5,21 5,11"/>
      <polygon fill="#222" points="16,8 24,12 24,20 16,24 8,20 8,12"/>
    </g>
  </svg>
);

const projects = [
  {
    name: "Quote Lab",
    url: "https://quotlabpuptcapstone.online/",
    role: "Front-End Developer",
    description:
      "A web application for DOST using Angular and Laravel that enables clients to request quotations from various laboratories and automatically generate professional PDF documents delivering a seamless and user-friendly experience.",
    image: "/quote-lab.jpg",
    github: "#",
    technologies: ["Angular", "Laravel", "PHP", "MySQL"],
    icon: <FaAngular className="text-red-500" />,
  },
  {
    name: "iSync",
    url: "https://isyncpuptcapstone.net/",
    role: "Front-End Developer",
    description:
      "A website for DOST-NML, built using Angular and Laravel and integrated into the QuotLab system. The platform streamlines the report generation process from quotations, featuring a dedicated checker role to ensure the accuracy of calibrated data before finalizing reports. Once verified, the system automatically generates certifications, enhancing efficiency and accuracy in calibration reporting.",
    image: "/isync.jpg",
    github: "#",
    technologies: ["Angular", "Laravel", "PHP", "MySQL"],
    icon: <FaAngular className="text-red-500" />,
  },
  {
    name: "Wolfie Match",
    url: "https://gd.games/purplewolfe/wolfie-match",
    role: "Game Graphic Artist",
    description:
      "The game was developed in Unity 3D, combining engaging gameplay with charming retro-style visuals to enhance the overall player experience.",
    image: "/wolfie-match.jpg",
    github: "#",
    technologies: ["Unity 3D", "Aseprite"],
    icon: UnityIcon,
  },
];

export default function Projects({ isDark }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          <div className={`inline-flex items-center space-x-2 border rounded-full px-4 py-2 text-sm mb-6 transition-colors duration-300 ${
            isDark 
              ? 'bg-white/10 border-white/20' 
              : 'bg-gray-900/10 border-gray-300/20'
          }`}>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className={`transition-colors duration-300 ${
              isDark ? 'text-white/80' : 'text-gray-700'
            }`}>My Work</span>
          </div>
          <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-white/70' : 'text-gray-600'
          }`}>
            Here are some of my recent projects that showcase my skills and passion for creating exceptional user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`backdrop-blur-sm border rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl h-full ${
                isDark 
                  ? 'bg-black/50 border-white/10 hover:border-white/20' 
                  : 'bg-white/50 border-gray-200 hover:border-gray-300'
              }`}>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`w-full h-full flex items-center justify-center ${
                    isDark 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
                      : 'bg-gradient-to-br from-gray-200 to-gray-300'
                  }`}>
                    <div className={`text-6xl font-bold ${
                      isDark ? 'text-white/20' : 'text-gray-400'
                    }`}>{project.name.charAt(0)}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                    <div className="flex items-center space-x-2">
                      {project.icon}
                      <span className="text-white font-semibold">{project.role}</span>
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all hover:scale-110 backdrop-blur-sm"
                      >
                        <FaExternalLinkAlt className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all hover:scale-110 backdrop-blur-sm"
                      >
                        <FaGithub className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className={`font-bold text-2xl mb-3 group-hover:text-purple-400 transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.name}
                    </h3>
                    <span className="inline-block px-4 py-2 text-sm rounded-full bg-purple-500/20 text-purple-400 font-medium border border-purple-500/30">
                      {project.role}
                    </span>
                  </div>
                  
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className={`font-semibold text-sm transition-colors duration-300 ${
                      isDark ? 'text-white/80' : 'text-gray-700'
                    }`}>Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 border rounded-full text-xs font-medium transition-all ${
                            isDark 
                              ? 'bg-white/10 border-white/20 text-white/80 hover:text-white hover:bg-white/20' 
                              : 'bg-gray-900/10 border-gray-300/20 text-gray-700 hover:text-gray-900 hover:bg-gray-900/20'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className={`flex space-x-4 pt-4 border-t transition-colors duration-300 ${
                    isDark ? 'border-white/10' : 'border-gray-200'
                  }`}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center space-x-2 transition-colors group/link"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium flex items-center space-x-2 transition-colors group/link ${
                        isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <span>View Code</span>
                      <FaGithub className="w-3 h-3 group-hover/link:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 