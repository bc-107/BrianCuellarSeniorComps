import React from "react";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";

const Introduction2 = () => {
    return (
        <SectionWrapperModule2 className="introduction-to-stock-market">
            <div className="w-full">
                <h2 className="text-4xl font-semibold mb-6 text-center">Introduction to the Stock Market</h2>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    In Module 1, we introduced the foundational principles of supply and demand and how they can influence prices in a marketplace.
                    The stock market operates with similar mechanisms, though the dynamics are often more complex. For instance, when many investors
                    are eager to buy a company's shares (high demand) while fewer shares are available for sale (low supply), the stock price might rise
                    as buyers compete to acquire shares. Conversely, when more shares are available than investors are willing to buy, prices could decrease
                    as sellers adjust to find buyers.
                </p>
                <h3 className="text-2xl font-medium mb-4">A Lens to View the Market</h3>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    This explanation provides a simplified view to get us started. The reality of the stock market is
                    far more intricate. Prices don’t move solely based on supply and demand—they’re also influenced by
                    investor psychology, company performance, industry trends, and global events. Factors like
                    government policies, technological innovation, and even social movements can ripple through the
                    market, influencing not just stock prices but how money flows across sectors.

                    By simplifying these ideas, the goal isn’t to ignore the complexity but to give you a way to start
                    thinking about how the market works. Imagine trying to navigate a city without first understanding
                    basic road signs—simplifying helps you grasp the essentials before diving into the deeper,
                    more detailed dynamics.
                </p>
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
                    <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-100">Thinking Beyond Stock Prices</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        The stock market is about more than just the price of a share. It’s a system that allows
                        individuals and institutions to invest in ideas, support innovation, and participate in the
                        growth of businesses. It also reflects collective sentiment—what investors as a group believe
                        about the future. When you see stock prices rise or fall, it’s not just numbers moving;
                        it’s the result of millions of decisions made by people weighing risks, opportunities, and uncertainties.

                        The market provides an opportunity to think about larger concepts: What drives growth? How do companies adapt to change? What role do investors play in shaping the future of businesses? These questions remind us that the stock market isn’t just a place to track prices—it’s a way to understand how resources are allocated and how collective decisions shape the world.
                    </p>
                </div>
            </div>
        </SectionWrapperModule2>
    );
};

export default Introduction2;
