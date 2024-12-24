'use client';

import { AnimatePresence, motion } from "framer-motion";
import { Button }                  from "@shared/shadcn/components/button";
import { useState }                from "react";


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');
    const [animatingIndex, setAnimatingIndex] = useState(0);

    const handleNext = () => {
        setDirection('right');
        setAnimatingIndex(currentIndex + 1);
        setTimeout(() => setCurrentIndex(prev => prev + 1), 0);
    };

    const handlePrev = () => {
        setDirection('left');
        setAnimatingIndex(currentIndex - 1);
        setTimeout(() => setCurrentIndex(prev => prev - 1), 0);
    };

    return (
        <div className='flex w-full items-center justify-center mt-24 flex-col'>
            <div className='w-max relative'>
                <AnimatePresence>
                    <motion.div
                        className='bg-blue-500 p-24 w-max h-max absolute'
                        initial={{ translateX: direction === 'right' ? '100vw' : '-100vw' }}
                        animate={{ translateX: '0' }}
                        exit={{ translateX: direction === 'right' ? '-100vw' : '100vw' }}
                        key={animatingIndex}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        Test {currentIndex}
                    </motion.div>
                </AnimatePresence>

                <Button onClick={handleNext}>Вперед</Button>
                <Button onClick={handlePrev}>Назад</Button>
            </div>
        </div>
    );
};


export default function ProfilePage() {
    return (
        <>
            <Carousel/>
        </>
    )
}
