import { motion } from "framer-motion";
import { FaBriefcase, FaCertificate, FaImages, FaTimes } from "react-icons/fa";
import { useState } from "react";
import intern1 from "../assets/intern1.jpg";
import intern2 from "../assets/intern2.jpg";
import intern3 from "../assets/intern3.jpg";
import certificate from "../assets/intern-certificate.png";

interface ExperienceProps {
  isDark: boolean;
}

const experiences = [
  {
    title: "Quality Engineer Intern",
    company: "Manulife",
    location: "Makati",
    period: "2025",
    responsibilities: [
      "Performed manual UI testing to validate functionality, usability, and identify defects using Jira to create test cases and execute test scenarios",
      "Implemented automation testing using Katalon to enhance UI test coverage and improve testing efficiency",
      "Gained hands-on experience with the Software Development Life Cycle (SDLC) and testing phase cycles",
      "Participated in daily stand-up meetings and project management workflows",
      "Collaborated with developers and QA team members to ensure quality releases"
    ]
  }
];

export default function Experience({ isDark }: ExperienceProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);

  const internshipPhotos = [intern1, intern2, intern3];

  return (
    <section id="experience" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            }`}>Professional Experience</span>
          </div>
          <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Work <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-white/70' : 'text-gray-600'
          }`}>
            My professional journey and the valuable experiences I've gained along the way.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
              className={`backdrop-blur-sm border rounded-3xl p-8 transition-colors duration-300 ${
                isDark 
                  ? 'bg-black/50 border-white/10' 
                  : 'bg-white/50 border-gray-200'
              }`}
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FaBriefcase className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-lg font-semibold transition-colors duration-300 ${
                          isDark ? 'text-white/90' : 'text-gray-800'
                        }`}>
                          {exp.company}
                        </span>
                        <span className={`transition-colors duration-300 ${
                          isDark ? 'text-white/60' : 'text-gray-600'
                        }`}>•</span>
                        <span className={`transition-colors duration-300 ${
                          isDark ? 'text-white/70' : 'text-gray-600'
                        }`}>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className={`text-sm font-medium mt-2 md:mt-0 px-4 py-1 rounded-full transition-colors duration-300 ${
                      isDark 
                        ? 'bg-white/10 text-white/80' 
                        : 'bg-gray-900/10 text-gray-700'
                    }`}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3 mt-6">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-base leading-relaxed transition-colors duration-300 ${
                          isDark ? 'text-white/80' : 'text-gray-700'
                        }`}>
                          {responsibility}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Certificate Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t"
                style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <FaCertificate className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className={`font-semibold transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Completion Certificate
                      </h4>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDark ? 'text-white/60' : 'text-gray-600'
                      }`}>
                        Proof of successful internship completion
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCertificate(true)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                        : 'bg-gray-900/10 hover:bg-gray-900/20 text-gray-900 border border-gray-300'
                    }`}
                  >
                    View Certificate
                  </button>
                </div>
                <div
                  onClick={() => setShowCertificate(true)}
                  className="relative cursor-pointer group overflow-hidden rounded-xl border"
                  style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
                >
                  <img
                    src={certificate}
                    alt="Internship Completion Certificate"
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className={`text-white font-medium ${isDark ? '' : ''}`}>
                      Click to view full size
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Internship Photos Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-8 border-t"
                style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <FaImages className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Internship Experience
                    </h4>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-white/60' : 'text-gray-600'
                    }`}>
                      Moments from my time at Manulife
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {internshipPhotos.map((photo, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                      onClick={() => setSelectedImage(photo)}
                      className="relative cursor-pointer group overflow-hidden rounded-xl border aspect-[4/3]"
                      style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
                    >
                      <img
                        src={photo}
                        alt={`Internship experience ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowCertificate(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <img
              src={certificate}
              alt="Internship Completion Certificate"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Internship experience"
              className="w-full h-auto object-contain max-h-[90vh]"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

