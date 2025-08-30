import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold">CM</span>
                </div>
                <p className="text-lg font-medium">Professional Headshot</p>
                <p className="text-sm opacity-80">Military-style confident pose</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-blue-300 rounded-full"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            
            <div className="prose prose-lg text-gray-700 mb-8">
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

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {counts[Object.keys(counts)[index] as keyof typeof counts]}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
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
