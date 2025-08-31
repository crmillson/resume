import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, AppAction, ResumeData, TTIData, ProjectData } from '../types';
import { RESUME_DATA } from '../constants/resumeData';

// Initial state
const initialState: AppState = {
  currentPage: '/',
  navigation: {
    isMenuOpen: false,
    previousPage: null,
  },
  content: {
    resumeData: RESUME_DATA,
    assessmentData: {
      behavioralStyle: {
        type: 'Analytical',
        description: 'Data-driven decision maker with strong analytical capabilities',
        strengths: ['Problem Solving', 'Strategic Thinking', 'Attention to Detail'],
        challenges: ['Patience with Process', 'Delegation'],
        communicationStyle: 'Direct and factual'
      },
      drivingForces: {
        primary: 'Achievement',
        secondary: 'Knowledge',
        description: 'Driven by measurable results and continuous learning',
        motivators: ['Success', 'Growth', 'Impact']
      },
      insights: []
    },
    projectsData: []
  },
  ui: {
    theme: 'light',
    animations: true,
    loading: false,
  },
};

// Reducer function
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
        navigation: {
          ...state.navigation,
          previousPage: state.currentPage,
        },
      };
    
    case 'TOGGLE_MENU':
      return {
        ...state,
        navigation: {
          ...state.navigation,
          isMenuOpen: action.payload,
        },
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        ui: {
          ...state.ui,
          loading: action.payload,
        },
      };
    
    case 'SET_THEME':
      return {
        ...state,
        ui: {
          ...state.ui,
          theme: action.payload,
        },
      };
    
    case 'SET_ANIMATIONS':
      return {
        ...state,
        ui: {
          ...state.ui,
          animations: action.payload,
        },
      };
    
    case 'SET_RESUME_DATA':
      return {
        ...state,
        content: {
          ...state.content,
          resumeData: action.payload,
        },
      };
    
    case 'SET_ASSESSMENT_DATA':
      return {
        ...state,
        content: {
          ...state.content,
          assessmentData: action.payload,
        },
      };
    
    case 'SET_PROJECTS_DATA':
      return {
        ...state,
        content: {
          ...state.content,
          projectsData: action.payload,
        },
      };
    
    default:
      return state;
  }
}

// Context interface
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Convenience hooks for specific state slices
export const useNavigation = () => {
  const { state, dispatch } = useApp();
  return {
    currentPage: state.currentPage,
    isMenuOpen: state.navigation.isMenuOpen,
    previousPage: state.navigation.previousPage,
    setCurrentPage: (page: string) => dispatch({ type: 'SET_CURRENT_PAGE', payload: page }),
    toggleMenu: (isOpen: boolean) => dispatch({ type: 'TOGGLE_MENU', payload: isOpen }),
  };
};

export const useUI = () => {
  const { state, dispatch } = useApp();
  return {
    theme: state.ui.theme,
    animations: state.ui.animations,
    loading: state.ui.loading,
    setTheme: (theme: 'light' | 'dark') => dispatch({ type: 'SET_THEME', payload: theme }),
    setAnimations: (enabled: boolean) => dispatch({ type: 'SET_ANIMATIONS', payload: enabled }),
    setLoading: (loading: boolean) => dispatch({ type: 'SET_LOADING', payload: loading }),
  };
};

export const useContent = () => {
  const { state, dispatch } = useApp();
  return {
    resumeData: state.content.resumeData,
    assessmentData: state.content.assessmentData,
    projectsData: state.content.projectsData,
    setResumeData: (data: ResumeData) => dispatch({ type: 'SET_RESUME_DATA', payload: data }),
    setAssessmentData: (data: TTIData) => dispatch({ type: 'SET_ASSESSMENT_DATA', payload: data }),
    setProjectsData: (data: ProjectData[]) => dispatch({ type: 'SET_PROJECTS_DATA', payload: data }),
  };
};
