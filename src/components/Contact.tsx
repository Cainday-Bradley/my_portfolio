import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white/80">Get In Touch</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Get in <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Touch</span>
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Ready to start your next project? I'd love to hear from you and discuss how we can work together to bring your ideas to life.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a href="mailto:bradleycainday@gmail.com" className="text-white/70 hover:text-white transition-colors">
                    bradleycainday@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-white/70">Taguig City, Philippines</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <FaPhone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-white/70">09760292478</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/bradley-cainday-a76382349/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/Cainday-Bradley" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <FaEnvelope className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70">Response Time</div>
          </div>
          <div className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-white/70">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold text-white mb-2">Fast</div>
            <div className="text-white/70">Project Delivery</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 