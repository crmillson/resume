import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Code, Star, Radio, Award, Users, TrendingUp } from 'lucide-react';
import { ExperienceEntry } from '../../../types/experience.types';
import { useExperienceData } from '../../../hooks/useExperienceData';
import AnimatedCounter from '../../../components/advanced/AnimatedCounter';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const { getCurrentRole } = useExperienceData();
  const currentRole = getCurrentRole();

  const iconMap = {
    Zap: Zap,
    Shield: Shield,
    Code: Code,
    Star: Star,
    Radio: Radio,
    Award: Award,
    Users: Users,
    TrendingUp: TrendingUp
  };

  const getIconComponent = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || Zap;
  };

  return (
    <section className={`section-padding bg-military-gradient ${className}`}>
      <div className="container-military">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Career Trajectory */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="w-12 h-1 bg-accent-600 rounded-full"></div>
                <h1 className="heading-1 text-military-900">
                  From Special Forces to AI Innovation
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="body-large text-military-600 mb-8"
              >
                A journey of leadership and technical excellence, demonstrating how military precision 
                translates to AI program management and innovation.
              </motion.p>
            </div>

            {/* Current Role Highlight */}
            {currentRole && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-accent-200 shadow-military-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    {React.createElement(getIconComponent(currentRole.icon), { 
                      className: 'w-6 h-6 text-accent-600' 
                    })}
                  </div>
                  <div>
                    <h3 className="heading-3 text-military-900">{currentRole.role}</h3>
                    <p className="text-accent-600 font-medium">{currentRole.organization}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-accent-50 rounded-lg">
                    <div className="text-2xl font-bold text-accent-600">
                      <AnimatedCounter value={currentRole.teamSize || 0} />
                    </div>
                    <div className="text-accent-700">Team Members</div>
                  </div>
                  <div className="text-center p-3 bg-accent-50 rounded-lg">
                    <div className="text-2xl font-bold text-accent-600">
                      <AnimatedCounter value={4} />
                    </div>
                    <div className="text-accent-700">Active Projects</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Key Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Security Clearance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6 border-l-4 border-red-500"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="w-6 h-6 text-red-500" />
                <h4 className="heading-4 text-military-900">Security Clearance</h4>
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">TS/SCI</div>
              <p className="text-military-600 text-sm">Active Top Secret clearance with SCI access</p>
            </motion.div>

            {/* Education Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6 border-l-4 border-blue-500"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Award className="w-6 h-6 text-blue-500" />
                <h4 className="heading-4 text-military-900">Education</h4>
              </div>
              <div className="text-lg font-semibold text-blue-600 mb-2">MS IT Management</div>
              <p className="text-military-600 text-sm">Western Governors University, 2024</p>
            </motion.div>

            {/* Career Progression */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card p-6 border-l-4 border-green-500"
            >
              <div className="flex items-center space-x-3 mb-3">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <h4 className="heading-4 text-military-900">Career Progression</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-military-600">Leadership Experience</span>
                  <span className="font-bold text-green-600">
                    <AnimatedCounter value={14} /> years
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-military-600">Total Team Members</span>
                  <span className="font-bold text-green-600">
                    <AnimatedCounter value={150} />+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-military-600">Training Cycles</span>
                  <span className="font-bold text-green-600">
                    <AnimatedCounter value={9} />
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
