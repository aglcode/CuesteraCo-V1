import React from 'react';
import { NAV_LINKS, COMPANY_INFO, CONTACT_INFO } from '../constants';
import Logo from './ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {COMPANY_INFO.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Subscribe</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Stay updated with our newsletter
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-r-lg transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400 flex space-x-4">
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;