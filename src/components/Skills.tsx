import { motion } from "framer-motion";
import { SiReact, SiAngular, SiVuedotjs, SiTypescript, SiTailwindcss, SiGit, SiJavascript, SiNodedotjs } from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <SiReact className="text-cyan-500" />,
    level: "Advanced",
    description: "Building modern UIs with hooks and context",
    color: "from-cyan-400 to-blue-500",
    experience: "1 year"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    level: "Advanced",
    description: "Type-safe JavaScript development",
    color: "from-blue-500 to-indigo-600",
    experience: "2 years"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-500" />,
    level: "Advanced",
    description: "Utility-first CSS framework",
    color: "from-teal-400 to-cyan-500",
    experience: "1 year"
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" />,
    level: "Advanced",
    description: "Modern ES6+ development",
    color: "from-yellow-400 to-orange-500",
    experience: "2 years"
  },
  {
    name: "Angular",
    icon: <SiAngular className="text-red-500" />,
    level: "Intermediate",
    description: "Component-based architecture",
    color: "from-red-400 to-pink-500",
    experience: "2 years"
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs className="text-green-500" />,
    level: "Intermediate",
    description: "Progressive framework development",
    color: "from-green-400 to-emerald-500",
    experience: "1 year"
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-600" />,
    level: "Intermediate",
    description: "Server-side JavaScript development",
    color: "from-green-500 to-emerald-600",
    experience: "1 year"
  },
  {
    name: "Git",
    icon: <SiGit className="text-orange-500" />,
    level: "Advanced",
    description: "Version control and collaboration",
    color: "from-orange-400 to-red-500",
    experience: "2 years"
  }
];

const additionalSkills = [
  "HTML", "CSS", "REST APIs", "Responsive Design", "UI/UX Design", 
  "Testing", "Figma", "Vite", "Next.js"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
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
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-white/80">My Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            I specialize in modern front-end technologies and frameworks, 
            creating responsive and performant web applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition-all duration-300 hover:shadow-xl">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${skill.color} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <div className="text-white text-2xl flex items-center justify-center">
                    {skill.icon}
                  </div>
                </div>
                
                {/* Skill info */}
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r ${skill.color} text-white font-semibold`}>
                      {skill.level}
                    </span>
                  </div>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                  
                  <div className="text-xs text-white/50">
                    {skill.experience} experience
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Additional <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Skills</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Beyond my core technologies, I'm proficient in various tools and methodologies 
              that help me deliver comprehensive solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12">
            My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Journey</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-2xl">2+</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Years Experience</h4>
              <p className="text-white/60 text-sm">Building modern web applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Projects Completed</h4>
              <p className="text-white/60 text-sm">From small apps to enterprise solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Projets Defended</h4>
              <p className="text-white/60 text-sm">Satisfied with our work quality</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 