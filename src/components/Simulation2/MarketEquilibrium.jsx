import React from 'react';
import MatchingGame from '@/components/ui/drag-and-drop/MatchingGame'; // Adjust path as needed

const terms = [
    { id: "term-1", content: "Market Equilibrium" },
    { id: "term-2", content: "Surplus" },
    { id: "term-3", content: "Shortage" },
    { id: "term-4", content: "Supply" },
    { id: "term-5", content: "Demand" },
];

const definitions = [
    { id: "def-1", content: "The point where supply equals demand." },
    { id: "def-2", content: "A situation where supply exceeds demand." },
    { id: "def-3", content: "A situation where demand exceeds supply." },
    { id: "def-4", content: "The total amount of a good or service available for purchase." },
    { id: "def-5", content: "The desire and ability of consumers to purchase a good or service." },
];

const checkAnswers = (matches) => {
    const correctMatches = {
        "term-1": "def-1",
        "term-2": "def-2",
        "term-3": "def-3",
        "term-4": "def-4",
        "term-5": "def-5",
    };

    const feedback = {};
    Object.keys(correctMatches).forEach((termId) => {
        feedback[termId] = matches[termId] === correctMatches[termId];
    });

    return feedback;
};

const MarketEquilibriumGame = () => {
    return (
        <div className="min-h-screen text-gray-900 dark:text-white p-8">
            <h1 className="text-3xl mb-6 text-center text-first-color">
                Market Equilibrium Matching Game
            </h1>
            <p className="mb-6 text-center text-gray-800 dark:text-gray-300">
                This interactive matching game helps you understand key concepts of market equilibrium. Match terms like
                "Market Equilibrium" and "Demand" with their correct definitions to reinforce your learning.
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-first-color">
                <MatchingGame
                    title="Interactive Terms Matcher"
                    description="Match the terms related to market equilibrium with their correct definitions."
                    terms={terms}
                    definitions={definitions}
                    checkAnswers={checkAnswers}
                />
            </div>
        </div>
    );
};

export default MarketEquilibriumGame;
