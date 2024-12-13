// src/modules/ConnectingExchangesToIPOs.jsx

import React from "react";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";
import MatchingGame from "@/components/ui/drag-and-drop/MatchingGame.jsx";
import HoverCardForModuleInfo from "@/components/ui/SectionWrapper_HoverCard/hovercard-for-module.jsx";

// Define terms and definitions for the Matching Game
const terms = [
    { id: "term-1", content: "Decision to Go Public" },
    { id: "term-2", content: "Valuation by Underwriters" },
    { id: "term-3", content: "Listing Shares on an Exchange" },
];

const definitions = [
    { id: "def-1", content: "The company’s leadership decides it needs to raise capital by offering shares to the public." },
    { id: "def-2", content: "Financial experts assess the company’s value and determine the price per share." },
    { id: "def-3", content: "The shares are listed on a stock exchange, making them available for trading by investors." },
];

// Define the checkAnswers function specific to Connecting Exchanges to IPOs
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

const ConnectingExchangesToIPOs = () => {
    return (
        <SectionWrapperModule2 className="connecting-exchanges-to-ipos">
            <div className="w-full">
                <h2 className="text-4xl font-semibold mb-6 text-center">Connecting Exchanges to IPOs</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    Before shares can be traded on a stock exchange, companies must first go through a process called an
                    Initial Public Offering (IPO).
                    This is the moment when a private company becomes a public one, allowing investors to buy shares of
                    ownership. Just as we explored
                    how supply and demand shape markets in Module 1, the IPO process is where these principles come into
                    play for the first time, as
                    companies and investors determine the initial value of shares. The IPO serves as the gateway for a
                    private company to become publicly traded, allowing everyday investors to purchase a stake in the
                    business. It’s the first major step in connecting a company to the stock market.
                </p>

                <h3 className="text-2xl font-medium mb-4">What Happens During an IPO?</h3>
                <HoverCardForModuleInfo>
                    The IPO process involves multiple stages that set the foundation for a company’s journey into public
                    trading. First, the company decides to “go public,” usually to raise capital for expansion or
                    operations. Next, underwriters—typically at large financial institutions—assess the company’s value
                    and determine the price at which its shares will be offered to the public. Finally, these shares
                    are listed on a stock exchange, making them available for anyone to buy and sell.
                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">How Does It Relate to Supply and Demand?</h3>
                <HoverCardForModuleInfo>
                    The IPO process is deeply tied to the principles of supply and demand discussed in Module 1. The
                    number of shares a company decides to issue represents the initial supply. The demand for these
                    shares comes from investors interested in owning a piece of the company. If demand is high during
                    the IPO, the initial price of shares may increase. Conversely, if demand is low, the company might
                    adjust its offering price to attract more buyers.
                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">Why Do IPOs Matter to Investors and Companies?</h3>
                <HoverCardForModuleInfo>
                    For companies, an IPO is a pivotal moment. It provides access to a large pool of capital, enabling
                    growth, innovation, and new opportunities. For investors, IPOs represent a chance to invest early in
                    companies they believe in, often at prices lower than what the shares might trade for later.
                    However, like any market, the process carries risks. Not all IPOs result in successful investments,
                    as market sentiment and economic conditions can impact share prices after they are listed.
                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">How It Builds on Module 1</h3>
                <HoverCardForModuleInfo>
                    In Module 1, we emphasized the interaction between supply and demand in determining prices. The IPO
                    is where this interaction begins for publicly traded companies. By understanding the IPO process,
                    you can see how supply and demand principles establish the groundwork for a stock’s value even
                    before it starts trading on an exchange. This understanding ties back to the broader theme of how
                    markets work and prepares you to think critically about stock market dynamics.
                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">How It Connects to Market Dynamics</h3>
                <HoverCardForModuleInfo>
                    These concepts create a bridge between the theoretical ideas of supply and demand and the practical
                    realities of the stock market, helping to deepen your understanding of how shares are introduced and
                    valued.
                </HoverCardForModuleInfo>

                <MatchingGame
                    title="IPO Process Terms Matcher"
                    description="Match the terms related to the IPO process with their correct definitions."
                    terms={terms}
                    definitions={definitions}
                    checkAnswers={checkAnswers}
                />
            </div>
        </SectionWrapperModule2>
    );
};

export default ConnectingExchangesToIPOs;
