import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiExpress, SiTailwindcss, SiBootstrap, SiFlutter,
  SiPostman, SiGit, SiMysql, SiPostgresql, SiFirebase,
  SiBlender, SiPython,SiFlask,SiCanva
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbBrandFlutter } from 'react-icons/tb';


const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: SiHtml5, proficiency: 90 },
      { name: 'CSS', icon: SiCss3, proficiency: 85 },
      { name: 'React.js', icon: SiReact, proficiency: 85 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 85 },
      { name: 'Bootstrap', icon: SiBootstrap, proficiency: 85 },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, proficiency: 82 },
      { name: 'Express.js', icon: SiExpress, proficiency: 80 },
      { name: 'Flask', icon: SiFlask, proficiency: 70},
    ]
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'Flutter', icon: SiFlutter, proficiency: 75 },
      { name: 'FlutterFlow', icon: TbBrandFlutter, proficiency: 70},
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: SiMysql, proficiency: 75 },
      { name: 'PostgreSQL', icon: SiPostgresql, proficiency: 85 },
      { name: 'Firebase', icon: SiFirebase, proficiency: 80 },
      
    ]
  },
  {
    title: 'Other Skills',
    skills : [
      { name: 'Java', icon: FaJava,proficiency:80},
      { name: 'JavaScript', icon: SiJavascript, proficiency: 80 },
      { name: 'Python', icon: SiPython, proficiency: 70 },
      { name: 'Git', icon: SiGit, proficiency: 75 },
      { name: 'Postman', icon: SiPostman, proficiency: 80 },
      { name: 'Blender', icon: SiBlender, proficiency: 65 },
      { name: 'Canva', icon: SiCanva, proficiency: 90},
    ]
  }

];

const SkillIcon = ({ skill }) => {
  const [showProficiency, setShowProficiency] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setShowProficiency(true)}
      onMouseLeave={() => setShowProficiency(false)}
      whileHover={{ scale: 1.1 }}
    >
      <div className="w-16 h-16 flex items-center justify-center bg-light-300 dark:bg-dark-100 
                    rounded-xl transition-all duration-300 group-hover:bg-primary-700">
        <Icon className="w-8 h-8 text-primary-500" />
      </div>
      
      {showProficiency && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary-500 
                     text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
        >
          {skill.proficiency}% Proficient
        </motion.div>
      )}
      <p className="text-center mt-2 text-sm font-medium">{skill.name}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-light-200 dark:bg-dark-300">
      <div className="container-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">Technical Skills</h2>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-500">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, idx) => (
                  <SkillIcon key={idx} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;