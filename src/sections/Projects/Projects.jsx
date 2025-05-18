import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Renewify - Solar Energy Aggregator App',
    description: 'A Flutter-based application interface improving user engagement by 40% and ensuring stable API integrations having 15+ pages.',
    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/hareeshss/renewify',
    techStack: ['Flutter', 'Firebase', 'REST APIs', 'Material Design']
  },
  {
    title: 'Aerial Inspect - PV potential assessment',
    description: 'Visualized 50+ buildings in 3D using Three.js after extracting data from GeoJSON. Implemented ray casting for accurate BPV shadow analysis.',
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/hareeshss/aerial-inspect',
    techStack: ['Three.js', 'GeoJSON', 'JavaScript', 'WebGL']
  },
  {
    title: 'SyncHub - Community platform for college students',
    description: 'Led a 4-member team to develop a responsive web frontend using React.js and Tailwind CSS. Integrated APIs with the backend.',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/hareeshss/synchub',
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB']
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS featuring dark/light mode, animations, and a custom cursor.',
    image: 'https://images.pexels.com/photos/4050383/pexels-photo-4050383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/hareeshss/portfolio',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'TypeWriter Effect']
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-light-100 dark:bg-dark-100 min-h-[400px]"
    >
      <div className="p-8">
        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-dark-300/70 dark:text-light-300/70 text-lg mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-primary-500/10 text-primary-500 dark:text-primary-400 
                       rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute inset-0 bg-cover bg-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300/90 to-transparent flex items-end p-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white hover:text-primary-500 transition-colors"
            >
              <Github size={24} />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-light-200 dark:bg-dark-300">
      <div className="container-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="text-center max-w-3xl mx-auto text-dark-300/70 dark:text-light-300/70">
            Here's a showcase of my recent work. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;