import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="py-20 bg-light-100 dark:bg-dark-200">
      <div className="container-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Profile Image */}
          <motion.div 
            className="md:col-span-2 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-4 border-light-300 dark:border-dark-100 shadow-xl">
                <img 
                  src="/images/hareesh_photo.jpg" 
                  alt="Hareesh S S"
                  className="w-full h-full object-cover" 
                />
              </div>
              {/* <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary-500 rounded-xl 
                            flex items-center justify-center text-white font-bold text-2xl transform rotate-3">
                <span>4+</span>
              </div> */}
              <motion.div 
                className="absolute -z-10 inset-0 bg-secondary-500 rounded-2xl"
                initial={{ rotate: 0 }}
                animate={{ rotate: 6 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="md:col-span-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-4 text-primary-600 dark:text-primary-400"
            >
              Passionate and self-driven developer
            </motion.h3>
            
            <motion.p variants={itemVariants} className="mb-4 text-lg">
              I'm a <span className="font-semibold">Full Stack Developer</span> with a strong foundation in web and application development. Adaptable to emerging technologies and passionate about building user-centric applications.
            </motion.p>
            
            <motion.p variants={itemVariants} className="mb-4">
              I have a proven track record of success in project management, problem-solving, and cross-functional collaboration. I'm adept at utilizing cutting-edge technologies to optimize processes and enhance overall efficiency.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Education</h4>
              <div className="card-glass p-4">
                <p className="font-medium">Bachelor of Computer Science and Engineering</p>
                <p className="text-sm text-dark-300/70 dark:text-light-300/70">Rajalakshmi Engineering College, Chennai (2022 - 2026)</p>
                <p className="text-sm mt-2">
                  Relevant Coursework: Object-Oriented Programming, Operating Systems, 
                  Database Management Systems, Computer Networks, Data Structures and Software Engineering.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="bg-light-300/50 dark:bg-dark-100/50 p-4 rounded-xl">
                <h4 className="font-semibold">Location</h4>
                <p>Chennai, India</p>
              </div>
              <div className="bg-light-300/50 dark:bg-dark-100/50 p-4 rounded-xl">
                <h4 className="font-semibold">Email</h4>
                <p className="truncate">hareeshseenu95@gmail.com</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;