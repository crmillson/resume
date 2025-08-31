import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../../contexts/AppContext';

const Footer: React.FC = () => {
  const { resumeData } = useContent();

  return (
    <footer className="bg-military-900 text-white py-12 border-t border-military-800">
      <div className="container-military">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="heading-3 text-white">Contact</h3>
            <div className="space-y-2 text-military-300">
              <p>{resumeData.personalInfo.email}</p>
              <p>{resumeData.personalInfo.phone}</p>
              <p>{resumeData.personalInfo.location}</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="heading-3 text-white">Quick Links</h3>
            <nav className="space-y-2">
              <a href="/about" className="block text-military-300 hover:text-accent-400 transition-colors">
                About
              </a>
              <a href="/experience" className="block text-military-300 hover:text-accent-400 transition-colors">
                Experience
              </a>
              <a href="/projects" className="block text-military-300 hover:text-accent-400 transition-colors">
                Projects
              </a>
              <a href="/contact" className="block text-military-300 hover:text-accent-400 transition-colors">
                Contact
              </a>
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="heading-3 text-white">Connect</h3>
            <div className="space-y-2">
              <a 
                href={resumeData.personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-military-300 hover:text-accent-400 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href={resumeData.personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-military-300 hover:text-accent-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-military-800 text-center"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-1 bg-accent-600 rounded-full"></div>
            <p className="text-military-300 font-medium">
              © 2024 Chris Millson. All rights reserved.
            </p>
            <p className="text-sm text-military-400">
              Built with precision using React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
