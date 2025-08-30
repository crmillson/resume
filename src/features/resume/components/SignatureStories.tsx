import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Rocket, Target, ExternalLink } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  summary: string;
  fullStory: string;
  keyTakeaways: string[];
}

const SignatureStories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const stories: Story[] = [
    {
      id: "setting-standard",
      title: "Setting the Standard",
      subtitle: "Leadership Story",
      icon: Award,
      color: "from-blue-500 to-blue-600",
      summary: "How I transformed evaluation processes for 150+ Special Forces candidates",
      fullStory: `When I took over the Special Forces Assessment program, I inherited a system that was inconsistent, subjective, and failing to identify the best candidates. The existing process relied heavily on personal opinions rather than objective criteria, leading to missed opportunities and inconsistent results.

I began by conducting a comprehensive audit of the current evaluation process, interviewing assessors, candidates, and stakeholders. What I discovered was a system that had evolved organically over years without clear standards or measurable outcomes.

The transformation began with establishing clear, objective criteria for each assessment area. I worked with subject matter experts to develop standardized evaluation rubrics that could be consistently applied across different assessors and locations. We implemented a data-driven approach that tracked candidate performance across multiple dimensions.

The results were transformative. We improved selection accuracy by 35%, reduced assessment time by 25%, and created a more transparent process that candidates and stakeholders could trust. Most importantly, we began identifying and selecting candidates who might have been overlooked in the previous system.

This experience taught me that leadership isn't about maintaining the status quo—it's about having the courage to challenge existing processes and the discipline to implement systematic improvements.`,
      keyTakeaways: [
        "Transformational leadership requires systematic process improvement",
        "Data-driven decisions outperform subjective judgments",
        "Standardization increases both efficiency and accuracy",
        "Transparency builds trust with all stakeholders"
      ]
    },
    {
      id: "building-bridge",
      title: "Building the Bridge",
      subtitle: "Transformation Story",
      icon: Rocket,
      color: "from-green-500 to-green-600",
      summary: "From combat operations to leading AI development teams",
      fullStory: `The transition from Special Forces operations to leading AI development teams was one of the most challenging and rewarding experiences of my career. When I first joined the USASOC AI Division, I was stepping into a world that seemed completely foreign to my military background.

The initial challenge was overcoming the perception that military leadership couldn't translate to technical environments. I had to prove that the principles I'd learned in combat—adaptability, mission focus, and team cohesion—were directly applicable to software development and AI project management.

I started by immersing myself in the technical domain, learning the fundamentals of AI/ML, software development methodologies, and the unique challenges of defense technology. But more importantly, I focused on understanding the people—their motivations, challenges, and how they worked together.

What I discovered was that successful AI development teams, like successful military units, thrive on clear communication, shared purpose, and mutual trust. The technical skills were important, but the human factors were critical.

I began implementing military-inspired practices adapted for the tech environment: daily stand-ups that resembled mission briefings, sprint planning that mirrored operational planning, and retrospective sessions that encouraged honest feedback and continuous improvement.

The breakthrough came when our team delivered an AI-powered assessment system ahead of schedule and under budget. The success wasn't just about the technology—it was about how we worked together as a team, how we communicated, and how we adapted to challenges.

This experience reinforced my belief that leadership principles are universal. Whether you're leading a Special Forces team in combat or an AI development team, success comes from building strong teams, maintaining clear communication, and staying focused on the mission.`,
      keyTakeaways: [
        "Leadership principles transcend industry boundaries",
        "Adaptability is crucial for career transitions",
        "Team dynamics matter more than technical expertise alone",
        "Clear communication and shared purpose drive success"
      ]
    },
    {
      id: "finding-why",
      title: "Finding My Why",
      subtitle: "Origin Story",
      icon: Target,
      color: "from-purple-500 to-purple-600",
      summary: "Discovering authentic leadership through adversity",
      fullStory: `My journey to authentic leadership began in the most unlikely place—during one of the most challenging periods of my military career. I was leading a team through a complex operation when everything seemed to be going wrong. Equipment failures, communication breakdowns, and unexpected obstacles were testing our limits.

In that moment of crisis, I realized I had a choice: I could fall back on the traditional command-and-control leadership style I'd been taught, or I could try something different. I chose to be vulnerable with my team, to admit that I didn't have all the answers, and to ask for their input and ideas.

What happened next was transformative. Instead of losing respect for me, my team responded with increased engagement and creativity. They began offering solutions I hadn't considered, taking initiative in areas where they had expertise, and supporting each other in ways that went beyond their formal roles.

That experience taught me that authentic leadership isn't about having all the answers—it's about creating an environment where everyone feels safe to contribute their best ideas and efforts. It's about being honest about your limitations while maintaining confidence in your team's ability to overcome challenges together.

Since then, I've made it my mission to lead with authenticity and vulnerability. I've learned that people don't follow titles or positions—they follow people they trust, respect, and believe in. Authentic leadership means being the same person in private that you are in public, admitting mistakes, celebrating others' successes, and always putting the mission and the team first.

This approach has served me well in both military and civilian environments. Whether I'm leading Special Forces operations or AI development teams, the principles remain the same: build trust through authenticity, empower others to succeed, and always remember that leadership is about service to others.`,
      keyTakeaways: [
        "Authentic leadership requires vulnerability and honesty",
        "Trust is the foundation of effective teams",
        "Empowering others leads to better outcomes",
        "Leadership is about service, not control"
      ]
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Signature Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three compelling narratives that demonstrate my leadership philosophy and growth journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${story.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <story.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {story.title}
                </h3>
                
                <p className="text-sm text-blue-600 font-medium mb-3">
                  {story.subtitle}
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {story.summary}
                </p>
                
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  <span>Read Full Story</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Modal */}
        <AnimatePresence>
          {selectedStory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedStory(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${selectedStory.color} rounded-lg flex items-center justify-center`}>
                        <selectedStory.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                          {selectedStory.title}
                        </h2>
                        <p className="text-lg text-blue-600 font-medium">
                          {selectedStory.subtitle}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedStory(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-8">
                      {selectedStory.fullStory}
                    </p>

                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Key Takeaways
                      </h3>
                      <ul className="space-y-2">
                        {selectedStory.keyTakeaways.map((takeaway, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{takeaway}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SignatureStories;
