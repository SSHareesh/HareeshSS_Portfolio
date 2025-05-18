import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiExpress, SiTailwindcss, SiBootstrap, SiFlutter,
  SiPostman, SiGit, SiMysql, SiPostgresql, SiFirebase,
  SiBlender, SiPython
} from 'react-icons/si';
import Typewriter from 'typewriter-effect';

const skillIcons = [
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiExpress, SiTailwindcss, SiBootstrap, SiFlutter,
  SiPostman, SiGit, SiMysql, SiPostgresql, SiFirebase,
  SiBlender, SiPython
];

const FloatingIcon = ({ Icon, index }) => {
  const randomPosition = {
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.5 + Math.random() * 0.5,
    rotation: Math.random() * 360
  };

  return (
    <motion.div
      className="absolute text-primary-500/10"
      initial={randomPosition}
      animate={{
        x: [randomPosition.x + '%', (randomPosition.x + 10) + '%', randomPosition.x + '%'],
        y: [randomPosition.y + '%', (randomPosition.y + 10) + '%', randomPosition.y + '%'],
        rotate: [randomPosition.rotation, randomPosition.rotation + 180, randomPosition.rotation + 360],
      }}
      transition={{
        duration: 20 + Math.random() * 10,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        fontSize: `${randomPosition.scale * 48}px`
      }}
    >
      <Icon />
    </motion.div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Floating skill icons background */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {skillIcons.map((Icon, index) => (
          <FloatingIcon key={index} Icon={Icon} index={index} />
        ))}
      </div>

      <div className="container-section">
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl mx-auto md:mx-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            variants={itemVariants} 
            className="text-lg mb-2 font-mono text-primary-500 dark:text-primary-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <Typewriter
              options={{
                strings: ['Hareesh S S'],
                autoStart: true,
                loop: true,
                cursor: '|',
                delay: 75,
              }}
            />
          </motion.h1>

          <motion.h2 
            variants={itemVariants} 
            className="text-xl sm:text-2xl md:text-3xl mb-6 text-dark-300/70 dark:text-light-300/70"
          >
            <span className="text-primary-500 dark:text-primary-400">Full Stack Developer</span> | Tech Explorer 
          </motion.h2>

          <motion.div 
            variants={itemVariants} 
            className="flex space-x-4 mb-8"
          >
            <a 
              href="https://github.com/SSHareesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-light-300 dark:bg-dark-100 
                       hover:bg-primary-500 dark:hover:bg-primary-500 
                       hover:text-white dark:hover:text-white
                       transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hareesh-s-s-7478b1257" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-light-300 dark:bg-dark-100 
                       hover:bg-primary-500 dark:hover:bg-primary-500 
                       hover:text-white dark:hover:text-white
                       transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:hareeshseenu95@gmail.com" 
              className="p-3 rounded-full bg-light-300 dark:bg-dark-100 
                       hover:bg-primary-500 dark:hover:bg-primary-500 
                       hover:text-white dark:hover:text-white
                       transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a href="#projects" className="btn-primary">Explore My Work</a>
            <a 
              href="https://drive.google.com/file/d/1eA5YnBK4ZIPSVe1mBGW1QFGYQXKvxTKP/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: [0.5, 1, 0.5], y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-dark-300/30 dark:border-light-300/30 rounded-full flex justify-center"
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-primary-500 rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;