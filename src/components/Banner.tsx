import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Banner: React.FC = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glassmorphism dark:glassmorphism-dark rounded-2xl p-6 text-center"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(16, 185, 129, 0.3)",
                "0 0 40px rgba(16, 185, 129, 0.5)",
                "0 0 20px rgba(16, 185, 129, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-neon-green to-emerald-400 text-white px-6 py-3 rounded-full font-semibold"
          >
            <CheckCircle size={24} className="animate-pulse" />
            <span>✅ Offline & Online Classes Available</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 dark:text-gray-300 text-sm"
          >
            Flexible learning options to fit your schedule and preferences
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

