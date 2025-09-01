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

// Phase 2 Enhanced Types
export interface TechStackItem {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'ai-ml' | 'military-tech';
  proficiency: number;
  yearsUsed: number;
  projects: string[];
}

export interface EnhancedProject extends ProjectData {
  deploymentUrl?: string;
  githubStats: {
    stars: number;
    forks: number;
    lastCommit: string;
    issues: number;
    pullRequests: number;
  };
  techStack: TechStackItem[];
  challenges: ProjectChallenge[];
  outcomes: ProjectOutcome[];
  demoVideo?: string;
  screenshots: string[];
  caseStudy?: string;
  teamSize?: number;
  duration?: string;
}

export interface ProjectChallenge {
  id: string;
  title: string;
  description: string;
  complexity: 'low' | 'medium' | 'high' | 'extreme';
  solution: string;
  technologies: string[];
}

export interface ProjectOutcome {
  metric: string;
  beforeValue: number | string;
  afterValue: number | string;
  improvement: string;
  timeframe: string;
  impact: 'low' | 'medium' | 'high' | 'critical';
}

export interface LeadershipStory {
  id: string;
  phase: 'military' | 'transition' | 'tech-leadership';
  title: string;
  timeframe: {
    start: string;
    end: string;
  };
  challenge: StoryChallenge;
  approach: StoryApproach;
  outcome: StoryOutcome;
  lessonsLearned: string[];
  applicableSkills: Skill[];
  visualElements: StoryVisual[];
  metrics?: StoryMetrics;
}

export interface StoryChallenge {
  situation: string;
  stakeholders: string[];
  constraints: string[];
  timeline: string;
  complexity: 'low' | 'medium' | 'high' | 'extreme';
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
}

export interface StoryApproach {
  strategy: string;
  methodology: string;
  teamStructure: string;
  keyDecisions: DecisionPoint[];
  timeline: string;
}

export interface DecisionPoint {
  id: string;
  situation: string;
  options: DecisionOption[];
  chosenOption: string;
  rationale: string;
  outcome: string;
}

export interface DecisionOption {
  id: string;
  description: string;
  pros: string[];
  cons: string[];
  riskLevel: 'low' | 'medium' | 'high';
}

export interface StoryOutcome {
  immediate: string;
  longTerm: string;
  teamImpact: string;
  organizationalImpact: string;
  personalGrowth: string;
}

export interface StoryVisual {
  type: 'timeline' | 'diagram' | 'chart' | 'image';
  content: string;
  caption?: string;
}

export interface StoryMetrics {
  teamSize: number;
  projectDuration: string;
  costSavings?: number;
  efficiencyGain?: number;
  teamSatisfaction?: number;
}

// Assessment Visualization Types
export interface AssessmentVisualization {
  behavioralWheel: InteractiveWheel;
  skillsRadar: RadarChart;
  leadershipTimeline: AnimatedTimeline;
  adaptabilityMetrics: ProgressChart;
}

export interface InteractiveWheel {
  segments: WheelSegment[];
  centerText: string;
  interactive: boolean;
}

export interface WheelSegment {
  id: string;
  label: string;
  value: number;
  color: string;
  description: string;
  details: string[];
}

export interface RadarChart {
  dimensions: RadarDimension[];
  data: RadarDataPoint[];
}

export interface RadarDimension {
  name: string;
  max: number;
  category: string;
}

export interface RadarDataPoint {
  name: string;
  values: { [key: string]: number };
}

export interface AnimatedTimeline {
  events: TimelineEvent[];
  currentYear: number;
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  category: string;
  impact: number;
}

export interface ProgressChart {
  metrics: ProgressMetric[];
  target: number;
  current: number;
}

export interface ProgressMetric {
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

// Contact System Types
export interface ContactContext {
  sourcePage: string;
  visitorJourney: string[];
  interests: string[];
  suggestedResources: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
  context: ContactContext;
  preferredContact: 'email' | 'linkedin' | 'phone';
}

export interface ProfessionalResource {
  id: string;
  title: string;
  description: string;
  type: 'resume' | 'leadership-framework' | 'case-study' | 'presentation';
  downloadUrl: string;
  fileSize: string;
  tags: string[];
}

// App State Types
export interface AppState {
  currentPage: string;
  navigation: {
    isMenuOpen: boolean;
    previousPage: string | null;
  };
  content: {
    assessmentData: TTIData;
    leadershipStories: LeadershipStory[];
    resources: ProfessionalResource[];
  };
  ui: {
    theme: 'light' | 'dark';
    animations: boolean;
    loading: boolean;
    modalOpen: boolean;
    activeModal: string | null;
  };
}

export type AppAction = 
  | { type: 'SET_CURRENT_PAGE'; payload: string }
  | { type: 'TOGGLE_MENU'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'SET_ANIMATIONS'; payload: boolean }

  | { type: 'SET_ASSESSMENT_DATA'; payload: TTIData }

  | { type: 'SET_LEADERSHIP_STORIES'; payload: LeadershipStory[] }
  | { type: 'SET_RESOURCES'; payload: ProfessionalResource[] }
  | { type: 'OPEN_MODAL'; payload: string }
  | { type: 'CLOSE_MODAL'; payload: null };
