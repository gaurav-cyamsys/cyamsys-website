"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Automation",
    description: "Streamline your operations with cutting-edge automation solutions",
    icon: "/images/Automation.png",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Hardware Engineering",
    description: "Expert hardware design and development for your products",
    icon: "/images/HardwareEngg.png",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Firmware",
    description: "Robust and efficient firmware solutions for embedded systems",
    icon: "/images/Firmware.png",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "IoT Solutions",
    description: "Connect and control your devices with smart IoT implementations",
    icon: "/images/IoT.png",
    color: "from-green-500 to-emerald-500"
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </motion.div>

      <div className="max-w-5xl mx-auto relative px-24 md:px-32">
        {/* Header Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Empowering businesses with cutting-edge technology solutions
          </motion.p>
        </motion.div>

        {/* Services Grid with Enhanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div 
                className="relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(255,255,255,0.1)"
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}
                  animate={{ 
                    opacity: hoveredIndex === index ? 0.2 : 0.1,
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content with Animation */}
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.5 }}
                  >
                    <motion.div 
                      className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-900/50 p-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.4, duration: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">
                        {service.description}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Enhanced Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating Particles Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{ 
                y: [null, Math.random() * -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
