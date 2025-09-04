import { useState, useRef, useCallback } from 'react';
import { ExperienceEntry } from '../types/experience.types';

export const useTimelineNavigation = () => {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const expandExperience = useCallback((experienceId: string) => {
    setExpandedExperience(expandedExperience === experienceId ? null : experienceId);
  }, [expandedExperience]);

  const scrollToExperience = useCallback((experienceId: string) => {
    const element = document.getElementById(`experience-${experienceId}`);
    if (element && timelineRef.current) {
      const container = timelineRef.current;
      const elementTop = element.offsetTop;
      const containerTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      
      // Calculate scroll position to center the element
      const scrollTop = elementTop - containerTop - (containerHeight / 2) + (element.offsetHeight / 2);
      
      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    setCurrentScrollPosition(target.scrollTop);
  }, []);

  const isExperienceVisible = useCallback((experienceId: string) => {
    const element = document.getElementById(`experience-${experienceId}`);
    if (!element || !timelineRef.current) return false;
    
    const container = timelineRef.current;
    const elementTop = element.offsetTop;
    const elementBottom = elementTop + element.offsetHeight;
    const containerTop = container.scrollTop;
    const containerBottom = containerTop + container.clientHeight;
    
    return elementTop < containerBottom && elementBottom > containerTop;
  }, []);

  const getVisibleExperiences = useCallback((experiences: ExperienceEntry[]) => {
    return experiences.filter(exp => isExperienceVisible(exp.id));
  }, [isExperienceVisible]);

  const exportTimeline = useCallback(() => {
    // Implementation for exporting timeline as PDF or other format
    console.log('Exporting timeline...');
  }, []);

  return {
    expandedExperience,
    currentScrollPosition,
    timelineRef,
    expandExperience,
    scrollToExperience,
    scrollToTop,
    handleScroll,
    isExperienceVisible,
    getVisibleExperiences,
    exportTimeline
  };
};
