import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Software Development Intern',
    company: 'ZakApps pvt. ltd.',
    period: 'Jan 2025 - Feb 2025',
    description: [
      'Led development of an Asset Management System, improving asset tracking accuracy by 25%.',
      'Built a fully responsive and user-friendly frontend using React.js and Tailwind CSS, reducing UI bugs by 30%.',
      'Created clean, modular, and maintainable code. Documented a user manual for ease of use.',
      'Collaborated with backend team, enabling 40% faster API integration via regular code reviews.',
    ],
    skills: ['PERN Stack', 'UI/UX Design','Project Management'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Codsoft',
    period: 'Jun 2024 - Aug 2024',
    description: [
      'Developed and maintained responsive web applications using modern JavaScript frameworks.',
      'Collaborated with design team to implement pixel-perfect UI components.',
      'Optimized application performance resulting in 35% faster load times.',
      'Participated in agile development cycles and daily stand-up meetings.',
    ],
    skills: ['JavaScript', 'CSS3', 'HTML', 'Responsive Design'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-light-100 dark:bg-dark-200">
      <div className="container-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-light-400 dark:bg-dark-100 
                          transform md:translate-x-[-0.5px] hidden md:block" />

          {/* Experience cards */}
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`mb-12 md:mb-24 relative flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary-500 
                              transform translate-x-[-10px] md:translate-x-[-12px] hidden md:block" />

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="card-glass hover:shadow-xl transition-all duration-300 
                               transform hover:scale-105 hover:rotate-1">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center 
                                    justify-center text-primary-500 mr-4">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4 text-sm text-dark-300/70 dark:text-light-300/70">
                      <Calendar size={16} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-light-300 dark:bg-dark-100 rounded-full 
                                   text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;