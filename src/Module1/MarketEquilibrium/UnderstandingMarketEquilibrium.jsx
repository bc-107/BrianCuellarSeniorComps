// MarketEquilibrium.jsx

import React from 'react';
import { motion } from 'framer-motion';
import MatchingGame from "@/components/ui/drag-and-drop/MatchingGame.jsx";

// Define terms and definitions for the Matching Game
const terms = [
    { id: 'term-1', content: 'Market Equilibrium' },
    { id: 'term-2', content: 'Surplus' },
    { id: 'term-3', content: 'Shortage' },
    { id: 'term-4', content: 'Supply' },
    { id: 'term-5', content: 'Demand' },
];

const definitions = [
    { id: 'def-1', content: 'The point where supply equals demand.' },
    { id: 'def-2', content: 'A situation where supply exceeds demand.' },
    { id: 'def-3', content: 'A situation where demand exceeds supply.' },
    { id: 'def-4', content: 'The total amount of a good or service available for purchase.' },
    { id: 'def-5', content: 'The desire and ability of consumers to purchase a good or service.' },
];

// Define the checkAnswers function specific to Market Equilibrium
const checkAnswers = (matches) => {
    const correctMatches = {
        'term-1': 'def-1',
        'term-2': 'def-2',
        'term-3': 'def-3',
        'term-4': 'def-4',
        'term-5': 'def-5',
    };

    const feedback = {};
    Object.keys(correctMatches).forEach((termId) => {
        feedback[termId] = matches[termId] === correctMatches[termId];
    });

    return feedback;
};

const MarketEquilibrium = () => {
    return (
        <motion.div
            className="flex flex-col lg:flex-row items-start lg:items-start lg:items-strech space-y-8 lg:space-y-0 lg:space-x-16 p-6 bg-gray-800 text-gray-200 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            {/* Left Side: Educational Content */}
            <div className="w-full lg:w-1/3 flex-grow">
                <h2 className="text-4xl font-semibold mb-6">Understanding Market Equilibrium</h2>
                <p className="mb-6 text-lg">
                    Market equilibrium is like the "sweet spot" in a market. It’s the magical moment when the quantity
                    of goods that producers want to sell matches the quantity that consumers want to buy.
                </p>
                <h3 className="text-2xl font-medium mb-4">What is Market Equilibrium?</h3>
                <p className="mb-6 text-lg">
                    Market equilibrium occurs where the supply and demand curves meet, determining the equilibrium price
                    and quantity in a market. It’s the price where farmers can sell all their apples, and chefs are
                    willing to buy them all.
                </p>
                <p className="mb-6 text-lg">
                    Imagine farmers growing apples. If prices are too high, chefs might only buy a few, leaving farmers
                    with a surplus of apples. On the other hand, if prices are too low, chefs will want more apples than
                    farmers can produce, leading to a shortage.
                </p>
                <p className="mb-6 text-lg">
                    The balance happens when chefs and farmers agree on the price and quantity, ensuring neither excess
                    apples nor a lack of supply.
                </p>

                {/* Small Conclusion */}
                <h3 className="text-2xl font-medium mb-4">Wrapping Up</h3>
                <p className="mb-6 text-lg">
                    Market equilibrium is a helpful concept for understanding the interaction between supply and demand,
                    but it’s important to remember that markets are influenced by many factors and might not always
                    reach this balance. On the right, you’ll find an <strong>Interactive Terms Matcher</strong> designed
                    to reinforce your understanding of key ideas through a hands-on activity.
                </p>

                {/* Information Section */}
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
                    <details>
                        <summary className="cursor-pointer text-lg font-semibold text-gray-700 dark:text-gray-300">
                            Click me for information on the Interactive Terms Matcher
                        </summary>
                        <div className="mt-4 text-gray-700 dark:text-gray-300">
                            <h4 className="text-xl font-medium mb-2">How to Use the Terms Matcher:</h4>
                            <ul className="list-disc list-inside mb-4">
                                <li>Drag and drop the definitions from the pool into the corresponding term boxes.</li>
                                <li>Each term might only have one definition assigned at a time.</li>
                                <li>If you want to change an assignment, drag the definition back to the pool and try
                                    again.
                                </li>
                                <li>When you’re satisfied with your matches, click the <strong>Submit</strong> button to
                                    receive feedback.
                                </li>
                            </ul>
                            <h4 className="text-xl font-medium mb-2">Rules:</h4>
                            <ul className="list-disc list-inside mb-4">
                                <li>Ensure all terms have a definition assigned before clicking submit.</li>
                                <li>Definitions can only be assigned to one term at a time.</li>
                                <li>You can reset the matcher at any time using the <strong>Reset</strong> button.</li>
                            </ul>
                            <p className="mb-2">
                                Use the feedback provided to correct any mismatches and improve your understanding of
                                these foundational concepts.
                            </p>
                            <p>
                                This tool is designed to help you practice and explore how terms related to market
                                equilibrium might fit together.
                            </p>
                        </div>
                    </details>
                </div>
            </div>

            {/* Right Side: Interactive Terms Matcher */}
            <div className="w-full lg:w-2/3 flex-grow flex flex-col">
                <MatchingGame
                    title="Interactive Terms Matcher"
                    description="Match the terms related to market equilibrium with their correct definitions."
                    terms={terms}
                    definitions={definitions}
                    checkAnswers={checkAnswers}
                />
            </div>
        </motion.div>
    );
};

export default MarketEquilibrium;
