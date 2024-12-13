// src/modules/KeyConcepts.jsx

import React from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/shadcncomponents/hover-card.jsx";

const keyConcepts = [
    {
        title: "Stocks",
        to: "/stocks",
        description: "Small units of ownership in a company.",
        definition: "Stocks represent units of ownership in a company. When you own stocks, you essentially own a small part of that company.",
        example: "If you own 10 out of 1,000 shares of Company ABC, you own 1% of the company.",
    },
    {
        title: "Shares",
        to: "/shares",
        description: "Parts of a company's stock, representing ownership.",
        definition: "Shares are portions of a company’s stock. They represent your stake in the company as a proportion of the total shares.",
        example: "John bought 50 shares of Company XYZ, giving him a 5% ownership stake.",
    },
    {
        title: "Dividends",
        to: "/dividends",
        description: "Profit payments made to shareholders.",
        definition: "Dividends are payments made to shareholders from a company’s profits, usually on a regular basis.",
        example: "Company DEF declared a dividend of $2 per share, so if you own 100 shares, you receive $200.",
    },
    {
        title: "Capital Appreciation",
        to: "/capital-appreciation",
        description: "Growth in the value of an investment.",
        definition: "Capital appreciation refers to the increase in the value of an investment over time, reflecting the potential profit when selling the asset.",
        example: "If you buy a stock at $50 and it rises to $70, you’ve achieved a capital appreciation of $20 per share.",
    },
    {
        title: "Stock Exchanges",
        to: "/stock-exchanges",
        description: "Platforms where stocks are traded.",
        definition: "Stock exchanges are platforms where stocks are bought and sold, such as the NYSE or NASDAQ.",
        example: "The NYSE is one of the largest stock exchanges in the world, hosting many major companies.",
    },
    {
        title: "Indices",
        to: "/indices",
        description: "Indicators that track stock market performance.",
        definition: "Indices measure and track the performance of a group of stocks, providing insight into market trends.",
        example: "The S&P 500 index tracks the performance of 500 large companies listed on stock exchanges in the United States.",
    },
    // Add more terms as needed
];

const KeyConcepts = () => {
    return (
        <section className="relative mt-12 w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute w-96 h-96 bg-[hsl(94,66%,22%)] opacity-40 rounded-full blur-3xl top-10 left-1/4 animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-[hsl(93,93%,33%)] opacity-50 rounded-full blur-2xl bottom-10 right-1/4 animate-pulse"></div>
            </div>

            <h3 className="text-center text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 relative">
                Key Concepts in the Stock Market
            </h3>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyConcepts.map((concept, idx) => (
                    <HoverCard key={idx}>
                        <HoverCardTrigger asChild>
                            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    {concept.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {concept.description}
                                </p>
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                {concept.title}
                            </h5>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {concept.definition}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong>Example:</strong> {concept.example}
                            </p>
                        </HoverCardContent>
                    </HoverCard>
                ))}
            </div>
        </section>
    );
};

export default KeyConcepts;