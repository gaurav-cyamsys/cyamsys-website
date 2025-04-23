"use client"
import { useRef, useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { FeaturesSectionDemo } from "@/components/ui/feature-card";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import { AppleCardsCarouselDemo } from "@/components/Projects";
import Stats from "@/components/Stats";
import Products from "@/components/Product";
import Contact from "@/components/Contact";
import { motion, AnimatePresence } from "framer-motion";



export default function Home() {
  const featuresSectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Handle scroll events to update active section

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);
  
  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };
  
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col space-y-4">
        {["hero", "features", "quote", "services", "projects", "stats", "products", "contact"].map((section) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(section)}
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
      
      {/* Main content */}
      <main className="relative">
        {/* Hero Section */}
        <section id="hero" className="h-screen snap-start">
          <Hero featureRef={featuresSectionRef}/>
        </section>
        
        {/* Features Section */}
        <section id="features" className="min-h-screen snap-start">
          <FeaturesSectionDemo featureRef={featuresSectionRef}/>
        </section>
        
        {/* Quote Section */}
        <section id="quote" className="min-h-screen snap-start">
          <Quote/>
        </section>
        
        {/* Services Section */}
        <section id="services" className="min-h-screen snap-start">
          <Services/>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="min-h-screen snap-start">
          <AppleCardsCarouselDemo/>
        </section>
        
        {/* Stats Section */}
        <section id="stats" className="min-h-screen snap-start">
          <Stats/>
        </section>
        
        {/* Products Section */}
        <section id="products" className="min-h-screen snap-start">
          <Products/>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="min-h-screen snap-start">
          <Contact/>
        </section>
      </main>
      
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
          initial={{ width: "0%" }}
          animate={{ 
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` 
          }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
}
