import { useState, useMemo } from 'react';
import { ExperienceEntry, CategoryFilter } from '../types/experience.types';
import { EXPERIENCE_DATA, CATEGORY_FILTERS } from '../constants/experienceData';

export const useExperienceData = () => {
  const [filters, setFilters] = useState<CategoryFilter[]>(CATEGORY_FILTERS);
  const [searchQuery, setSearchQuery] = useState('');

  const activeFilters = useMemo(() => {
    return filters.filter(filter => filter.active);
  }, [filters]);

  const filteredExperiences = useMemo(() => {
    let filtered = EXPERIENCE_DATA;

    // Apply category filters
    const activeCategoryFilters = activeFilters.filter(filter => filter.value !== 'all');
    if (activeCategoryFilters.length > 0) {
      filtered = filtered.filter(experience => 
        activeCategoryFilters.some(filter => filter.value === experience.category)
      );
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(experience =>
        experience.role.toLowerCase().includes(query) ||
        experience.organization.toLowerCase().includes(query) ||
        experience.technologies?.some(tech => tech.toLowerCase().includes(query)) ||
        experience.keyAchievements.some(achievement => achievement.toLowerCase().includes(query))
      );
    }

    return filtered.sort((a, b) => {
      // Sort by current role first, then by start date (newest first)
      if (a.current && !b.current) return -1;
      if (!a.current && b.current) return 1;
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }, [activeFilters, searchQuery]);

  const toggleFilter = (filterId: string) => {
    setFilters(prev => prev.map(filter => {
      if (filter.id === filterId) {
        return { ...filter, active: !filter.active };
      }
      return filter;
    }));
  };

  const resetFilters = () => {
    setFilters(CATEGORY_FILTERS);
    setSearchQuery('');
  };

  const getExperienceById = (id: string): ExperienceEntry | undefined => {
    return EXPERIENCE_DATA.find(exp => exp.id === id);
  };

  const getExperiencesByCategory = (category: string): ExperienceEntry[] => {
    return EXPERIENCE_DATA.filter(exp => exp.category === category);
  };

  const getCurrentRole = (): ExperienceEntry | undefined => {
    return EXPERIENCE_DATA.find(exp => exp.current);
  };

  return {
    experiences: filteredExperiences,
    allExperiences: EXPERIENCE_DATA,
    filters,
    activeFilters,
    searchQuery,
    setSearchQuery,
    toggleFilter,
    resetFilters,
    getExperienceById,
    getExperiencesByCategory,
    getCurrentRole
  };
};
