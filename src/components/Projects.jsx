"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const slideData = [
  {
    category: "Electronics Solutions",
    title: "Indusrial RO controller and water atm",
    src: "/waterAtm.jpeg",
    content: (
      <p className="text-neutral-400 text-base md:text-lg">
        The project involved designing an industrial
reverse osmosis (RO) controller system. This
controller regulated various parameters crucial
for RO operations, such as pressure, flow rate,
and water quality. It offered precise control over
the RO process, ensuring optimal performance
and efficiency. Additionally, the controller
featured advanced monitoring capabilities
      </p>
    ),
  },
  {
    category: "Smart Manufacturing",
    title: "Waste Segregation System",
    src: "/waste.jpg",
    content: (
      <p className="text-neutral-400 text-base md:text-lg">
      Implemented waste segregation utilizing a
master-slave system, where the master unit
controlled segregation processes across multiple
manufacturing sites, ensuring efficient resource
utilization and environmental sustainability for
both dry and wet streams
      </p>
    ),
  },
  // {
  //   category: "Innovative Lighting",
  //   title: "Pulse Light Illuminator",
  //   src: "", // No image provided
  //   content: (
  //     <p className="text-neutral-400 text-base md:text-lg">
  //       Developed a system that controls light at different frequencies,
  //       allowing independent control of light modulation at various frequencies.
  //     </p>
  //   ),
  // },
  // {
  //   category: "Healthcare IoT",
  //   title: "OT Control Panel",
  //   src: "", // No image provided
  //   content: (
  //     <p className="text-neutral-400 text-base md:text-lg">
  //       Deployed an IoT-enabled control panel and centralized monitoring system
  //       for real-time oversight of facility operations. This integration
  //       facilitated efficient communication, proactive maintenance, and improved
  //       decision-making.
  //     </p>
  //   ),
  // },
  {
    category: "Medical Technology",
    title: "Medical Air & Vacuum Pressure Monitoring",
    src: "/pressure.jpeg", // No image provided
    content: (
      <p className="text-neutral-400 text-base md:text-lg">
      The project involved developing a system to
monitor air and vacuum pressure in medical
facilities. This system ensured precise control
and maintenance of pressure levels critical for
various medical procedures, such as surgeries
and sterile environments
      </p>
    ),
  },
];

export function AppleCardsCarouselDemo() {
  const cards = slideData.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full snap-center h-screen py-20 flex flex-col justify-center snap-mandatory snap-y">
      <h2 className="sm:text-3xl text-2xl px-3 font-bold text-neutral-200 text-center mb-6">
        10+ Innovative Projects Successfully Delivered!
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
