'use client';

import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const ScrollHandler = forwardRef(({ onSectionChange }, ref) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useImperativeHandle(ref, () => ({
    scrollToSection: (sectionId) => {
      setIsScrolling(true);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        onSectionChange(sectionId);
      }
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }));

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
          onSectionChange(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling, onSectionChange]);

  return null;
});

ScrollHandler.displayName = 'ScrollHandler';

export default ScrollHandler; 