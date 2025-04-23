"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { useRef } from "react";

export function Testimonial() {
  const testimonials = [
    {
      src: '/goc.png'
    },
    {
      src: '/beaver.jpg'
    },
    {
      src: '/unissi.png'
    },
    {
      src: '/shoghi.png'
    },
    {
      src: '/safe.png'
    },
    {
      src: '/abhith.png'
    },
    {
      src: '/axess.png'
    },
    {
      src: '/nmelss.png'
    },
    {
      src: '/cbs.jpg'
    },
    {
      src: '/v2sk.png'
    },
  ];

  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      className="w-full py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-400 text-sm font-medium border border-orange-500/30">
              Our Clients
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
              Trusted By Many
            </span>{" "}
            Industry Leaders
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            We've earned the trust of leading companies across various industries with our innovative solutions
          </motion.p>
        </motion.div>

        {/* Client Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 via-gray-900/50 to-transparent z-10 pointer-events-none" />
          
          {/* Carousel Container */}
          <div className="py-8 px-4 bg-gray-800/30 backdrop-blur-sm rounded border-[0.1px] border-gray-700/50 overflow-hidden">
            <InfiniteMovingCards pauseOnHover={false} items={testimonials} direction="right" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}