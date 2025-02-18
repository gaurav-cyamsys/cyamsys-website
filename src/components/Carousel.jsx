import React from 'react'
import ReactDOM from 'react-dom/client'


import EmblaCarousel from './ui/emblaCarousel'

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const features = [
 
    {
      title: "Innovation Driven R&D",
      description: "Built for engineers, developers, dreamers, thinkers and doers.",
    },
    {
      title: "Precision Engineering",
      description: "It's as easy as using an Apple, and as expensive as buying one.",
    },
    {
      title: "Sustainable Innovation",
      description: "Our prices are best in the market. No cap, no lock, no credit card required.",
    },
    {
      title: "End to End Development",
      description: "We just cannot be taken down by anyone.",
    },
    {
      title: "Quality Assurance",
      description: "You can simply share passwords instead of buying new seats.",
    },
    {
      title: "Comprehensive IoT Solutions",
      description: "From sensor design to IoT integration, we create seamless smart solutions.",
    },
    {
      title: "Advanced PCB Manufacturing",
      description: "High-quality PCBs for reliable and durable electronic products.",
    },
    {
      title: "Embedded Systems Expertise",
      description: "Cutting-edge embedded solutions for high-performance and reliable electronics.",
    },
  ];
const Carousel = () => (
  <>

    <EmblaCarousel slides={features} options={OPTIONS} />

  </>
)
export default Carousel

