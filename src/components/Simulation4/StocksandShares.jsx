import React from 'react';
import MatchingGame from '@/components/ui/drag-and-drop/MatchingGame';

const terms = [
    { id: "term-1", content: "Stock" },
    { id: "term-2", content: "Shareholder" },
    { id: "term-3", content: "Dividend" },
    { id: "term-4", content: "IPO" },
    { id: "term-5", content: "Market Capitalization" },
];

const definitions = [
    { id: "def-1", content: "A unit of ownership in a company." },
    { id: "def-2", content: "An individual or entity that owns shares of a company." },
    { id: "def-3", content: "A portion of the company's earnings distributed to shareholders." },
    { id: "def-4", content: "Initial public offering: the process by which a private company goes public." },
    { id: "def-5", content: "The total market value of a company's outstanding shares." },
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

const UnderstandingStocksAndSharesGame = () => {
    return (
        <div className="min-h-screen text-gray-900 dark:text-white p-8">
            <h1 className="text-3xl mb-6 text-center text-first-color">
                Understanding Stocks and Shares Matching Game
            </h1>
            <p className="mb-6 text-center text-gray-800 dark:text-gray-300">
                Learn about stocks, shareholders, and financial terms with this interactive matching game. Test your knowledge and reinforce your understanding.
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-first-color">
                <MatchingGame
                    title="Match Stock Market Terms"
                    description="Drag and drop the terms related to stocks and shares with their correct definitions."
                    terms={terms}
                    definitions={definitions}
                    checkAnswers={checkAnswers}
                />
            </div>
        </div>
    );
};

export default UnderstandingStocksAndSharesGame;

