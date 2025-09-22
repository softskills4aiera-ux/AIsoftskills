import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, BookOpen, Target, Users, Zap } from 'lucide-react';

interface Skill {
  id: number;
  title: string;
  description: string;
  topics: string[];
  topicColor: string;
  practiceExercises: string[];
}

const SkillsSection: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSkills, setExpandedSkills] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/skillsData.json')
      .then(res => res.json())
      .then(data => {
        setSkills(data.skills);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading skills data:', err);
        setLoading(false);
      });
  }, []);

  const filteredSkills = skills.filter(skill =>
    skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleSkill = (skillId: number) => {
    setExpandedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const getGradientClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'blue': 'from-neon-blue to-blue-400',
      'green': 'from-neon-green to-emerald-400',
      'purple': 'from-neon-purple to-violet-400',
      'pink': 'from-neon-pink to-rose-400',
      'yellow': 'from-neon-yellow to-orange-400',
      'red': 'from-neon-red to-pink-400'
    };
    return colorMap[color] || 'from-neon-blue to-blue-400';
  };

  const getGradientTextClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'blue': 'gradient-text',
      'green': 'gradient-text-green',
      'purple': 'gradient-text-purple',
      'pink': 'gradient-text-pink',
      'yellow': 'gradient-text-yellow',
      'red': 'gradient-text-red'
    };
    return colorMap[color] || 'gradient-text';
  };

  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Master Essential{' '}
            <span className="gradient-text">Soft Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Develop the skills that will make you indispensable in the AI era. Each skill includes practical exercises and real-world applications.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for skills, topics, or exercises..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-dark-300 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glassmorphism dark:glassmorphism-dark rounded-2xl overflow-hidden"
            >
              {/* Skill Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-3 ${getGradientTextClass(skill.topicColor)}`}>
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleSkill(skill.id)}
                    className="ml-4 w-10 h-10 bg-gray-100 dark:bg-dark-400 hover:bg-gray-200 dark:hover:bg-dark-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    {expandedSkills.includes(skill.id) ? (
                      <ChevronUp size={20} className="text-gray-600 dark:text-gray-300" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-600 dark:text-gray-300" />
                    )}
                  </motion.button>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {skill.topics.map((topic, topicIndex) => (
                    <motion.span
                      key={topicIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: topicIndex * 0.05 }}
                      className={`px-4 py-2 bg-gradient-to-r ${getGradientClass(skill.topicColor)} text-white rounded-full text-sm font-medium shadow-lg`}
                    >
                      {topic}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedSkills.includes(skill.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="p-6 bg-gray-50 dark:bg-dark-400">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Practice Exercises */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Target size={20} className="mr-2 text-neon-green" />
                            Practice Exercises
                          </h4>
                          <ul className="space-y-3">
                            {skill.practiceExercises.map((exercise, exerciseIndex) => (
                              <motion.li
                                key={exerciseIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: exerciseIndex * 0.1 }}
                                className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                              >
                                <span className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></span>
                                <span>{exercise}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Additional Info */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <BookOpen size={20} className="mr-2 text-neon-blue" />
                            Learning Path
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-white dark:bg-dark-300 rounded-lg p-4 border-l-4 border-neon-blue">
                              <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                                Foundation Level
                              </h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Build core understanding and basic techniques
                              </p>
                            </div>
                            <div className="bg-white dark:bg-dark-300 rounded-lg p-4 border-l-4 border-neon-purple">
                              <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                                Advanced Level
                              </h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Master advanced concepts and real-world applications
                              </p>
                            </div>
                            <div className="bg-white dark:bg-dark-300 rounded-lg p-4 border-l-4 border-neon-green">
                              <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                                Expert Level
                              </h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Become a thought leader and mentor others
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 text-center"
                      >
                        <button className="btn-primary text-lg px-8 py-4">
                          Start Learning {skill.title.split(' ')[0]}
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredSkills.length === 0 && searchTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              No skills found matching "{searchTerm}". Try a different search term.
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;

