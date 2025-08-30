import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, TrendingUp, Users } from 'lucide-react';

const CoreValuesBanner: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Focused",
      description: "If it must be done, I got it",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "People-First",
      description: "Happy workers bring productivity",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Challenge brings growth",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Balanced Leadership",
      description: "Taking ego out brings success",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide my leadership and decision-making in both military and civilian environments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  "{value.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-blue-200 rounded-full opacity-20"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border-2 border-blue-300 rounded-full opacity-30"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-400 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesBanner;
