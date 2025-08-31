import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, TrendingUp, Award, Shield, Zap } from 'lucide-react';
import headshotImage from '../../../assets/Headshot.png';

interface AboutSectionProps {
  personalInfo: {
    name: string;
    summary: string;
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ personalInfo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [counts, setCounts] = useState({
    years: 0,
    personnel: 0,
    teamMembers: 0,
    projects: 0
  });

  const stats = [
    { icon: Award, label: "Years Military Leadership", value: 14, suffix: "+" },
    { icon: Users, label: "Personnel Assessed", value: 150, suffix: "+" },
    { icon: Target, label: "Team Members Led", value: 32, suffix: "+" },
    { icon: TrendingUp, label: "AI Projects Delivered", value: 8, suffix: "+" }
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        setCounts(prev => ({
          years: Math.min(prev.years + 1, 14),
          personnel: Math.min(prev.personnel + 3, 150),
          teamMembers: Math.min(prev.teamMembers + 1, 32),
          projects: Math.min(prev.projects + 1, 8)
        }));
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section id="about" className="section-padding bg-military-gradient">
      <div className="container-military">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Headshot Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img 
                src={headshotImage} 
                alt="Chris Millson - Professional Headshot" 
                className="w-full h-auto rounded-2xl shadow-military-lg border-4 border-white"
              />
              
              {/* Overlay gradient for military aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-600/10 to-accent-800/10 rounded-2xl pointer-events-none"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-accent-200 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-accent-300 rounded-full"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-accent-600 rounded-full"></div>
              <h2 className="text-4xl font-display font-bold text-military-900">
                About Me
              </h2>
            </div>
            
            <div className="prose prose-lg text-military-700 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                {personalInfo.summary}
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey from Special Forces operations to leading AI development teams has taught me that 
                the principles of military leadership—precision, adaptability, and mission focus—are directly 
                applicable to solving complex technological challenges. I believe in taking ego out of the equation 
                and focusing on what truly matters: delivering results while building strong, capable teams.
              </p>
            </div>

            {/* Core Values */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-accent-50 px-3 py-2 rounded-full border border-accent-200">
                <Target className="w-4 h-4 text-accent-600" />
                <span className="text-sm font-medium text-accent-700">Precision</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent-50 px-3 py-2 rounded-full border border-accent-200">
                <Shield className="w-4 h-4 text-accent-600" />
                <span className="text-sm font-medium text-accent-700">Leadership</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent-50 px-3 py-2 rounded-full border border-accent-200">
                <Zap className="w-4 h-4 text-accent-600" />
                <span className="text-sm font-medium text-accent-700">Innovation</span>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-hover text-center p-6"
                >
                  <stat.icon className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-military-900 mb-2">
                    {counts[Object.keys(counts)[index] as keyof typeof counts]}{stat.suffix}
                  </div>
                  <div className="text-sm text-military-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
