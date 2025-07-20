import "./App.css";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-white">Brielle</span>
                <div className="text-white/60 text-xs">Front-End Developer</div>
              </div>
            </div>
            <span className="text-white/70 text-sm hidden lg:block border-l border-white/20 pl-4">hellobrielle@gmail.com</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link font-medium">About</a>
              <a href="#skills" className="nav-link font-medium">Skills</a>
              <a href="#projects" className="nav-link font-medium">Projects</a>
              <a href="#contact" className="nav-link font-medium">Contact</a>
            </nav>
            <ThemeToggle />
            <button className="md:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        <AboutMe />
        <div className="bg-gradient-to-b from-transparent to-black/50">
          <Skills />
        </div>
        <div className="bg-gradient-to-b from-black/50 to-transparent">
          <Projects />
        </div>
        <div className="bg-gradient-to-b from-transparent to-black/50">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-white/10 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-lg font-bold text-white">Brielle</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Front-end developer passionate about creating beautiful, user-friendly web experiences.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-white/60 hover:text-white transition-colors text-sm">About</a>
                <a href="#skills" className="block text-white/60 hover:text-white transition-colors text-sm">Skills</a>
                <a href="#projects" className="block text-white/60 hover:text-white transition-colors text-sm">Projects</a>
                <a href="#contact" className="block text-white/60 hover:text-white transition-colors text-sm">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="text-white/60">hellobrielle@gmail.com</p>
                <p className="text-white/60">Philippines</p>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">GitHub</a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">Dribbble</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Brielle. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
