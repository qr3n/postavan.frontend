import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardPointerAnimation = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="relative w-64 h-64">
                {/* Карточный указатель */}
                <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-white rounded-md shadow-lg border border-gray-300"
                    initial={{ y: -100, scale: 0.5, rotateZ: -10 }}
                    animate={{
                        y: 80,
                        scale: [0.5, 1.5, 1],
                        rotateZ: [-10, 5, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        times: [0, 0.7, 1]
                    }}
                    onAnimationComplete={() => setAnimationComplete(true)}
                >
                    <div className="absolute inset-1 border-2 border-gray-200 rounded-sm" />
                    <div className="absolute bottom-2 left-0 right-0 mx-auto w-4 h-4 bg-red-500 rounded-full" />
                </motion.div>

                {/* Точка падения */}
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-600 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{
                        scale: animationComplete ? [0, 1, 0.8, 1] : 0
                    }}
                    transition={{
                        duration: 0.5,
                        times: [0, 0.4, 0.8, 1]
                    }}
                />

                {/* Большой красный круг с opacity 50% */}
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full opacity-50"
                    initial={{ width: 0, height: 0 }}
                    animate={{
                        width: animationComplete ? 160 : 0,
                        height: animationComplete ? 160 : 0,
                    }}
                    transition={{
                        delay: animationComplete ? 0.5 : 0,
                        duration: 1.5,
                        ease: "easeOut"
                    }}
                />

                {/* Маленький красный круг */}
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full"
                    initial={{ width: 0, height: 0 }}
                    animate={{
                        width: animationComplete ? 40 : 0,
                        height: animationComplete ? 40 : 0,
                    }}
                    transition={{
                        delay: animationComplete ? 0.5 : 0,
                        duration: 1,
                        ease: "easeOut"
                    }}
                />
            </div>
        </div>
    );
};

export default CardPointerAnimation;