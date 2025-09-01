import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, AppAction, TTIData, LeadershipStory, ProfessionalResource } from '../types';
import { ASSESSMENT_DATA } from '../constants/assessmentData';

// Initial state
const initialState: AppState = {
  currentPage: '/',
  navigation: {
    isMenuOpen: false,
    previousPage: null,
  },
  content: {
    assessmentData: ASSESSMENT_DATA,
    leadershipStories: [],
    resources: []
  },
  ui: {
    theme: 'light',
    animations: true,
    loading: false, // Ensure this starts as false
    modalOpen: false,
    activeModal: null,
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
    

    
    case 'SET_ASSESSMENT_DATA':
      return {
        ...state,
        content: {
          ...state.content,
          assessmentData: action.payload,
        },
      };
    


    case 'SET_LEADERSHIP_STORIES':
      return {
        ...state,
        content: {
          ...state.content,
          leadershipStories: action.payload,
        },
      };

    case 'SET_RESOURCES':
      return {
        ...state,
        content: {
          ...state.content,
          resources: action.payload,
        },
      };

    case 'OPEN_MODAL':
      return {
        ...state,
        ui: {
          ...state.ui,
          modalOpen: true,
          activeModal: action.payload,
        },
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        ui: {
          ...state.ui,
          modalOpen: false,
          activeModal: null,
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
    modalOpen: state.ui.modalOpen,
    activeModal: state.ui.activeModal,
    setTheme: (theme: 'light' | 'dark') => dispatch({ type: 'SET_THEME', payload: theme }),
    setAnimations: (enabled: boolean) => dispatch({ type: 'SET_ANIMATIONS', payload: enabled }),
    setLoading: (loading: boolean) => dispatch({ type: 'SET_LOADING', payload: loading }),
    openModal: (modalId: string) => dispatch({ type: 'OPEN_MODAL', payload: modalId }),
    closeModal: () => dispatch({ type: 'CLOSE_MODAL', payload: null }),
  };
};

export const useContent = () => {
  const { state, dispatch } = useApp();
  return {
    assessmentData: state.content.assessmentData,
    leadershipStories: state.content.leadershipStories,
    resources: state.content.resources,
    setAssessmentData: (data: TTIData) => dispatch({ type: 'SET_ASSESSMENT_DATA', payload: data }),
    setLeadershipStories: (data: LeadershipStory[]) => dispatch({ type: 'SET_LEADERSHIP_STORIES', payload: data }),
    setResources: (data: ProfessionalResource[]) => dispatch({ type: 'SET_RESOURCES', payload: data }),
  };
};
