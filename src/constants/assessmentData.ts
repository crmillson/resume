import { 
  TTIData, 
  AssessmentVisualization, 
  InteractiveWheel, 
  WheelSegment,
  AnimatedTimeline,
  TimelineEvent,
  ProgressChart,
  ProgressMetric
} from '../types';

export const ASSESSMENT_DATA: TTIData = {
  behavioralStyle: {
    type: 'Analytical',
    description: 'Data-driven decision maker with strong analytical capabilities and systematic approach to problem-solving',
    strengths: [
      'Strategic Thinking',
      'Problem Analysis',
      'Attention to Detail',
      'Systematic Approach',
      'Quality Focus'
    ],
    challenges: [
      'Patience with Process',
      'Delegation',
      'Emotional Expression',
      'Quick Decision Making'
    ],
    communicationStyle: 'Direct, factual, and systematic'
  },
  drivingForces: {
    primary: 'Achievement',
    secondary: 'Knowledge',
    description: 'Driven by measurable results, continuous learning, and making a meaningful impact',
    motivators: ['Success', 'Growth', 'Impact', 'Innovation', 'Excellence']
  },
  insights: [
    {
      id: '1',
      category: 'Leadership',
      title: 'Mission-Focused Leadership',
      description: 'Natural ability to align team efforts with clear objectives and measurable outcomes',
      impact: 'High team performance and goal achievement'
    },
    {
      id: '2',
      category: 'Problem Solving',
      title: 'Systematic Analysis',
      description: 'Approaches complex problems with structured methodology and data-driven insights',
      impact: 'Effective solution development and risk mitigation'
    },
    {
      id: '3',
      category: 'Team Building',
      title: 'Capability Development',
      description: 'Focuses on building individual and team capabilities for long-term success',
      impact: 'Sustainable team growth and performance'
    }
  ]
};

export const ASSESSMENT_VISUALIZATION: AssessmentVisualization = {
  behavioralWheel: {
    segments: [
      {
        id: 'analytical',
        label: 'Analytical',
        value: 35,
        color: '#0ea5e9',
        description: 'Systematic, data-driven approach to decision making',
        details: [
          'Likes to analyze situations thoroughly',
          'Makes decisions based on facts and logic',
          'Values accuracy and precision',
          'Prefers structured approaches'
        ]
      },
      {
        id: 'achievement',
        label: 'Achievement',
        value: 30,
        color: '#10b981',
        description: 'Goal-oriented with focus on measurable results',
        details: [
          'Driven by success and accomplishment',
          'Sets high standards for performance',
          'Values efficiency and productivity',
          'Results-focused approach'
        ]
      },
      {
        id: 'leadership',
        label: 'Leadership',
        value: 20,
        color: '#f59e0b',
        description: 'Natural leadership with team development focus',
        details: [
          'Builds and develops teams',
          'Takes responsibility for outcomes',
          'Mentors and guides others',
          'Creates high-performance environments'
        ]
      },
      {
        id: 'innovation',
        label: 'Innovation',
        value: 15,
        color: '#8b5cf6',
        description: 'Creative problem-solving and continuous improvement',
        details: [
          'Seeks new solutions and approaches',
          'Embraces change and adaptation',
          'Thinks outside conventional boundaries',
          'Drives continuous improvement'
        ]
      }
    ],
    centerText: 'Leadership\nProfile',
    interactive: true
  },
  skillsRadar: {
    dimensions: [
      { name: 'Strategic Planning', max: 10, category: 'Leadership' },
      { name: 'Team Building', max: 10, category: 'Leadership' },
      { name: 'Problem Solving', max: 10, category: 'Technical' },
      { name: 'Communication', max: 10, category: 'Soft Skills' },
      { name: 'Innovation', max: 10, category: 'Technical' },
      { name: 'Execution', max: 10, category: 'Leadership' }
    ],
    data: [
      {
        name: 'Current Profile',
        values: {
          'Strategic Planning': 9,
          'Team Building': 8,
          'Problem Solving': 9,
          'Communication': 7,
          'Innovation': 8,
          'Execution': 9
        }
      }
    ]
  },
  leadershipTimeline: {
    events: [
      {
        id: '1',
        year: 2009,
        title: 'Military Commission',
        description: 'Started military career with leadership training',
        category: 'military',
        impact: 8
      },
      {
        id: '2',
        year: 2012,
        title: 'Special Forces Selection',
        description: 'Completed rigorous selection process',
        category: 'military',
        impact: 9
      },
      {
        id: '3',
        year: 2015,
        title: 'Team Leadership',
        description: 'Led special operations teams',
        category: 'leadership',
        impact: 8
      },
      {
        id: '4',
        year: 2018,
        title: 'Strategic Planning',
        description: 'Developed operational strategies',
        category: 'leadership',
        impact: 7
      },
      {
        id: '5',
        year: 2020,
        title: 'Transition to Tech',
        description: 'Began civilian technology career',
        category: 'transition',
        impact: 6
      },
      {
        id: '6',
        year: 2022,
        title: 'AI Project Leadership',
        description: 'Led AI/ML development teams',
        category: 'tech-leadership',
        impact: 9
      },
      {
        id: '7',
        year: 2024,
        title: 'Program Management',
        description: 'Technical program management role',
        category: 'tech-leadership',
        impact: 8
      }
    ],
    currentYear: 2024
  },
  adaptabilityMetrics: {
    metrics: [
      {
        name: 'Stress Management',
        value: 85,
        target: 90,
        unit: '%',
        trend: 'up'
      },
      {
        name: 'Learning Agility',
        value: 92,
        target: 85,
        unit: '%',
        trend: 'up'
      },
      {
        name: 'Change Adaptation',
        value: 88,
        target: 80,
        unit: '%',
        trend: 'up'
      },
      {
        name: 'Team Collaboration',
        value: 82,
        target: 85,
        unit: '%',
        trend: 'stable'
      }
    ],
    target: 85,
    current: 87
  }
};
