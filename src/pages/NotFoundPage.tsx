import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../shared/ui/Button';
import PageLayout from '../components/layout/PageLayout';

const NotFoundPage: React.FC = () => {
  return (
    <PageLayout showBreadcrumbs={false}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="heading-1 text-military-900 mb-4">404</h1>
            <h2 className="heading-2 text-military-700 mb-6">Page Not Found</h2>
            <p className="body-large text-military-600 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist. It may have been moved, deleted, or you entered the wrong URL.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/">
              <Button
                variant="primary"
                size="lg"
                className="btn-primary px-6 py-3 flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Button>
            </Link>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="btn-outline px-6 py-3 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
