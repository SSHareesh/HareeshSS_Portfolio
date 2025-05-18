import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-light-200/80 dark:bg-dark-200/80 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-section py-0">
        <nav className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-xl font-display font-bold text-primary-600 dark:text-primary-400"
          >
            Hareesh S S
          </a>

          <div className="hidden md:flex items-center space-x-1">
            <div className="bg-light-300/80 dark:bg-dark-100/80 backdrop-blur-md rounded-full px-2 py-1">
              <ul className="flex space-x-1">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="px-4 py-2 rounded-full text-sm font-medium hover:text-primary-500 
                                transition-colors duration-300 block"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-light-300/80 dark:bg-dark-100/80 
                         hover:bg-light-400/80 dark:hover:bg-dark-200/80 transition-colors duration-300"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-light-300/80 dark:bg-dark-100/80"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-light-300/80 dark:bg-dark-100/80"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-light-200/95 dark:bg-dark-200/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container-section py-4">
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="block px-4 py-2 rounded-lg hover:bg-light-300 dark:hover:bg-dark-100 
                               text-lg font-medium transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;