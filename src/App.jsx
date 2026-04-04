import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

// Components
import SocialFloating from './components/SocialFloating';

// Register standard GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <SocialFloating />

      <main className="relative z-10 w-full overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Resume />
        <Contact />
      </main>

      <footer className="w-full py-8 text-center text-gray-500 border-t border-white/10 bg-primary z-20 relative">
        <p>© {new Date().getFullYear()} Debasis Tripathy. Designed with passion.</p>
      </footer>
    </>
  );
}

export default App;
