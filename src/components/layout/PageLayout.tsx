import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { getNavigationItem } from '../../constants/navigation';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  showBreadcrumbs?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  className = '',
  showBreadcrumbs = true 
}) => {
  const location = useLocation();
  const currentPage = getNavigationItem(location.pathname);

  return (
    <div className={`min-h-screen ${className}`}>
      {/* Breadcrumbs */}
      {showBreadcrumbs && currentPage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white border-b border-military-200 py-4"
        >
          <div className="container-military">
            <nav className="flex items-center space-x-2 text-sm text-military-600">
              <a href="/" className="hover:text-accent-600 transition-colors">
                Home
              </a>
              <span>/</span>
              <span className="text-military-900 font-medium">
                {currentPage.label}
              </span>
            </nav>
          </div>
        </motion.div>
      )}

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex-1"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageLayout;
