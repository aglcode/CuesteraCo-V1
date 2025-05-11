import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
    
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <AnimatePresence>
      <div className="relative min-h-screen bg-primary-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <button 
          onClick={toggleDarkMode}
          className="fixed z-50 bottom-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
        </button>
        
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;