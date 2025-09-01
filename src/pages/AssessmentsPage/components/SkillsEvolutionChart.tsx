import React from 'react';
import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { AnimatedTimeline, TimelineEvent } from '../../../types';
import InteractiveChart from '../../../components/advanced/InteractiveChart';

interface SkillsEvolutionChartProps {
  timeline: AnimatedTimeline;
  onEventClick?: (event: TimelineEvent) => void;
}

const SkillsEvolutionChart: React.FC<SkillsEvolutionChartProps> = ({
  timeline,
  onEventClick
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2009 + 1 }, (_, i) => 2009 + i);

  // Transform timeline events into chart data
  const chartData = years.map(year => {
    const yearEvents = timeline.events.filter(event => event.year === year);
    const totalImpact = yearEvents.reduce((sum, event) => sum + event.impact, 0);
    
    return {
      year: year.toString(),
      'Technical Skills': yearEvents.filter(e => e.category === 'technical').reduce((sum, e) => sum + e.impact, 0),
      'Leadership': yearEvents.filter(e => e.category === 'leadership').reduce((sum, e) => sum + e.impact, 0),
      'Military': yearEvents.filter(e => e.category === 'military').reduce((sum, e) => sum + e.impact, 0),
      'Innovation': yearEvents.filter(e => e.category === 'innovation').reduce((sum, e) => sum + e.impact, 0),
      'Team Building': yearEvents.filter(e => e.category === 'team-building').reduce((sum, e) => sum + e.impact, 0),
      totalImpact
    };
  });

  const maxValue = Math.max(...chartData.map(d => d.totalImpact));

  return (
    <InteractiveChart
      title="Skills Evolution Timeline"
      subtitle="Progression of capabilities from military to tech leadership"
      className="w-full"
    >
      <div className="space-y-6">
        {/* Timeline visualization */}
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h4 className="heading-3 text-military-900">Career Progression</h4>
            <div className="text-sm text-military-600">
              {timeline.currentYear} - Current Year
            </div>
          </div>

          {/* Timeline track */}
          <div className="relative h-2 bg-military-200 rounded-full mb-8">
            <motion.div
              className="absolute top-0 left-0 h-full bg-accent-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((timeline.currentYear - 2009) / (currentYear - 2009)) * 100}%` }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          {/* Timeline events */}
          <div className="relative">
            {timeline.events.map((event, index) => {
              const position = ((event.year - 2009) / (currentYear - 2009)) * 100;
              
              return (
                <motion.div
                  key={event.id}
                  className="absolute top-0 transform -translate-x-1/2"
                  style={{ left: `${position}%` }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="relative">
                    {/* Event dot */}
                    <motion.div
                      className="w-4 h-4 bg-accent-600 rounded-full border-2 border-white shadow-military cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                      onClick={() => onEventClick?.(event)}
                    />
                    
                    {/* Event tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-military-900 text-white p-3 rounded-lg shadow-military-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="text-sm font-medium mb-1">{event.title}</div>
                      <div className="text-xs text-military-300">{event.description}</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-military-900"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Year labels */}
          <div className="flex justify-between text-xs text-military-500 mt-4">
            {years.filter((_, i) => i % 3 === 0).map(year => (
              <span key={year}>{year}</span>
            ))}
          </div>
        </div>

        {/* Skills radar chart */}
        <div className="mt-8">
          <h4 className="heading-3 text-military-900 mb-4">Current Skills Profile</h4>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={chartData.slice(-3)}> {/* Last 3 years */}
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis 
                  dataKey="year" 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, maxValue]} 
                  tick={{ fill: '#6b7280', fontSize: 10 }}
                />
                <Radar
                  name="Technical Skills"
                  dataKey="Technical Skills"
                  stroke="#0ea5e9"
                  fill="#0ea5e9"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Leadership"
                  dataKey="Leadership"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Military"
                  dataKey="Military"
                  stroke="#f59e0b"
                  fill="#f59e0b"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Innovation"
                  dataKey="Innovation"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Team Building"
                  dataKey="Team Building"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key milestones */}
        <div className="mt-8">
          <h4 className="heading-3 text-military-900 mb-4">Key Milestones</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timeline.events
              .filter(event => event.impact > 7) // High impact events
              .sort((a, b) => b.impact - a.impact)
              .slice(0, 6)
              .map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  className="p-4 bg-military-50 rounded-lg border border-military-200 hover:border-accent-300 transition-colors cursor-pointer"
                  onClick={() => onEventClick?.(event)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-military-900">{event.year}</span>
                    <span className="text-xs px-2 py-1 bg-accent-100 text-accent-700 rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <h5 className="font-medium text-military-900 mb-1">{event.title}</h5>
                  <p className="text-sm text-military-600">{event.description}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </InteractiveChart>
  );
};

export default SkillsEvolutionChart;
