import { useState, useMemo, useCallback } from 'react';
import { Skill, SkillCategory } from '../types/experience.types';
import { SKILLS_DATA } from '../constants/experienceData';

export const useSkillsVisualization = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'current' | '2020' | '2015' | '2010'>('current');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const timeframes = [
    { id: 'current', label: 'Current (2024)', year: 2024 },
    { id: '2020', label: '2020', year: 2020 },
    { id: '2015', label: '2015', year: 2015 },
    { id: '2010', label: '2010', year: 2010 }
  ];

  const getSkillsForTimeframe = useCallback((timeframe: string) => {
    // This would typically calculate skills based on the selected timeframe
    // For now, we'll return current skills with some variation
    return SKILLS_DATA.map(category => ({
      ...category,
      skills: category.skills.map(skill => {
        let adjustedProficiency = skill.proficiency;
        
        // Adjust proficiency based on timeframe
        switch (timeframe) {
          case '2020':
            adjustedProficiency = Math.max(0, skill.proficiency - 15);
            break;
          case '2015':
            adjustedProficiency = Math.max(0, skill.proficiency - 30);
            break;
          case '2010':
            adjustedProficiency = Math.max(0, skill.proficiency - 50);
            break;
          default:
            adjustedProficiency = skill.proficiency;
        }
        
        return {
          ...skill,
          proficiency: adjustedProficiency,
          yearsExperience: Math.max(0, skill.yearsExperience - (2024 - timeframes.find(t => t.id === timeframe)?.year || 2024))
        };
      })
    }));
  }, []);

  const currentSkills = useMemo(() => {
    return getSkillsForTimeframe(selectedTimeframe);
  }, [selectedTimeframe, getSkillsForTimeframe]);

  const filteredSkills = useMemo(() => {
    if (!selectedCategory) return currentSkills;
    
    return currentSkills.map(category => ({
      ...category,
      skills: category.skills.filter(skill => skill.category === selectedCategory)
    })).filter(category => category.skills.length > 0);
  }, [currentSkills, selectedCategory]);

  const getSkillTrend = useCallback((skill: Skill) => {
    if (skill.trend === 'up') return '↗️';
    if (skill.trend === 'down') return '↘️';
    return '→';
  }, []);

  const getSkillColor = useCallback((proficiency: number) => {
    if (proficiency >= 90) return 'text-green-600';
    if (proficiency >= 80) return 'text-blue-600';
    if (proficiency >= 70) return 'text-yellow-600';
    if (proficiency >= 60) return 'text-orange-600';
    return 'text-red-600';
  }, []);

  const getSkillBackgroundColor = useCallback((proficiency: number) => {
    if (proficiency >= 90) return 'bg-green-100';
    if (proficiency >= 80) return 'bg-blue-100';
    if (proficiency >= 70) return 'bg-yellow-100';
    if (proficiency >= 60) return 'bg-orange-100';
    return 'bg-red-100';
  }, []);

  const getSkillBorderColor = useCallback((proficiency: number) => {
    if (proficiency >= 90) return 'border-green-300';
    if (proficiency >= 80) return 'border-blue-300';
    if (proficiency >= 70) return 'border-yellow-300';
    if (proficiency >= 60) return 'border-orange-300';
    return 'border-red-300';
  }, []);

  const getSkillDetails = useCallback((skillId: string) => {
    for (const category of SKILLS_DATA) {
      const skill = category.skills.find(s => s.id === skillId);
      if (skill) return { skill, category: category.name };
    }
    return null;
  }, []);

  const exportSkillsChart = useCallback(() => {
    // Implementation for exporting skills chart
    console.log('Exporting skills chart...');
  }, []);

  const compareSkills = useCallback((skill1Id: string, skill2Id: string) => {
    const skill1Details = getSkillDetails(skill1Id);
    const skill2Details = getSkillDetails(skill2Id);
    
    if (!skill1Details || !skill2Details) return null;
    
    return {
      skill1: skill1Details,
      skill2: skill2Details,
      comparison: {
        proficiencyDiff: skill1Details.skill.proficiency - skill2Details.skill.proficiency,
        experienceDiff: skill1Details.skill.yearsExperience - skill2Details.skill.yearsExperience
      }
    };
  }, [getSkillDetails]);

  return {
    selectedTimeframe,
    setSelectedTimeframe,
    hoveredSkill,
    setHoveredSkill,
    selectedCategory,
    setSelectedCategory,
    timeframes,
    currentSkills,
    filteredSkills,
    getSkillTrend,
    getSkillColor,
    getSkillBackgroundColor,
    getSkillBorderColor,
    getSkillDetails,
    exportSkillsChart,
    compareSkills
  };
};
