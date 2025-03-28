import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import dolphin from './dolphin.png'
import mask from './mask.png'

const IconAnimation = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Запускаем анимацию через 1 секунду после загрузки компонента
        const timer = setTimeout(() => {
            setIsAnimated(true);
        }, 1000);

        // Очищаем таймер при размонтировании компонента
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-screen  flex items-center justify-center">
            <div className="relative w-full h-3/4">
                <motion.div
                    className="bg-green-500 absolute left-1/2 top-1/2"
                    style={{
                        width: '30vh',
                        height: '30vh',
                        x: '-50%',
                        y: '-50%'
                    }}
                    animate={isAnimated ? {
                        width: '10vh',
                        height: '10vh',
                        top: '-5%',
                        x: '-50%',
                        y: '-50%'
                    } : {}}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
};

export default IconAnimation;