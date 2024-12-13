// src/modules/UnderstandingStocksAndShares.jsx
import React from "react";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";
import HoverCardForModuleInfo from "@/components/ui/SectionWrapper_HoverCard/hovercard-for-module.jsx";
import MatchingGame from "@/components/ui/drag-and-drop/MatchingGame.jsx";

const terms = [
    { id: "term-1", content: "Stock" },
    { id: "term-2", content: "Share" },
    { id: "term-3", content: "Equity" },
    { id: "term-4", content: "Dividend" },
];

const definitions = [
    { id: "def-1", content: "A type of security that represents partial ownership in a company." },
    { id: "def-2", content: "The unit of ownership in a stock, representing a claim on part of the company’s assets and earnings." },
    { id: "def-3", content: "Ownership value in an asset or a business, represented by stocks or shares." },
    { id: "def-4", content: "A distribution of a portion of a company's earnings to its shareholders." },
];

const checkAnswers = (matches) => {
    const correctMatches = {
        "term-1": "def-1",
        "term-2": "def-2",
        "term-3": "def-3",
        "term-4": "def-4",
    };

    const feedback = {};
    Object.keys(correctMatches).forEach((termId) => {
        feedback[termId] = matches[termId] === correctMatches[termId];
    });

    return feedback;
};

const UnderstandingStocksAndShares = () => {
    return (
        <SectionWrapperModule2 className="understanding-stocks-and-shares">
            <div className="w-full">
                <h2 className="text-4xl font-semibold mb-6 text-center">Understanding Stocks and Shares</h2>

                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    We’ve been exploring the basic functionality of the stock market—how it allows us to see and trade
                    shares. It all starts with companies going public through an IPO and shares being made available on
                    exchanges. Now, let’s focus on what those shares actually represent and how they allow individuals
                    the ability to own a piece of a company.
                </p>

                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Imagine you’ve decided to invest in a company. What you’re really doing is buying a piece of that
                    company, known as a stock. Think of it as owning a small slice of a large pie. The individual slices
                    are called shares, and owning one means you have a claim to a portion of the company’s assets and profits.
                </p>
                <HoverCardForModuleInfo title="What Are Stocks?">
                    Stocks represent partial ownership in a company. When you own a stock, you’re essentially a
                    co-owner of that business, entitled to its growth and potential profits.
                </HoverCardForModuleInfo>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Shares, on the other hand, are the units that make up a stock. If stocks are the pie, shares are the
                    individual slices. Companies issue shares to raise money, and investors purchase them with the hope of earning returns through price appreciation or dividends.
                </p>
                <HoverCardForModuleInfo title="What Are Shares?">
                    Shares are the individual units of stock that investors can buy. They represent ownership
                    in a company and come with rights such as voting in shareholder meetings or receiving dividends."
                </HoverCardForModuleInfo>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Dividends are one way companies share their success with investors. Not all companies pay dividends,
                    but those that do distribute a portion of their earnings to shareholders as a thank-you for their investment.
                </p>
                <HoverCardForModuleInfo title ="What Are Dividends?">
                    Dividends are payments made by a company to its shareholders, often as a portion of its
                     profits. They provide an additional incentive for owning shares."
                </HoverCardForModuleInfo>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Understanding these terms is the first step in grasping how the stock market works. Stocks and
                    shares are tools that allow individuals to invest in businesses, participate in their growth, and
                    potentially benefit financially. But it’s important to remember that investing also comes with risks.
                    Prices can fluctuate based on market conditions, company performance, and investor sentiment.
                </p>
                <HoverCardForModuleInfo title = "Why Might Stock Prices Change?">
                    Stock prices fluctuate for several reasons, many of which stem from the principles
                     introduced in Module 1 about supply and demand. When more investors want to buy a stock than sell
                     it (high demand, low supply), the price typically rises. Conversely, if more people want to sell
                     than buy, the price may decrease. Beyond this fundamental dynamic, prices are influenced by factors
                      like the company's financial health, industry trends, global events, and investor psychology
                      . For instance, strong earnings reports might boost a stock’s price, while economic uncertainty
                       could lead to a decline. These fluctuations are a reflection of how the market collectively
                       evaluates the company's future prospects, opportunities, and risks. The stock market operates
                        as a real-time pulse of collective decision-making, where each trade contributes to the
                        evolving perception of value."
                </HoverCardForModuleInfo>

                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    By understanding these foundational concepts, you’ll be better equipped to explore the broader market
                    dynamics that stocks and shares are a part of. Next, we’ll delve into stock exchanges, the platforms where these transactions come to life.
                </p>
                <h3 className="text-2xl font-medium mb-4">Key Terms</h3>
                <MatchingGame
                    description="Match the terms with their correct definitions."
                    terms={terms}
                    definitions={definitions}
                    checkAnswers={checkAnswers}
                />
            </div>
        </SectionWrapperModule2>
    );
};

export default UnderstandingStocksAndShares;
