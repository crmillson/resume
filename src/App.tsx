import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from './constants/resumeData';
import Header from './shared/components/Header';
import HeroSection from './features/resume/components/HeroSection';
import AboutSection from './features/resume/components/AboutSection';
import CoreValuesBanner from './features/resume/components/CoreValuesBanner';
import ExperienceTimeline from './features/resume/components/ExperienceTimeline';
import SkillsMatrix from './features/resume/components/SkillsMatrix';
import SignatureStories from './features/resume/components/SignatureStories';
import ContactSection from './features/resume/components/ContactSection';
import './App.css';

/**
 * Main App component
 * Following clean code principles - simple, readable, and focused
 */
function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const storiesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    about: aboutRef,
    experience: experienceRef,
    skills: skillsRef,
    stories: storiesRef,
    contact: contactRef
  };

  const handleNavigation = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref?.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleExplore = () => {
    aboutRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleDownloadResume = () => {
    // In a real implementation, this would trigger a PDF download
    console.log('Downloading resume...');
    alert('Resume download functionality would be implemented here');
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigation} />
      
      <HeroSection 
        onExplore={handleExplore}
        onDownloadResume={handleDownloadResume}
      />
      
      <div ref={aboutRef}>
        <AboutSection personalInfo={RESUME_DATA.personalInfo} />
      </div>
      
      <CoreValuesBanner />
      
      <div ref={experienceRef}>
        <ExperienceTimeline experiences={RESUME_DATA.experience} />
      </div>
      
      <div ref={skillsRef}>
        <SkillsMatrix skills={RESUME_DATA.skills} />
      </div>
      
      <div ref={storiesRef}>
        <SignatureStories />
      </div>
      
      <div ref={contactRef}>
        <ContactSection personalInfo={RESUME_DATA.personalInfo} />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Chris Millson. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
