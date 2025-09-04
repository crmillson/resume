import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useSkillsVisualization } from '../../../hooks/useSkillsVisualization';
import InteractiveChart from '../../../components/advanced/InteractiveChart';

interface SkillsEvolutionChartProps {
  className?: string;
}

const SkillsEvolutionChart: React.FC<SkillsEvolutionChartProps> = ({ className = '' }) => {
  const {
    selectedTimeframe,
    setSelectedTimeframe,
    timeframes,
    currentSkills,
    getSkillTrend,
    getSkillColor,
    getSkillBackgroundColor,
    getSkillBorderColor
  } = useSkillsVisualization();

  // Prepare data for radar chart
  const radarData = currentSkills.flatMap(category =>
    category.skills.map(skill => ({
      subject: skill.name,
      value: skill.proficiency,
      fullMark: 100,
      category: category.name,
      yearsExperience: skill.yearsExperience,
      trend: skill.trend
    }))
  );

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-military-200 rounded-lg shadow-lg">
          <p className="font-semibold text-military-900">{data.subject}</p>
          <p className="text-military-600">Proficiency: {data.value}%</p>
          <p className="text-military-600">Experience: {data.yearsExperience} years</p>
          <p className="text-military-600">Category: {data.category}</p>
          <p className="text-military-600">Trend: {data.trend === 'up' ? '↗️ Improving' : data.trend === 'down' ? '↘️ Declining' : '→ Stable'}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className={`section-padding bg-accent-gradient ${className}`}>
      <div className="container-military">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-military-900 mb-4">Skills Evolution</h2>
          <p className="body-large text-military-600 max-w-3xl mx-auto">
            Track the progression of technical and leadership capabilities across different career stages
          </p>
        </motion.div>

        {/* Timeline Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {timeframes.map((timeframe) => (
              <button
                key={timeframe.id}
                onClick={() => setSelectedTimeframe(timeframe.id as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedTimeframe === timeframe.id
                    ? 'bg-accent-600 text-white shadow-md'
                    : 'bg-white text-military-700 hover:bg-military-50 border border-military-200'
                }`}
              >
                {timeframe.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <InteractiveChart
              title="Skills Radar Chart"
              subtitle={`Skills proficiency as of ${timeframes.find(t => t.id === selectedTimeframe)?.label}`}
              className="h-96"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#374151', fontSize: 12 }}
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={{ fill: '#6b7280', fontSize: 10 }}
                  />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="#0ea5e9"
                    fill="#0ea5e9"
                    fillOpacity={0.3}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </InteractiveChart>
          </motion.div>

          {/* Skills Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {currentSkills.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="card p-6"
              >
                <h3 className="heading-3 text-military-900 mb-4">{category.name}</h3>
                <p className="text-military-600 mb-4 text-sm">{category.description}</p>
                
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-military-800">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm ${getSkillColor(skill.proficiency)}`}>
                            {skill.proficiency}%
                          </span>
                          <span className="text-sm text-military-500">
                            {getSkillTrend(skill)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-military-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-2 rounded-full ${getSkillBackgroundColor(skill.proficiency)} ${getSkillBorderColor(skill.proficiency)}`}
                        />
                      </div>
                      
                      {/* Skill Details */}
                      <div className="flex items-center justify-between text-xs text-military-500">
                        <span>{skill.yearsExperience} years experience</span>
                        <span className="text-accent-600">
                          {skill.projects.length} projects
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">
                {currentSkills.reduce((total, category) => total + category.skills.length, 0)}
              </div>
              <div className="text-military-600">Total Skills Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {currentSkills.flatMap(cat => cat.skills).filter(skill => skill.trend === 'up').length}
              </div>
              <div className="text-military-600">Skills Improving</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {Math.round(currentSkills.flatMap(cat => cat.skills).reduce((avg, skill) => avg + skill.proficiency, 0) / currentSkills.flatMap(cat => cat.skills).length)}
              </div>
              <div className="text-military-600">Average Proficiency</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsEvolutionChart;
