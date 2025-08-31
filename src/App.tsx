import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import AppLayout from './components/layout/AppLayout';
import LoadingSpinner from './components/layout/LoadingSpinner';

// Lazy load page components for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

// Placeholder components for other pages (to be implemented)
const ExperiencePage = React.lazy(() => import('./pages/ExperiencePage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const LeadershipPage = React.lazy(() => import('./pages/LeadershipPage'));
const AssessmentsPage = React.lazy(() => import('./pages/AssessmentsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

// 404 Error Page
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

/**
 * Main App component
 * Professional Military Precision meets Modern Tech Innovation
 * Multi-page portfolio with React Router and state management
 */
function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>
            } />
            <Route path="about" element={
              <Suspense fallback={<LoadingSpinner />}>
                <AboutPage />
              </Suspense>
            } />
            <Route path="experience" element={
              <Suspense fallback={<LoadingSpinner />}>
                <ExperiencePage />
              </Suspense>
            } />
            <Route path="projects" element={
              <Suspense fallback={<LoadingSpinner />}>
                <ProjectsPage />
              </Suspense>
            } />
            <Route path="leadership" element={
              <Suspense fallback={<LoadingSpinner />}>
                <LeadershipPage />
              </Suspense>
            } />
            <Route path="assessments" element={
              <Suspense fallback={<LoadingSpinner />}>
                <AssessmentsPage />
              </Suspense>
            } />
            <Route path="contact" element={
              <Suspense fallback={<LoadingSpinner />}>
                <ContactPage />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<LoadingSpinner />}>
                <NotFoundPage />
              </Suspense>
            } />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
