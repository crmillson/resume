import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import HeroSection from './components/HeroSection';
import InteractiveTimeline from './components/InteractiveTimeline';
import SkillsEvolutionChart from './components/SkillsEvolutionChart';
import AchievementMetricsDashboard from './components/AchievementMetricsDashboard';
import TransitionStory from './components/TransitionStory';

const ExperiencePage: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Interactive Timeline */}
      <InteractiveTimeline />

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
