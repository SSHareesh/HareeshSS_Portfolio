import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-light-300 dark:bg-dark-200 py-10">
      <div className="container-section py-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-center md:text-left text-sm text-dark-300/70 dark:text-light-300/70">
              © {new Date().getFullYear()} Hareesh S S. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/hareeshss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-light-400/50 dark:bg-dark-100/50 
                         hover:bg-primary-500/20 dark:hover:bg-primary-500/20 
                         transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} className="text-dark-300 dark:text-light-300" />
            </a>
            <a 
              href="https://linkedin.com/in/hareeshss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-light-400/50 dark:bg-dark-100/50 
                         hover:bg-primary-500/20 dark:hover:bg-primary-500/20 
                         transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-dark-300 dark:text-light-300" />
            </a>
            <a 
              href="mailto:hareeshseenu95@gmail.com" 
              className="p-2 rounded-full bg-light-400/50 dark:bg-dark-100/50 
                         hover:bg-primary-500/20 dark:hover:bg-primary-500/20 
                         transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} className="text-dark-300 dark:text-light-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;