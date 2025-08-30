import { useState, useCallback } from 'react';
import { ResumeData, PersonalInfo, Experience, Education, Skill, Project } from '../../types';

/**
 * Custom hook for managing resume data
 * Following Open/Closed Principle - open for extension, closed for modification
 */
export const useResumeData = (initialData: ResumeData) => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);

  // Personal Info operations
  const updatePersonalInfo = useCallback((personalInfo: Partial<PersonalInfo>) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...personalInfo }
    }));
  }, []);

  // Experience operations
  const addExperience = useCallback((experience: Omit<Experience, 'id'>) => {
    const newExperience: Experience = {
      ...experience,
      id: `exp-${Date.now()}`
    };
    
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));
  }, []);

  const updateExperience = useCallback((id: string, updates: Partial<Experience>) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, ...updates } : exp
      )
    }));
  }, []);

  const removeExperience = useCallback((id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  }, []);

  // Education operations
  const addEducation = useCallback((education: Omit<Education, 'id'>) => {
    const newEducation: Education = {
      ...education,
      id: `edu-${Date.now()}`
    };
    
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }));
  }, []);

  const updateEducation = useCallback((id: string, updates: Partial<Education>) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, ...updates } : edu
      )
    }));
  }, []);

  const removeEducation = useCallback((id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  }, []);

  // Skills operations
  const addSkill = useCallback((skill: Omit<Skill, 'id'>) => {
    const newSkill: Skill = {
      ...skill,
      id: `skill-${Date.now()}`
    };
    
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));
  }, []);

  const updateSkill = useCallback((id: string, updates: Partial<Skill>) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map(skill => 
        skill.id === id ? { ...skill, ...updates } : skill
      )
    }));
  }, []);

  const removeSkill = useCallback((id: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  }, []);

  // Projects operations
  const addProject = useCallback((project: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...project,
      id: `proj-${Date.now()}`
    };
    
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  }, []);

  const updateProject = useCallback((id: string, updates: Partial<Project>) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(proj => 
        proj.id === id ? { ...proj, ...updates } : proj
      )
    }));
  }, []);

  const removeProject = useCallback((id: string) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id)
    }));
  }, []);

  return {
    resumeData,
    updatePersonalInfo,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    addSkill,
    updateSkill,
    removeSkill,
    addProject,
    updateProject,
    removeProject
  };
};
