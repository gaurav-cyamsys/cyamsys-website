"use client";

import React, { useRef, useEffect } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const slideData = [
  {
    category: "Electronics Solutions",
    title: "Industrial RO Controller and Water ATM",
    src: "/waterAtm.jpeg",
    content: (
      <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
        The project involved designing an industrial
        reverse osmosis (RO) controller system. This
        controller regulated various parameters crucial
        for RO operations, such as pressure, flow rate,
        and water quality. It offered precise control over
        the RO process, ensuring optimal performance
        and efficiency. Additionally, the controller
        featured advanced monitoring capabilities
      </p>
    ),
  },
  {
    category: "Smart Manufacturing",
    title: "Waste Segregation System",
    src: "/waste.jpg",
    content: (
      <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
        Implemented waste segregation utilizing a
        master-slave system, where the master unit
        controlled segregation processes across multiple
        manufacturing sites, ensuring efficient resource
        utilization and environmental sustainability for
        both dry and wet streams
      </p>
    ),
  },
  // {
  //   category: "Innovative Lighting",
  //   title: "Pulse Light Illuminator",
  //   src: "", // No image provided
  //   content: (
  //     <p className="text-neutral-400 text-base md:text-lg">
  //       Developed a system that controls light at different frequencies,
  //       allowing independent control of light modulation at various frequencies.
  //     </p>
  //   ),
  // },
  // {
  //   category: "Healthcare IoT",
  //   title: "OT Control Panel",
  //   src: "", // No image provided
  //   content: (
  //     <p className="text-neutral-400 text-base md:text-lg">
  //       Deployed an IoT-enabled control panel and centralized monitoring system
  //       for real-time oversight of facility operations. This integration
  //       facilitated efficient communication, proactive maintenance, and improved
  //       decision-making.
  //     </p>
  //   ),
  // },
  {
    category: "Medical Technology",
    title: "Medical Air & Vacuum Pressure Monitoring",
    src: "/pressure.jpeg",
    content: (
      <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
        The project involved developing a system to
        monitor air and vacuum pressure in medical
        facilities. This system ensured precise control
        and maintenance of pressure levels critical for
        various medical procedures, such as surgeries
        and sterile environments
      </p>
    ),
  },
];

export function AppleCardsCarouselDemo() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const cards = slideData.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <section 
      ref={containerRef}
      className="w-full min-h-screen py-20 flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-400 text-sm font-medium border border-orange-500/30">
              Our Portfolio
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
              10+ Innovative Projects
            </span>{" "}
            Successfully Delivered!
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Explore our portfolio of cutting-edge solutions that have transformed industries and solved complex challenges
          </motion.p>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <Carousel items={cards} />
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "5+", label: "Industries Served" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
                {stat.number}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
