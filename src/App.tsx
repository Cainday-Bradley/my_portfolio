import "./App.css";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import idImg from "./assets/id.jpg";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply theme to document body
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Close mobile menu on ESC or click outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    }
    function handleClick(e: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [mobileMenuOpen]);

  // Correct URLs
  const LINKEDIN_URL = "https://www.linkedin.com/in/bradley-cainday-a76382349/";
  const GITHUB_URL = "https://github.com/Cainday-Bradley";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDark 
          ? 'bg-black/90 border-white/10' 
          : 'bg-white/90 border-gray-200'
      }`}>
        <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={idImg} alt="Bradley Cainday" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold bg-gradient-to-r from-pink-300 to-pink-400 bg-clip-text text-transparent">Brielle</span>
                <div className={`text-xs transition-colors duration-300 ${
                  isDark ? 'text-white/60' : 'text-gray-600'
                }`}>Front-End Developer</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-3 border-l pl-4 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(255,255,255,0.2)' : '#d1d5db' }}>
              <a
                href="mailto:bradleycainday@gmail.com"
                className={`p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                  isDark ? 'text-red-400 hover:text-white' : 'text-red-600 hover:text-pink-500'
                }`}
                title="Email Brielle"
              >
                <SiGmail size={22} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  isDark ? 'text-blue-400 hover:text-white' : 'text-blue-700 hover:text-blue-900'
                }`}
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className={`nav-link font-medium transition-colors duration-300 ${
                isDark ? 'text-white/70 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}>About</a>
              <a href="#skills" className={`nav-link font-medium transition-colors duration-300 ${
                isDark ? 'text-white/70 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}>Skills</a>
              <a href="#projects" className={`nav-link font-medium transition-colors duration-300 ${
                isDark ? 'text-white/70 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}>Projects</a>
              <a href="#contact" className={`nav-link font-medium transition-colors duration-300 ${
                isDark ? 'text-white/70 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}>Contact</a>
            </nav>
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            <button className="md:hidden p-2" aria-label="Open menu" onClick={() => setMobileMenuOpen(true)}>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 transition-colors duration-300 ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`}></div>
                <div className={`w-full h-0.5 transition-colors duration-300 ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`}></div>
                <div className={`w-full h-0.5 transition-colors duration-300 ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`}></div>
              </div>
            </button>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-start justify-end md:hidden transition-opacity" aria-modal="true" role="dialog">
            <div ref={mobileMenuRef} className={`w-4/5 max-w-xs h-full bg-white dark:bg-gray-900 shadow-xl p-8 flex flex-col space-y-8 animate-slideInRight`}>
              <button
                className="self-end mb-4 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white rotate-45 translate-y-1.5"></span>
                <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white -rotate-45 -translate-y-1.5 -mt-0.5"></span>
              </button>
              <nav className="flex flex-col space-y-6">
                <a href="#about" className="text-lg font-medium text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#skills" className="text-lg font-medium text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Skills</a>
                <a href="#projects" className="text-lg font-medium text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                <a href="#contact" className="text-lg font-medium text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </nav>
              <div className="flex space-x-4 mt-auto">
                <a href="mailto:bradleycainday@gmail.com" className="p-2 rounded-full text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900 transition-colors" title="Email Brielle"><SiGmail size={22} /></a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors" title="LinkedIn"><FaLinkedin size={20} /></a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" title="GitHub"><FaGithub size={20} /></a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24">
        <AboutMe isDark={isDark} />
        <div className={`transition-colors duration-300 ${
          isDark ? 'bg-gradient-to-b from-transparent to-black/50' : 'bg-gradient-to-b from-transparent to-gray-100/50'
        }`}>
          <Skills isDark={isDark} />
        </div>
        <div className={`transition-colors duration-300 ${
          isDark ? 'bg-gradient-to-b from-black/50 to-transparent' : 'bg-gradient-to-b from-gray-100/50 to-transparent'
        }`}>
          <Projects isDark={isDark} />
        </div>
        <div className={`transition-colors duration-300 ${
          isDark ? 'bg-gradient-to-b from-transparent to-black/50' : 'bg-gradient-to-b from-transparent to-gray-100/50'
        }`}>
          <Contact isDark={isDark} />
        </div>
      </main>

      {/* Footer */}
      <footer className={`border-t py-12 transition-colors duration-300 ${
        isDark ? 'bg-black/80 border-white/10' : 'bg-gray-50/80 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={idImg} alt="Bradley Cainday" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <span className={`text-lg font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Brielle</span>
              </div>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-white/60' : 'text-gray-600'
              }`}>
                Front-end developer passionate about creating beautiful, user-friendly web experiences.
              </p>
            </div>
            
            <div>
              <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className={`block transition-colors text-sm ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>About</a>
                <a href="#skills" className={`block transition-colors text-sm ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>Skills</a>
                <a href="#projects" className={`block transition-colors text-sm ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>Projects</a>
                <a href="#contact" className={`block transition-colors text-sm ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Contact</h4>
              <div className="space-y-2 text-sm">
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-white/60' : 'text-gray-600'
                }`}>bradleycainday@gmail.com</p>
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-white/60' : 'text-gray-600'
                }`}>Taguig City, Philippines</p>
                <div className="flex space-x-4">
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                  }`}>
                    <FaLinkedin size={20} />
                  </a>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                  }`}>
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`border-t pt-8 text-center transition-colors duration-300 ${
            isDark ? 'border-white/10' : 'border-gray-200'
          }`}>
            <p className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-white/40' : 'text-gray-500'
            }`}>
              © {new Date().getFullYear()} Brielle. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
