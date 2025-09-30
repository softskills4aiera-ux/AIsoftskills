import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Star } from 'lucide-react';
import jsPDF from 'jspdf';

// Comprehensive brochure generation function
const downloadComprehensiveBrochure = (brochureData: BrochureData | null, userName: string) => {
  if (!brochureData) return;

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;

  // Helper function to add text with word wrap
  const addText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 12, isBold: boolean = false) => {
    doc.setFontSize(fontSize);
    if (isBold) {
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFont('helvetica', 'normal');
    }
    
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + (lines.length * fontSize * 0.5) + 5; // Increased line spacing
  };

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;
      return true;
    }
    return false;
  };

  // Cover Page
  doc.setFillColor(41, 128, 185); // Blue background
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  
  doc.setTextColor(255, 255, 255); // White text
  yPosition = addText('Ai-ERA Soft Skills Academy', 20, 60, pageWidth - 40, 24, true);
  yPosition = addText('Empowering Future Leaders Through AI-Driven Learning', 20, yPosition, pageWidth - 40, 16, true);
  
  yPosition = 120;
  doc.setTextColor(255, 255, 255);
  yPosition = addText(brochureData.title, 20, yPosition, pageWidth - 40, 18, true);
  yPosition = addText(brochureData.description, 20, yPosition, pageWidth - 40, 12);
  
  yPosition = 200;
  doc.setTextColor(255, 255, 255);
  yPosition = addText('Prepared for: ' + userName, 20, yPosition, pageWidth - 40, 14, true);
  yPosition = addText('Generated on: ' + new Date().toLocaleDateString(), 20, yPosition, pageWidth - 40, 12);

  // Page 2 - Course Overview
  doc.addPage();
  doc.setTextColor(0, 0, 0);
  yPosition = 20;
  
  yPosition = addText('COURSE OVERVIEW', 20, yPosition, pageWidth - 40, 20, true);
  yPosition += 10;
  
  yPosition = addText('Our comprehensive 8-module program covers essential soft skills for academic, professional, and personal success. Each module includes 6 subtopics with interactive learning experiences, assessments, and real-world applications.', 20, yPosition, pageWidth - 40, 12);
  yPosition += 15;

  // Modules and Subtopics
  const modules = [
    {
      title: 'Module 1: Communication Skills (Human)',
      subtopics: ['Active Listening', 'Public Speaking', 'Written Communication', 'Non-verbal Communication', 'Conflict Resolution', 'Presentation Skills']
    },
    {
      title: 'Module 2: Adaptive Learning & Lifelong Learning Skills',
      subtopics: ['Learning Strategies', 'Memory Techniques', 'Information Processing', 'Skill Transfer', 'Learning Agility', 'Continuous Improvement']
    },
    {
      title: 'Module 3: Prompt-Context Engineering (Machine)',
      subtopics: ['Prompt Design', 'Context Management', 'AI Communication', 'Prompt Optimization', 'Bias Recognition', 'Ethical AI Use']
    },
    {
      title: 'Module 4: Critical Thinking & Problem Solving',
      subtopics: ['Logical Reasoning', 'Problem Analysis', 'Creative Solutions', 'Decision Making', 'Risk Assessment', 'Root Cause Analysis']
    },
    {
      title: 'Module 5: Design Thinking (Creativity to Solve Problems)',
      subtopics: ['Empathy', 'Ideation', 'Prototyping', 'Testing', 'Iteration', 'User-Centered Design']
    },
    {
      title: 'Module 6: Teamwork & Collaboration',
      subtopics: ['Team Dynamics', 'Leadership', 'Conflict Management', 'Remote Collaboration', 'Cross-functional Teams', 'Team Building']
    },
    {
      title: 'Module 7: Data-Driven Decision Making',
      subtopics: ['Data Analysis', 'Statistical Thinking', 'Data Visualization', 'Hypothesis Testing', 'Metrics & KPIs', 'Evidence-Based Decisions']
    },
    {
      title: 'Module 8: Managing Mental & Physical Health',
      subtopics: ['Stress Management', 'Work-Life Balance', 'Mental Health Awareness', 'Physical Wellness', 'Resilience Building', 'Mindfulness Practices']
    }
  ];

  modules.forEach((module, index) => {
    checkNewPage(40);
    
    // Module title
    yPosition = addText(module.title, 20, yPosition, pageWidth - 40, 14, true);
    yPosition += 5;
    
    // Subtopics
    module.subtopics.forEach((subtopic, subIndex) => {
      checkNewPage(15);
      yPosition = addText(`• ${subtopic}`, 30, yPosition, pageWidth - 50, 11);
    });
    
    yPosition += 10;
  });

  // Page 3 - Features and Benefits
  doc.addPage();
  yPosition = 20;
  
  // Check if we have enough space for the heading and all features
  const features = [
    'AI-Powered Learning: Personalized feedback and adaptive content',
    'Real-World Applications: Academic, professional, and personal contexts',
    'Interactive Assessments: Quizzes, challenges, and practical exercises',
    'Progress Tracking: XP system, badges, and achievement recognition',
    'Video Content: 5-minute focused lessons with comprehensive scripts',
    'Flexible Learning: Self-paced modules accessible anytime',
    'Expert-Designed: Content created by industry professionals',
    'Comprehensive Coverage: 48 subtopics across 8 essential skill areas'
  ];
  
  // Calculate space needed for heading + all features
  const spaceNeeded = 50 + (features.length * 20); // 50 for heading, 20 per feature
  if (yPosition + spaceNeeded > pageHeight - 20) {
    doc.addPage();
    yPosition = 20;
  }
  
  // Add a subtle background for the section
  doc.setFillColor(248, 250, 252); // Very light gray background
  doc.rect(15, yPosition - 5, pageWidth - 30, 180, 'F');
  
  yPosition = addText('KEY FEATURES & BENEFITS', 20, yPosition, pageWidth - 40, 20, true);
  yPosition += 15;
  
  // Add subtitle
  doc.setFontSize(11);
  doc.setTextColor(100, 100, 100);
  yPosition = addText('Transform your skills with our comprehensive learning platform', 20, yPosition, pageWidth - 40, 11);
  yPosition += 12;
  
  // Reset text color
  doc.setTextColor(0, 0, 0);
  
  features.forEach((feature, index) => {
    // Add simple bullet point
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('•', 20, yPosition + 2);
    
    // Add feature text with proper width
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    yPosition = addText(feature, 30, yPosition, pageWidth - 50, 10);
    yPosition += 6; // Compact spacing between features
  });

  // Page 4 - Pricing and Contact
  doc.addPage();
  yPosition = 20;
  
  yPosition = addText('PRICING & CONTACT INFORMATION', 20, yPosition, pageWidth - 40, 20, true);
  yPosition += 20;
  
  // Pricing
  yPosition = addText('PRICING PLANS', 20, yPosition, pageWidth - 40, 16, true);
  yPosition += 10;
  
  yPosition = addText(`Individual: ${brochureData.pricing.individual}`, 20, yPosition, pageWidth - 40, 14, true);
  yPosition = addText(`Team (5-20): ${brochureData.pricing.team}`, 20, yPosition, pageWidth - 40, 14, true);
  yPosition = addText(`Enterprise (20+): ${brochureData.pricing.enterprise}`, 20, yPosition, pageWidth - 40, 14, true);
  yPosition += 20;
  
  // Contact Information
  yPosition = addText('CONTACT INFORMATION', 20, yPosition, pageWidth - 40, 16, true);
  yPosition += 10;
  
  yPosition = addText('Email: info@aiera-softskills.com', 20, yPosition, pageWidth - 40, 12);
  yPosition = addText('Website: https://aiera-softskills.com', 20, yPosition, pageWidth - 40, 12);
  yPosition = addText('Phone: +1 (555) 123-4567', 20, yPosition, pageWidth - 40, 12);
  yPosition += 20;
  
  // Footer
  yPosition = addText('Thank you for your interest in Ai-ERA Soft Skills Academy!', 20, yPosition, pageWidth - 40, 12, true);
  yPosition = addText('Start your journey to professional excellence today.', 20, yPosition, pageWidth - 40, 12);

  // Save the PDF
  const fileName = `Ai-ERA_Soft_Skills_Brochure_${userName.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.pdf`;
  doc.save(fileName);
};

interface BrochureData {
  title: string;
  description: string;
  topics: Array<{
    category: string;
    courses: string[];
  }>;
  features: string[];
  pricing: {
    individual: string;
    team: string;
    enterprise: string;
  };
}

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  brochureData: BrochureData;
}

const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, brochureData }) => {
  if (!isOpen) return null;

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
          <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{brochureData.title}</h2>
                <p className="text-blue-100 mt-1">{brochureData.description}</p>
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
            {/* Course Categories */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Course Categories
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {brochureData.topics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-dark-300 rounded-lg p-4"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
                      {topic.category}
                    </h4>
                    <ul className="space-y-2">
                      {topic.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center">
                          <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                What You'll Get
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {brochureData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Star size={16} className="text-neon-yellow flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>


            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <button 
                onClick={() => {
                  // Use the same comprehensive PDF generation as BrochureInstructors
                  downloadComprehensiveBrochure(brochureData, 'Brochure Viewer');
                }}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 mx-auto"
              >
                <Download size={20} />
                <span>Download Full Brochure</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BrochureModal;
