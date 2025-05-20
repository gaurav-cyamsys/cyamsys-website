"use client"
import { useRef, useState, useCallback } from "react";
import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import { FeaturesSectionDemo } from "@/components/ui/feature-card";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import { AppleCardsCarouselDemo } from "@/components/Projects";
import Stats from "@/components/Stats";
import Products from "@/components/Product";
import Contact from "@/components/Contact";
import { motion } from 'framer-motion';

// Dynamically import components that need window access
const NavigationDots = dynamic(() => import('@/components/NavigationDots'), {
  ssr: false,
});

const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), {
  ssr: false,
});

const ScrollHandler = dynamic(() => import('@/components/ScrollHandler'), {
  ssr: false,
});

export default function Home() {
  const featuresSectionRef = useRef(null);
  const scrollHandlerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("hero");
  
  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  const scrollToSection = useCallback((sectionId) => {
    if (scrollHandlerRef.current) {
      scrollHandlerRef.current.scrollToSection(sectionId);
    }
  }, []);
  
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ScrollHandler 
        onSectionChange={handleSectionChange}
        ref={scrollHandlerRef}
      />
      
      <NavigationDots 
        activeSection={activeSection} 
        onSectionClick={scrollToSection}
      />
      
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
      
      <ScrollProgress />
    </div>
  );
}
