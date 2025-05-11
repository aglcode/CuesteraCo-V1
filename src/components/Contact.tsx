import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
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
    <section id="contact" className="container-section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <motion.div variants={itemVariants}>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? We'd love to hear about it. Reach out to us and let's create something amazing together.
          </p>
          
          <div className="space-y-6 mt-8">
            {CONTACT_INFO.contactPoints.map((contact, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="bg-primary-100 dark:bg-primary-900/40 p-3 rounded-lg mr-4">
                  <contact.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{contact.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{contact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-10 space-x-4"
          >
            {CONTACT_INFO.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send us a message</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary py-3"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;