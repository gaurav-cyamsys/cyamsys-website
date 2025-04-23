"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const cardRefs = useRef([]); // Array of refs for cards

  useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      let firstVisibleIndex = 0;
      for (let i = 0; i < cardRefs.current.length; i++) {
        if (cardRefs.current[i]) {
          const rect = cardRefs.current[i].getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            firstVisibleIndex = i;
            break;
          }
        }
      }
      setActiveCard(firstVisibleIndex);
    };

    const scrollContainer = ref.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);


  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  return (
    <motion.div
      className={cn(
        "h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-3xl p-10 scrollbar-left mb-32",

        " p-20 " // Transparent base to support animation
      )}
      ref={ref}
    >
      <div className="relative h-full flex items-start px-4">
        <div className="w-full">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-20 card"
              ref={(el) => (cardRefs.current[index] = el)} // Ref callback
            >
              <motion.h2
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div className={cn(
        "hidden lg:flex lg:flex-col justify-center items-center h-full my-auto w-80 rounded-md sticky top-0   overflow-hidden",
        contentClassName
      )}>
        <div
          style={{ background: linearGradients[activeCard % linearGradients.length] }}
          className={cn(

            'h-60 w-60 '
          )}
        >
          {content[activeCard]?.content ?? null}
        </div>
      </div>
    </motion.div>
  );
};
