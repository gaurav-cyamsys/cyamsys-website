import React from 'react'
import { TypewriterEffect } from './ui/typewriter-effect';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
function Quote() {
    const words = [
        { text: "TO" },
        { text: "SCALE" },
        { text: "HIGH" },
        { text: "IN" },
        { text: "ELECTRONICS" },
        { text: "INDUSTRY" },
        { text: "WITH" },
        { text: "QUALITY," },
        { text: "PRECISION" },
        { text: "AND" },
        { text: "FUTURE" },
        { text: "DEVELOPMENT." },
      ];
    const quote="TO SCALE HIGH IN ELECTRONICS INDUSTRY WITH QUALITY, PRECISION AND FUTURE DEVELOPMENT"
  return (
   
<figure className="max-w-screen-lg mx-auto text-center mb-20 py-10 h-screen flex flex-col justify-center snap-mandatory snap-y snap-center">
  
    <svg className="w-10 h-10 mx-auto mb-3  text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
    <motion.span
                  
                 
                  className={cn(`text-yellow-300 text-sm sm:text-lg md:text-2xl lg:text-4xl italic text-center w-[80%] mx-auto  `)}>
                  {quote}
                </motion.span>
        {/* <p className="text-2xl italic font-medium  text-white">"TO SCALE HIGH IN ELECTRONICS INDUSTRY WITH QUALITY, PRECISION AND FUTURE DEVELOPMENT."</p> */}
        {/* <TypewriterEffect words={words} className={'text-2xl italic font-medium  text-yellow-300'}/> */}

    </blockquote>
    <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
       
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse  divide-gray-700">
            <cite className="pe-3 font-medium  text-white">Satya Kaushik</cite>
            <cite className="ps-3 text-sm  text-gray-400">CEO Cyamsys</cite>
        </div>
    </figcaption>
</figure>

  )
}

export default Quote