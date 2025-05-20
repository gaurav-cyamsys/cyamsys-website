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
      className="relative max-w-screen-xl mx-auto text-center mb-20 py-16 h-screen flex flex-col justify-center snap-mandatory snap-y snap-center overflow-hidden"
    >
      {/* Blurred Cyamsys Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="relative w-[80%] h-[80%] max-w-3xl max-h-3xl">
          <Image
            src="/logo.png"
            alt="Cyamsys Logo"
            fill
            className="object-contain filter blur-[8px] opacity-30"
            priority
          />
        </div>
      </motion.div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {dimensions.width > 0 && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * dimensions.width, 
              y: Math.random() * dimensions.height,
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * dimensions.width, 
              y: Math.random() * dimensions.height,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1
            }}
            transition={{ 
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{ 
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(255, 215, 0, 0.8)' : 
                i % 3 === 1 ? 'rgba(255, 165, 0, 0.8)' : 
                'rgba(255, 255, 255, 0.8)'
              } 0%, transparent 70%)`
            }}
          />
        ))}
        
        {/* Background gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-5 blur-3xl"></div>
      </div>
      
      {/* Decorative frame */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent"></div>
      </motion.div>
      
      {/* Quote icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-10"
      >
        <div className="relative">
          <svg 
            className="w-20 h-20 mx-auto mb-6 text-yellow-400" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
          </svg>
        </div>
      </motion.div>
      
      {/* Quote text */}
      <blockquote className="relative z-10 px-4 md:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative"
        >
          <div className="relative bg-black/20 backdrop-blur-sm p-8 rounded-xl border border-yellow-400/30 shadow-2xl">
            <p className="text-yellow-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium italic text-center max-w-4xl mx-auto leading-relaxed">
              {quote}
            </p>
          </div>
        </motion.div>
      </blockquote>
      
      {/* Attribution */}
      <motion.figcaption 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative z-10 flex items-center justify-center mt-10 space-x-3 rtl:space-x-reverse"
      >
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-yellow-400/30">
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-yellow-400/30">
            <cite className="pe-6 font-semibold text-white text-xl">Satya Kaushik</cite>
            <cite className="ps-6 text-sm text-yellow-300">CEO Cyamsys</cite>
          </div>
        </div>
      </motion.figcaption>
      
      {/* Decorative elements */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex space-x-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
            ></motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Floating elements */}
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              initial={{ x: -100, y: -100, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-20 left-20 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400/30 to-orange-500/30 blur-xl z-0"
            />
            <motion.div
              initial={{ x: 100, y: 100, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400/30 to-indigo-500/30 blur-xl z-0"
            />
          </>
        )}
      </AnimatePresence>
    </motion.figure>
  );
}

export default Quote;