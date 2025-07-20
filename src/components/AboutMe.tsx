import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

interface AboutMeProps {
  isDark: boolean;
}

export default function AboutMe({ isDark }: AboutMeProps) {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center space-x-2 border rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                isDark 
                  ? 'bg-white/10 border-white/20' 
                  : 'bg-gray-900/10 border-gray-300/20'
              }`}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className={`transition-colors duration-300 ${
                isDark ? 'text-white/80' : 'text-gray-700'
              }`}>Available for new opportunities</span>
            </motion.div>

            {/* Greeting */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-5xl lg:text-7xl font-bold leading-tight transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-pink-300 to-pink-400 bg-clip-text text-transparent">
                  Brielle
                </span>
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-3xl lg:text-4xl font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white/90' : 'text-gray-800'
                }`}
              >
                Front-End Developer
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-lg leading-relaxed max-w-lg transition-colors duration-300 ${
                isDark ? 'text-white/70' : 'text-gray-600'
              }`}
            >
              I'm a passionate Front-End Developer focused on creating beautiful, 
              user-friendly web experiences that make a difference.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex space-x-8"
            >
              <div className="text-center">
                <div className={`text-2xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>2+</div>
                <div className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-white/60' : 'text-gray-600'
                }`}>Years Experience</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>4</div>
                <div className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-white/60' : 'text-gray-600'
                }`}>Projects Completed</div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <span className="flex items-center space-x-2 text-base font-semibold text-red-500 select-none">
                <span>Hire Me</span>
                <FaArrowRight className="w-4 h-4" />
              </span>
              <a
                href="/src/assets/Bradley Cainday - Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2 group"
                aria-label="Download Resume as PDF"
              >
                <FaDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </motion.div>

          </motion.div>

          {/* Right Content - Profile Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                <img
                  src="/src/assets/profile.jpg"
                  alt="Brielle"
                  className={`relative w-full h-full object-cover rounded-3xl shadow-2xl border transition-colors duration-300 ${
                    isDark ? 'border-white/10' : 'border-gray-200'
                  }`}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className={`absolute -bottom-0 -left-8 backdrop-blur-md border rounded-2xl p-6 max-w-xs shadow-2xl transition-colors duration-300 ${
                isDark 
                  ? 'bg-black/80 border-white/10' 
                  : 'bg-white/80 border-gray-200'
              }`}
            >
              <div className="text-xs text-red-500 font-semibold mb-2 uppercase tracking-wider">Expert on</div>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-white/80' : 'text-gray-700'
              }`}>
                Modern web technologies and creating exceptional user experiences.
              </p>
              <p className={`text-sm mt-3 transition-colors duration-300 ${
                isDark ? 'text-white/70' : 'text-gray-600'
              }`}>
                Let's collaborate to bring your ideas to life with cutting-edge design and development.
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-orange-400/30 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-12 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse delay-500"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className={`text-sm transition-colors duration-300 ${
            isDark ? 'text-white/40' : 'text-gray-500'
          }`}>Scroll to explore</span>
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center transition-colors duration-300 ${
            isDark ? 'border-white/20' : 'border-gray-300'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-bounce transition-colors duration-300 ${
              isDark ? 'bg-white/40' : 'bg-gray-500'
            }`}></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 