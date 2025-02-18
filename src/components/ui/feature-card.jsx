"use client"
import React from "react";
import { useId } from "react";
import EmblaCarousel from "./emblaCarousel";

export function FeaturesSectionDemo({featureRef}) {
  const OPTIONS = { dragFree: true }


  return (
<div ref={featureRef} className="relative sm:px-5 px-0 mb-32 min-h-screen flex flex-col justify-center items-center snap-mandatory snap-start">
<div className="hidden sm:block"> 
    <img className="absolute sm:h-[200px] sm:w-[200px] left-2 top-[17rem] hidden sm:block" src="/Innovation.png"/>
    <img className="absolute sm:h-[200px] sm:w-[200px] left-2 top-[55%] hidden sm:block" src="/electronics.png"/>
    <img className="absolute sm:h-[200px] sm:w-[200px] right-2 top-[17rem] hidden sm:block" src="/research.png"/>
    <img className="absolute sm:h-[200px] sm:w-[200px] right-2 top-[55%] hidden sm:block" src="/iot.png"/>
</div>
       <h2 className="sm:text-5xl text-3xl font-bold text-center text-white my-10">
       Features
     </h2>    
     <div className="w-full flex flex-col justify-center"> 
      <EmblaCarousel slides={features} options={OPTIONS} />
    </div>
    </div>
  );
}

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

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? Array.from({ length: 5 }, () => [7, 8]);
  const adjustedSize = size ?? 20; // Use a variable for size

  return (
      <div className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(white,transparent)]"> {/* Use inset-0 */}
          <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
              <GridPattern width={adjustedSize} height={adjustedSize} x="0" y="0" squares={p} className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10" /> {/* x and y are 0 */}
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
              <svg key={`${x}-${y}`} x={x} y={y} className="overflow-visible"> {/* Key added here */}
                  {squares.map(([sx, sy], index) => ( // index added here
                      <rect key={index} width={width + 1} height={height + 1} x={sx * width} y={sy * height} strokeWidth="0" /> // Key added here
                  ))}
              </svg>
          )}
      </svg>
  );
}
