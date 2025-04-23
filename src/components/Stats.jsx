"use client";
import React, { useEffect, useState } from 'react';
import { Testimonial } from './Testimonials';

function Stats() {
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



    const [since, setSince] = useState(0);
    const [ongoing, setOngoing] = useState(0);
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        const targets = [
            { setCount: setSince, count: 2018, suffix: '' }, // Suffix is empty for "Since"
            { setCount: setOngoing, count: 8, suffix: '+' },
            { setCount: setCompleted, count: 40, suffix: '+' }
        ];

        const maxCount = Math.max(...targets.map(target => target.count));

        function animateCountUp(setCount, count, duration) {
            let currentCount = 0;
            const increment = Math.ceil(count / (duration / 10));

            const interval = setInterval(() => {
                currentCount += increment;
                if (currentCount >= count) {
                    clearInterval(interval);
                    setCount(count);
                } else {
                    setCount(currentCount);
                }
            }, 10);
        }

        targets.forEach(target => {
            animateCountUp(target.setCount, target.count, maxCount / 100);
        });
    }, []);

    return (
        <div className="mb-32 snap-center h-screen flex flex-col justify-center  snap-mandatory snap-y">
            <Testimonial />
            
                    <div className=" max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto rounded-full "> {/* Border applied here */}
                            <dl className="rounded-full shadow-lg sm:grid sm:grid-cols-3 border-4 !border-yellow-400"> {/* Border applied here */}
                                {/* Since Section */}
                                <div className="flex flex-col p-6 text-center border-b-4 border-gray-700 sm:border-0 sm:border-r-4">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-400">
                                        Since
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold leading-none text-yellow-300">
                                         {since}
                                    </dd>
                                </div>

                                {/* Ongoing Projects Section */}
                                <div className="flex flex-col p-4 text-center border-t-4 border-b-4 border-gray-700 sm:border-0 sm:border-l-4 sm:border-r-4"> {/* Reduced padding from p-6 to p-4 */}
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-400">
                                        Ongoing Projects
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold leading-none text-yellow-300">
                                        {ongoing}+
                                    </dd>
                                </div>

                                {/* Delivered Projects Section */}
                                <div className="flex flex-col p-4 text-center border-t-4 border-gray-700 sm:border-0 sm:border-l-4"> {/* Reduced padding from p-6 to p-4 */}
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-400">
                                        Delivered Projects
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold leading-none text-yellow-300">
                                        {completed}+
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
        </div>
    );
}

export default Stats;