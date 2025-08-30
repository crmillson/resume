import React from 'react';
import { Experience } from '../../../types';
import { formatDateRange, getDuration } from '../../../shared/utils/dateUtils';

interface ExperienceSectionProps {
  experiences: Experience[];
}

/**
 * ExperienceSection component
 * Following Dependency Inversion Principle - depends on abstractions (types) not concrete implementations
 */
export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
        Professional Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const {
    company,
    position,
    startDate,
    endDate,
    current,
    description,
    achievements,
    technologies
  } = experience;

  return (
    <div className="border-l-4 border-blue-500 pl-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{position}</h3>
          <p className="text-lg text-blue-600 font-medium">{company}</p>
        </div>
        <div className="text-right text-sm text-gray-600">
          <div>{formatDateRange(startDate, endDate, current)}</div>
          <div className="text-xs">{getDuration(startDate, endDate)}</div>
        </div>
      </div>
      
      <p className="text-gray-700 mb-3">{description}</p>
      
      {achievements.length > 0 && (
        <div className="mb-3">
          <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-sm">{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
