// Core types for the resume application
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
  category: 'military' | 'civilian';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  relevantCourses?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft' | 'language';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
}

// New types for multi-page structure
export interface NavigationItem {
  path: string;
  label: string;
  description: string;
  icon?: string;
  order: number;
}

export interface TTIData {
  behavioralStyle: BehavioralProfile;
  drivingForces: MotivationalProfile;
  insights: AssessmentInsight[];
}

export interface BehavioralProfile {
  type: string;
  description: string;
  strengths: string[];
  challenges: string[];
  communicationStyle: string;
}

export interface MotivationalProfile {
  primary: string;
  secondary: string;
  description: string;
  motivators: string[];
}

export interface AssessmentInsight {
  id: string;
  category: string;
  title: string;
  description: string;
  impact: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: 'military' | 'ai-ml' | 'web-dev' | 'leadership';
  status: 'active' | 'completed' | 'archived';
  featured: boolean;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
  startDate: string;
  endDate?: string;
  achievements: string[];
}

// App State Types
export interface AppState {
  currentPage: string;
  navigation: {
    isMenuOpen: boolean;
    previousPage: string | null;
  };
  content: {
    resumeData: ResumeData;
    assessmentData: TTIData;
    projectsData: ProjectData[];
  };
  ui: {
    theme: 'light' | 'dark';
    animations: boolean;
    loading: boolean;
  };
}

export type AppAction = 
  | { type: 'SET_CURRENT_PAGE'; payload: string }
  | { type: 'TOGGLE_MENU'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'SET_ANIMATIONS'; payload: boolean }
  | { type: 'SET_RESUME_DATA'; payload: ResumeData }
  | { type: 'SET_ASSESSMENT_DATA'; payload: TTIData }
  | { type: 'SET_PROJECTS_DATA'; payload: ProjectData[] };
