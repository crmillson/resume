import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, TrendingUp, Award, Shield, Zap } from 'lucide-react';
import headshotImage from '../assets/Headshot.png';
import PageLayout from '../components/layout/PageLayout';
const AboutPage: React.FC = () => {
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
    <PageLayout>
      {/* About Section */}
      <section className="section-padding bg-military-gradient">
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
                <h2 className="heading-2">
                  About Me
                </h2>
              </div>
              
              <div className="mb-8">
                <p className="text-lg leading-relaxed text-military-700">
                  My leadership philosophy was forged in the crucible of Special Forces operations and refined through the humbling experience of learning to code at 30. After a career of tactical successes, I found myself at the bottom of my programming cohort—a reminder that growth requires vulnerability and persistence. Today, as a Technical Program Manager leading AI initiatives, I help teams navigate complexity by embracing their authentic strengths, maintaining mission focus, and understanding that everyone has their own timeline for excellence. The result? Teams that consistently deliver under pressure while fostering cultures of continuous learning.
                </p>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Banner */}
      <section className="section-padding bg-accent-gradient">
        <div className="container-military">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="heading-2 text-military-900 mb-8">
              Core Values & Principles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card text-center p-8"
              >
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="heading-3 text-military-900 mb-4">Mission Focus</h3>
                <p className="body-medium text-military-600">
                  Every action is aligned with clear objectives. I maintain focus on what truly matters 
                  and eliminate distractions that don't serve the mission.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card text-center p-8"
              >
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="heading-3 text-military-900 mb-4">Team Leadership</h3>
                <p className="body-medium text-military-600">
                  Success comes from empowering others. I build strong teams by developing individual 
                  capabilities and fostering collaborative environments.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card text-center p-8"
              >
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="heading-3 text-military-900 mb-4">Adaptive Innovation</h3>
                <p className="body-medium text-military-600">
                  Embracing change and leveraging emerging technologies to solve complex problems 
                  while maintaining the highest standards of execution.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
