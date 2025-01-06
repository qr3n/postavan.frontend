'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./styles.css";
import { Button } from "@shared/shadcn/components/button";
import { ChooseMarketplaceStep } from "@features/order/create/ui/steps/ChooseMarketplaceStep";

const sliderVariants = {
    incoming: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
    }),
    active: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%",
        opacity: 0,
    }),
};

const sliderTransition = {
    duration: 1, // Увеличим длительность для плавного эффекта
    ease: [0.22, 1, 0.36, 1], // Кастомная кривая Bezier (easeOutExpo)
};

const App = () => {
    const [[imageCount, direction], setImageCount] = useState([0, 0]);

    const swipeToImage = (swipeDirection: number) => {
        setImageCount(([prevCount]) => {
            const newCount = prevCount + swipeDirection;
            return [newCount < 0 ? 5 - 1 : newCount % 5, swipeDirection];
        });
    };

    return (
        <main>
            <div className="slider-container">
                <div className="w-[100dvw] overflow-hidden relative h-[calc(100dvh-220px)] sm:h-[calc(100dvh-250px)]">
                    <div
                        className='absolute left-0 top-0 w-[10px] sm:w-[50px] md:w-[100px] lg:w-[200px] h-full bg-gradient-to-r from-black z-50 to-transparent'/>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={imageCount}
                            custom={direction}
                            variants={sliderVariants}
                            className='flex flex-col items-center h-full absolute top-0 w-full'
                            initial="incoming"
                            animate="active"
                            exit="exit"
                            transition={sliderTransition}
                        >
                            <ChooseMarketplaceStep/>
                        </motion.div>
                    </AnimatePresence>
                    <div
                        className='absolute right-0 top-0 w-[10px] sm:w-[50px] md:w-[100px] lg:w-[200px] h-full bg-gradient-to-l from-black z-50 to-transparent'/>
                </div>

                <div className="flex flex-col px-8 w-full max-w-[600px] gap-4">
                    <Button disabled={imageCount === 4} onClick={() => swipeToImage(1)}>Продолжить</Button>
                    <Button disabled={imageCount === 0} variant="outline" onClick={() => swipeToImage(-1)}>Назад</Button>
                </div>
            </div>
        </main>
    );
};

export default App;
