import React from 'react';

const TransitionStory: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-military-900 mb-6">
              From Combat Operations to AI Leadership
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl text-military-700 leading-relaxed font-medium">
                What happens when Special Forces precision meets AI development? Breakthrough results that traditional tech teams struggle to achieve.
              </p>
              
              <p className="text-lg text-military-600 leading-relaxed">
                In 18 months, I've transformed how Army Special Operations approaches software development—creating the first scalable training pipeline of its kind while delivering AI systems ahead of schedule and under budget.
              </p>
              
              <button className="px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition-colors">
                Discover the Full Story
              </button>
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="relative">
            <div className="bg-military-50 rounded-lg p-8 border border-military-200">
              <h3 className="text-2xl font-bold text-military-900 mb-8 text-center">
                Leadership Evolution
              </h3>
              
              {/* Timeline */}
              <div className="space-y-8">
                {/* Military Phase */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-military-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-military-900 mb-2">Special Forces Leadership</h4>
                    <p className="text-military-600 text-sm">14 years of high-stakes operational leadership</p>
                  </div>
                </div>

                {/* Transition Phase */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-military-900 mb-2">Technology Integration</h4>
                    <p className="text-military-600 text-sm">Bridging military precision with emerging technologies</p>
                  </div>
                </div>

                {/* Tech Leadership Phase */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-military-900 mb-2">AI Development Leadership</h4>
                    <p className="text-military-600 text-sm">Leading cross-functional teams in AI/ML projects</p>
                  </div>
                </div>
              </div>

              {/* Connection Lines */}
              <div className="absolute left-6 top-20 bottom-20 w-0.5 bg-military-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransitionStory;
