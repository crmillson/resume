import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/layout/PageLayout';

const LeadershipPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="section-padding">
        <div className="container-military">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="heading-1 text-military-900 mb-6">Leadership</h1>
            <p className="body-large text-military-600 mb-8">
              Military-to-tech transition stories coming soon...
            </p>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LeadershipPage;
