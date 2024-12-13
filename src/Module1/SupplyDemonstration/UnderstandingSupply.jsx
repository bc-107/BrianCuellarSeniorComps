import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";
import SupplyControl from "./SupplyControl.jsx";
import { Module1Provider } from "./Module1Context.jsx";
import HoverCardForModuleInfo from "@/components/ui/SectionWrapper_HoverCard/hovercard-for-module.jsx";
import SupplyControlPt2 from "@/Module1/SupplyDemonstration/SupplyControlPt2.jsx";
import { Module1ProviderPart2 } from "@/Module1/SupplyDemonstration/Module1ContextPart2.jsx";

const UnderstandingSupply = () => {
    return (
        <SectionWrapper className="understanding-supply">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Left Side: Educational Content */}
                <div className="w-full lg:w-1/3">
                    <h2 className="text-4xl font-semibold mb-4">Understanding Supply</h2>
                    <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                        Supply is the backbone of any market. It represents the amount of goods or services producers are willing and able to offer at various price levels within a specific period. By understanding how supply works, we gain insight into the decisions businesses make and the way markets respond to external changes.
                    </p>

                    {/* Core Concepts */}
                    <h3 className="text-2xl font-medium mb-2">Core Concepts</h3>

                    {/* Price and Production */}
                    <h4 className="text-xl font-semibold mb-1">Price and Production:</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        <strong>Price Increase:</strong> When the price of a product rises, suppliers are more motivated to produce and sell more of that product to maximize their profits.
                        <br />
                        <strong>Price Decrease:</strong> Conversely, when the price falls, suppliers are less inclined to produce, as lower prices may lead to reduced profits or potential losses.
                    </p>

                    {/* Real-World Examples */}
                    <h3 className="text-2xl font-medium mb-2">Made Up Examples</h3>

                    {/* Example 1 */}
                    <h4 className="text-xl font-semibold mb-1">Viral TikTok Video Increases Demand</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        <strong>Scenario:</strong> A TikTok video showcasing a delicious apple recipe goes viral, leading to a surge in demand for apples.
                        <br />
                        <strong>Supplier Response: </strong>Farmers are motivated by the higher prices to plant more apple trees and invest in better farming equipment to boost their yield.
                        <br />
                        <strong>Outcome:</strong> An increase in the number of farmers results in a higher supply of apples in the market, helping to meet the elevated demand.
                    </p>

                    {/* Example 2 */}
                    <h4 className="text-xl font-semibold mb-1">Negative News Decreases Demand</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        <strong>Scenario:</strong> A news report claims that a certain variety of apples has health risks, leading to a decline in consumer demand.
                        <br />
                        <strong>Supplier Response:</strong>Farmers respond by scaling back apple production to avoid losses, focusing instead on other, more profitable crops.
                        <br />
                        <strong>Outcome:</strong> A reduction in the number of farmers leads to a lower supply of apples in the market, aligning with the decreased demand.
                    </p>

                    {/* Key Takeaways */}
                    <h3 className="text-2xl font-medium mb-2">Key Takeaways</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        <strong>Price and Supply Relationship:</strong> Higher prices lead to increased production, while lower prices result in decreased production.
                        <br />
                        <strong>Market Dynamics:</strong> The Law of Supply helps explain how prices, quantities, and resources are allocated in markets.
                        <br />
                        <strong>Foundation for Understanding Markets:</strong> Grasping the Law of Supply is essential for analyzing market behaviors, whether for everyday goods or financial assets like stocks.
                    </p>

                    {/* Connecting to the Stock Market */}
                    <h3 className="text-2xl font-medium mb-2">Connecting to the Stock Market</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        <strong>Increased Demand for Shares:</strong> When more investors want to buy a company's shares, the share price rises, encouraging even more investors to purchase.
                        <br />
                        <strong>Decreased Demand for Shares:</strong> Conversely, when fewer investors are interested in a company's shares, the share price falls, leading investors to sell or avoid purchasing.
                    </p>
                </div>
                {/* Right Side: Interactive Simulation */}
                <div className="w-full lg:w-2/3">
                    <Module1Provider>
                        <SupplyControl />
                    </Module1Provider>
                    <div className="my-4"></div> {/* Spacer */}
                    <Module1ProviderPart2>
                        <SupplyControlPt2 />
                    </Module1ProviderPart2>
                </div>
            </div>

            {/* Full-Width Horizontal Section */}
            <div className="mt-12 w-full">
                <h3 className="text-4xl font-medium mb-4 text-center">Key Factors that Might Influence Supply</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <HoverCardForModuleInfo title="Price of the Good">
                        Higher apple prices incentivize farmers to grow and sell more apples, increasing supply. On the other hand, lower prices may discourage farmers from producing as much.
                    </HoverCardForModuleInfo>
                    <HoverCardForModuleInfo title="Production Costs">
                        Lower costs enable producers to supply more at the same price, whereas higher costs may reduce supply.
                    </HoverCardForModuleInfo>
                    <HoverCardForModuleInfo title="Technological Advances">
                        Technology plays a vital role in boosting supply. Innovations like automated machinery, better fertilizers can reduce costs and increase the quantity producers can offer.
                    </HoverCardForModuleInfo>
                    <HoverCardForModuleInfo title="Number of Sellers">
                        When more apple farmers (sellers) join the market, the supply of apples grows. This increased supply leads to lower prices, making it easier for chefs (buyers) to purchase apples for their recipes.
                    </HoverCardForModuleInfo>
                    <HoverCardForModuleInfo title="Number of Buyers">
                        When more chefs (buyers) enter the market, the demand for apples increases. This higher demand can drive up prices, encouraging apple farmers (sellers) to produce more to meet the growing need.
                    </HoverCardForModuleInfo>
                    <HoverCardForModuleInfo title="Expectations of Future Prices">
                        If producers anticipate higher prices in the future, they may withhold some supply now to sell later at a better price. On the flip side, if they expect prices to drop, they might rush to sell, increasing supply in the short term.
                    </HoverCardForModuleInfo>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default UnderstandingSupply;
