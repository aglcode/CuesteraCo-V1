import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="container-section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants}>
          <h2 className="section-title">About Cuestera</h2>
          <p className="section-subtitle">
            Founded in {COMPANY_INFO.yearFounded} in {COMPANY_INFO.location}, we're a team of designers, developers, and strategists passionate about creating meaningful digital experiences.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            At Cuestera Co., we believe that the best digital products are not just functional but also delightful to use. We combine technical expertise with a deep understanding of human behavior to create solutions that truly resonate.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Values</h3>
            <ul className="space-y-3">
              {COMPANY_INFO.values.map((value, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <span className="h-2 w-2 rounded-full bg-primary-500 dark:bg-primary-400 mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">{value}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <a href="#projects" className="btn-primary inline-block">
            Explore Our Work
          </a>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Cuestera team collaborating" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 dark:bg-primary-700 rounded-2xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-200 dark:bg-secondary-700 rounded-2xl -z-10"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;