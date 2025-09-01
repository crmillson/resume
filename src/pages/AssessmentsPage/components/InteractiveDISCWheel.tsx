import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveWheel, WheelSegment } from '../../../types';
import InteractiveChart from '../../../components/advanced/InteractiveChart';

interface InteractiveDISCWheelProps {
  wheel: InteractiveWheel;
  onSegmentClick?: (segment: WheelSegment) => void;
}

const InteractiveDISCWheel: React.FC<InteractiveDISCWheelProps> = ({
  wheel,
  onSegmentClick
}) => {
  const [selectedSegment, setSelectedSegment] = useState<WheelSegment | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState<WheelSegment | null>(null);

  const totalValue = wheel.segments.reduce((sum, segment) => sum + segment.value, 0);
  const centerX = 200;
  const centerY = 200;
  const radius = 150;

  const createSegmentPath = (startAngle: number, endAngle: number) => {
    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);

    const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;

    return [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');
  };

  const getSegmentAngles = () => {
    let currentAngle = -Math.PI / 2; // Start from top
    return wheel.segments.map(segment => {
      const segmentAngle = (segment.value / totalValue) * 2 * Math.PI;
      const startAngle = currentAngle;
      const endAngle = currentAngle + segmentAngle;
      currentAngle = endAngle;
      return { startAngle, endAngle, segment };
    });
  };

  const handleSegmentClick = (segment: WheelSegment) => {
    setSelectedSegment(selectedSegment?.id === segment.id ? null : segment);
    onSegmentClick?.(segment);
  };

  const handleSegmentHover = (segment: WheelSegment | null) => {
    setHoveredSegment(segment);
  };

  return (
    <InteractiveChart
      title="Behavioral Style Assessment"
      subtitle="Click on segments to explore detailed insights"
      className="w-full"
    >
      <div className="relative">
        <svg width="400" height="400" className="mx-auto">
          {/* Background circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
          />

          {/* Segments */}
          {getSegmentAngles().map(({ startAngle, endAngle, segment }) => {
            const isSelected = selectedSegment?.id === segment.id;
            const isHovered = hoveredSegment?.id === segment.id;
            
            return (
              <motion.path
                key={segment.id}
                d={createSegmentPath(startAngle, endAngle)}
                fill={segment.color}
                stroke="#ffffff"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: isSelected || isHovered ? 1.05 : 1,
                  filter: isSelected ? 'brightness(1.1)' : 'brightness(1)'
                }}
                transition={{ duration: 0.3 }}
                onClick={() => handleSegmentClick(segment)}
                onMouseEnter={() => handleSegmentHover(segment)}
                onMouseLeave={() => handleSegmentHover(null)}
                className="cursor-pointer"
                style={{ 
                  filter: isSelected ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'none'
                }}
              />
            );
          })}

          {/* Center text */}
          <text
            x={centerX}
            y={centerY}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-sm font-medium text-military-900"
          >
            {wheel.centerText}
          </text>

          {/* Segment labels */}
          {getSegmentAngles().map(({ startAngle, endAngle, segment }) => {
            const labelAngle = startAngle + (endAngle - startAngle) / 2;
            const labelRadius = radius * 0.7;
            const x = centerX + labelRadius * Math.cos(labelAngle);
            const y = centerY + labelRadius * Math.sin(labelAngle);

            return (
              <text
                key={`label-${segment.id}`}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-medium text-white pointer-events-none"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
              >
                {segment.label}
              </text>
            );
          })}
        </svg>

        {/* Segment details panel */}
        <AnimatePresence>
          {selectedSegment && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-4 bg-military-50 rounded-lg border border-military-200"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: selectedSegment.color }}
                />
                <h4 className="heading-3 text-military-900">{selectedSegment.label}</h4>
              </div>
              
              <p className="body-medium text-military-700 mb-4">
                {selectedSegment.description}
              </p>

              <div className="space-y-2">
                <h5 className="font-medium text-military-900">Key Characteristics:</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-military-600">
                  {selectedSegment.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover tooltip */}
        <AnimatePresence>
          {hoveredSegment && !selectedSegment && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bg-military-900 text-white px-3 py-2 rounded-md text-sm shadow-military-lg pointer-events-none z-10"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                whiteSpace: 'nowrap'
              }}
            >
              {hoveredSegment.label}: {hoveredSegment.value}%
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-military-900"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </InteractiveChart>
  );
};

export default InteractiveDISCWheel;
