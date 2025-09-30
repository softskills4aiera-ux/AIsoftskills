import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Star, 
  Clock, 
  Users, 
  Trophy, 
  ArrowRight,
  Search,
  Filter,
  BookOpen,
  Target,
  Brain,
  Palette,
  Users2,
  TrendingUp,
  Heart,
  Zap
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  emoji: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  students: number;
  xpReward: number;
  badges: string[];
  color: string;
  gradient: string;
  status: 'locked' | 'available' | 'completed';
  progress?: number;
  prerequisites: string[];
}

interface UserProgress {
  xp: number;
  level: number;
  streak: number;
  completedCourses: string[];
  badges: string[];
}

const CourseCatalog: React.FC<{ onSelectCourse: (courseId: string) => void }> = ({ onSelectCourse }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [userProgress] = useState<UserProgress>({
    xp: 0,
    level: 1,
    streak: 0,
    completedCourses: [],
    badges: []
  });

  // Course data without status (will be calculated dynamically)
  const courseData: Omit<Course, 'status' | 'progress'>[] = [
    {
      id: 'communication',
      title: 'Communication Skills (Human)',
      emoji: '🗣️',
      description: 'Master the art of effective communication, active listening, and public speaking.',
      duration: '2 hours',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 1250,
      xpReward: 500,
      badges: ['Communication Champion'],
      color: 'from-teal-500 to-violet-500',
      gradient: 'from-teal-500/20 to-violet-500/20',
      prerequisites: []
    },
    {
      id: 'adaptive-learning',
      title: 'Adaptive Learning & Lifelong Learning Skills',
      emoji: '🧠',
      description: 'Master learning strategies, memory techniques, and continuous improvement skills.',
      duration: '3 hours',
      difficulty: 'Beginner',
      rating: 4.6,
      students: 890,
      xpReward: 600,
      badges: ['Learning Strategist'],
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      prerequisites: []
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt-Context Engineering (Machine)',
      emoji: '⚡',
      description: 'Master AI communication, prompt design, and ethical AI use.',
      duration: '2.5 hours',
      difficulty: 'Intermediate',
      rating: 4.7,
      students: 650,
      xpReward: 700,
      badges: ['AI Communicator'],
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-500/20 to-pink-500/20',
      prerequisites: []
    },
    {
      id: 'critical-thinking',
      title: 'Critical Thinking & Problem Solving',
      emoji: '🧠',
      description: 'Develop logical reasoning, problem-solving, and analytical thinking skills.',
      duration: '3 hours',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 980,
      xpReward: 750,
      badges: ['Critical Thinker'],
      color: 'from-violet-500 to-neon-purple',
      gradient: 'from-violet-500/20 to-neon-purple/20',
      prerequisites: []
    },
    {
      id: 'design-thinking',
      title: 'Design Thinking (Creativity to Solve Problems)',
      emoji: '🎨',
      description: 'Learn creative problem-solving, user empathy, and innovation methodologies.',
      duration: '4 hours',
      difficulty: 'Intermediate',
      rating: 4.7,
      students: 750,
      xpReward: 800,
      badges: ['Design Innovator'],
      color: 'from-neon-pink to-violet-500',
      gradient: 'from-neon-pink/20 to-violet-500/20',
      prerequisites: []
    },
    {
      id: 'teamwork',
      title: 'Teamwork & Collaboration',
      emoji: '🤝',
      description: 'Build strong teams, manage conflicts, and collaborate effectively.',
      duration: '3 hours',
      difficulty: 'Beginner',
      rating: 4.6,
      students: 1100,
      xpReward: 600,
      badges: ['Team Player'],
      color: 'from-neon-lime to-teal-400',
      gradient: 'from-neon-lime/20 to-teal-400/20',
      prerequisites: []
    },
    {
      id: 'data-driven',
      title: 'Data-Driven Decision Making',
      emoji: '📊',
      description: 'Make informed decisions using data analysis and evidence-based reasoning.',
      duration: '5 hours',
      difficulty: 'Advanced',
      rating: 4.9,
      students: 650,
      xpReward: 1000,
      badges: ['Data Analyst'],
      color: 'from-neon-aqua to-teal-500',
      gradient: 'from-neon-aqua/20 to-teal-500/20',
      prerequisites: []
    },
    {
      id: 'mental-physical-health',
      title: 'Managing Mental & Physical Health',
      emoji: '💪',
      description: 'Maintain work-life balance, manage stress, and build resilience.',
      duration: '2 hours',
      difficulty: 'Beginner',
      rating: 4.7,
      students: 1350,
      xpReward: 400,
      badges: ['Wellness Champion'],
      color: 'from-green-400 to-emerald-500',
      gradient: 'from-green-400/20 to-emerald-500/20',
      prerequisites: []
    }
  ];

  // Calculate course status based on user progress and prerequisites
  const getCourseStatus = (courseId: string, prerequisites: string[]): 'completed' | 'available' | 'locked' => {
    if (userProgress.completedCourses.includes(courseId)) {
      return 'completed';
    }
    
    // All courses are now available - no prerequisites required
    return 'available';
  };

  const getCourseProgress = (courseId: string): number => {
    if (userProgress.completedCourses.includes(courseId)) {
      return 100;
    }
    return 0;
  };

  // Generate courses with dynamic status
  const courses: Course[] = courseData.map(course => ({
    ...course,
    status: getCourseStatus(course.id, course.prerequisites),
    progress: getCourseProgress(course.id)
  }));

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = filterDifficulty === 'all' || course.difficulty.toLowerCase() === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅';
      case 'available': return '🎯';
      case 'locked': return '🔒';
      default: return '📚';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-midnight-900 dark:via-midnight-800 dark:to-violet-900">
      {/* Header */}
      <div className="sticky top-0 z-50 glassmorphism dark:glassmorphism-dark border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-violet-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                📚
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text-lime">Course Catalog</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">Choose your learning journey</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="streak-counter">🔥 {userProgress.streak}</div>
              <div className="xp-badge">{userProgress.xp} XP</div>
              <div className="text-xl font-semibold text-gray-600 dark:text-gray-400">
                Level {userProgress.level}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/50 dark:bg-midnight-700/50 border border-white/30 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-lime/50 text-lg"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'beginner', 'intermediate', 'advanced'].map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setFilterDifficulty(difficulty)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 text-lg ${
                  filterDifficulty === difficulty
                    ? 'bg-gradient-to-r from-neon-lime to-teal-400 text-midnight-900'
                    : 'bg-white/50 dark:bg-midnight-700/50 text-gray-600 dark:text-gray-400 hover:bg-white/70 dark:hover:bg-midnight-600/50'
                }`}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="emoji-card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-violet-500 rounded-xl flex items-center justify-center text-white">
                <BookOpen size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text-lime">{userProgress.completedCourses.length}</div>
                <div className="text-lg text-gray-600 dark:text-gray-400">Completed</div>
              </div>
            </div>
          </div>
          <div className="emoji-card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-neon-purple rounded-xl flex items-center justify-center text-white">
                <Target size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text-lime">{courses.filter(c => c.status === 'available').length}</div>
                <div className="text-lg text-gray-600 dark:text-gray-400">Available</div>
              </div>
            </div>
          </div>
          <div className="emoji-card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-lime to-teal-400 rounded-xl flex items-center justify-center text-white">
                <Trophy size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text-lime">{userProgress.badges.length}</div>
                <div className="text-lg text-gray-600 dark:text-gray-400">Badges</div>
              </div>
            </div>
          </div>
          <div className="emoji-card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center text-white">
                <TrendingUp size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text-lime">{userProgress.level}</div>
                <div className="text-lg text-gray-600 dark:text-gray-400">Level</div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card-genz p-6 relative overflow-hidden min-h-[400px] flex flex-col ${
                course.status === 'locked' ? 'opacity-60' : 'hover:scale-[1.02]'
              }`}
            >
              {/* Course Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-20 h-20 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg`}>
                  {course.emoji}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{getStatusIcon(course.status)}</span>
                  {course.status === 'completed' && (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Course Info */}
              <div className="mb-4 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 line-clamp-3">{course.description}</p>
                
                <div className="flex items-center gap-6 text-base text-gray-500 dark:text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    <span className="font-medium">{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-yellow-500" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-2 rounded-lg text-base font-bold ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                  <span className="xp-badge text-base font-bold">+{course.xpReward} XP</span>
                </div>
              </div>

              {/* Progress Bar */}
              {course.progress !== undefined && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base text-gray-600 dark:text-gray-400 font-medium">Progress</span>
                    <span className="text-base text-gray-600 dark:text-gray-400 font-medium">{course.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Prerequisites */}
              {course.prerequisites.length > 0 && course.status === 'locked' && (
                <div className="mb-4">
                  <div className="text-base text-gray-500 dark:text-gray-400 mb-2 font-medium">Prerequisites:</div>
                  <div className="flex flex-wrap gap-1">
                    {course.prerequisites.map((prereq, i) => {
                      const prereqCourse = courseData.find(c => c.id === prereq);
                      return (
                        <span key={i} className="text-sm bg-gray-100 dark:bg-midnight-600 text-gray-600 dark:text-gray-400 px-3 py-2 rounded-full flex items-center gap-2 font-medium">
                          {prereqCourse?.emoji} {prereqCourse?.title}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Badges */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {course.badges.map((badge, i) => (
                    <span key={i} className="text-base bg-gradient-to-r from-neon-lime/20 to-teal-400/20 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-full font-medium">
                      🏆 {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: course.status === 'locked' ? 1 : 1.05 }}
                whileTap={{ scale: course.status === 'locked' ? 1 : 0.95 }}
                onClick={() => course.status !== 'locked' && onSelectCourse(course.id)}
                disabled={course.status === 'locked'}
                className={`w-full py-4 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 text-lg ${
                  course.status === 'completed'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    : course.status === 'available'
                    ? 'btn-neon'
                    : 'bg-gray-300 dark:bg-midnight-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                {course.status === 'completed' ? (
                  <>
                    <span>Completed</span>
                    <span>✅</span>
                  </>
                ) : course.status === 'available' ? (
                  <>
                    <span>Start Course</span>
                    <ArrowRight size={20} />
                  </>
                ) : (
                  <>
                    <span>Locked</span>
                    <span>🔒</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">No courses found</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCatalog;
