import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Shield, Target, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  onExplore: () => void;
  onDownloadResume: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onDownloadResume }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-military-900 via-military-800 to-accent-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/10 rotate-45"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/10 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/10 rotate-45"></div>
        </div>
        {/* Military grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient">CHRIS MILLSON</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="text-xl md:text-2xl font-medium mb-8 text-military-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Special Forces Veteran | Emerging Technologies | TS SCI
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-military-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          "Bridging military precision with emerging technology to solve complex problems"
        </motion.p>

        {/* Core Values */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 text-military-300">
            <Target className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium">Precision</span>
          </div>
          <div className="flex items-center space-x-2 text-military-300">
            <Shield className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium">Leadership</span>
          </div>
          <div className="flex items-center space-x-2 text-military-300">
            <Zap className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium">Innovation</span>
          </div>
        </motion.div>

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
            className="btn-primary px-8 py-4 flex items-center gap-2"
          >
            Explore My Journey
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={onDownloadResume}
            variant="outline"
            size="lg"
            className="btn-outline border-white text-white hover:bg-white hover:text-military-900 px-8 py-4 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </motion.div>


      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-2 h-2 bg-accent-400 rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-3 h-3 bg-accent-300 rounded-full"
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
};

export default HeroSection;
