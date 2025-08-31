import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';
import { useUI } from '../../contexts/AppContext';

const AppLayout: React.FC = () => {
  const location = useLocation();
  const { loading } = useUI();

  return (
    <div className="min-h-screen bg-military-50">
      <Navigation />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingSpinner key="loading" />
        ) : (
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="pt-16" // Account for fixed header
          >
            <Outlet />
          </motion.main>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default AppLayout;
