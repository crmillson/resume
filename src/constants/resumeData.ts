import { ResumeData } from '../types';

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: "Chris Millson",
    email: "chris@chrismillson.dev",
    phone: "+1 (555) 123-4567",
    location: "Raleigh-Durham, NC",
    summary: "Technical Program Manager and Special Forces veteran with 14 years of military leadership experience. Bridging military precision with emerging technology to solve complex problems in defense-tech and AI-driven organizations.",
    linkedin: "https://linkedin.com/in/chrismillson",
    github: "https://github.com/chrismillson",
    website: "https://chrismillson.dev"
  },
  experience: [
    {
      id: "exp-1",
      company: "USASOC AI Division",
      position: "Technical Program Manager",
      startDate: "2023-01",
      endDate: undefined,
      current: true,
      description: "Leading AI-driven modernization initiatives and cross-functional teams in defense technology development.",
      achievements: [
        "Led development of AI-powered assessment systems improving efficiency by 40%",
        "Managed cross-functional teams of 32+ personnel across multiple AI projects",
        "Implemented agile methodologies reducing project delivery time by 25%",
        "Established strategic partnerships with leading AI research institutions"
      ],
      technologies: ["AI/ML", "Agile", "Program Management", "Team Leadership", "Defense Technology", "Systems Integration"]
    },
    {
      id: "exp-2",
      company: "USASOC AI Division",
      position: "Software Developer",
      startDate: "2022-01",
      endDate: "2022-12",
      current: false,
      description: "Developed software solutions for military AI applications and assessment systems.",
      achievements: [
        "Built real-time assessment platforms serving 150+ Special Forces candidates",
        "Developed AI algorithms for personnel evaluation and selection",
        "Collaborated with data scientists to implement machine learning models",
        "Maintained 99.9% system uptime for critical military applications"
      ],
      technologies: ["Python", "React", "Node.js", "Machine Learning", "AWS", "Docker"]
    },
    {
      id: "exp-3",
      company: "Special Forces Assessment",
      position: "Program Manager",
      startDate: "2020-01",
      endDate: "2021-12",
      current: false,
      description: "Managed comprehensive assessment and selection programs for Special Forces candidates.",
      achievements: [
        "Transformed evaluation processes for 150+ Special Forces candidates annually",
        "Implemented data-driven assessment methodologies improving selection accuracy by 35%",
        "Led cross-functional teams of 15+ assessors and support personnel",
        "Developed standardized training programs for assessment teams"
      ],
      technologies: ["Program Management", "Data Analysis", "Training Development", "Team Leadership", "Process Improvement"]
    },
    {
      id: "exp-4",
      company: "10th Special Forces Group",
      position: "Communications Sergeant",
      startDate: "2015-01",
      endDate: "2019-12",
      current: false,
      description: "Led communications operations and team coordination in high-stakes environments.",
      achievements: [
        "Led communications teams in 12+ international operations",
        "Managed critical communications infrastructure supporting 50+ personnel",
        "Developed emergency communication protocols still in use today",
        "Trained 25+ personnel in advanced communications systems"
      ],
      technologies: ["Communications Systems", "Team Leadership", "Operations Management", "Training", "Risk Assessment"]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Defense Acquisition University",
      degree: "Program Management",
      field: "Defense Acquisition",
      startDate: "2022-01",
      endDate: "2022-12",
      relevantCourses: ["Program Management", "Acquisition Strategy", "Risk Management", "Contract Management"]
    },
    {
      id: "edu-2",
      institution: "Special Forces Qualification Course",
      degree: "Special Forces Qualification",
      field: "Special Operations",
      startDate: "2014-01",
      endDate: "2014-12",
      relevantCourses: ["Advanced Tactics", "Leadership", "Cross-cultural Communication", "Strategic Planning"]
    }
  ],
  skills: [
    // Leadership & Management
    {
      id: "skill-1",
      name: "Program Management",
      category: "technical",
      proficiency: "expert"
    },
    {
      id: "skill-2",
      name: "Team Building",
      category: "soft",
      proficiency: "expert"
    },
    {
      id: "skill-3",
      name: "Cross-functional Collaboration",
      category: "soft",
      proficiency: "expert"
    },
    {
      id: "skill-4",
      name: "Risk Assessment",
      category: "technical",
      proficiency: "advanced"
    },
    // Technical Proficiencies
    {
      id: "skill-5",
      name: "Software Development",
      category: "technical",
      proficiency: "intermediate"
    },
    {
      id: "skill-6",
      name: "AI/ML Project Management",
      category: "technical",
      proficiency: "advanced"
    },
    {
      id: "skill-7",
      name: "Agile Methodologies",
      category: "technical",
      proficiency: "advanced"
    },
    {
      id: "skill-8",
      name: "Systems Integration",
      category: "technical",
      proficiency: "intermediate"
    },
    // Domain Expertise
    {
      id: "skill-9",
      name: "Defense Technology",
      category: "technical",
      proficiency: "expert"
    },
    {
      id: "skill-10",
      name: "Emerging Technologies",
      category: "technical",
      proficiency: "advanced"
    },
    {
      id: "skill-11",
      name: "Training & Development",
      category: "soft",
      proficiency: "expert"
    },
    {
      id: "skill-12",
      name: "Operations Management",
      category: "technical",
      proficiency: "expert"
    }
  ],
  projects: [
    {
      id: "proj-1",
      name: "AI-Powered Assessment System",
      description: "Developed comprehensive AI-driven assessment platform for Special Forces candidate evaluation, improving selection accuracy and efficiency.",
      technologies: ["Python", "Machine Learning", "React", "AWS", "Docker"],
      githubUrl: "https://github.com/chrismillson/assessment-ai",
      liveUrl: "https://assessment-system.demo"
    },
    {
      id: "proj-2",
      name: "Military Communications Protocol",
      description: "Designed and implemented emergency communication protocols for high-stakes operations, ensuring reliable communication in critical situations.",
      technologies: ["Communications Systems", "Protocol Design", "Training Development"],
      githubUrl: "https://github.com/chrismillson/comm-protocol"
    },
    {
      id: "proj-3",
      name: "Cross-functional Team Training Program",
      description: "Created standardized training programs for assessment teams, improving consistency and effectiveness across multiple locations.",
      technologies: ["Training Development", "Program Management", "Team Leadership"],
      githubUrl: "https://github.com/chrismillson/training-program"
    }
  ]
};
