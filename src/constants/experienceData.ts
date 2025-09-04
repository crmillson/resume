import { 
  ExperienceEntry, 
  CategoryFilter, 
  SkillCategory, 
  ProjectPortfolio, 
  AchievementMetric, 
  TransitionStory, 
  EducationEntry, 
  TechnicalStack 
} from '../types/experience.types';

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    id: '1',
    startDate: '2023-01',
    endDate: null,
    organization: 'USASOC AI Division',
    role: 'Program Manager',
    location: 'Fort Bragg, NC',
    category: 'tech',
    keyAchievements: [
      'Leading 32-person organization (12 military, 20 contractors)',
      'Managing 4 active AI projects + supporting platform',
      'First-of-its-kind software development training pipeline',
      'Direct access to three-star general leadership'
    ],
    technologies: ['AI/ML', 'Program Management', 'Team Leadership', 'Strategic Planning'],
    teamSize: 32,
    budgetManaged: 'Classified',
    securityLevel: 'TS/SCI',
    notable: true,
    description: 'Leading AI-driven modernization initiatives and cross-functional teams in defense technology development.',
    icon: 'Zap',
    current: true
  },
  {
    id: '2',
    startDate: '2022-08',
    endDate: null,
    organization: 'USASOC AI Division',
    role: 'Software Developer',
    location: 'Fort Bragg, NC',
    category: 'tech',
    keyAchievements: [
      'ATAK plugin development (Kotlin, Jetpack Compose)',
      'Autonomous drone swarm visualization',
      'GPS-denied environment solutions',
      'Cross-functional team collaboration'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'ATAK Platform', 'Drone Systems'],
    teamSize: 8,
    securityLevel: 'TS/SCI',
    notable: true,
    description: 'Developed software solutions for military AI applications and assessment systems.',
    icon: 'Code',
    current: true
  },
  {
    id: '3',
    startDate: '2020-07',
    endDate: '2022-12',
    organization: 'Special Forces Assessment & Selection',
    role: 'Program Manager',
    location: 'Fort Bragg, NC',
    category: 'military',
    keyAchievements: [
      'Managed 150+ candidate assessments per cycle',
      'Led 23-person senior cadre team',
      'Designed Multi-Criteria Decision Analysis models',
      '12 mission-critical training events per cycle'
    ],
    technologies: ['Program Management', 'Data Analysis', 'Training Development', 'Team Leadership'],
    teamSize: 23,
    securityLevel: 'TS/SCI',
    notable: true,
    description: 'Managed comprehensive assessment and selection programs for Special Forces candidates.',
    icon: 'Shield',
    current: false
  },
  {
    id: '4',
    startDate: '2015-01',
    endDate: '2020-07',
    organization: '10th Special Forces Group',
    role: 'Communication Sergeant',
    location: 'Stuttgart, Germany',
    category: 'military',
    keyAchievements: [
      'International military unit training and consultation',
      'Advanced communications systems expertise',
      'Leadership development and mentoring',
      'Programs of instruction development'
    ],
    technologies: ['Communications Systems', 'Team Leadership', 'Operations Management', 'Training'],
    teamSize: 12,
    securityLevel: 'TS/SCI',
    notable: true,
    description: 'Led communications operations and team coordination in high-stakes environments.',
    icon: 'Radio',
    current: false
  },
  {
    id: '5',
    startDate: '2011-05',
    endDate: '2014-12',
    organization: 'US Army',
    role: 'Commissioned Officer',
    location: 'Various',
    category: 'military',
    keyAchievements: [
      'Initial military leadership training',
      'Platoon leadership experience',
      'Combat operations support',
      'Team development and mentoring'
    ],
    technologies: ['Leadership', 'Operations Management', 'Team Building', 'Strategic Planning'],
    teamSize: 30,
    notable: false,
    description: 'Initial military service with progressive leadership responsibilities.',
    icon: 'Star',
    current: false
  }
];

