"use client"
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import Cover from "@/components/Cover";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import  Products  from "@/components/Product";
import Projects, { AppleCardsCarouselDemo, CarouselDemo } from "@/components/Projects";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import { Testimonial } from "@/components/Testimonials";
import { FeaturesSectionDemo } from "@/components/ui/feature-card";
import { FeatureSection } from "@/components/ui/feature-section";
import Image from "next/image";
import { useRef } from "react";
export default function Home() {
  const featuresSectionRef = useRef(null); // Ref for FeaturesSectionDemo
  const words = [
 
    { text: "Your" },
    { text: "partner" },
    { text: "for" },
    { text: "cutting-edge" },
    { text: "electronics" },
    { text: "and" },
    { text: "intelligent" },
    { text: "IoT" },
    { text: "solutions.", }, // Or a different highlight color
  ];
  
  return (
  <div className="h-screen overflow-y-auto overflow-x-hidden py-5 scroll-smooth snap-mandatory snap-y">
  <Hero featureRef={featuresSectionRef}/>
  <FeaturesSectionDemo featureRef={featuresSectionRef}/>
 
  <Quote/>
  

  <Services/>

  <AppleCardsCarouselDemo/>
  <Stats/>
  <section className="relative h-screen snap-start">
 <Products/>
 </section>
  <Contact/>
  {/* <Footer/> */}
  </div>
  );
}
