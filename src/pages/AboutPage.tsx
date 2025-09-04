import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Shield, Zap } from 'lucide-react';
import headshotImage from '../assets/Headshot.png';
import PageLayout from '../components/layout/PageLayout';
const AboutPage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

      {/* Core Values Section */}
      <section className="section-padding bg-accent-gradient">
        <div className="container-military">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-military-900 mb-4">Core Values</h2>
            <p className="body-large text-military-600 max-w-2xl mx-auto">
              The fundamental beliefs and operating principles that guide my decision-making and professional interactions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1: Mission Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card text-center p-8"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="heading-3 text-military-900 mb-3">Mission Focus</h3>
              <p className="text-accent-600 italic mb-4">Every action aligned with clear objectives</p>
              <p className="body-medium text-military-600 mb-4">
                I maintain unwavering focus on what truly matters, eliminating distractions that don't serve the mission. 
                This means prioritizing outcomes over activities and ensuring every decision contributes to strategic goals.
              </p>
              <div className="text-sm text-military-500">
                <p className="font-medium mb-1">Shows up as:</p>
                <p>• Setting clear success metrics before starting any project</p>
                <p>• Regularly asking "Does this move us closer to our objective?"</p>
              </div>
            </motion.div>

            {/* Value 2: Team Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card text-center p-8"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="heading-3 text-military-900 mb-3">Team Leadership</h3>
              <p className="text-accent-600 italic mb-4">Success comes from empowering others</p>
              <p className="body-medium text-military-600 mb-4">
                I build strong teams by developing individual capabilities and fostering collaborative environments. 
                Leadership means creating the conditions for others to succeed and taking responsibility for team outcomes.
              </p>
              <div className="text-sm text-military-500">
                <p className="font-medium mb-1">Shows up as:</p>
                <p>• One-on-one development conversations with team members</p>
                <p>• Creating safe spaces for honest feedback and growth</p>
              </div>
            </motion.div>

            {/* Value 3: Continuous Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card text-center p-8"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="heading-3 text-military-900 mb-3">Continuous Learning</h3>
              <p className="text-accent-600 italic mb-4">Growth requires vulnerability and persistence</p>
              <p className="body-medium text-military-600 mb-4">
                I embrace the discomfort of being a beginner, knowing that mastery is a journey, not a destination. 
                Learning to code at 30 taught me that everyone has their own timeline for excellence.
              </p>
              <div className="text-sm text-military-500">
                <p className="font-medium mb-1">Shows up as:</p>
                <p>• Seeking feedback from those more experienced than me</p>
                <p>• Sharing my learning journey to encourage others</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



    </PageLayout>
  );
};

export default AboutPage;
