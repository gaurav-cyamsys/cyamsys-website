'use client';

import { motion } from 'framer-motion';

export default function NavigationDots({ activeSection, onSectionClick }) {
  const sections = ["hero", "features", "quote", "services", "projects", "stats", "products", "contact"];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col space-y-4">
      {sections.map((section) => (
        <motion.button
          key={section}
          onClick={() => onSectionClick(section)}
          className={`relative w-3 h-3 rounded-full transition-all duration-300 nav-dot ${
            activeSection === section 
              ? section === "services"
                ? "services active"
                : "bg-yellow-400 scale-125"
              : "bg-gray-500 hover:bg-gray-300"
          }`}
          aria-label={`Scroll to ${section} section`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {activeSection === section && section === "services" && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full bg-orange-500"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.8, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-orange-500"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 2.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-orange-500"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 2.6, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
              />
            </>
          )}
        </motion.button>
      ))}
    </div>
  );
} 