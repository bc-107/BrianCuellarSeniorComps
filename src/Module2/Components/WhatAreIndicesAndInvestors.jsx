// src/modules/WhatAreIndicesAndInvestors.jsx
import React from "react";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";
import HoverCardForModuleInfo from "@/components/ui/SectionWrapper_HoverCard/hovercard-for-module.jsx";
import MatchingGame from "@/components/ui/drag-and-drop/MatchingGame.jsx";

// Updated terms and definitions
const terms = [
    { id: "term-1", content: "Dow Jones Industrial Average (DJIA)" },
    { id: "term-2", content: "S&P 500" },
    { id: "term-3", content: "NASDAQ Composite" },
    { id: "term-4", content: "Retail Investors" },
    { id: "term-5", content: "Institutional Investors" },
    { id: "term-6", content: "Speculators and Traders" },
    { id: "term-7", content: "Price Discovery" },
];

const definitions = [
    { id: "def-1", content: "Tracks 30 major U.S. companies and is price-weighted." },
    { id: "def-2", content: "Represents 500 of the largest publicly traded U.S. companies and is market-cap weighted." },
    { id: "def-3", content: "Focuses on tech-heavy companies listed on the NASDAQ exchange." },
    { id: "def-4", content: "Individuals buying or selling stocks for personal portfolios." },
    { id: "def-5", content: "Large entities like pension funds and mutual funds that manage substantial amounts of money." },
    { id: "def-6", content: "Investors aiming to profit from short-term price changes." },
    { id: "def-7", content: "The process by which the price of a stock is determined by the supply and demand in the market." },
];

const checkAnswers = (matches) => {
    const correctMatches = {
        "term-1": "def-1",
        "term-2": "def-2",
        "term-3": "def-3",
        "term-4": "def-4",
        "term-5": "def-5",
        "term-6": "def-6",
        "term-7": "def-7",
    };

    const feedback = {};
    Object.keys(correctMatches).forEach((termId) => {
        feedback[termId] = matches[termId] === correctMatches[termId];
    });

    return feedback;
};

const WhatAreIndicesAndInvestors = () => {
    return (
        <SectionWrapperModule2 className="what-are-indices-and-investors">
            <div className="w-full">
                <h2 className="text-4xl font-semibold mb-6 text-center">
                    What Are Indices and Who Are the Investors?
                </h2>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Imagine you’re trying to get a quick sense of how the entire stock market is doing—kind of like taking the
                    temperature of a city to see how hot or cold it is. Instead of checking every single stock, you could
                    look at something called an index. Think of an index like a curated playlist of stocks, combining the
                    performance of several companies to give you an overall vibe of the market.
                </p>

                <h3 className="text-2xl font-medium mb-4">What Are Indices?</h3>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Indices, or indexes, are collections of selected stocks grouped together to measure the performance of a specific
                    segment of the market. For example, the Dow Jones Industrial Average (DJIA) is like a “greatest hits” playlist of
                    30 major U.S. companies, while the NASDAQ Composite focuses on tech-heavy companies, tracking innovators like
                    Apple, Tesla, and Amazon. These indices simplify the complexities of the market, offering insights into trends
                    without the need to analyze individual stocks one by one.
                </p>
                <HoverCardForModuleInfo title="Why Are Indices Important?">
                    Indices act as benchmarks, showing how specific sectors or the overall market are performing. They help investors track progress and trends in a straightforward way."
                </HoverCardForModuleInfo>


                <h3 className="text-2xl font-medium mb-4">Who Are the Investors?</h3>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Now, let’s look at the people behind the market numbers—investors. They are the heartbeat of the secondary market,
                    deciding every day what they’re willing to pay for shares and, in turn, determining stock prices. You’ve got
                    retail investors, like someone checking their investment app during a coffee break, and institutional investors,
                    like massive pension funds managing billions of dollars. Then there are speculators and traders who thrive on
                    short-term opportunities, like surfers riding the waves of price changes. Every decision they make helps the
                    market discover the true value of stocks.
                </p>
                <HoverCardForModuleInfo title="What Is Price Discovery?">
                    Price discovery happens when investors’ buying and selling decisions establish the market value of a stock, based on what people think it’s worth right now."
                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">Why Does This Matter?</h3>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Indices and investors are two sides of the same coin. Indices provide a bird’s-eye view of the market’s overall
                    performance, while investors create the movement that those indices measure. Together, they make the stock market
                    an interconnected system that reflects the health, sentiment, and direction of the economy.
                </p>

                <MatchingGame
                    title="Indices and Investors Matcher"
                    description="Match the terms related to stock market indices and types of investors with their correct descriptions."
                    terms={terms}
                    definitions={definitions}
                    checkAnswers={checkAnswers}
                />
            </div>
        </SectionWrapperModule2>
    );
};

export default WhatAreIndicesAndInvestors;
