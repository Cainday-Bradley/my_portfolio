import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaReact, FaAngular, FaVuejs } from "react-icons/fa";

const projects = [
  {
    name: "Quote Lab",
    url: "https://quotlabpuptcapstone.online/",
    role: "Front-End Developer",
    description: "A comprehensive quote management platform for students and teachers, featuring real-time collaboration and advanced analytics.",
    image: "/quote-lab.jpg",
    github: "#",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    icon: <FaReact className="text-cyan-500" />
  },
  {
    name: "iSync",
    url: "https://isyncpuptcapstone.net/",
    role: "Front-End Developer",
    description: "A collaborative productivity tool designed for academic teams, with project management and communication features.",
    image: "/isync.jpg",
    github: "#",
    technologies: ["Angular", "TypeScript", "SCSS", "Firebase"],
    icon: <FaAngular className="text-red-500" />
  },
  {
    name: "Wolfie Match",
    url: "https://gd.games/purplewolfe/wolfie-match",
    role: "Game Graphic Artist",
    description: "An engaging puzzle game for web browsers with beautiful graphics and smooth gameplay mechanics.",
    image: "/wolfie-match.jpg",
    github: "#",
    technologies: ["JavaScript", "Canvas API", "WebGL", "Game Design"],
    icon: <FaVuejs className="text-green-500" />
  },
];

export default function Projects() {
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
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-white/80">My Work</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
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
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-white/20 text-6xl font-bold">{project.name.charAt(0)}</div>
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
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-purple-400 transition-colors">
                      {project.name}
                    </h3>
                    <span className="inline-block px-4 py-2 text-sm rounded-full bg-purple-500/20 text-purple-400 font-medium border border-purple-500/30">
                      {project.role}
                    </span>
                  </div>
                  
                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-white/80 font-semibold text-sm">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/80 hover:text-white hover:bg-white/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4 pt-4 border-t border-white/10">
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
                      className="text-white/60 hover:text-white text-sm font-medium flex items-center space-x-2 transition-colors group/link"
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Collaborate</span>?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              I'm always excited to take on new projects and collaborate with amazing people. 
              Let's create something incredible together that will make a real impact!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center space-x-2 group">
                <span>Start a Project</span>
                <FaExternalLinkAlt className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary flex items-center space-x-2 group">
                <span>View All Projects</span>
                <FaGithub className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 