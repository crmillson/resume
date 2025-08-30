import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Calendar, MapPin, Users, Target } from 'lucide-react';
import { Experience } from '../../../types';
import { formatDateRange, getDuration } from '../../../shared/utils/dateUtils';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey from Special Forces operations to leading AI development teams
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-400"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Experience Card */}
                <div className="ml-16">
                  <motion.div
                    className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ y: -2 }}
                  >
                    {/* Card Header */}
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleCard(experience.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {experience.position}
                            </h3>
                            {experience.current && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          
                          <p className="text-lg text-blue-600 font-medium mb-3">
                            {experience.company}
                          </p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDateRange(experience.startDate, experience.endDate, experience.current)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Target className="w-4 h-4" />
                              {getDuration(experience.startDate, experience.endDate)}
                            </div>
                          </div>
                          
                          <p className="text-gray-700 leading-relaxed">
                            {experience.description}
                          </p>
                        </div>
                        
                        <motion.button
                          animate={{ rotate: expandedCard === experience.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          {expandedCard === experience.id ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </motion.button>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {expandedCard === experience.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-100"
                        >
                          <div className="p-6 space-y-6">
                            {/* Key Achievements */}
                            {experience.achievements.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <Target className="w-5 h-5 text-blue-600" />
                                  Key Achievements
                                </h4>
                                <ul className="space-y-2">
                                  {experience.achievements.map((achievement, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="flex items-start gap-3 text-gray-700"
                                    >
                                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                      <span>{achievement}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Technologies */}
                            {experience.technologies.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <Users className="w-5 h-5 text-blue-600" />
                                  Technologies & Skills
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {experience.technologies.map((tech, idx) => (
                                    <motion.span
                                      key={idx}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: idx * 0.05 }}
                                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                                    >
                                      {tech}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
