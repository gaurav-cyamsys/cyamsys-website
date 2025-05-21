'use client';

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

function Quote() {
  const quote = "TO SCALE HIGH IN ELECTRONICS INDUSTRY WITH QUALITY, PRECISION AND FUTURE DEVELOPMENT";
  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Update dimensions on resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <motion.figure 
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="relative max-w-screen-xl mx-auto text-center mb-10 sm:mb-20 py-8 sm:py-16 min-h-screen flex flex-col justify-center items-center snap-mandatory snap-y snap-center overflow-hidden"
    >
      {/* Gold Vertical Lines */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-yellow-400/60 via-yellow-500/30 to-yellow-400/60" />
      <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-yellow-400/60 via-yellow-500/30 to-yellow-400/60" />

      {/* Blurred Cyamsys Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="relative w-[90%] sm:w-[80%] h-[90%] sm:h-[80%] max-w-3xl max-h-3xl mx-auto">
          <Image
            src="/logo.png"
            alt="Cyamsys Logo"
            fill
            className="object-contain filter blur-[8px] opacity-30"
            priority
          />
        </div>
      </motion.div>

      {/* Yellow Quote Icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 flex justify-center mb-4 sm:mb-6"
      >
        <span className="text-yellow-400 text-5xl sm:text-6xl md:text-7xl font-bold">&quot;</span>
      </motion.div>

      {/* Quote Text Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 px-4 sm:px-6 md:px-8 w-full flex justify-center"
      >
        <div className="border border-yellow-500/60 rounded-md py-6 px-4 sm:py-8 sm:px-8 bg-black/60 backdrop-blur-sm w-full max-w-2xl mx-auto">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-yellow-100 uppercase tracking-wide text-center">
            {quote}
          </h2>
        </div>
      </motion.div>

      {/* Author Pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 flex justify-center mt-6"
      >
        <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-semibold shadow-md text-sm sm:text-base">
          Satya Kaushik <span className="font-normal text-yellow-900/80">| CEO Cyamsys</span>
        </span>
      </motion.div>
    </motion.figure>
  );
}

export default Quote;