import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-200/30 dark:bg-primary-800/20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary-200/20 dark:bg-secondary-800/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="text-primary-600 dark:text-primary-400 font-medium mb-4"
            variants={itemVariants}
          >
            {COMPANY_INFO.tagline}
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Creating thoughtful digital experiences
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {COMPANY_INFO.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <a 
              href="#contact" 
              className="btn-primary text-center sm:text-left w-full sm:w-auto"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="btn-secondary text-center sm:text-left w-full sm:w-auto"
            >
              View Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-sm mb-2">Discover More</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;