import React from 'react';
import { Skill } from '../../../types';

interface SkillsSectionProps {
  skills: Skill[];
}

/**
 * SkillsSection component
 * Following Liskov Substitution Principle - can work with any skill category
 */
export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryLabels = {
    technical: 'Technical Skills',
    soft: 'Soft Skills',
    language: 'Languages'
  };

  const getProficiencyColor = (proficiency: Skill['proficiency']) => {
    const colors = {
      beginner: 'bg-red-100 text-red-800',
      intermediate: 'bg-yellow-100 text-yellow-800',
      advanced: 'bg-blue-100 text-blue-800',
      expert: 'bg-green-100 text-green-800'
    };
    return colors[proficiency];
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {categoryLabels[category as keyof typeof categoryLabels]}
            </h3>
            <div className="space-y-2">
              {categorySkills.map((skill) => (
                <div key={skill.id} className="flex justify-between items-center">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getProficiencyColor(skill.proficiency)}`}>
                    {skill.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
