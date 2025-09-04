import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Shield, Zap, Code, TrendingUp, Calendar, MapPin, Award } from 'lucide-react';
import { useExperienceData } from '../../../hooks/useExperienceData';
import { PROJECT_PORTFOLIO } from '../../../constants/experienceData';

interface CurrentRoleDeepDiveProps {
  className?: string;
}

const CurrentRoleDeepDive: React.FC<CurrentRoleDeepDiveProps> = ({ className = '' }) => {
  const { getCurrentRole } = useExperienceData();
  const currentRole = getCurrentRole();

  if (!currentRole) return null;

  return (
    <section className={`section-padding bg-white ${className}`}>
      <div className="container-military">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-military-900 mb-4">Current Role Deep Dive</h2>
          <p className="body-large text-military-600 max-w-3xl mx-auto">
            Leading AI-driven modernization initiatives and cross-functional teams in defense technology development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Role Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Program Manager Role */}
            <div className="card p-6 border-l-4 border-accent-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="heading-3 text-military-900">Program Manager</h3>
                  <p className="text-accent-600 font-medium">Jan 2023 - Present</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-accent-50 rounded-lg">
                    <span className="font-medium text-accent-800">Team Size:</span>
                    <div className="text-lg font-bold text-accent-600">32 people</div>
                    <div className="text-xs text-accent-700">12 military, 20 contractors</div>
                  </div>
                  <div className="p-3 bg-accent-50 rounded-lg">
                    <span className="font-medium text-accent-800">Projects:</span>
                    <div className="text-lg font-bold text-accent-600">4 active</div>
                    <div className="text-xs text-accent-700">+ supporting platform</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-military-800">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {currentRole.keyAchievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-military-600">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Software Developer Role */}
            <div className="card p-6 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="heading-3 text-military-900">Software Developer</h3>
                  <p className="text-green-600 font-medium">Aug 2022 - Present</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-800">Team Size:</span>
                    <div className="text-lg font-bold text-green-600">8 people</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-800">Focus:</span>
                    <div className="text-lg font-bold text-green-600">ATAK Plugins</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-military-800">Technical Focus:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-military-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>ATAK plugin development (Kotlin, Jetpack Compose)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-military-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Autonomous drone swarm visualization</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-military-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>GPS-denied environment solutions</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-military-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Cross-functional team collaboration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Project Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="heading-3 text-military-900 mb-6">Project Portfolio</h3>
            
            {PROJECT_PORTFOLIO.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:shadow-military-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="heading-4 text-military-900">{project.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'active' ? 'bg-green-100 text-green-700' :
                    project.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
                
                <p className="text-military-600 mb-4 text-sm">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="p-3 bg-military-50 rounded-lg">
                    <span className="font-medium text-military-800">Team Size:</span>
                    <div className="text-lg font-bold text-military-600">{project.teamSize} people</div>
                  </div>
                  <div className="p-3 bg-military-50 rounded-lg">
                    <span className="font-medium text-military-800">Impact:</span>
                    <div className="text-sm text-military-600">{project.impact}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h5 className="font-semibold text-military-800 text-sm">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent-50 text-accent-700 text-xs rounded-full border border-accent-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-military-200">
                  <h5 className="font-semibold text-military-800 text-sm mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-military-600">
                        <div className="w-1 h-1 bg-accent-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Composition Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-military-gradient rounded-2xl p-8">
            <h3 className="heading-3 text-military-900 text-center mb-8">Team Composition Overview</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-accent-600" />
                </div>
                <h4 className="font-semibold text-military-800 mb-2">Military Personnel</h4>
                <div className="text-3xl font-bold text-accent-600 mb-2">12</div>
                <p className="text-sm text-military-600">Special Forces, Communications, Operations</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-military-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-10 h-10 text-military-600" />
                </div>
                <h4 className="font-semibold text-military-800 mb-2">Contractors</h4>
                <div className="text-3xl font-bold text-military-600 mb-2">20</div>
                <p className="text-sm text-military-600">Software Engineers, Data Scientists, Analysts</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-accent-700" />
                </div>
                <h4 className="font-semibold text-military-800 mb-2">Active Projects</h4>
                <div className="text-3xl font-bold text-accent-600 mb-2">4</div>
                <p className="text-sm text-military-600">AI Assessment, Drone Systems, Training Pipeline</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentRoleDeepDive;
