import React from 'react';

const ProofPoints: React.FC = () => {
  return (
    <section className="py-20 bg-military-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-military-900 mb-6">
            Measurable Impact Across Domains
          </h2>
          <p className="text-xl text-military-600 max-w-3xl mx-auto">
            Quantified results that demonstrate the effectiveness of military precision applied to technology challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 border border-military-200 shadow-military hover:shadow-military-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-4">
                40%
              </div>
              
              <h3 className="text-xl font-bold text-military-900 mb-2">
                Efficiency Improvement
              </h3>
              
              <p className="text-military-600 leading-relaxed">
                in AI-powered assessment systems
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 border border-military-200 shadow-military hover:shadow-military-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-4">
                25%
              </div>
              
              <h3 className="text-xl font-bold text-military-900 mb-2">
                Faster Delivery
              </h3>
              
              <p className="text-military-600 leading-relaxed">
                through agile methodology implementation
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 border border-military-200 shadow-military hover:shadow-military-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-4">
                150+
              </div>
              
              <h3 className="text-xl font-bold text-military-900 mb-2">
                Candidates
              </h3>
              
              <p className="text-military-600 leading-relaxed">
                managed per assessment cycle
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 border border-military-200 shadow-military hover:shadow-military-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-4">
                32+
              </div>
              
              <h3 className="text-xl font-bold text-military-900 mb-2">
                Team Members
              </h3>
              
              <p className="text-military-600 leading-relaxed">
                led across cross-functional AI projects
              </p>
            </div>
          </div>
        </div>

        {/* Additional context */}
        <div className="mt-16 text-center">
          <div className="bg-accent-50 rounded-lg p-8 border border-accent-200">
            <h3 className="text-2xl font-bold text-military-900 mb-4">
              Consistent Performance Across Complex Projects
            </h3>
            <p className="text-military-700 max-w-3xl mx-auto">
              These metrics represent real-world results from leading cross-functional teams in high-stakes environments, 
              demonstrating the scalability and reliability of military-inspired leadership methodologies in technology contexts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofPoints;
