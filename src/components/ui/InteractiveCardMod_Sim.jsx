import React from 'react';
import { motion } from 'framer-motion';

const InteractiveCard = ({ title, buttonText, onClick }) => {
    const cardVariants = {
        rest: {
            y: 0,
            boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
            transition: {
                duration: 0.3,
                type: 'spring',
                stiffness: 300,
            },
        },
        hover: {
            y: -10,
            boxShadow: '0px 10px 20px rgba(0, 128, 0, 0.3)', // Green shadow
            transition: {
                duration: 0.3,
                type: 'spring',
                stiffness: 300,
            },
        },
    };

    return (
        <motion.div
            className="relative bg-gradient-to-b from-first-color to-first-color-light p-6 rounded-2xl border-2 border-first-color-light cursor-pointer"
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
            onClick={onClick}
        >
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <span className="text-title-color font-semibold">{buttonText}</span>
            <button className="absolute bottom-3 right-3 bg-white text-first-color p-2 rounded-full hover:bg-body-color transition-colors">
                <i className="ri-play-circle-line"></i>
            </button>
        </motion.div>
    );
};

export default InteractiveCard;
