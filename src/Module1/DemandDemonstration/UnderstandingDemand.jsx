import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx"
import BuyerControl from "./BuyerControl.jsx";
import { Module1_DemandProvider } from "@/Module1/DemandDemonstration/Module1_DemandContext.jsx";
import { Module1_DemandProviderPart2 } from "./Module1_DemandContextPart2.jsx";
import BuyerControlPt2 from "@/Module1/DemandDemonstration/BuyerControlPt2.jsx";
import HoverCardForModuleInfo from "@/components/ui/SectionWrapper_HoverCard/hovercard-for-module.jsx";

const UnderstandingDemand = () => {
    return (
        <SectionWrapper className="understanding-demand">
            {/* Left and Right Side: Educational Content and Interactive Simulation */}
            <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Left Side: Educational Content */}
                <div className="w-full lg:w-1/3">
                    <h2 className="text-4xl font-semibold mb-4">Understanding Demand</h2>
                    <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                        Demand is one of the most dynamic forces in any market. It represents the quantity of a good or service that consumers are willing and able to purchase at different price levels over a specific period. By understanding how demand operates, we gain a deeper understanding of consumer behavior and how businesses respond to shifts in preferences, incomes, and prices.
                    </p>

                    {/* Core Concepts */}
                    <h3 className="text-2xl font-medium mb-2">Core Concepts</h3>
                    <h4 className="text-xl font-semibold mb-1">Price and Demand:</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        <strong>Price Decrease:</strong> When the price of a product falls, consumers are more likely to buy more of that product, increasing the quantity demanded.
                        <br />
                        <strong>Price Increase:</strong> Conversely, when the price rises, consumers may reduce purchases or switch to alternatives, leading to a lower quantity demanded.
                    </p>

                    {/* Made-Up Examples */}
                    <h3 className="text-2xl font-medium mb-2">Made-Up Examples</h3>
                    <h4 className="text-xl font-semibold mb-1">Festive Season Drives Demand</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        <strong>Scenario:</strong> During the festive season, consumers rush to buy apples for recipes and celebrations.
                        <br />
                        <strong>Consumer Behavior:</strong> Chefs and households stock up on apples, leading to a surge in demand.
                        <br />
                        <strong>Outcome:</strong> Prices of apples may increase due to the higher demand.
                    </p>

                    <h4 className="text-xl font-semibold mb-1">Economic Downturn Reduces Demand</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        <strong>Scenario:</strong> An economic recession causes reduced consumer spending.
                        <br />
                        <strong>Consumer Behavior:</strong> Chefs and households cut back on purchases to save money.
                        <br />
                        <strong>Outcome:</strong> Demand for apples declines, and suppliers may lower prices to incentivize buyers.
                    </p>

                    {/* Key Takeaways */}
                    <h3 className="text-2xl font-medium mb-2">Key Takeaways</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        <strong>Price and Demand Relationship:</strong> Lower prices drive higher demand, while higher prices reduce demand.
                        <br />
                        <strong>Market Dynamics:</strong> Understanding demand helps businesses predict how price changes affect consumer behavior.
                        <br />
                        <strong>Foundation for Markets:</strong> Grasping the Law of Demand is essential for analyzing market trends, from groceries to the stock market.
                    </p>

                    {/* Connecting to the Stock Market */}
                    <h3 className="text-2xl font-medium mb-2">Connecting to the Stock Market</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        <strong>Increased Demand for Shares:</strong> When more investors want to buy a company's shares, the share price rises, reflecting the higher demand.
                        <br />
                        <strong>Decreased Demand for Shares:</strong> Conversely, when fewer investors are interested in a company's shares, the share price falls, leading to lower demand.
                    </p>
                </div>

                {/* Right Side: Interactive Simulation */}
                <div className="w-full lg:w-2/3">
                    <Module1_DemandProvider>
                        <BuyerControl />
                    </Module1_DemandProvider>
                    <div className="my-4"></div>
                    <Module1_DemandProviderPart2>
                        <BuyerControlPt2 />
                    </Module1_DemandProviderPart2>
                </div>
            </div>

            {/* Full-Width Horizontal Section */}
            <div className="mt-12 w-full">
                <h3 className="text-4xl font-medium mb-8 text-center">Key Factors That Might Influence Demand</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Consumer Income */}
                    <HoverCardForModuleInfo title="Consumer Income">
                        Higher incomes often lead to greater spending and increased demand for goods, while lower incomes can tighten spending and reduce demand.
                        <br />
                        <br />
                        For example, when chefs earn more money, they’re able to purchase higher-quality ingredients like premium apples, driving up demand. Conversely, during tough times, chefs might cut costs by buying fewer apples or switching to cheaper alternatives, reducing demand.
                    </HoverCardForModuleInfo>

                    {/* Prices of Related Goods */}
                    <HoverCardForModuleInfo title="Prices of Related Goods">
                        Substitutes and complementary goods affect demand. For example, if the price of coffee rises, demand for tea (a substitute) might increase, while demand for sugar (a complement) might fall.
                        <br />
                        <br />
                        Similarly, if the price of pears (a substitute for apples) decreases, chefs might opt for pears instead, reducing the demand for apples. On the other hand, if the price of caramel (a complementary good for caramel apples) drops, chefs might buy more apples to make caramel apple desserts, boosting demand.
                    </HoverCardForModuleInfo>

                    {/* Tastes and Preferences */}
                    <HoverCardForModuleInfo title="Tastes and Preferences">
                        Consumer preferences drive demand. A new food trend might spike demand for specific ingredients like kale or exotic spices.
                        <br />
                        <br />
                        For instance, if a celebrity chef shares an apple pie recipe on social media, chefs might buy more apples to recreate the dish, driving up demand. Conversely, if a health report suggests reducing apple consumption, demand might decline.
                    </HoverCardForModuleInfo>

                    {/* Future Expectations */}
                    <HoverCardForModuleInfo title="Future Expectations">
                        Anticipation of future prices can shift demand. If consumers expect prices to rise, they might buy more now, increasing demand in the short term.
                        <br />
                        <br />
                        Chefs, for example, might stock up on apples now if they believe prices will increase next month, temporarily boosting demand. Alternatively, if they expect prices to drop, they might delay purchases, reducing immediate demand.
                    </HoverCardForModuleInfo>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default UnderstandingDemand;
