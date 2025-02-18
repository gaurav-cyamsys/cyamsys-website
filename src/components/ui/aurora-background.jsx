"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  textColor = "text-[#FAF9F6]",
   // Default text color to a creamy off-white
  ...props
}) => {
  const darkAuroraStyles = `
    [--dark-gradient:repeating-linear-gradient(100deg,var(--zinc-900)_0%,var(--zinc-900)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--zinc-900)_16%)]
    [background-image:var(--dark-gradient),var(--aurora)]
    dark:[background-image:var(--dark-gradient),var(--aurora)]
    after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] 
    after:dark:[background-image:var(--dark-gradient),var(--aurora)]
  `;

  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] z-10 overflow-hidden items-center justify-center transition-bg",
          "bg-zinc-900 dark:bg-zinc-900", // Dark background
          textColor, // Apply the text color
          className
        )}
        {...props}
      >
        
        <div className="absolute inset-0 overflow-hidden">
         
          <div
            className={cn(
              `
                [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
                [background-size:300%,_200%]
                [background-position:50%_50%,50%_50%]
                filter blur-[10px] invert dark:invert-0
                pointer-events-none
                absolute -inset-[10px] opacity-50 will-change-transform
                animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
              `,
              darkAuroraStyles,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};