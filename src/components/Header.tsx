import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, LogIn, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AdminPanel from './AdminPanel';

interface HeaderProps {
  isLoggedIn: boolean;
  isAdmin: boolean;
  onLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, isAdmin, onLogin }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-r from-black/10 to-white/10 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glassmorphism dark:glassmorphism-dark rounded-2xl px-8 py-6 flex items-center justify-between shadow-xl">
          {/* Logo and Academy Name */}
          <motion.div 
            className="flex items-center space-x-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center shadow-lg ring-2 ring-neon-blue/30 hover:ring-neon-blue/50 transition-all duration-300">
              <span className="text-white font-bold text-2xl drop-shadow-lg">A</span>
            </div>
            <div className="text-left">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-2"
              >
                AI-ERA Soft Skills Academy
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 1.0, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="text-lg text-gray-700 dark:text-gray-200 font-semibold mb-1"
              >
                Master the essential skills for thriving in the AI-driven future
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 1.0, 
                  delay: 1.0,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="text-sm text-gray-600 dark:text-gray-300"
              >
                Unlock your potential with AI-powered learning
              </motion.p>
            </div>
          </motion.div>


          {/* Right Side - Login, Admin, and Theme Toggle */}
          <div className="flex items-center space-x-4">
             {/* Login Button */}
             <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={onLogin}
               className="btn-primary flex items-center space-x-2"
             >
               <LogIn size={18} />
               <span>{isLoggedIn ? 'Logout' : 'Login'}</span>
             </motion.button>

             {/* Admin Panel Button - Only visible to admin users */}
             {isAdmin && (
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => setIsAdminPanelOpen(true)}
                 className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2"
               >
                 <Settings size={18} />
                 <span>Admin</span>
               </motion.button>
             )}

             {/* Theme Toggle */}
             <motion.button
               whileHover={{ scale: 1.1, rotate: 180 }}
               whileTap={{ scale: 0.9 }}
               onClick={toggleTheme}
               className="w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-400 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-dark-500 transition-colors duration-300"
             >
               {isDark ? (
                 <Sun size={20} className="text-yellow-500" />
               ) : (
                 <Moon size={20} className="text-gray-700" />
               )}
             </motion.button>
           </div>
                 </div>
       </div>

       {/* Admin Panel */}
       <AdminPanel
         isOpen={isAdminPanelOpen}
         onClose={() => setIsAdminPanelOpen(false)}
       />
     </motion.header>
   );
 };

export default Header;

