import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../../types';
import { 
  Users, 
  Code, 
  Shield, 
  TrendingUp, 
  Target, 
  Heart, 
  Zap, 
  Globe,
  Settings,
  BarChart3,
  Command,
  Cpu
} from 'lucide-react';

interface SkillsMatrixProps {
  skills: Skill[];
}

const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryIcons = {
    technical: Code,
    soft: Users,
    language: Globe
  };

  const categoryLabels = {
    technical: 'Technical Proficiencies',
    soft: 'Leadership & Management',
    language: 'Domain Expertise'
  };

  const getProficiencyColor = (proficiency: Skill['proficiency']) => {
    const colors = {
      beginner: 'bg-red-100 text-red-800 border-red-200',
      intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      advanced: 'bg-blue-100 text-blue-800 border-blue-200',
      expert: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[proficiency];
  };

  const getProficiencyWidth = (proficiency: Skill['proficiency']) => {
    const widths = {
      beginner: 'w-1/4',
      intermediate: 'w-1/2',
      advanced: 'w-3/4',
      expert: 'w-full'
    };
    return widths[proficiency];
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const filteredSkills = selectedCategory 
    ? skillsByCategory[selectedCategory] || []
    : skills;

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills Matrix
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive visualization of my technical and leadership capabilities
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-100 p-2 rounded-lg">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Skills
            </button>
            {Object.entries(categoryLabels).map(([category, label]) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {React.createElement(categoryIcons[category as keyof typeof categoryIcons], { className: 'w-4 h-4' })}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {skill.name}
                  </h3>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getProficiencyColor(skill.proficiency)}`}>
                    {skill.proficiency}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${
                        skill.proficiency === 'beginner' ? 'from-red-400 to-red-500' :
                        skill.proficiency === 'intermediate' ? 'from-yellow-400 to-yellow-500' :
                        skill.proficiency === 'advanced' ? 'from-blue-400 to-blue-500' :
                        'from-green-400 to-green-500'
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: getProficiencyWidth(skill.proficiency) }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  {React.createElement(categoryIcons[skill.category as keyof typeof categoryIcons], { 
                    className: 'w-4 h-4 text-gray-500' 
                  })}
                  <span className="text-sm text-gray-600 capitalize">
                    {skill.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Leadership & Management
              </h3>
              <p className="text-gray-600">
                Expert-level skills in team building, program management, and cross-functional collaboration
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Technical Proficiencies
              </h3>
              <p className="text-gray-600">
                Advanced capabilities in AI/ML project management, agile methodologies, and systems integration
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Domain Expertise
              </h3>
              <p className="text-gray-600">
                Deep knowledge in defense technology, emerging technologies, and operations management
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
