import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Twitter, Globe, Github, MapPin, BookOpen, Award } from 'lucide-react';

interface Instructor {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  expertise: string[];
  courses: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    github?: string;
  };
}

interface InstructorProfileProps {
  instructor: Instructor;
  onClose: () => void;
}

const InstructorProfile: React.FC<InstructorProfileProps> = ({ instructor, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-dark-200 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-neon-purple to-neon-pink p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                />
                <div>
                  <h2 className="text-2xl font-bold">{instructor.name}</h2>
                  <p className="text-purple-100">{instructor.role}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6">
            {/* Bio */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award size={20} className="mr-2 text-neon-yellow" />
                About
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {instructor.bio}
              </p>
            </div>

            {/* Expertise */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <MapPin size={20} className="mr-2 text-neon-blue" />
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {instructor.expertise.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <BookOpen size={20} className="mr-2 text-neon-green" />
                Courses Taught
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {instructor.courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-dark-300 rounded-lg p-4 border-l-4 border-neon-green"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {course}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Comprehensive course covering all aspects of this skill
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Connect & Follow
              </h3>
              <div className="flex flex-wrap gap-4">
                {instructor.social.linkedin && (
                  <motion.a
                    href={instructor.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </motion.a>
                )}
                
                {instructor.social.twitter && (
                  <motion.a
                    href={instructor.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200"
                  >
                    <Twitter size={18} />
                    <span>Twitter</span>
                  </motion.a>
                )}
                
                {instructor.social.website && (
                  <motion.a
                    href={instructor.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <Globe size={18} />
                    <span>Website</span>
                  </motion.a>
                )}
                
                {instructor.social.github && (
                  <motion.a
                    href={instructor.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <button className="btn-primary text-lg px-8 py-4">
                Enroll in {instructor.name}'s Courses
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InstructorProfile;

