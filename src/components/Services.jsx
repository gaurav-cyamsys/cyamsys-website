"use client";

import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

export default function Reordering() {
    const [order, setOrder] = useState(initialOrder);

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 2000);
        return () => clearTimeout(timeout);
    }, [order]);

    return (
        <div className="flex flex-col sm:flex-row h-screen  snap-start items-center justify-center gap-6 sm:gap-10 my-10 sm:my-20 px-6 sm:px-10">
            {/* Calligraphic Text */}
            <h2 className="text-white text-4xl sm:text-5xl font-semibold text-center sm:text-left">
                Our Services
            </h2>

            {/* Image Shuffle Animation */}
            <ul className="flex w-full sm:w-[500px] flex-wrap justify-center items-center gap-4 sm:gap-6">
                {order.map((imageSrc,index) => (
                    <motion.li
                        key={imageSrc}
                        layout
                        transition={spring}
                        className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg bg-cover bg-center"
                        style={{ backgroundImage: `url(${imageSrc})` }}
                    />
                ))}
            </ul>
        </div>
    );
}

// Image list
const initialOrder = [
    "/images/Automation.png",
    "/images/HardwareEngg.png",
    "/images/Firmware.png",
    "/images/IoT.png",
];

/**
 * ==============   Utils   ================
 */
function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

/**
 * ==============   Animation   ================
 */
const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
};
