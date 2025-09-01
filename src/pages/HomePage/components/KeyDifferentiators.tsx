import React from 'react';

const KeyDifferentiators: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-military-900 mb-6">
            Key Differentiators
          </h2>
          <p className="text-xl text-military-600 max-w-3xl mx-auto">
            What sets me apart in the intersection of military leadership and technology innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-military-50 rounded-lg p-8 border border-military-200 hover:border-accent-300 transition-all duration-300 hover:-translate-y-1 shadow-military">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="w-8 h-8 bg-accent-600 rounded-full"></div>
            </div>
            
            <h3 className="text-xl font-bold text-military-900 mb-4 text-center">
              Reliable Leadership in High-Stakes Environments
            </h3>
            
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-military-700 leading-relaxed">99.9% system uptime for critical military applications</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-military-700 leading-relaxed">Consistent delivery: 40% efficiency improvements, 25% faster project delivery</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-military-700 leading-relaxed">Methodical approach to problem-solving and risk management</span>
              </li>
            </ul>
          </div>

          <div className="bg-military-50 rounded-lg p-8 border border-military-200 hover:border-accent-300 transition-all duration-300 hover:-translate-y-1 shadow-military">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="w-8 h-8 bg-accent-600 rounded-full"></div>
            </div>
            
            <h3 className="text-xl font-bold text-military-900 mb-4 text-center">
              Translating Military Excellence to Tech Innovation
            </h3>
            
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-military-700 leading-relaxed">First-of-its-kind software development training pipeline in Army Special Operations</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-military-700 leading-relaxed">Successfully led cross-functional teams of 32+ AI engineers, UAV pilots, and stakeholders</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-military-700 leading-relaxed">Proven ability to work with diverse teams and complex stakeholder requirements</span>
              </li>
            </ul>
          </div>

          <div className="bg-military-50 rounded-lg p-8 border border-military-200 hover:border-accent-300 transition-all duration-300 hover:-translate-y-1 shadow-military">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="w-8 h-8 bg-accent-600 rounded-full"></div>
            </div>
            
            <h3 className="text-xl font-bold text-military-900 mb-4 text-center">
              Data-Driven Decision Making with Human-Centered Leadership
            </h3>
            
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-military-700 leading-relaxed">Multi-Criteria Decision Analysis implementation for high-precision evaluation</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-military-700 leading-relaxed">Scalable assessment systems serving 150+ candidates per cycle</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-military-700 leading-relaxed">Evidence-based approach to process improvement and optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDifferentiators;
