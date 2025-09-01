import React from 'react';

const EngagementActions: React.FC = () => {
  return (
    <section className="py-20 bg-military-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-military-900 mb-8">
            Trust & Credibility
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-4 py-2 rounded-full border border-military-200 shadow-military">
              <span className="text-sm font-medium text-military-700">Active TS/SCI Security Clearance</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-military-200 shadow-military">
              <span className="text-sm font-medium text-military-700">Master of Science - IT Management (2024)</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-military-200 shadow-military">
              <span className="text-sm font-medium text-military-700">USASOC Operations NCO</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-military-200 shadow-military">
              <span className="text-sm font-medium text-military-700">14 Years Military Leadership Experience</span>
            </div>
          </div>
        </div>

        {/* Engagement Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 border border-military-200 shadow-military hover:shadow-military-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            
            <h3 className="text-lg font-bold text-military-900 mb-2">
              Read My Story
            </h3>
            
            <p className="text-military-600 text-sm mb-4">
              Learn about my military-to-tech transition journey
            </p>
            
            <button className="w-full px-3 py-2 border border-military-300 text-military-700 hover:bg-military-50 rounded-md transition-colors">
              Explore
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 border border-military-200 shadow-military hover:shadow-military-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-military-600 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            
            <h3 className="text-lg font-bold text-military-900 mb-2">
              View Projects
            </h3>
            
            <p className="text-military-600 text-sm mb-4">
              See technical portfolio and case studies
            </p>
            
            <button className="w-full px-3 py-2 border border-military-300 text-military-700 hover:bg-military-50 rounded-md transition-colors">
              Explore
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 border border-military-200 shadow-military hover:shadow-military-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            
            <h3 className="text-lg font-bold text-military-900 mb-2">
              Leadership Insights
            </h3>
            
            <p className="text-military-600 text-sm mb-4">
              Explore military leadership principles in tech
            </p>
            
            <button className="w-full px-3 py-2 border border-military-300 text-military-700 hover:bg-military-50 rounded-md transition-colors">
              Explore
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 border border-military-200 shadow-military hover:shadow-military-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-military-500 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            
            <h3 className="text-lg font-bold text-military-900 mb-2">
              Get in Touch
            </h3>
            
            <p className="text-military-600 text-sm mb-4">
              Discuss opportunities or collaboration
            </p>
            
            <button className="w-full px-3 py-2 border border-military-300 text-military-700 hover:bg-military-50 rounded-md transition-colors">
              Explore
            </button>
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="text-center">
          <div className="bg-accent-50 rounded-lg p-8 border border-accent-200">
            <h3 className="text-2xl font-bold text-military-900 mb-4">
              Ready to Connect?
            </h3>
            <p className="text-military-700 mb-6 max-w-2xl mx-auto">
              Download my resume for a comprehensive overview of my experience, 
              or reach out directly to discuss how military precision can enhance your technology initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition-colors">
                Download Resume
              </button>
              
              <button className="px-8 py-3 border border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white font-semibold rounded-lg transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementActions;
