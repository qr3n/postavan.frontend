'use client';

import React from "react";
import { motion } from "framer-motion";

export const AnimatedCircle = () => {
    const innerCircleVariants = {
        hidden: { strokeDasharray: "0 377", strokeDashoffset: 377 },
        visible: {
            strokeDasharray: "377 377",
            strokeDashoffset: 0,
            transition: { duration: 2, ease: "easeInOut", delay: 1 },
        },
    };

    const innerCircleVariants2 = {
        hidden: { strokeDasharray: "0 377", strokeDashoffset: 377 },
        visible: {
            strokeDasharray: "377 377",
            strokeDashoffset: 0,
            transition: { duration: 2, ease: "easeInOut", delay: 0 },
        },
    };

    
    const pathCheckVariants = {
        from: {
            opacity: 0,
            pathLength: 0
        },
        to: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 0.7,
                ease: "easeInOut",
                delay: 1.5
            }
        }
    };

    return (
        <motion.svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            initial="hidden"
            animate="visible"
        >
            <motion.circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="#2175f4"
                strokeWidth="3"
                variants={innerCircleVariants}
            />

            <motion.circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#666"
                strokeWidth="2"
                variants={innerCircleVariants2}
            />
            {/* Галочка с тройным градиентом */}
            <motion.path
                d="M75 110L90 120L125 80"
                stroke="#2174FFFF"
                strokeWidth="6"
                initial="from"
                animate="to"
                variants={pathCheckVariants}
            />
        </motion.svg>
    );
};
