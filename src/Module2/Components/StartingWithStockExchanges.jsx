import React from "react";
import HoverCardForModuleInfo from "@/components/ui/SectionWrapper_HoverCard/hovercard-for-module.jsx";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";

const StartingWithStockExchanges = () => {
    return (
        <SectionWrapperModule2 className="starting-with-stock-exchanges">
            <div className="w-full">
                <h2 className="text-4xl font-semibold mb-6 text-center">Starting with Stock Exchanges</h2>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Stock exchanges are at the core of the stock market’s functionality. These organized platforms connect companies seeking to raise capital with investors who want to grow their wealth. They create a structured and regulated environment where the buying and selling of shares can happen efficiently and transparently. Stock exchanges ensure that every trade is conducted fairly, giving participants confidence in the system. Without them, the process of trading stocks would likely be chaotic and unreliable.

                    But stock exchanges are more than just transaction hubs—they’re essential for price discovery. When you hear about a company’s share price, that number is often the result of countless trades on an exchange, influenced by supply and demand dynamics, investor sentiment, and broader market trends. Exchanges provide the infrastructure that keeps the stock market running smoothly, helping companies and investors connect in meaningful ways.
                </p>
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg mb-6">
                    <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-100">Interactive Prompt</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Imagine a bustling marketplace where vendors and buyers come together to exchange goods.
                        A stock exchange functions similarly but operates digitally and deals with ownership stakes in
                        companies rather than physical products. This digital marketplace ensures that trading is
                        efficient and fair, enabling investors to make informed decisions while companies gain access
                        to the funds needed to expand and innovate.
                    </p>
                </div>
                <h3 className="text-2xl font-medium mb-4">What is a Stock Exchange?</h3>
                <HoverCardForModuleInfo title="Definition">
                    At its simplest, a stock exchange is a marketplace where buyers and sellers trade shares. It’s not so different from a physical marketplace where goods are exchanged, except here, the "goods" are ownership stakes in companies. Stock exchanges allow companies to raise funds by issuing shares to the public while giving investors opportunities to buy, sell, and hold these shares.

                    The role of an exchange is not just to facilitate trades but also to ensure that these trades happen fairly and efficiently. This involves enforcing rules, providing information, and maintaining transparency so that both companies and investors can make informed decisions.
                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">Why Are Exchanges Important?</h3>
                <HoverCardForModuleInfo title="Importance ">
                    <p className="mb-4">
                    Without stock exchanges, the efficient buying and selling of shares wouldn’t be possible. Exchanges provide a
                    regulated and transparent environment, ensuring that trades are conducted fairly. They also play a key role in
                    price discovery, helping determine the market value of shares based on supply and demand dynamics.
                    </p>
                    <p className="mb-4">
                        When a company lists its shares on an exchange, the value of those shares is determined by what
                        investors are willing to pay (demand) and what sellers are willing to accept (supply). This process
                        reflects the collective sentiment of millions of participants and provides insights into the
                        company’s perceived value, future potential, and market standing.
                    </p>
                    <p className="mb-4">
                        If you think back to Module 1, we explored how supply and demand interact to determine prices in a marketplace.
                        A stock exchange functions similarly, but instead of goods like apples or oranges, the traded items are shares of a company.
                        When demand for a stock is high (many buyers but limited shares), prices tend to rise as investors
                        are willing to pay more to acquire the stock. Conversely, if there’s an oversupply of shares
                        (more sellers than buyers), prices tend to fall as sellers lower their prices to attract buyers.
                    </p>
                    <p className="mb-4">
                        This dynamic of supply and demand on an exchange mirrors the principles you’ve already learned,
                        but in the context of ownership stakes in companies. Understanding how these forces shape stock
                        prices on exchanges provides a foundation for thinking about the broader market and how investors
                        and companies interact.
                    </p>

                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">Examples of Stock Exchanges</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <HoverCardForModuleInfo title="New York Stock Exchange (NYSE)">
                        The NYSE is the largest stock exchange in the world by market capitalization and has been a hub for global
                        trading since its founding in 1792.
                    </HoverCardForModuleInfo>
                    <HoverCardForModuleInfo title="NASDAQ">
                        Known for its electronic trading platform, NASDAQ is home to many of the world’s largest technology companies,
                        including Apple, Microsoft, and Amazon.
                    </HoverCardForModuleInfo>
                    <HoverCardForModuleInfo title="Tokyo Stock Exchange">
                        The Tokyo Stock Exchange is one of the largest stock exchanges in Asia, providing a key platform for Japanese
                        and international investors.
                    </HoverCardForModuleInfo>
                </div>
            </div>
        </SectionWrapperModule2>
    );
};

export default StartingWithStockExchanges;
