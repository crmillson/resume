import HeroSection from '@/shared/components/HeroSection';
import React from 'react';

const HomePage: React.FC = () => {
  const handleExplore = () => {
    // Handle explore action
    console.log('Explore clicked');
  };

  const handleDownloadResume = () => {
    // Handle download resume action
    console.log('Download resume clicked');
  };

  return (
    <div className="min-h-screen">
      <HeroSection 
        onExplore={handleExplore}
        onDownloadResume={handleDownloadResume}
      />
    </div>
  );
};

export default HomePage;
