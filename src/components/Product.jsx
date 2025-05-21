import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slideData = [
  {
    name: "Automatic Door Controller",
    designation: "Electronic Solutions",
    src: "/door.jpeg",
    quote:
"Automatic Door Control System is an advanced solution for automating door operations with precise direction control, adjustable speed settings, and integrated safety mechanisms. It supports multiple sensor inputs (hand switch, foot switch, photo cell) and features intuitive LED indicators for monitoring. Designed for residential, commercial, and industrial applications, it ensures seamless functionality and enhanced safety.",
    color: "from-blue-500 to-indigo-600",
    icon: "🚪",
    accentColor: "from-blue-400 to-indigo-500"
  },
  {
    name: "PLC Pannel",
    designation: "IoT Solutions",
    src: "/OT.jpeg",
    quote:
      "The project aimed to deploy an IoT-enabled control panel and centralized monitoring system for real-time oversight of facility operations.Integrating IoT facilitated efficient communication, proactive maintenance, and decision-making, leading to improved efficiency",
    color: "from-purple-500 to-pink-600",
    icon: "🔧",
    accentColor: "from-purple-400 to-pink-500"
  },
  {
    name: "Water Treatment System",
    designation: "IoT Solutions",
    src: "2.jpeg",
    quote: "Implemented an IoT-based system for real-time water quality and treatment monitoring like ph measuring, tds temprature, turbodity and chlorine dosing to ensure access to clean and,safe drinking water in rural and remote areas.",
    color: "from-teal-500 to-cyan-600",
    icon: "💧",
    accentColor: "from-teal-400 to-cyan-500"
  },
];

export default function Products({ onExit }) {
  const carouselRef = useRef(null);
  const [scrollEnd, setScrollEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState({});

  // Preload all images when component mounts
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = slideData.map(slide => {
        if (!slide.src) return Promise.resolve();
        
        return new Promise((resolve) => {
          const img = new window.Image();
          img.onload = () => {
            setPreloadedImages(prev => ({
              ...prev,
              [slide.src]: true
            }));
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${slide.src}`);
            resolve(); // Resolve anyway to not block other images
          };
          img.src = slide.src;
        });
      });
      
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };
    
    preloadImages();
    
    // Set visibility after a short delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 10;
      setScrollEnd(atBottom);
      
      // Calculate which product is currently in view
      const scrollPosition = container.scrollTop;
      const viewportHeight = container.clientHeight;
      const newIndex = Math.round(scrollPosition / viewportHeight);
      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to render product image with proper loading
  const renderProductImage = (slide, index, isMobile = false) => {
    if (!slide.src) return null;
    
    const isActive = index === activeIndex;
    const isNext = index === activeIndex + 1;
    const isPrev = index === activeIndex - 1;
    
    // Determine loading priority based on visibility
    const priority = isActive || isNext || isPrev;
    
    return (
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className={`w-full ${isMobile ? 'max-w-md h-64 mt-4' : 'h-full'} rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative group`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={slide.src}
          alt={slide.designation}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            willChange: 'transform'
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
            <p className="text-sm font-medium text-gray-800 line-clamp-2">{slide.quote.substring(0, 100)}...</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className={`w-full h-screen overflow-y-auto scrollbar-hide ${
        scrollEnd ? "" : "snap-y snap-mandatory"
      }`}
      ref={carouselRef}
    >
      <div className="flex w-full flex-col items-center">
        {slideData.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: imagesLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`w-full min-h-screen p-4 md:p-6 justify-center items-center text-white shadow-lg snap-center flex flex-col relative overflow-hidden bg-black`}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
              <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br ${slide.color} opacity-10 blur-3xl`}></div>
              <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br ${slide.color} opacity-10 blur-3xl`}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br ${slide.color} opacity-5 blur-3xl"></div>
            </div>

            {/* Product number badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full shadow-lg z-20"
            >
              <h1 className="text-lg font-bold italic">
                PRODUCT #{index + 1}
              </h1>
            </motion.div>

            {/* Mobile Layout: PRODUCT LABEL -> TEXT CONTENT -> IMAGE */}
            <div className="mt-6 flex flex-col items-center md:hidden relative z-10 w-full">
              <div className="text-center px-4 bg-black/90 backdrop-blur-sm p-5 rounded-2xl shadow-xl w-full max-w-md border border-gray-700 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center justify-center mb-4 sticky top-0 bg-black/60 backdrop-blur-sm py-2 z-10"
                >
                  <span className="text-4xl mr-3">{slide.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{slide.name}</h2>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-md"
                >
                  {slide.designation}
                </motion.div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative"
                >
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                  <p className="text-gray-300 text-base leading-relaxed pl-4">
                    {slide.quote}
                  </p>
                </motion.div>
              </div>
              {renderProductImage(slide, index, true)}
            </div>

            {/* Desktop Layout: Alternating Left-Right Structure */}
            <div className={`hidden md:flex h-[80vh] justify-between items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} relative z-10 w-full max-w-6xl mx-auto`}>
              {index % 2 === 0 ? (
                <>
                  {renderProductImage(slide, index)}
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="w-2/5 h-full flex flex-col bg-black/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 overflow-hidden"
                  >
                    <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent h-full pr-2">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center mb-4 sticky top-0 bg-black/60 backdrop-blur-sm py-2 z-10"
                      >
                        <span className="text-5xl mr-4">{slide.icon}</span>
                        <h2 className="text-3xl font-bold text-white">{slide.name}</h2>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 shadow-md"
                      >
                        {slide.designation}
                      </motion.div>
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="relative"
                      >
                        <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                        <p className="text-gray-300 text-lg leading-relaxed pl-4">
                          {slide.quote}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="w-2/5 h-full flex flex-col bg-black/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 overflow-hidden"
                  >
                    <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent h-full pr-2">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center mb-4 sticky top-0 bg-black/60 backdrop-blur-sm py-2 z-10"
                      >
                        <span className="text-5xl mr-4">{slide.icon}</span>
                        <h2 className="text-3xl font-bold text-white">{slide.name}</h2>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 shadow-md"
                      >
                        {slide.designation}
                      </motion.div>
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="relative"
                      >
                        <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                        <p className="text-gray-300 text-lg leading-relaxed pl-4">
                          {slide.quote}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                  {renderProductImage(slide, index)}
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