export const CATEGORY_FILTERS: CategoryFilter[] = [
  { id: '1', label: 'All', value: 'all', active: true },
  { id: '2', label: 'Military', value: 'military', active: false },
  { id: '3', label: 'Tech', value: 'tech', active: false },
  { id: '4', label: 'Education', value: 'education', active: false },
  { id: '5', label: 'Certifications', value: 'certification', active: false }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: '1',
    name: 'Leadership & Management',
    description: 'Team building, strategic planning, and program management capabilities',
    skills: [
      {
        id: '1',
        name: 'Team Leadership',
        proficiency: 95,
        yearsExperience: 14,
        category: 'Leadership',
        trend: 'up',
        projects: ['USASOC AI Division', 'Special Forces Assessment', '10th SFG']
      },
      {
        id: '2',
        name: 'Strategic Planning',
        proficiency: 90,
        yearsExperience: 12,
        category: 'Leadership',
        trend: 'up',
        projects: ['AI Modernization', 'Assessment Programs', 'Training Development']
      },
      {
        id: '3',
        name: 'Program Management',
        proficiency: 88,
        yearsExperience: 8,
        category: 'Leadership',
        trend: 'up',
        projects: ['USASOC AI Division', 'Special Forces Assessment']
      }
    ]
  },
  {
    id: '2',
    name: 'Technical Capabilities',
    description: 'Software development, AI/ML, and systems integration expertise',
    skills: [
      {
        id: '4',
        name: 'Software Development',
        proficiency: 75,
        yearsExperience: 3,
        category: 'Technical',
        trend: 'up',
        projects: ['ATAK Plugins', 'Drone Systems', 'Assessment Platforms']
      },
      {
        id: '5',
        name: 'AI/ML',
        proficiency: 70,
        yearsExperience: 2,
        category: 'Technical',
        trend: 'up',
        projects: ['AI Assessment Systems', 'Machine Learning Models']
      },
      {
        id: '6',
        name: 'Systems Integration',
        proficiency: 85,
        yearsExperience: 10,
        category: 'Technical',
        trend: 'stable',
        projects: ['Communications Systems', 'Training Platforms']
      }
    ]
  },
  {
    id: '3',
    name: 'Military Expertise',
    description: 'Special operations, assessment programs, and training development',
    skills: [
      {
        id: '7',
        name: 'Special Operations',
        proficiency: 95,
        yearsExperience: 14,
        category: 'Military',
        trend: 'stable',
        projects: ['Special Forces', 'International Operations', 'Training Programs']
      },
      {
        id: '8',
        name: 'Assessment Programs',
        proficiency: 90,
        yearsExperience: 8,
        category: 'Military',
        trend: 'up',
        projects: ['Special Forces Selection', 'Personnel Evaluation']
      },
      {
        id: '9',
        name: 'Training Development',
        proficiency: 88,
        yearsExperience: 10,
        category: 'Military',
        trend: 'up',
        projects: ['Assessment Training', 'Communications Training']
      }
    ]
  }
];

export const PROJECT_PORTFOLIO: ProjectPortfolio[] = [
  {
    id: '1',
    title: 'AI-Powered Assessment Systems',
    description: 'Developing next-generation personnel evaluation platforms using machine learning and data analytics',
    status: 'active',
    teamSize: 15,
    technologies: ['Python', 'React', 'Machine Learning', 'AWS'],
    achievements: [
      '40% improvement in assessment efficiency',
      'Real-time candidate evaluation',
      'Data-driven decision support'
    ],
    impact: 'Transforming how Special Forces candidates are evaluated and selected'
  },
  {
    id: '2',
    title: 'ATAK Plugin Development',
    description: 'Building tactical applications for the Android Tactical Assault Kit platform',
    status: 'active',
    teamSize: 8,
    technologies: ['Kotlin', 'Jetpack Compose', 'ATAK Platform', 'Military Systems'],
    achievements: [
      'Autonomous drone swarm visualization',
      'GPS-denied environment solutions',
      'Real-time tactical data integration'
    ],
    impact: 'Enhancing tactical awareness and operational effectiveness'
  },
  {
    id: '3',
    title: 'Software Development Training Pipeline',
    description: 'First-of-its-kind training program for military personnel transitioning to software development',
    status: 'active',
    teamSize: 25,
    technologies: ['Training Development', 'Curriculum Design', 'Mentorship Programs'],
    achievements: [
      'Comprehensive software development curriculum',
      'Hands-on project experience',
      'Career transition support'
    ],
    impact: 'Creating pathways for military personnel to enter tech careers'
  }
];

export const ACHIEVEMENT_METRICS: AchievementMetric[] = [
  {
    id: '1',
    label: 'Years of Leadership Experience',
    value: 14,
    unit: 'years',
    description: 'Progressive leadership roles from military to technology',
    trend: 'up'
  },
  {
    id: '2',
    label: 'Total Team Members Led',
    value: 150,
    unit: '+ people',
    description: 'Cumulative team leadership across all roles',
    trend: 'up'
  },
  {
    id: '3',
    label: 'Current Organization Size',
    value: 32,
    unit: 'people',
    description: 'Direct leadership of USASOC AI Division',
    trend: 'stable'
  },
  {
    id: '4',
    label: 'Security Clearance Level',
    value: 100,
    unit: '%',
    description: 'TS/SCI clearance maintained',
    trend: 'stable'
  },
  {
    id: '5',
    label: 'Active Projects',
    value: 4,
    unit: 'projects',
    description: 'Currently managing multiple AI initiatives',
    trend: 'up'
  },
  {
    id: '6',
    label: 'Training Cycles Completed',
    value: 9,
    unit: 'cycles',
    description: 'Assessment and training program cycles',
    trend: 'up'
  }
];

