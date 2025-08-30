import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from '../../../shared/ui/Button';

interface HeroSectionProps {
  onExplore: () => void;
  onDownloadResume: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onDownloadResume }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rotate-45"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 rotate-45"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CHRIS MILLSON
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="text-xl md:text-2xl font-medium mb-8 text-blue-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Technical Program Manager | Special Forces Veteran | AI Innovator
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          "Bridging military precision with emerging technology to solve complex problems"
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={onExplore}
            variant="primary"
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 flex items-center gap-2"
          >
            Explore My Journey
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={onDownloadResume}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-2 h-2 bg-blue-400 rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-3 h-3 bg-blue-300 rounded-full"
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
};

export default HeroSection;
