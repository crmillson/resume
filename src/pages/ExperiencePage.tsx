import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { 
  HeroSection, 
  InteractiveTimeline, 
  CurrentRoleDeepDive,
  SkillsEvolutionChart,
  AchievementMetricsDashboard,
  TransitionStory
} from './ExperiencePage/components';

const ExperiencePage: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Interactive Timeline */}
      <InteractiveTimeline />
      
      {/* Current Role Deep Dive */}
      <CurrentRoleDeepDive />
      
      {/* Skills Evolution Chart */}
      <SkillsEvolutionChart />
      
      {/* Achievement Metrics Dashboard */}
      <AchievementMetricsDashboard />
      
      {/* Transition Story */}
      <TransitionStory />
    </PageLayout>
  );
};

export default ExperiencePage;
