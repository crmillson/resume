import React from 'react';
import { PersonalInfo } from '../../../types';

interface PersonalInfoSectionProps {
  personalInfo: PersonalInfo;
}

/**
 * PersonalInfoSection component
 * Following Single Responsibility Principle - only handles personal info display
 */
export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ personalInfo }) => {
  const { name, email, phone, location, summary, linkedin, github, website } = personalInfo;
  
  return (
    <section className="mb-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{name}</h1>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-4">
          <span>{email}</span>
          <span>•</span>
          <span>{phone}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
        <div className="flex justify-center gap-4">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              LinkedIn
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              GitHub
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              Website
            </a>
          )}
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">{summary}</p>
      </div>
    </section>
  );
};
