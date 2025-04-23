import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Carousel from "./ui/carousel";



const AuroraBackgroundDemo = ({ featureRef }) => {
  return (
    <div className="relative h-[100vh] overflow-hidden snap-mandatory snap-y snap-center">
      {/* Background Image with z-index -1 to place it behind everything */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          opacity: 0.7,  // Apply opacity only to the background image
        }}
      />

      {/* Content Section */}
      <div style={{ckgroundImage: 'url(/bg.png)'}} className=" inset-0 w-full h-full relative flex flex-col z-20 overflow-hidden items-center justify-center transition-bg">
        {/* Matrix Rain Effect */}
        {/* <MatrixRain /> */}

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 z-30"
        >
          <img
            className="absolute  -top-32 h-32 left-1/2 transform -translate-x-1/2 z-40"
            src="/logo.png"
            alt="Logo"
          />

          <div className="text-2xl leading-snug md:leading-snug sm:w-1/2 w-[60%] mx-auto mt-3 md:text-5xl font-bold text-gray-300 dark:text-gray-100 text-center z-40">
            Empowering the Future with{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
              Smart IoT
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-gray-300 to-gray-600 text-transparent bg-clip-text">
              Electronics
            </span>{" "}
            Solutions
          </div>
        </motion.div>

        {/* Scroll Down Arrow */}
        <div className="absolute cursor-pointer bottom-8 left-1/2 -translate-x-1/2 z-40">
          <svg
            onClick={() => featureRef.current?.scrollIntoView({ behavior: "smooth" })}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AuroraBackgroundDemo;






const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let W = window.innerWidth;
    let H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    const fontSize = 18;
    const columns = Math.floor(W / fontSize); // Number of columns in the canvas
    let drops = Array(columns).fill(0); // Start with all drops at the top

    const characters = "10"; // Matrix characters

    const draw = () => {
      // No more background fading effect
      // context.fillStyle = "rgba(0, 0, 0, 0.1)";
      // context.fillRect(0, 0, W, H); // Removed this line

      context.font = `${fontSize}px monospace`; // Monospace font for matrix effect
      context.fillStyle = "rgba(0, 255, 0, 0.3)"; // Green rain color
      context.textShadow = "rgba(0, 255, 0, 1)"; // Green glow effect

      // Avoid the middle area where the content is
      const leftMargin = W * 0.3;
      const rightMargin = W * 0.3; // Right 30% of the screen is where the rain will fall

      // Draw each column
      for (let i = 0; i < columns; i++) {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;

        // Skip drawing in the middle part of the screen
        if (x > leftMargin && x < W - rightMargin) {
          continue;
        }

        const y = drops[i] * fontSize;
        context.fillText(randomChar, x + 2, y + 2); // Slight offset for shadow

        // If the drop reaches the bottom, reset it to the top
        if (y > H && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment the drop position
        drops[i]++;
      }
    };

    // Animation loop
    let intervalId = setInterval(draw, 100);

    // Resize handling
    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      drops = Array(columns).fill(0);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }} />;
};

