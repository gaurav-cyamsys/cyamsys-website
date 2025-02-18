"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonial() {
  const testimonials = [
    {
      src: '/goc.png'
    },
    {
      src: '/beaver.jpg'
    },
    {
      src: '/unissi.png'
    },
    {
      src: '/shoghi.png'
    },
    {
      src: '/safe.png'
    },
    {
      src: '/abhith.png'
    },
    {
      src: '/axess.png'
    },
    {
      src: '/nmelss.png'
    },
    {
      src: '/cbs.jpg'
    },
    {
      src: '/v2sk.png'
    },
  ];




  return (
    
    <div className="flex flex-col overflow-y-hidden justify-center items-center px-4 sm:px-6 lg:px-8 mx-auto">
  <h2 className="text-xl font-semibold text-center text-gray-300">
    Trusted By Many
  </h2>

  <div className="w-full">
    <InfiniteMovingCards pauseOnHover={false} items={testimonials} direction="right" />
  </div>
</div>

  );
}