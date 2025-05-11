import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services = () => {
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
    <section id="services" className="container-section bg-white dark:bg-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center"
      >
        <motion.h2 
          variants={itemVariants}
          className="section-title"
        >
          Our Services
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="section-subtitle mx-auto"
        >
          We offer a comprehensive suite of design and development services to help bring your vision to life.
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm"
            >
              <div className="bg-primary-100 dark:bg-primary-900/40 p-3 rounded-lg inline-block mb-4">
                <service.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;