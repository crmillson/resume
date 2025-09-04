import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Download, Calendar, MapPin, Users, Shield, Zap, Code, Star, Radio } from 'lucide-react';
import { ExperienceEntry, CategoryFilter } from '../../../types/experience.types';
import { useExperienceData } from '../../../hooks/useExperienceData';
import { useTimelineNavigation } from '../../../hooks/useTimelineNavigation';

interface InteractiveTimelineProps {
  className?: string;
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ className = '' }) => {
  const { 
    experiences, 
    filters, 
    searchQuery, 
    setSearchQuery, 
    toggleFilter, 
    resetFilters 
  } = useExperienceData();
  
  const { 
    expandedExperience, 
    expandExperience, 
    timelineRef, 
    handleScroll 
  } = useTimelineNavigation();

  const iconMap = {
    Zap: Zap,
    Shield: Shield,
    Code: Code,
    Star: Star,
    Radio: Radio
  };

  const getIconComponent = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || Zap;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'military': return 'border-blue-500 bg-blue-50';
      case 'tech': return 'border-green-500 bg-green-50';
      case 'education': return 'border-purple-500 bg-purple-50';
      case 'certification': return 'border-orange-500 bg-orange-50';
      default: return 'border-military-300 bg-military-50';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'military': return Shield;
      case 'tech': return Code;
      case 'education': return Star;
      case 'certification': return Zap;
      default: return Zap;
    }
  };

  return (
    <section className={`section-padding ${className}`}>
      <div className="container-military">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-military-900 mb-4">Experience Timeline</h2>
          <p className="body-large text-military-600 max-w-3xl mx-auto">
            A chronological journey through my professional experience, from military leadership to AI program management
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => toggleFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter.active
                      ? 'bg-accent-600 text-white shadow-md'
                      : 'bg-military-100 text-military-700 hover:bg-military-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
              <button
                onClick={resetFilters}
                className="px-4 py-2 rounded-full text-sm font-medium bg-military-200 text-military-700 hover:bg-military-300 transition-all duration-200"
              >
                Reset
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-military-400" />
              <input
                type="text"
                placeholder="Search experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-military-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent w-64"
              />
            </div>

            {/* Export Button */}
            <button className="flex items-center space-x-2 px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-all duration-200">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div
            ref={timelineRef}
            onScroll={handleScroll}
            className="max-h-[800px] overflow-y-auto pr-4 space-y-6"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                id={`experience-${experience.id}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Connector */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-accent-200"></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                      experience.current 
                        ? 'bg-accent-100 border-accent-500' 
                        : getCategoryColor(experience.category)
                    }`}>
                      {React.createElement(getIconComponent(experience.icon), { 
                        className: `w-8 h-8 ${
                          experience.current ? 'text-accent-600' : 'text-military-600'
                        }` 
                      })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="heading-3 text-military-900">{experience.role}</h3>
                        {experience.current && (
                          <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm font-medium rounded-full">
                            Current
                          </span>
                        )}
                        {experience.notable && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                            Notable
                          </span>
                        )}
                      </div>
                      <h4 className="heading-4 text-accent-600 mb-2">{experience.organization}</h4>
                      <div className="flex items-center gap-4 text-sm text-military-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        {experience.teamSize && (
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{experience.teamSize} people</span>
                          </div>
                        )}
                        {experience.securityLevel && (
                          <div className="flex items-center gap-1">
                            <Shield className="w-4 h-4" />
                            <span>{experience.securityLevel}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="body-medium text-military-700 mb-4">{experience.description}</p>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {expandedExperience === experience.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {/* Key Achievements */}
                          <div className="mb-4">
                            <h5 className="font-semibold text-military-800 mb-2">Key Achievements:</h5>
                            <ul className="space-y-2">
                              {experience.keyAchievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-military-600">
                                  <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          {experience.technologies && experience.technologies.length > 0 && (
                            <div className="mb-4">
                              <h5 className="font-semibold text-military-800 mb-2">Technologies & Skills:</h5>
                              <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-military-50 text-military-700 text-sm rounded-full border border-military-200"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Additional Details */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            {experience.budgetManaged && (
                              <div className="p-3 bg-military-50 rounded-lg">
                                <span className="font-medium text-military-800">Budget Managed:</span>
                                <div className="text-accent-600">{experience.budgetManaged}</div>
                              </div>
                            )}
                            {experience.teamSize && (
                              <div className="p-3 bg-military-50 rounded-lg">
                                <span className="font-medium text-military-800">Team Size:</span>
                                <div className="text-accent-600">{experience.teamSize} people</div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => expandExperience(experience.id)}
                      className="mt-4 text-accent-600 hover:text-accent-700 font-medium text-sm flex items-center gap-1 transition-colors duration-200"
                    >
                      {expandedExperience === experience.id ? 'Show Less' : 'Show More'}
                      <motion.div
                        animate={{ rotate: expandedExperience === experience.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        ▼
                      </motion.div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
