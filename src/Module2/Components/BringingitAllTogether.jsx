// src/modules/BringingItAllTogether.jsx

import React from "react";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";

const BringingItAllTogether = () => {
    return (
        <SectionWrapperModule2 className="bringing-it-all-together bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mt-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Bringing It All Together</h2>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    By this point, you’ve learned about how supply and demand shape markets (Module 1), how companies go public through IPOs, and the foundational role stock exchanges play in the stock market. The secondary market extends these principles into the world of active trading, where stocks, shares, and indices interact to provide opportunities for growth, innovation, and wealth creation.
                </p>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    When you see a stock price fluctuate or hear about the performance of a major index like the S&P 500, it’s not just numbers—it’s the result of countless decisions made by investors weighing risks and opportunities. This interconnected system of exchanges, stocks, and indices helps allocate resources, signal market trends, and reflect the ever-changing dynamics of the economy.
                </p>
            </div>
        </SectionWrapperModule2>
    );
};

export default BringingItAllTogether;
