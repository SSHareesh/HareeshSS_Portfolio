import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Renewify - Solar Energy Aggregator App',
    description: 'A Flutter-based application interface improving user engagement by 40% and ensuring stable API integrations having 15+ pages.',
    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/SSHareesh/Renewify',
    techStack: ['Flutter', 'MongoDB','Flask',]
  },
  {
    title: 'Aerial Inspect - PV potential assessment',
    description: 'Visualized 50+ buildings in 3D using Three.js after extracting data from GeoJSON. Implemented ray casting for accurate BPV shadow analysis.',
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/SSHareesh/BIPV',
    techStack: ['Three.js', 'GeoJSON', 'JavaScript', 'WebGL']
  },
  {
    title: 'SynergIQ - Community platform for college students',
    description: 'Led a 4-member team to develop a responsive web frontend using React.js and Tailwind CSS. Integrated APIs with the backend.',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/SSHareesh/SynergIQ',
    techStack: ['React.js', 'Tailwind CSS', 'Node.js','Firebase' ]
  },
  {
    title: 'Anemia Detection',
    description: 'A Machine learning project that detects if the person is anemic or not ,a comparitive ML project for studying the best algorithm.',
    image: 'https://images.pexels.com/photos/4050383/pexels-photo-4050383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/SSHareesh/Anemia_detection',
    techStack: ['Logistic Regression', 'Random Forest', 'Decision Trees']
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
        className="absolute inset-0 bg-dark-300/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center"
      >
        <div className="text-center p-8">
          <Github size={48} className="mx-auto mb-4 text-white" />
          <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white hover:text-primary-500 transition-colors"
          >
            <span>View on GitHub</span>
          </a>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/SSHareesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
          >
            <Github size={24} />
            <span>View More Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;