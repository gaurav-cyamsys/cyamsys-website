import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const slideData = [
  {
    name: "Automatic Door Controller",
    designation: "Electronic Solutions",
    src: "/door.jpeg",
    quote:
"Automatic Door Control System is an advanced solution for automating door operations with precise direction control, adjustable speed settings, and integrated safety mechanisms. It supports multiple sensor inputs (hand switch, foot switch, photo cell) and features intuitive LED indicators for monitoring. Designed for residential, commercial, and industrial applications, it ensures seamless functionality and enhanced safety."
  },
  {
    name: "PLC Pannel",
    designation: "IoT Solutions",
    src: "/OT.jpeg",
    quote:
      "The project aimed to deploy an IoT-enabled control panel and centralized monitoring system for real-time oversight of facility operations.Integrating IoT facilitated efficient communication, proactive maintenance, and decision-making, leading to improved efficiency"
  },
  {
    name: "Water Treatment System",
    designation: "IoT Solutions",
    src: "2.jpeg",
    quote: "Implemented an IoT-based system for real-time water quality and treatment monitoring like ph measuring, tds temprature, turbodity and chlorine dosing to ensure access to clean and,safe drinking water in rural and remote areas."
  },
];

export default function Products({ onExit }) {
  const carouselRef = useRef(null);
  const [scrollEnd, setScrollEnd] = useState(false);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 10;
      setScrollEnd(atBottom);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-screen overflow-y-auto scrollbar-hide ${
        scrollEnd ? "" : "snap-y snap-mandatory"
      }`}
      ref={carouselRef}
    >
      <div className="flex w-full h-screen flex-col items-center">
        {slideData.map((slide, index) => (
          <motion.div
            key={index}
            className="w-full h-screen p-6 justify-center items-center bg-gray-100 text-slate-900 shadow-lg snap-center flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Mobile Layout: PRODUCT LABEL -> TEXT CONTENT -> IMAGE */}
            <div className="mt-10 flex flex-col h-screen items-center md:hidden">
              <h1 className="text-3xl font-bold italic text-purple-700 mb-4">
                PRODUCT #{index + 1}
              </h1>
              <div className="text-center px-4">
                <h2 className="text-lg font-bold">{slide.name}</h2>
                <h3 className="text-orange-400 text-sm font-medium">{slide.designation}</h3>
                <p className="text-sm mt-4">{slide.quote}</p>
              </div>
              {slide.src && (
                <img
                  src={slide.src}
                  alt={slide.designation}
                  className="w-full h-1/2 mt-6 rounded-xl object-cover"
                />
              )}
            </div>

            {/* Desktop Layout: Alternating Left-Right Structure */}
            <div className={`hidden md:flex h-screen justify-between items-center gap-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
              {slide.src && (
                <img
                  src={slide.src}
                  alt={slide.designation}
                  className="w-1/2 h-3/4 my-auto rounded-xl"
                />
              )}
              <div className="w-1/3 h-3/4 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold">{slide.name}</h2>
                  <h3 className="text-orange-400 text-lg font-medium">{slide.designation}</h3>  
                  <p className="text-lg mt-10">{slide.quote}</p>  
                </div>
                <h1 className="text-5xl font-bold italic my-auto text-purple-700">
                  PRODUCT #{index + 1}
                </h1>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
