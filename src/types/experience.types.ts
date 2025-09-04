export interface ExperienceTimeline {
  experiences: ExperienceEntry[];
  filters: CategoryFilter[];
  currentPosition: number;
}

export interface ExperienceEntry {
  id: string;
  startDate: string;
  endDate: string | null;
  organization: string;
  role: string;
  location: string;
  category: 'military' | 'tech' | 'education' | 'certification';
  keyAchievements: string[];
  technologies?: string[];
  teamSize?: number;
  budgetManaged?: string;
  securityLevel?: string;
  notable: boolean;
  description: string;
  icon: string;
  current?: boolean;
}

export interface CategoryFilter {
  id: string;
  label: string;
  value: 'all' | 'military' | 'tech' | 'education' | 'certification';
  active: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  proficiency: number; // 0-100
  yearsExperience: number;
  category: string;
  trend: 'up' | 'down' | 'stable';
  projects: string[];
}

export interface ProjectPortfolio {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'planning';
  teamSize: number;
  technologies: string[];
  achievements: string[];
  impact: string;
  image?: string;
}

export interface AchievementMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  description: string;
  trend?: 'up' | 'down' | 'stable';
  comparison?: string;
}

export interface TransitionStory {
  phase: string;
  title: string;
  description: string;
  challenges: string[];
  lessons: string[];
  outcomes: string[];
  visualElements: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  relevantCourses?: string[];
  certifications?: string[];
  notable: boolean;
}

export interface TechnicalStack {
  category: string;
  tools: TechnicalTool[];
}

export interface TechnicalTool {
  name: string;
  proficiency: number;
  yearsUsed: number;
  projects: string[];
  learningStatus: 'learning' | 'proficient' | 'expert';
}
