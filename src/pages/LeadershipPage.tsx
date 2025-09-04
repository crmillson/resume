import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Shield, 
  Target, 
  Zap, 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  MapPin,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Star,
  BarChart3,
  UserCheck,
  Lightbulb
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import { Button } from '../shared/ui/Button';

const LeadershipPage: React.FC = () => {
  const [activeTimelinePhase, setActiveTimelinePhase] = useState(0);
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const storiesRef = useRef(null);
  const frameworkRef = useRef(null);
  const dashboardRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isTimelineInView = useInView(timelineRef, { once: true });
  const isStoriesInView = useInView(storiesRef, { once: true });
  const isFrameworkInView = useInView(frameworkRef, { once: true });
  const isDashboardInView = useInView(dashboardRef, { once: true });

  const timelinePhases = [
    {
      id: 'military-foundation',
      startYear: 2009,
      endYear: 2015,
      title: 'Military Foundation',
      role: 'Communications Sergeant',
      description: 'Built leadership foundation through Special Forces operations and team coordination.',
      keyMetrics: ['12+ international operations', '50+ personnel supported', 'Emergency protocols developed'],
      achievements: ['Team leadership in high-stakes environments', 'Communication infrastructure management', 'Training program development']
    },
    {
      id: 'assessment-leadership',
      startYear: 2015,
      endYear: 2020,
      title: 'Assessment Leadership',
      role: 'Program Manager',
      description: 'Transformed evaluation processes and led cross-functional assessment teams.',
      keyMetrics: ['150+ candidates annually', '35% accuracy improvement', '15+ assessor teams'],
      achievements: ['Data-driven methodology implementation', 'Standardized training programs', 'Process optimization']
    },
    {
      id: 'technical-transition',
      startYear: 2020,
      endYear: 2022,
      title: 'Technical Transition',
      role: 'Software Developer',
      description: 'Embraced vulnerability and learned technical skills from the ground up.',
      keyMetrics: ['Real-time platforms built', '99.9% system uptime', 'AI algorithms developed'],
      achievements: ['Assessment platform development', 'Machine learning implementation', 'Infrastructure management']
    },
    {
      id: 'ai-leadership',
      startYear: 2022,
      endYear: 2024,
      title: 'AI Leadership',
      role: 'Technical Program Manager',
      description: 'Leading AI initiatives and managing cross-functional teams in defense technology.',
      keyMetrics: ['32+ personnel managed', '40% efficiency gains', '25% faster delivery'],
      achievements: ['AI assessment systems', 'Strategic partnerships', 'Agile methodology implementation']
    }
  ];

  const leadershipStories = [
    {
      id: 1,
      title: "Setting the Standard",
      challenge: "Managing 23 cadre and 150+ candidates with inconsistent evaluation processes",
      action: "Built trust through consistency, persistence, and people-first leadership approach",
      result: "Reduced variance in assessments, increased candidate confidence, improved selection accuracy by 35%",
      lesson: "People-first leadership + consistency = trust and results",
      metrics: { teamSize: 23, candidates: 150, improvement: 35 },
      icon: Target
    },
    {
      id: 2,
      title: "The Beginner's Mind",
      challenge: "Leading AI development teams without technical background or formal education",
      action: "Embraced learning mindset, asked questions, focused on team enablement over ego",
      result: "Built 32-person organization, earned 3-star access, delivered 40% efficiency improvements",
      lesson: "Vulnerability + persistence = exponential growth and team success",
      metrics: { teamSize: 32, accessLevel: 3, efficiency: 40 },
      icon: Lightbulb
    }
  ];

  const leadershipFramework = [
    {
      title: "People-Centered Excellence",
      consistency: 82,
      peopleOriented: 80,
      description: "Building high-performing teams through trust, consistency, and individual development",
      icon: Users,
      color: "accent"
    },
    {
      title: "Thoughtful Stewardship",
      persistence: 77,
      analysis: 65,
      description: "Making strategic decisions through careful analysis and long-term thinking",
      icon: Target,
      color: "military"
    },
    {
      title: "Adaptive Reliability",
      policy: 78,
      customerOriented: 78,
      description: "Delivering consistent results while adapting to changing requirements",
      icon: Shield,
      color: "accent"
    }
  ];



  return (
    <PageLayout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-military-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-military-900 via-military-800 to-accent-900">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rotate-45"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-white/10 rotate-45"></div>
            <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/10 rotate-45"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">Trusted Advisor Leadership</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl font-medium mb-8 text-military-200"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where Military Precision Meets Human-Centered Innovation
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-military-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bridging the gap between military operational excellence and technology innovation. 
            Leading teams that consistently deliver under pressure while fostering cultures of continuous learning.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={() => document.getElementById('leadership-framework')?.scrollIntoView({ behavior: 'smooth' })}
              variant="primary"
              size="lg"
              className="btn-primary px-8 py-4 flex items-center gap-2"
            >
              Explore Leadership Approach
              <ArrowRight className="w-5 h-5" />
            </Button>
            

          </motion.div>
        </div>
      </section>

      {/* Leadership Evolution Timeline */}
      <section ref={timelineRef} className="section-padding bg-white">
        <div className="container-military">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-military-900 mb-4">Leadership Evolution</h2>
            <p className="body-large text-military-600 max-w-3xl mx-auto">
              A journey from military communications to AI program management, demonstrating how core leadership principles 
              adapt and evolve across different domains and challenges.
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            {/* Timeline Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 bg-military-100 p-2 rounded-lg">
                {timelinePhases.map((phase, index) => (
                  <button
                    key={phase.id}
                    onClick={() => setActiveTimelinePhase(index)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTimelinePhase === index
                        ? 'bg-accent-600 text-white shadow-md'
                        : 'text-military-600 hover:bg-military-200'
                    }`}
                  >
                    {phase.startYear}-{phase.endYear}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Timeline Content */}
            <motion.div
              key={activeTimelinePhase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-military-50 to-accent-50 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-1 bg-accent-600 rounded-full"></div>
                    <h3 className="heading-3 text-military-900">{timelinePhases[activeTimelinePhase].title}</h3>
                  </div>
                  <h4 className="heading-4 text-accent-600 mb-4">{timelinePhases[activeTimelinePhase].role}</h4>
                  <p className="body-medium text-military-700 mb-6">{timelinePhases[activeTimelinePhase].description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-military-800 mb-2">Key Metrics:</h5>
                      <ul className="space-y-1">
                        {timelinePhases[activeTimelinePhase].keyMetrics.map((metric, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-military-600">
                            <CheckCircle className="w-4 h-4 text-accent-500" />
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full h-64 bg-military-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-military-500">
                      <Clock className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">{timelinePhases[activeTimelinePhase].startYear} - {timelinePhases[activeTimelinePhase].endYear}</p>
                    </div>
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-1">
                      {timelinePhases.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === activeTimelinePhase ? 'bg-accent-600 scale-125' : 'bg-military-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Leadership Stories */}
      <section ref={storiesRef} className="section-padding bg-military-gradient">
        <div className="container-military">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStoriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-military-900 mb-4">Leadership Stories</h2>
            <p className="body-large text-military-600 max-w-3xl mx-auto">
              Real challenges, authentic actions, and measurable results that demonstrate leadership principles in action.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadershipStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isStoriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <story.icon className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="heading-3 text-military-900">{story.title}</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="font-semibold text-military-800 mb-2">Challenge:</h5>
                    <p className="text-military-600">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-military-800 mb-2">Action:</h5>
                    <p className="text-military-600">{story.action}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-military-800 mb-2">Result:</h5>
                    <p className="text-military-600">{story.result}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-military-800 mb-2">Lesson:</h5>
                    <p className="text-accent-600 font-medium">{story.lesson}</p>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-military-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-600">{story.metrics.teamSize}</div>
                    <div className="text-xs text-military-500">Team Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-600">{story.metrics.candidates || story.metrics.accessLevel}</div>
                    <div className="text-xs text-military-500">{story.metrics.candidates ? 'Candidates' : 'Access Level'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-600">{story.metrics.improvement || story.metrics.efficiency}%</div>
                    <div className="text-xs text-military-500">{story.metrics.improvement ? 'Improvement' : 'Efficiency'}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Framework */}
      <section id="leadership-framework" ref={frameworkRef} className="section-padding bg-white">
        <div className="container-military">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFrameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-military-900 mb-4">Leadership Framework</h2>
            <p className="body-large text-military-600 max-w-3xl mx-auto">
              Based on DISC assessment insights and real-world application, this framework guides decision-making 
              and team development across all leadership challenges.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipFramework.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isFrameworkInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <framework.icon className="w-8 h-8 text-accent-600" />
                </div>
                
                <h3 className="heading-3 text-military-900 mb-4">{framework.title}</h3>
                <p className="body-medium text-military-600 mb-6">{framework.description}</p>
                
                {/* Metrics Visualization */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-military-600">Consistency</span>
                    <span className="text-sm font-medium text-military-800">{framework.consistency}%</span>
                  </div>
                  <div className="w-full bg-military-200 rounded-full h-2">
                    <div 
                      className="bg-accent-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${framework.consistency}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-military-600">People-Oriented</span>
                    <span className="text-sm font-medium text-military-800">{framework.peopleOriented || framework.persistence || framework.policy}%</span>
                  </div>
                  <div className="w-full bg-military-200 rounded-full h-2">
                    <div 
                      className="bg-accent-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${framework.peopleOriented || framework.persistence || framework.policy}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Results Dashboard */}
      <section ref={dashboardRef} className="section-padding bg-accent-gradient">
        <div className="container-military">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isDashboardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-military-900 mb-4">Current Results Dashboard</h2>
            <p className="body-large text-military-600">
              Real-time metrics and achievements that demonstrate ongoing leadership impact and team success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isDashboardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card text-center p-6"
            >
              <Users className="w-8 h-8 text-accent-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-military-900 mb-2">32</div>
              <div className="text-sm text-military-600 font-medium">Team Members</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isDashboardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card text-center p-6"
            >
              <Shield className="w-8 h-8 text-accent-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-military-900 mb-2">12/20</div>
              <div className="text-sm text-military-600 font-medium">Military/Contractor Mix</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isDashboardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card text-center p-6"
            >
              <Target className="w-8 h-8 text-accent-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-military-900 mb-2">4</div>
              <div className="text-sm text-military-600 font-medium">Active Projects</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isDashboardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card text-center p-6"
            >
              <TrendingUp className="w-8 h-8 text-accent-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-military-900 mb-2">150+</div>
              <div className="text-sm text-military-600 font-medium">Candidates Assessed</div>
            </motion.div>
          </div>
          
          {/* Team Composition Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isDashboardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card p-8"
          >
            <h3 className="heading-3 text-military-900 mb-6 text-center">Team Composition</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-accent-600" />
                </div>
                <h4 className="font-semibold text-military-800 mb-2">Military Personnel</h4>
                <p className="text-2xl font-bold text-accent-600">12</p>
                <p className="text-sm text-military-500">37.5%</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-military-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-12 h-12 text-military-600" />
                </div>
                <h4 className="font-semibold text-military-800 mb-2">Contractors</h4>
                <p className="text-2xl font-bold text-military-600">20</p>
                <p className="text-sm text-military-500">62.5%</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-accent-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-12 h-12 text-accent-700" />
                </div>
                <h4 className="font-semibold text-military-800 mb-2">Active Projects</h4>
                <p className="text-2xl font-bold text-accent-600">4</p>
                <p className="text-sm text-military-500">100% On Track</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Call to Action Sections */}
      <section className="section-padding bg-white">
        <div className="container-military">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* CTA 1: Organizations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card text-center p-8 border-2 border-accent-200 hover:border-accent-400 transition-colors"
            >
              <Shield className="w-12 h-12 text-accent-600 mx-auto mb-4" />
              <h3 className="heading-3 text-military-900 mb-4">Organizations</h3>
              <p className="text-military-600 mb-6">
                Seeking leadership that combines operational excellence with human-centered team building?
              </p>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                size="lg"
                className="w-full"
              >
                Discuss Leadership Needs
              </Button>
            </motion.div>
            
            {/* CTA 2: Military Transition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card text-center p-8 border-2 border-military-200 hover:border-military-400 transition-colors"
            >
              <Target className="w-12 h-12 text-military-600 mx-auto mb-4" />
              <h3 className="heading-3 text-military-900 mb-4">Military Transition</h3>
              <p className="text-military-600 mb-6">
                Looking for guidance on transitioning military leadership skills to technology roles?
              </p>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="secondary"
                size="lg"
                className="w-full"
              >
                Get Transition Guidance
              </Button>
            </motion.div>
            
            {/* CTA 3: Technical Teams */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card text-center p-8 border-2 border-accent-200 hover:border-accent-400 transition-colors"
            >
              <Zap className="w-12 h-12 text-accent-600 mx-auto mb-4" />
              <h3 className="heading-3 text-military-900 mb-4">Technical Teams</h3>
              <p className="text-military-600 mb-6">
                Need military-style leadership to improve team performance and project delivery?
              </p>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                size="lg"
                className="w-full"
              >
                Explore Leadership Solutions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LeadershipPage;
