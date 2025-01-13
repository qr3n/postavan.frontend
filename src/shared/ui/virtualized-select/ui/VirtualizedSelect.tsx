import React, { useRef, useState, useEffect, ReactElement } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { AnimatePresence, motion } from 'framer-motion';

interface IProps {
    trigger: ReactElement;
    top?: number;
    options: string[];
    onOptionChange: (option: string) => void;
    value: string,
}

export const VirtualSelect = ({ trigger, top = 40, options, onOptionChange, value }: IProps) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isRightAligned, setIsRightAligned] = useState(true);

    const rowVirtualizer = useVirtualizer({
        count: options.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 40,
    });

    useEffect(() => {
        if (isOpen && triggerRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            setIsRightAligned(triggerRect.right + 200 <= viewportWidth);
        }
    }, [isOpen]);

    const handleBlur = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div
                ref={triggerRef}
                onMouseDown={() => setIsOpen((prev) => !prev)}
            >
                {trigger}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Background overlay */}
                        <motion.div
                            onClick={handleBlur}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/65 z-[150]"
                        />

                        {/* Dropdown */}
                        <motion.div
                            ref={parentRef}
                            initial={{ opacity: 0, y: -40, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -40, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute z-[150] rounded-xl bg-zinc-900 shadow-2xl px-2"
                            style={{
                                top: `${top}px`,
                                left: isRightAligned ? '0' : 'auto',
                                right: isRightAligned ? 'auto' : '0',
                                width: '200px',
                                maxHeight: '250px',
                                overflowY: 'auto',
                            }}
                        >
                            <div
                                style={{
                                    height: `${rowVirtualizer.getTotalSize()}px`,
                                    position: 'relative',
                                }}
                            >
                                {rowVirtualizer.getVirtualItems().map(({ key, start, index }) => (
                                    <div
                                        key={key}
                                        onClick={() => {
                                            onOptionChange(options[index]);
                                            setIsOpen(false);
                                        }}
                                        className="cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-zinc-800 rounded-xl text-white"
                                        style={{
                                            position: 'absolute',
                                            top: `${start}px`,
                                            left: 0,
                                            width: '100%',
                                            backgroundColor: options[index] === value ? '#1d222e' : '',
                                            border: '1px solid',
                                            borderColor: options[index] === value ? '#323d61' : 'transparent'
                                        }}
                                    >
                                        {options[index]} {options[index] === value &&
                                        <div
                                            style={{
                                                width: 16,
                                                height: 16,
                                                borderRadius: '50%',
                                                backgroundColor: '#1464e6',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <svg
                                                width="8"
                                                height="8"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M5 12l5 5L20 7"
                                                    stroke="white"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    }
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