export const TRANSITION_STORY: TransitionStory = {
  phase: 'Military to Tech',
  title: 'From Combat Operations to AI Innovation',
  description: 'A journey of continuous learning and adaptation, demonstrating how military leadership translates to technical excellence',
  challenges: [
    'Starting programming at age 30 with no prior experience',
    'Bottom 5% performance in initial coding cohort',
    'Balancing military responsibilities with technical learning',
    'Adapting military leadership to civilian tech environment'
  ],
  lessons: [
    'Growth requires vulnerability and persistence',
    'Everyone has their own timeline for excellence',
    'Military precision translates to technical quality',
    'Team leadership skills are universal'
  ],
  outcomes: [
    'Successfully completed Army Software Factory',
    'Transitioned to software development role',
    'Advanced to program management position',
    'Leading AI initiatives for Special Operations'
  ],
  visualElements: ['timeline', 'skills-progression', 'achievement-metrics']
};

export const EDUCATION_DATA: EducationEntry[] = [
  {
    id: '1',
    degree: 'Master of Science - IT Management',
    institution: 'Western Governors University',
    field: 'Information Technology Management',
    startDate: '2022',
    endDate: '2024',
    notable: true,
    certifications: ['IT Management', 'Strategic Planning', 'Technology Leadership']
  },
  {
    id: '2',
    degree: 'Bachelor of Arts - History',
    institution: 'Colorado State University',
    field: 'History',
    startDate: '2007',
    endDate: '2011',
    notable: false
  },
  {
    id: '3',
    degree: 'Army Software Factory',
    institution: 'US Army',
    field: 'Software Development',
    startDate: '2022',
    endDate: '2022',
    notable: true,
    certifications: ['Software Development', 'Agile Methodologies', 'Team Collaboration']
  },
  {
    id: '4',
    degree: 'Active TS/SCI Security Clearance',
    institution: 'US Government',
    field: 'Security Clearance',
    startDate: '2011',
    endDate: 'Present',
    notable: true
  },
  {
    id: '5',
    degree: 'Working Russian Proficiency',
    institution: 'Defense Language Institute',
    field: 'Language Proficiency',
    startDate: '2015',
    endDate: '2015',
    notable: false
  }
];

export const TECHNICAL_STACK: TechnicalStack[] = [
  {
    category: 'Programming Languages',
    tools: [
      {
        name: 'Kotlin',
        proficiency: 80,
        yearsUsed: 2,
        projects: ['ATAK Plugins', 'Android Development'],
        learningStatus: 'proficient'
      },
      {
        name: 'Java',
        proficiency: 70,
        yearsUsed: 2,
        projects: ['Backend Systems', 'Legacy Integration'],
        learningStatus: 'proficient'
      },
      {
        name: 'TypeScript',
        proficiency: 75,
        yearsUsed: 2,
        projects: ['Web Applications', 'Frontend Development'],
        learningStatus: 'proficient'
      },
      {
        name: 'JavaScript',
        proficiency: 70,
        yearsUsed: 2,
        projects: ['Web Development', 'Frontend Applications'],
        learningStatus: 'proficient'
      }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    tools: [
      {
        name: 'React',
        proficiency: 75,
        yearsUsed: 2,
        projects: ['Web Applications', 'User Interfaces'],
        learningStatus: 'proficient'
      },
      {
        name: 'Jetpack Compose',
        proficiency: 80,
        yearsUsed: 2,
        projects: ['ATAK Plugins', 'Android Development'],
        learningStatus: 'proficient'
      }
    ]
  },
  {
    category: 'Military Technologies',
    tools: [
      {
        name: 'ATAK Platform',
        proficiency: 85,
        yearsUsed: 2,
        projects: ['Tactical Applications', 'Military Systems'],
        learningStatus: 'expert'
      },
      {
        name: 'Tactical Communications',
        proficiency: 90,
        yearsUsed: 10,
        projects: ['Special Operations', 'International Missions'],
        learningStatus: 'expert'
      }
    ]
  },
  {
    category: 'AI/ML Tools',
    tools: [
      {
        name: 'Machine Learning Pipelines',
        proficiency: 70,
        yearsUsed: 2,
        projects: ['Assessment Systems', 'Data Analysis'],
        learningStatus: 'proficient'
      },
      {
        name: 'Data Analysis',
        proficiency: 75,
        yearsUsed: 3,
        projects: ['Assessment Programs', 'Performance Metrics'],
        learningStatus: 'proficient'
      }
    ]
  }
];
