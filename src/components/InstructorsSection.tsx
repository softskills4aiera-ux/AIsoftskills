import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import InstructorProfile from './InstructorProfile';

interface Instructor {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  expertise: string[];
  courses: string[];
  social: {
    linkedin: string;
    website: string;
    github?: string;
  };
}

const InstructorsSection: React.FC = () => {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);

  useEffect(() => {
    // Load instructors data
    fetch('/instructorsData.json')
      .then(res => res.json())
      .then(data => setInstructors(data.instructors))
      .catch(err => console.error('Error loading instructors data:', err));
  }, []);

  return (
    <div>
      {/* Instructors Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glassmorphism dark:glassmorphism-dark rounded-2xl p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Expert Instructors
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Learn from industry professionals with years of real-world experience
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {instructors.map((instructor) => (
            <motion.div
              key={instructor.id}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedInstructor(instructor)}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {instructor.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {instructor.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {instructor.expertise.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                        +{instructor.expertise.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Instructor Profile Modal */}
      {selectedInstructor && (
        <InstructorProfile
          instructor={selectedInstructor}
          onClose={() => setSelectedInstructor(null)}
        />
      )}
    </div>
  );
};

export default InstructorsSection;