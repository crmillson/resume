import React from 'react';
import { ResumeData } from '../../../types';
import { PersonalInfoSection } from './PersonalInfoSection';
import { ExperienceSection } from './ExperienceSection';
import { SkillsSection } from './SkillsSection';

interface ResumeContainerProps {
  resumeData: ResumeData;
}

/**
 * ResumeContainer component
 * Following Single Responsibility Principle - orchestrates resume sections
 */
export const ResumeContainer: React.FC<ResumeContainerProps> = ({ resumeData }) => {
  const { personalInfo, experience, skills } = resumeData;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg">
      <PersonalInfoSection personalInfo={personalInfo} />
      <ExperienceSection experiences={experience} />
      <SkillsSection skills={skills} />
    </div>
  );
};
