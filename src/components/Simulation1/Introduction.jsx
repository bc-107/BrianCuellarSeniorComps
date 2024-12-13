import React from 'react';
import { motion } from 'framer-motion'; // For animations

const Introduction = () => {
    return (
        <motion.div
            className="text-center mb-12 p-6 bg-gradient-to-r from-gray-800 to-green-950 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-4xl md:text-2xl font-extrabold text-white">
                Market Simulation
            </h1>
            <p className="text-lg md:text-2xl text-white mt-4">
                Welcome to the <strong>Market Simulation</strong>, where you can explore the foundational principles of
                <strong> supply</strong> and <strong>demand</strong> and their influence on <strong>market prices</strong>.
            </p>
            <div className="mt-6 text-left max-w-3xl mx-auto">
                <p className="text-base md:text-lg text-white mt-4">
                    In this simulation, <strong>buyers</strong> are represented by <strong>cooks</strong> who need to purchase goods,
                    and <strong>sellers</strong> are portrayed as <strong>farmers</strong> providing these goods. You have the power to
                    adjust the numbers of buyers and sellers using interactive sliders and buttons, observing how these changes impact
                    the balance between supply and demand.
                </p>
                <p className="text-base md:text-lg text-white mt-4">
                    While this simulation focuses on foundational concepts, the real world involves additional factors such as
                    market sentiment, economic conditions, and external shocks. By exploring these basics, you can better understand
                    how supply and demand interact to influence prices and market behavior.
                </p>
                <p className="text-base md:text-lg text-white mt-4">
                    Observe how your adjustments create different market scenarios:
                    <ul className="list-disc list-inside mt-2 text-base md:text-lg text-white" >
                        <li>More <strong>cooks</strong> than farmers? Prices rise as demand outpaces supply.</li>
                        <li>More <strong>farmers</strong> than cooks? Prices fall as supply exceeds demand.</li>
                        <li>Balanced numbers? The market stabilizes near an equilibrium price.</li>
                    </ul>
                </p>
                <p className="text-base md:text-lg text-white mt-4">
                    Dive in and experiment with various scenarios to gain insights into these fundamental principles and
                    build a stronger understanding of market behavior.
                </p>
            </div>
        </motion.div>
    );
};

export default Introduction;
