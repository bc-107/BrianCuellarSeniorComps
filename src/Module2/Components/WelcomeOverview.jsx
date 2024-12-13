// src/Module2/WelcomeOverview.jsx
import React from 'react';
import { motion } from 'framer-motion';

const WelcomeOverview = () => {
    return (
        <motion.section
            className="welcome-overview relative flex flex-col items-center justify-center py-16 px-8 bg-[hsl(92,43%,39%)]/90 shadow-lg rounded-xl border border-[hsl(94,66%,22%)]"
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: 'easeOut'}}
        >
            {/*Decorative */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute w-96 h-96 bg-[hsl(94,66%,22%)] opacity-40 rounded-full blur-3xl top-10 left-1/4 animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-[hsl(93,93%,33%)] opacity-50 rounded-full blur-2xl bottom-10 right-1/4 animate-pulse"></div>
            </div>
            {/* Content */}
            <div className="relative z-10 text-center max-w-xl">
                <h1 className="text-white md:text-6xl font-extrabold tracking-tight mb-6">
                    Welcome to Module 2
                </h1>
                <h2 className="text-white text-3xl md:text-4xl font-semibold mb-8">
                    Introduction to the Stock Market
                </h2>
                <p className="text-white text-xl md:text-2xl leading-relaxed">
                    Start a comprehensive exploration of the stock market. Gain a solid understanding of its fundamental
                    principles, delve into key concepts, and discover how it influences the global economy.
                </p>
            </div>
        </motion.section>
    );
};

export default WelcomeOverview;
