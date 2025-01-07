import { motion } from "framer-motion";

export const AnimatedCheck = () => {
    return (
        <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.3, delay: 0.1}}
            style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: '#1464e6',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M5 12l5 5L20 7"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{duration: 0.3, delay: 0.3, ease: 'easeInOut'}}
                />
            </motion.svg>
        </motion.div>
    );
};