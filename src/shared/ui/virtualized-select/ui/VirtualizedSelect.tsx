import React, { useRef, useState, useEffect, ReactElement } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { AnimatePresence, motion } from 'framer-motion';

interface IProps {
    trigger: ReactElement,
    top?: number,
    options: string[],
    onOptionChange?: (option: string) => void
}

export const VirtualSelect = (props: IProps) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isBlurActive, setIsBlurActive] = useState(false); // Затемнение экрана

    const rowVirtualizer = useVirtualizer({
        count: props.options.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 40,
    });

    useEffect(() => {
        if (isOpen && parentRef.current) {
            rowVirtualizer.measure();
        }
    }, [isOpen, rowVirtualizer]);

    return (
        <div className="relative">
            <div onMouseDown={() => {
                setIsBlurActive(true)
                setIsOpen(prev => !prev)
            }}>
                {props.trigger}
            </div>

            <AnimatePresence mode={'wait'}>
                {isBlurActive && (
                    <motion.div
                        onClick={() => {
                            setIsBlurActive(false)
                            setIsOpen(false)
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.35,
                        }}
                        className="fixed w-[100dvw] h-[100dvh] top-0 left-0 inset-0 bg-black/65 z-[150]"
                    />
                )}
            </AnimatePresence>

            {/* Анимация открытия и закрытия popover */}
            <AnimatePresence mode={'wait'}>
                {isOpen && (
                    <motion.div
                        ref={parentRef}
                        initial={{opacity: 0, y: -40, scale: 0.9}}
                        animate={{opacity: 1, y: 0, scale: 1}}
                        exit={{opacity: 0, y: -40, scale: 0.9}}
                        transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className='z-[150] rounded-xl bg-zinc-900 shadow-2xl px-2'
                        style={{
                            position: 'absolute',
                            top: `${props.top || '40'}px`,
                            left: '0',
                            width: '200px',
                            maxHeight: '300px',
                            overflowY: 'auto',
                        }}
                    >
                        <div className='w-full flex justify-center bg-zinc-900 p-1.5 sticky top-0 z-50'>
                        </div>
                        <div
                            style={{height: `${rowVirtualizer.getTotalSize()}px`, position: 'relative'}}
                        >
                            {rowVirtualizer.getVirtualItems().map(virtualRow => (
                                <div
                                    key={virtualRow.key}
                                    className="virtual-row cursor-pointer py-2 px-4 hover:bg-zinc-800 rounded-xl text-white"
                                    style={{
                                        position: 'absolute',
                                        top: `${virtualRow.start}px`,
                                        left: '0',
                                        width: '100%',
                                    }}
                                >
                                    {props.options[virtualRow.index]}
                                </div>
                            ))}
                        </div>
                        <div className='w-full flex justify-center bg-zinc-900 p-1.5 sticky bottom-0 z-50'>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

