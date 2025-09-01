import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface InteractiveChartProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  loading?: boolean;
  error?: string | null;
  onChartClick?: (data: any) => void;
  onChartHover?: (data: any) => void;
}

const InteractiveChart: React.FC<InteractiveChartProps> = ({
  children,
  title,
  subtitle,
  className = '',
  loading = false,
  error = null,
  onChartClick,
  onChartHover
}) => {
  if (loading) {
    return (
      <div className={`card ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-military-200 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-military-100 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`card ${className}`}>
        <div className="text-center py-8">
          <div className="text-military-500 mb-2">⚠️</div>
          <p className="text-military-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`card ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h3 className="heading-3 text-military-900 mb-2">{title}</h3>
          )}
          {subtitle && (
            <p className="body-small text-military-600">{subtitle}</p>
          )}
        </div>
      )}
      
      <div 
        className="relative"
        onClick={onChartClick}
        onMouseEnter={onChartHover}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default InteractiveChart;
