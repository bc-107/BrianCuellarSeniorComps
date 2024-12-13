// src/modules/WhatHappensAfterIPO.jsx
import React from "react";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";
import HoverCardForModuleInfo from "@/components/ui/SectionWrapper_HoverCard/hovercard-for-module.jsx";
import MatchingGame from "@/components/ui/drag-and-drop/MatchingGame.jsx";

const terms = [
    { id: "term-1", content: "Primary Market" },
    { id: "term-2", content: "Secondary Market" },
    { id: "term-3", content: "Price Fluctuation" },
];

const definitions = [
    { id: "def-1", content: "The phase where a company sells its shares to investors for the first time." },
    { id: "def-2", content: "The market where shares are traded between investors after the IPO." },
    { id: "def-3", content: "Changes in stock prices caused by market trends, news, and investor behavior." },
];

const checkAnswers = (matches) => {
    const correctMatches = {
        "term-1": "def-1",
        "term-2": "def-2",
        "term-3": "def-3",
    };

    const feedback = {};
    Object.keys(correctMatches).forEach((termId) => {
        feedback[termId] = matches[termId] === correctMatches[termId];
    });

    return feedback;
};

const WhatHappensAfterIPO = () => {
    return (
        <SectionWrapperModule2 className="what-happens-after-ipo">
            <div className="w-full">
                <h2 className="text-4xl font-semibold mb-6 text-center">What Happens After the IPO?</h2>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Imagine this: A company has just gone through its IPO, marking its transition from private to public ownership. Think of it like a small bakery that’s grown into a franchise. Now, instead of selling pastries only to local customers, the bakery offers ownership shares to the public, allowing anyone to invest in its success.
                </p>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    At this stage, the shares move into what’s called the primary market. This is where the company sells its shares directly to investors, much like the bakery handing out shares at its grand opening to raise funds for new equipment and expansion. But the excitement doesn’t stop there.
                </p>
                <HoverCardForModuleInfo title="What is the Primary Market?">
                    content="The primary market is the first phase where a company sells shares directly to investors, raising funds for growth and new opportunities."
                </HoverCardForModuleInfo>

                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    After the grand opening, the shares begin trading in the secondary market. This is where the magic of the stock market comes to life—investors start buying and selling shares amongst themselves. It’s like the bakery’s loyal customers now trading recipes or tips, with the bakery itself no longer directly involved.
                </p>
                <HoverCardForModuleInfo title= "What is the Secondary Market?">
                    The secondary market is where shares are traded among investors after the IPO. It’s a space where
                    stock values are shaped by market forces."
                </HoverCardForModuleInfo>

                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    In the secondary market, stock prices are influenced by countless factors—how well the bakery (or company) is performing, whether a new competitor enters the scene, or even shifts in customer preferences. It’s a dynamic environment driven by supply and demand, where prices fluctuate based on what buyers and sellers think the shares are worth.
                </p>
                <HoverCardForModuleInfo title="Factors That Can Drive Stock Prices">
                    Stock prices are influenced by a variety of factors that extend beyond simple supply and demand.
                    Key drivers include the company's financial performance, such as revenue and profit growth, which
                    signal stability or potential for expansion. Broader economic indicators, like inflation rates or
                    changes in consumer spending, can also affect investor confidence and stock valuations.
                    Market trends, such as industry-specific developments or competitor actions, play a significant
                    role in shaping sentiment. Additionally, external factors like political events, regulatory changes,
                    and global incidents (e.g., natural disasters or pandemics) can ripple through the market, impacting
                    stock prices. Lastly, investor behavior, driven by emotions like fear or optimism, often causes prices
                    to rise or fall unpredictably, reflecting the collective mood of the market. For the factors that can
                    drive stock prices, there are so many variables at play. The goal of this explanation is to provide
                    an initial understanding of these forces, helping you see how interconnected decisions, events, and
                    emotions shape the financial market.

                </HoverCardForModuleInfo>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Understanding what happens after an IPO helps you see the bigger picture of the stock market. It’s not just about companies raising funds; it’s about how investors shape the market’s perception of those companies over time. This interplay between buyers and sellers creates a vibrant, ever-changing ecosystem that reflects the heartbeat of the economy.
                </p>
                <MatchingGame
                    title="Post-IPO Concepts Matcher"
                    description="Match the terms related to the post-IPO phase with their correct definitions."
                    terms={terms}
                    definitions={definitions}
                    checkAnswers={checkAnswers}
                />
            </div>
        </SectionWrapperModule2>
    );
};

export default WhatHappensAfterIPO;