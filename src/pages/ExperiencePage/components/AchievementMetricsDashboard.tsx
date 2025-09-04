import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Award, Users, Target, Shield, Zap, Calendar, Code } from 'lucide-react';
import { AchievementMetric } from '../../../types/experience.types';
import { ACHIEVEMENT_METRICS } from '../../../constants/experienceData';
import AnimatedCounter from '../../../components/advanced/AnimatedCounter';
import ProgressRing from '../../../components/advanced/ProgressRing';

interface AchievementMetricsDashboardProps {
  className?: string;
}

const AchievementMetricsDashboard: React.FC<AchievementMetricsDashboardProps> = ({ className = '' }) => {
  const getTrendIcon = (trend?: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      case 'stable':
        return <Minus className="w-5 h-5 text-blue-500" />;
      default:
        return <Minus className="w-5 h-5 text-blue-500" />;
    }
  };

  const getTrendColor = (trend?: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      case 'stable':
        return 'text-blue-600';
      default:
        return 'text-blue-600';
    }
  };

  const getMetricIcon = (label: string) => {
    if (label.includes('Leadership') || label.includes('Team')) return Users;
    if (label.includes('Security')) return Shield;
    if (label.includes('Project')) return Target;
    if (label.includes('Training')) return Calendar;
    return Award;
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
          <h2 className="heading-2 text-military-900 mb-4">Achievement Metrics</h2>
          <p className="body-large text-military-600 max-w-3xl mx-auto">
            Key performance indicators and achievements that demonstrate consistent growth and impact
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ACHIEVEMENT_METRICS.map((metric, index) => {
            const IconComponent = getMetricIcon(metric.label);
            
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-military-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-accent-600" />
                </div>

                {/* Metric Value */}
                <div className="mb-2">
                  <span className="text-4xl font-bold text-military-900">
                    <AnimatedCounter 
                      value={metric.value} 
                      delay={index * 0.1}
                    />
                  </span>
                  <span className="text-xl text-military-600 ml-1">{metric.unit}</span>
                </div>

                {/* Label */}
                <h3 className="heading-4 text-military-800 mb-3">{metric.label}</h3>

                {/* Description */}
                <p className="text-sm text-military-600 mb-4">{metric.description}</p>

                {/* Trend Indicator */}
                <div className="flex items-center justify-center gap-2">
                  {getTrendIcon(metric.trend)}
                  <span className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                    {metric.trend === 'up' ? 'Improving' : metric.trend === 'down' ? 'Declining' : 'Stable'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Rings Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="heading-3 text-military-900 mb-8">Progress Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Leadership Progress */}
            <div className="space-y-4">
              <ProgressRing
                progress={95}
                size={120}
                color="#0ea5e9"
                label="Leadership"
                className="mx-auto"
              />
              <div>
                <h4 className="font-semibold text-military-800 mb-2">Leadership Excellence</h4>
                <p className="text-sm text-military-600">
                  Advanced leadership capabilities developed through military and civilian experience
                </p>
              </div>
            </div>

            {/* Technical Progress */}
            <div className="space-y-4">
              <ProgressRing
                progress={75}
                size={120}
                color="#10b981"
                label="Technical"
                className="mx-auto"
              />
              <div>
                <h4 className="font-semibold text-military-800 mb-2">Technical Proficiency</h4>
                <p className="text-sm text-military-600">
                  Software development and AI/ML skills with continuous learning trajectory
                </p>
              </div>
            </div>

            {/* Military Expertise */}
            <div className="space-y-4">
              <ProgressRing
                progress={95}
                size={120}
                color="#f59e0b"
                label="Military"
                className="mx-auto"
              />
              <div>
                <h4 className="font-semibold text-military-800 mb-2">Military Expertise</h4>
                <p className="text-sm text-military-600">
                  Special operations experience and tactical leadership capabilities
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-accent-gradient rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 text-military-900 mb-4">Notable Achievements</h3>
            <p className="body-medium text-military-600">
              Key milestones that demonstrate exceptional performance and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-accent-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="heading-4 text-military-900">Program Management</h4>
              </div>
              <p className="text-military-600 text-sm">
                Successfully transitioned from individual contributor to program manager, 
                leading 32-person organization in AI development initiatives.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-accent-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="heading-4 text-military-900">Technical Transition</h4>
              </div>
              <p className="text-military-600 text-sm">
                Completed Army Software Factory program and successfully transitioned 
                to software development role, demonstrating adaptability and persistence.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-accent-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="heading-4 text-military-900">Security Leadership</h4>
              </div>
              <p className="text-military-600 text-sm">
                Maintained TS/SCI clearance throughout career while leading 
                sensitive military operations and technology development.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-accent-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <h4 className="heading-4 text-military-900">Team Development</h4>
              </div>
              <p className="text-military-600 text-sm">
                Led and developed teams across multiple contexts, from military 
                operations to software development, fostering high-performance cultures.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementMetricsDashboard;
