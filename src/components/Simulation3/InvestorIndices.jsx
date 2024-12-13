import React from 'react';
import MatchingGame from '@/components/ui/drag-and-drop/MatchingGame'; // Adjust path as needed

const terms = [
    { id: "term-1", content: "Dow Jones Industrial Average (DJIA)" },
    { id: "term-2", content: "S&P 500" },
    { id: "term-3", content: "NASDAQ Composite" },
    { id: "term-4", content: "Retail Investors" },
    { id: "term-5", content: "Institutional Investors" },
];

const definitions = [
    { id: "def-1", content: "Tracks 30 major U.S. companies and is price-weighted." },
    { id: "def-2", content: "Represents 500 of the largest publicly traded U.S. companies and is market-cap weighted." },
    { id: "def-3", content: "Focuses on tech-heavy companies listed on the NASDAQ exchange." },
    { id: "def-4", content: "Individuals buying or selling stocks for personal portfolios." },
    { id: "def-5", content: "Large entities like pension funds and mutual funds that manage substantial amounts of money." },
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

const InvestorIndicesGame = () => {
    return (
        <div className="min-h-screen text-gray-900 dark:text-white p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-first-color">
                Investor Indices Matching Game
            </h1>
            <p className="mb-6 text-center text-gray-800 dark:text-gray-300">
                Learn about stock indices and their importance in the market by matching terms like "Dow Jones" and
                "NASDAQ" to their definitions. Test your understanding with this interactive game.
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-first-color">
                <MatchingGame
                    title="Match Indices and Definitions"
                    description="Match the terms related to stock indices and types of investors with their definitions."
                    terms={terms}
                    definitions={definitions}
                    checkAnswers={checkAnswers}
                />
            </div>
        </div>
    );
};

export default InvestorIndicesGame;
