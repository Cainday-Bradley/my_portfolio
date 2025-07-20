import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);

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
          <div className={`inline-flex items-center space-x-2 border rounded-full px-4 py-2 text-sm mb-6 transition-colors duration-300 ${
            isDark 
              ? 'bg-white/10 border-white/20' 
              : 'bg-gray-900/10 border-gray-300/20'
          }`}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className={`transition-colors duration-300 ${
              isDark ? 'text-white/80' : 'text-gray-700'
            }`}>Get In Touch</span>
          </div>
          <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Let's <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-white/70' : 'text-gray-600'
          }`}>
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
              <h3 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Get in <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Touch</span>
              </h3>
              <p className={`text-lg leading-relaxed mb-8 transition-colors duration-300 ${
                isDark ? 'text-white/70' : 'text-gray-600'
              }`}>
                Ready to start your next project? I'd love to hear from you and discuss how we can work together to bring your ideas to life.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className={`flex items-center space-x-4 p-4 border rounded-xl hover:bg-white/10 transition-all ${
                isDark 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-gray-900/5 border-gray-200 hover:bg-gray-900/10'
              }`}>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Email</h4>
                  <a href="mailto:bradleycainday@gmail.com" className={`hover:text-white transition-colors ${
                    isDark ? 'text-white/70' : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    bradleycainday@gmail.com
                  </a>
                </div>
              </div>

              <div className={`flex items-center space-x-4 p-4 border rounded-xl hover:bg-white/10 transition-all ${
                isDark 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-gray-900/5 border-gray-200 hover:bg-gray-900/10'
              }`}>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Location</h4>
                  <p className={`transition-colors duration-300 ${
                    isDark ? 'text-white/70' : 'text-gray-600'
                  }`}>Taguig City, Philippines</p>
                </div>
              </div>

              <div className={`flex items-center space-x-4 p-4 border rounded-xl hover:bg-white/10 transition-all ${
                isDark 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-gray-900/5 border-gray-200 hover:bg-gray-900/10'
              }`}>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <FaPhone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Phone</h4>
                  <p className={`transition-colors duration-300 ${
                    isDark ? 'text-white/70' : 'text-gray-600'
                  }`}>09760292478</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/bradley-cainday-a76382349/" className={`social-link transition-colors duration-300 ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/Cainday-Bradley" className={`social-link transition-colors duration-300 ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`} target="_blank" rel="noopener noreferrer">
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
            className={`backdrop-blur-sm border rounded-3xl p-8 transition-colors duration-300 ${
              isDark 
                ? 'bg-black/50 border-white/10' 
                : 'bg-white/50 border-gray-200'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Send a Message</h3>
            {submitted ? (
              <div className={`text-center py-12 text-lg font-semibold transition-colors duration-300 ${isDark ? 'text-green-400' : 'text-green-700'}`}>Thank you! Your message has been sent.</div>
            ) : (
            <form 
              className="space-y-6" 
              action="https://formspree.io/f/mwkgyqzv" 
              method="POST" 
              onSubmit={e => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                fetch('https://formspree.io/f/mwkgyqzv', {
                  method: 'POST',
                  body: data,
                  headers: {
                    'Accept': 'application/json',
                  },
                })
                  .then(response => {
                    if (response.ok) {
                      setSubmitted(true);
                      form.reset();
                    } else {
                      alert('There was an error sending your message. Please try again later.');
                    }
                  })
                  .catch(() => {
                    alert('There was an error sending your message. Please try again later.');
                  });
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white/80' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full px-4 py-3 border rounded-xl placeholder-white/50 focus:outline-none transition-all ${
                      isDark 
                        ? 'bg-white/10 border-white/20 text-white focus:border-white/40 focus:bg-white/20' 
                        : 'bg-gray-900/10 border-gray-300/20 text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:bg-gray-900/20'
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white/80' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 border rounded-xl placeholder-white/50 focus:outline-none transition-all ${
                      isDark 
                        ? 'bg-white/10 border-white/20 text-white focus:border-white/40 focus:bg-white/20' 
                        : 'bg-gray-900/10 border-gray-300/20 text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:bg-gray-900/20'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white/80' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className={`w-full px-4 py-3 border rounded-xl placeholder-white/50 focus:outline-none transition-all ${
                    isDark 
                      ? 'bg-white/10 border-white/20 text-white focus:border-white/40 focus:bg-white/20' 
                      : 'bg-gray-900/10 border-gray-300/20 text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:bg-gray-900/20'
                  }`}
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white/80' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className={`w-full px-4 py-3 border rounded-xl placeholder-white/50 focus:outline-none transition-all resize-none ${
                    isDark 
                      ? 'bg-white/10 border-white/20 text-white focus:border-white/40 focus:bg-white/20' 
                      : 'bg-gray-900/10 border-gray-300/20 text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:bg-gray-900/20'
                  }`}
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
            )}
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className={`text-center p-6 border rounded-2xl transition-colors duration-300 ${
            isDark 
              ? 'bg-white/5 border-white/10' 
              : 'bg-gray-900/5 border-gray-200'
          }`}>
            <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>24/7</div>
            <div className={`transition-colors duration-300 ${
              isDark ? 'text-white/70' : 'text-gray-600'
            }`}>Response Time</div>
          </div>
          <div className={`text-center p-6 border rounded-2xl transition-colors duration-300 ${
            isDark 
              ? 'bg-white/5 border-white/10' 
              : 'bg-gray-900/5 border-gray-200'
          }`}>
            <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>100%</div>
            <div className={`transition-colors duration-300 ${
              isDark ? 'text-white/70' : 'text-gray-600'
            }`}>Client Satisfaction</div>
          </div>
          <div className={`text-center p-6 border rounded-2xl transition-colors duration-300 ${
            isDark 
              ? 'bg-white/5 border-white/10' 
              : 'bg-gray-900/5 border-gray-200'
          }`}>
            <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Fast</div>
            <div className={`transition-colors duration-300 ${
              isDark ? 'text-white/70' : 'text-gray-600'
            }`}>Project Delivery</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 