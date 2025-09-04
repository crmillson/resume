import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Zap, Shield, TrendingUp, BookOpen, Code } from 'lucide-react';
import { TransitionStory as TransitionStoryType } from '../../../types/experience.types';
import { TRANSITION_STORY } from '../../../constants/experienceData';

interface TransitionStoryProps {
  className?: string;
}

const TransitionStory: React.FC<TransitionStoryProps> = ({ className = '' }) => {
  const story = TRANSITION_STORY;

  const getPhaseIcon = (phase: string) => {
    switch (phase.toLowerCase()) {
      case 'military':
        return Shield;
      case 'transition':
        return BookOpen;
      case 'tech':
        return Code;
      default:
        return Target;
    }
  };

  const getPhaseColor = (phase: string) => {
    switch (phase.toLowerCase()) {
      case 'military':
        return 'border-blue-500 bg-blue-50';
      case 'transition':
        return 'border-purple-500 bg-purple-50';
      case 'tech':
        return 'border-green-500 bg-green-50';
      default:
        return 'border-accent-500 bg-accent-50';
    }
  };

  return (
    <section className={`section-padding ${className}`}>
      <div className="container-military">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-military-900 mb-4">The Transition Story</h2>
          <p className="body-large text-military-600 max-w-3xl mx-auto">
            A narrative of continuous learning and adaptation, demonstrating how military leadership 
            translates to technical excellence and innovation
          </p>
        </motion.div>

        {/* Story Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-military-gradient rounded-2xl p-8 mb-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-3 text-military-900 mb-4">{story.title}</h3>
            <p className="body-large text-military-600 mb-6">{story.description}</p>
            
            <div className="flex items-center justify-center space-x-4 text-accent-600">
              <Shield className="w-6 h-6" />
              <ArrowRight className="w-5 h-5" />
              <BookOpen className="w-6 h-6" />
              <ArrowRight className="w-5 h-5" />
              <Code className="w-6 h-6" />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Challenges and Lessons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Challenges */}
            <div className="card p-6 border-l-4 border-red-500">
              <h3 className="heading-3 text-military-900 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-red-500" />
                Challenges Overcome
              </h3>
              <ul className="space-y-3">
                {story.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-military-600"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Lessons Learned */}
            <div className="card p-6 border-l-4 border-blue-500">
              <h3 className="heading-3 text-military-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-500" />
                Key Lessons
              </h3>
              <ul className="space-y-3">
                {story.lessons.map((lesson, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-military-600"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{lesson}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Outcomes and Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Outcomes */}
            <div className="card p-6 border-l-4 border-green-500">
              <h3 className="heading-3 text-military-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
                Outcomes Achieved
              </h3>
              <ul className="space-y-3">
                {story.outcomes.map((outcome, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-military-600"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Visual Elements */}
            <div className="card p-6 border-l-4 border-purple-500">
              <h3 className="heading-3 text-military-900 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-purple-500" />
                Story Elements
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {story.visualElements.map((element, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-3 bg-purple-50 rounded-lg text-center"
                  >
                    <span className="text-sm font-medium text-purple-700 capitalize">
                      {element.replace('-', ' ')}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transition Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="heading-3 text-military-900 text-center mb-8">Transition Timeline</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent-200"></div>
            
            <div className="space-y-8">
              {/* Phase 1: Military Foundation */}
              <div className="relative flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                <div className="w-1/2 pr-8 text-right">
                  <div className="card p-4 bg-blue-50 border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Military Foundation</h4>
                    <p className="text-sm text-blue-700">Special Forces operations, leadership development, and tactical expertise</p>
                  </div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="text-left">
                    <div className="text-lg font-semibold text-military-900">2009 - 2022</div>
                    <div className="text-military-600">14 years of progressive leadership</div>
                  </div>
                </div>
              </div>

              {/* Phase 2: Transition Period */}
              <div className="relative flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-right">
                    <div className="text-lg font-semibold text-military-900">2022</div>
                    <div className="text-military-600">Army Software Factory</div>
                  </div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="card p-4 bg-purple-50 border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">Learning & Adaptation</h4>
                    <p className="text-sm text-purple-700">Starting from bottom 5% to successful completion</p>
                  </div>
                </div>
              </div>

              {/* Phase 3: Tech Leadership */}
              <div className="relative flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                <div className="w-1/2 pr-8 text-right">
                  <div className="card p-4 bg-green-50 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Tech Leadership</h4>
                    <p className="text-sm text-green-700">Program management and AI development leadership</p>
                  </div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="text-left">
                    <div className="text-lg font-semibold text-military-900">2023 - Present</div>
                    <div className="text-military-600">Leading AI initiatives</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-accent-gradient rounded-2xl p-8">
            <h3 className="heading-3 text-military-900 mb-4">Ready to Make Your Own Transition?</h3>
            <p className="body-medium text-military-600 mb-6">
              Whether you're in the military considering a tech career or a tech professional 
              looking to enhance your leadership skills, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-military-900 text-white rounded-lg hover:bg-military-800 transition-all duration-200 font-medium">
                Download Resume
              </button>
              <button className="px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-all duration-200 font-medium">
                Contact Me
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransitionStory;
