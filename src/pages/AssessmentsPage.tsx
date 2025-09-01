import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, Zap } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import InteractiveDISCWheel from './components/InteractiveDISCWheel';
import SkillsEvolutionChart from './components/SkillsEvolutionChart';
import ProgressRing from '../components/advanced/ProgressRing';
import AnimatedCounter from '../components/advanced/AnimatedCounter';
import { ASSESSMENT_DATA, ASSESSMENT_VISUALIZATION } from '../constants/assessmentData';

const AssessmentsPage: React.FC = () => {
  const [selectedInsight, setSelectedInsight] = useState<string | null>(null);

  return (
    <PageLayout>
      <div className="section-padding">
        <div className="container-military">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-accent-600 rounded-full"></div>
              <h1 className="heading-1 text-military-900">
                Behavioral Assessment Insights
              </h1>
              <div className="w-12 h-1 bg-accent-600 rounded-full"></div>
            </div>
            <p className="body-large max-w-3xl mx-auto text-military-600">
              Comprehensive analysis of leadership style, behavioral patterns, and professional development insights
            </p>
          </motion.div>

          {/* Overview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="heading-3 text-military-900 mb-2">
                <AnimatedCounter value={35} suffix="%" />
              </h3>
              <p className="body-small text-military-600">Analytical Focus</p>
            </div>

            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="heading-3 text-military-900 mb-2">
                <AnimatedCounter value={30} suffix="%" />
              </h3>
              <p className="body-small text-military-600">Achievement Driven</p>
            </div>

            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="heading-3 text-military-900 mb-2">
                <AnimatedCounter value={20} suffix="%" />
              </h3>
              <p className="body-small text-military-600">Leadership Focus</p>
            </div>

            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="heading-3 text-military-900 mb-2">
                <AnimatedCounter value={15} suffix="%" />
              </h3>
              <p className="body-small text-military-600">Innovation Mindset</p>
            </div>
          </motion.div>

          {/* Interactive DISC Wheel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <InteractiveDISCWheel 
              wheel={ASSESSMENT_VISUALIZATION.behavioralWheel}
              onSegmentClick={(segment) => console.log('Selected segment:', segment)}
            />
          </motion.div>

          {/* Skills Evolution Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <SkillsEvolutionChart 
              timeline={ASSESSMENT_VISUALIZATION.leadershipTimeline}
              onEventClick={(event) => console.log('Selected event:', event)}
            />
          </motion.div>

          {/* Adaptability Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="card">
              <h3 className="heading-2 text-military-900 mb-8 text-center">
                Adaptability & Performance Metrics
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {ASSESSMENT_VISUALIZATION.adaptabilityMetrics.metrics.map((metric, index) => (
                  <div key={metric.name} className="text-center">
                    <div className="mb-4">
                      <ProgressRing
                        progress={metric.value}
                        size={120}
                        color={metric.trend === 'up' ? '#10b981' : metric.trend === 'down' ? '#ef4444' : '#f59e0b'}
                        label={metric.name}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-military-900 mb-2">
                        <AnimatedCounter 
                          value={metric.value} 
                          suffix={metric.unit}
                          delay={1 + index * 0.2}
                        />
                      </div>
                      <div className="text-sm text-military-600">
                        Target: {metric.target}{metric.unit}
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        metric.trend === 'up' 
                          ? 'bg-green-100 text-green-700' 
                          : metric.trend === 'down'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {metric.trend === 'up' ? '↗ Improving' : metric.trend === 'down' ? '↘ Declining' : '→ Stable'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <div className="card">
              <h3 className="heading-2 text-military-900 mb-8 text-center">
                Key Behavioral Insights
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Strengths */}
                <div>
                  <h4 className="heading-3 text-military-900 mb-4 flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    </div>
                    Core Strengths
                  </h4>
                  <div className="space-y-3">
                    {ASSESSMENT_DATA.behavioralStyle.strengths.map((strength, index) => (
                      <motion.div
                        key={strength}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                        className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200"
                      >
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-military-700">{strength}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Development Areas */}
                <div>
                  <h4 className="heading-3 text-military-900 mb-4 flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                    Development Focus
                  </h4>
                  <div className="space-y-3">
                    {ASSESSMENT_DATA.behavioralStyle.challenges.map((challenge, index) => (
                      <motion.div
                        key={challenge}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                        className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-military-700">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Communication Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <div className="card">
              <h3 className="heading-2 text-military-900 mb-6 text-center">
                Communication & Leadership Style
              </h3>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-military-50 p-6 rounded-lg border border-military-200">
                  <h4 className="heading-3 text-military-900 mb-4">
                    {ASSESSMENT_DATA.behavioralStyle.type} Leadership
                  </h4>
                  <p className="body-large text-military-700 mb-6">
                    {ASSESSMENT_DATA.behavioralStyle.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-military-900 mb-3">Communication Approach</h5>
                      <p className="text-military-600">{ASSESSMENT_DATA.behavioralStyle.communicationStyle}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-military-900 mb-3">Primary Motivators</h5>
                      <div className="flex flex-wrap gap-2">
                        {ASSESSMENT_DATA.drivingForces.motivators.map((motivator) => (
                          <span key={motivator} className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">
                            {motivator}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AssessmentsPage;
