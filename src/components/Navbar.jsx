import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section highlight
      let current = '';
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-primary/80 backdrop-blur-md py-4 border-b border-white/10 shadow-lg' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-text z-50">
          PORTFOLIO<span className="text-accent-blue">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent-blue ${activeSection === link.name.toLowerCase() ? 'text-accent-blue' : 'text-secondary font-light'
                }`}
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border text-secondary hover:text-text hover:bg-surface transition-all"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium border border-accent-blue/50 text-text rounded-full hover:bg-accent-blue/10 transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-primary/95 backdrop-blur-lg flex flex-col justify-center items-center space-y-8 transition-transform duration-300 transform md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-text hover:text-accent-blue transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
