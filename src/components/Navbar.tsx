import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import { NAV_LINKS } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
        <a href="#home" className="z-50 relative">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400'
                  : 'text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden z-50 p-2 rounded-lg transition-colors duration-300 ${
            scrolled || isOpen
              ? 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
              : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100/20'
          }`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col"
            >
              <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.path}
                    href={link.path}
                    className="text-2xl text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium"
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a 
                  href="#contact" 
                  className="btn-primary text-lg px-8 py-3"
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.1 }}
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;