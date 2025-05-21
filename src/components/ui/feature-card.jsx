"use client"
import React, { useEffect, useState } from "react";
import { useId } from "react";
import EmblaCarousel from "./emblaCarousel";
import { motion } from "framer-motion";

export function FeaturesSectionDemo({featureRef}) {
  const OPTIONS = { dragFree: true }
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div 
      ref={featureRef} 
      className="relative w-full min-h-screen flex flex-col justify-start items-center snap-mandatory snap-start pt-16 sm:pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 left-4 sm:left-8 top-[20%] sm:top-[25%]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img className="w-full h-full object-cover filter blur-[2px] opacity-70 hover:opacity-90 transition-opacity duration-300" src="/Innovation.png" alt="Innovation"/>
        </motion.div>
        <motion.div 
          className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 left-4 sm:left-8 top-[60%] sm:top-[65%]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img className="w-full h-full object-cover filter blur-[2px] opacity-70 hover:opacity-90 transition-opacity duration-300" src="/electronics.png" alt="Electronics"/>
        </motion.div>
        <motion.div 
          className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 right-4 sm:right-8 top-[20%] sm:top-[25%]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img className="w-full h-full object-cover filter blur-[2px] opacity-70 hover:opacity-90 transition-opacity duration-300" src="/research.png" alt="Research"/>
        </motion.div>
        <motion.div 
          className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 right-4 sm:right-8 top-[60%] sm:top-[65%]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img className="w-full h-full object-cover filter blur-[2px] opacity-70 hover:opacity-90 transition-opacity duration-300" src="/iot.png" alt="IoT"/>
        </motion.div>
      </div>
      
      {/* Title */}
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8 sm:mb-12 relative z-20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Features</span>
      </motion.h2>    
      
      {/* Carousel */}
      <motion.div 
        className="w-full max-w-7xl mx-auto flex flex-col justify-center relative z-20 px-4 sm:px-6 lg:px-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      > 
        <EmblaCarousel slides={features} options={OPTIONS} />
      </motion.div>
    </motion.div>
  );
}

const features = [
  {
    title: "Innovation Driven R&D",
    description: "Built for engineers, developers, dreamers, thinkers and doers.",
    icon: "💡"
  },
  {
    title: "Precision Engineering",
    description: "It's as easy as using an Apple, and as expensive as buying one.",
    icon: "⚙️"
  },
  {
    title: "Sustainable Innovation",
    description: "Our prices are best in the market. No cap, no lock, no credit card required.",
    icon: "🌱"
  },
  {
    title: "End to End Development",
    description: "We just cannot be taken down by anyone.",
    icon: "🔄"
  },
  {
    title: "Quality Assurance",
    description: "You can simply share passwords instead of buying new seats.",
    icon: "✅"
  },
  {
    title: "Comprehensive IoT Solutions",
    description: "From sensor design to IoT integration, we create seamless smart solutions.",
    icon: "🔌"
  },
  {
    title: "Advanced PCB Manufacturing",
    description: "High-quality PCBs for reliable and durable electronic products.",
    icon: "🔋"
  },
  {
    title: "Embedded Systems Expertise",
    description: "Cutting-edge embedded solutions for high-performance and reliable electronics.",
    icon: "💻"
  },
];

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? Array.from({ length: 5 }, () => [7, 8]);
  const adjustedSize = size ?? 20;

  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
        <GridPattern width={adjustedSize} height={adjustedSize} x="0" y="0" squares={p} className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10" />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();
  return (
      <svg aria-hidden="true" {...props}>
          <defs>
              <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
                  <path d={`M.5 ${height}V.5H${width}`} fill="none" />
              </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
          {squares && (
              <svg key={`${x}-${y}`} x={x} y={y} className="overflow-visible">
                  {squares.map(([sx, sy], index) => (
                      <rect key={index} width={width + 1} height={height + 1} x={sx * width} y={sy * height} strokeWidth="0" />
                  ))}
              </svg>
          )}
      </svg>
  );
}
