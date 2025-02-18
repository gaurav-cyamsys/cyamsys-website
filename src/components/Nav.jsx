"use client"
import React, { useState } from "react";
import { FloatingNavDemo, HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
function Nav({ className }) {
    const [active, setActive] = useState(null);
    return (
//       <div
//         className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-10", className)}
//       >
//         <Menu setActive={setActive}>
//           <MenuItem setActive={setActive} active={active} item="Services">
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/web-dev">UI Development</HoveredLink>
//               <HoveredLink href="/web-dev">Automation of Devices</HoveredLink>
//               <HoveredLink href="/interface-design">Firmware Development</HoveredLink>
//               <HoveredLink href="/interface-design">Hardware Engineering</HoveredLink>
//               <HoveredLink href="/seo">IOT</HoveredLink>
//               <HoveredLink href="/branding">LT Pannel Development</HoveredLink>
//             </div>
//           </MenuItem>
//           <MenuItem setActive={setActive} active={active} item="Products">
//             <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//   title="Water Treatment Project"
//   href="https://algochurn.com"
//   src="https://assets.aceternity.com/demos/algochurn.webp"
//   description="Prepare for tech interviews like never before."
// />
// <ProductItem
//   title="Waste Segregation (Urban, Rural)"
//   href="https://tailwindmasterkit.com"
//   src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//   description="Production-ready Tailwind CSS components for your next project."
// />
// <ProductItem
//   title="Pulse Light Illuminator"
//   href="https://gomoonbeam.com"
//   src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//   description="Never write from scratch again. Go from idea to blog in minutes."
// />
// <ProductItem
//   title="View More"
//   href="https://userogue.com"
//   src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//   description="Get to know more about our projects"
// />




//             </div>
//           </MenuItem>
//           <MenuItem setActive={setActive} active={active} item="Pricing">
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/hobby">Hobby</HoveredLink>
//               <HoveredLink href="/individual">Individual</HoveredLink>
//               <HoveredLink href="/team">Team</HoveredLink>
//               <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//             </div>
//           </MenuItem>
//         </Menu>
//       </div>
<FloatingNavDemo/>
    );
  }

export default Nav