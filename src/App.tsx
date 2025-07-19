import "./App.css";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors font-sans">
      <header className="flex justify-between items-center p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-extrabold text-indigo-500 tracking-tight">Brielle's Portfolio</h1>
        <ThemeToggle />
      </header>
      <main className="max-w-5xl mx-auto px-4">
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <footer className="text-center text-gray-400 py-6 text-sm">
        © {new Date().getFullYear()} Brielle. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
