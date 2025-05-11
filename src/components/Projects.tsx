import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const openModal = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="container-section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          variants={itemVariants}
          className="section-title text-center"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="section-subtitle text-center mx-auto"
        >
          Explore our portfolio of award-winning designs and innovative digital solutions.
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mt-12"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onHoverStart={() => setActiveProject(index)}
              onHoverEnd={() => setActiveProject(null)}
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-16 aspect-h-9 w-full h-80 bg-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <AnimatePresence>
                {activeProject === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6"
                  >
                    <span className="text-sm font-medium text-primary-300 mb-2">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <span className="flex items-center text-primary-300 hover:text-white transition-colors duration-300">
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Always visible title for mobile/non-hover devices */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <span className="text-xs font-medium text-primary-300">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/30 transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
                <img
                  src={PROJECTS[selectedProject].image}
                  alt={PROJECTS[selectedProject].title}
                  className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
                />
              </div>
              
              <div className="p-6 md:p-8">
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {PROJECTS[selectedProject].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                  {PROJECTS[selectedProject].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {PROJECTS[selectedProject].description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Project Details</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Completed in 2023</li>
                    <li>• Built with React, TypeScript, and Tailwind CSS</li>
                    <li>• Fully responsive design</li>
                    <li>• Optimized for performance</li>
                  </ul>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <a
                    href={PROJECTS[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center"
                  >
                    Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;