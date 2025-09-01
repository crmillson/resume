import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-military-900 via-military-800 to-accent-900">
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
            Technical Program Manager & Military-to-Tech Bridge Builder
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl font-medium mb-8 text-military-200 max-w-4xl mx-auto">
          14 years of Special Forces leadership experience. Now applying military precision and people-first leadership to AI development and emerging defense technologies.
        </div>
        
        <p className="text-lg md:text-xl text-military-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Proven track record of transforming complex operational challenges into scalable technical solutions—from managing 150+ candidate assessments to leading cross-functional AI development teams.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
