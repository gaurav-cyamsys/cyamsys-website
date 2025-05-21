"use client";

import React, { useRef } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    category: "Electronics Solutions",
    title: "Industrial RO Controller and Water ATM",
    src: "/waterAtm.jpeg",
    content: (
      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
        The project involved designing an industrial reverse osmosis (RO) controller system. 
        This controller regulated various parameters crucial for RO operations, such as pressure, 
        flow rate, and water quality. It offered precise control over the RO process, ensuring 
        optimal performance and efficiency.
      </p>
    ),
  },
  {
    category: "Smart Manufacturing",
    title: "Waste Segregation System",
    src: "/waste.jpg",
    content: (
      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
        Implemented waste segregation utilizing a master-slave system, where the master unit 
        controlled segregation processes across multiple manufacturing sites, ensuring efficient 
        resource utilization and environmental sustainability for both dry and wet streams.
      </p>
    ),
  },
  {
    category: "Medical Technology",
    title: "Medical Air & Vacuum Pressure Monitoring",
    src: "/pressure.jpeg",
    content: (
      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
        The project involved developing a system to monitor air and vacuum pressure in medical 
        facilities. This system ensured precise control and maintenance of pressure levels critical 
        for various medical procedures, such as surgeries and sterile environments.
      </p>
    ),
  },
];

const stats = [
  { number: "10+", label: "Projects Completed" },
  { number: "5+", label: "Industries Served" },
  { number: "100%", label: "Client Satisfaction" }
];

export function AppleCardsCarouselDemo() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-3/4 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-orange-500/10 rounded-full blur-2xl animate-pulse" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-400 text-sm font-medium border border-orange-500/30">
              Our Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
              10+ Innovative Projects
            </span>{" "}
            Successfully Delivered!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Explore our portfolio of cutting-edge solutions that have transformed industries and solved complex challenges
          </motion.p>
        </div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <Carousel 
            items={projects.map((project, index) => (
              <Card key={project.title} card={project} index={index} />
            ))} 
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl px-3 pt-3 pb-1 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 flex flex-col justify-between"
              >
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
                  {stat.number}
                </h3>
                <p className="text-[10px] sm:text-sm text-gray-400 mt-auto">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
