import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="container-section bg-primary-50 dark:bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -top-10 left-0 text-primary-200 dark:text-primary-900">
          <Quote className="h-20 w-20" />
        </div>
        
        <div className="relative h-96 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 italic">
                "{TESTIMONIALS[current].quote}"
              </p>
              <div className="flex flex-col items-center">
                <img 
                  src={TESTIMONIALS[current].avatar} 
                  alt={TESTIMONIALS[current].name} 
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <h4 className="font-bold text-gray-900 dark:text-white">{TESTIMONIALS[current].name}</h4>
                <p className="text-gray-600 dark:text-gray-400">{TESTIMONIALS[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-8 space-x-3">
          <button 
            onClick={prevTestimonial} 
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={nextTestimonial} 
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex justify-center mt-4 space-x-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                index === current 
                  ? 'bg-primary-600 dark:bg-primary-400' 
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;