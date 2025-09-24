import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-100 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Ai-ERA</h3>
                <p className="text-gray-400">Soft Skills Academy</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Empowering Future-Ready Professionals with essential soft skills for the AI era. 
              Transform your career with our comprehensive training programs.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://linkedin.com/company/ai-era-soft-skills-academy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-dark-300 hover:bg-neon-blue rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com/aiera_academy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-dark-300 hover:bg-neon-purple rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com/aiera_academy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-dark-300 hover:bg-neon-pink rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <a
                  href="#brochure-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('brochure-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                >
                  About Us
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                >
                  Our Courses
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <a
                  href="#instructors-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('instructors-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                >
                  Instructors
                </a>
              </motion.li>
              {['Testimonials', 'Blog', 'Careers'].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 4), duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <Mail size={18} className="text-neon-blue" />
                <a
                  href="mailto:softskills4aiera@gmail.com"
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 cursor-pointer"
                  title="Click to send email"
                >
                  softskills4aiera@gmail.com
                </a>
              </motion.div>
              {/* Phone Number - Commented out for now, easy to restore later */}
              {/* 
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <Phone size={18} className="text-neon-blue" />
                <a
                  href="tel:+916304872757"
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 cursor-pointer"
                  title="Click to call"
                >
                  +91 6304872757
                </a>
              </motion.div>
              */}
              {/* Address - Commented out for now, easy to restore later */}
              {/* 
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <MapPin size={18} className="text-neon-blue mt-1" />
                <a
                  href="https://maps.google.com/?q=Techzone+Academy,+Second+Floor,+Synosoft+Building,+Beside+Chicha's+Restaurant,+Lane:+Veer+Nagar,+Lakdikapul,+Hyderabad,+Telangana+500004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 cursor-pointer"
                >
                  <div>Techzone Academy, Second Floor</div>
                  <div>Synosoft Building, Beside Chicha's Restaurant</div>
                  <div>Lane: Veer Nagar, Lakdikapul</div>
                  <div>Hyderabad, Telangana 500004</div>
                  <div className="text-xs text-gray-500 hover:text-neon-blue mt-1">📍 Click for directions</div>
                </a>
              </motion.div>
              */}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Ai-ERA Soft Skills Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-neon-blue text-lg font-semibold">
            "Empowering Future-Ready Professionals."
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

