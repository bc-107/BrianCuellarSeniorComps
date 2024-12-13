import React from 'react';
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";

const StockMarketOverview = () => {
    return (
        <SectionWrapperModule2 className="whatIsTheStockMarket">
            <div className="container mx-auto px-4 py-8">
                {/* An Overview of the Stock Market */}
                <h2 className="text-3xl font-medium dark:text-gray-200 mb-6 text-center">
                    An Overview of the Stock Market
                </h2>

                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Understanding the stock market involves exploring how companies become publicly traded, how
                    shares are offered to investors, and how prices are established and fluctuate. Below are the
                    key components and processes that encapsulate the fundamental activities of the stock market.
                </p>

                {/* Integrated Sections*/}
                <div className="mb-12">
                    {/* 6.1 The Role of Stock Exchanges */}
                    <section className="mb-8">
                        <h4 className="inline-block px-4 py-2 text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                            The Role of Stock Exchanges
                        </h4>
                        <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                            <strong>Stock Exchanges</strong> are centralized platforms where buyers and sellers come
                            together to trade shares of publicly listed companies. Acting as intermediaries, these exchanges
                            ensure fair and orderly trading while providing essential services like price discovery,
                            liquidity, and regulatory oversight. For instance, the New York Stock Exchange (NYSE) and
                            NASDAQ are two of the most prominent exchanges in the United States, while others like the
                            London Stock Exchange (LSE) and Tokyo Stock Exchange (TSE) serve international markets.
                        </p>
                        <ul className="list-disc list-inside mb-6 text-lg text-gray-700 dark:text-gray-300">
                            <li><strong>Major Exchanges:</strong> New York Stock Exchange (NYSE), NASDAQ, London Stock Exchange (LSE), and Tokyo Stock Exchange (TSE).</li>
                            <li><strong>Listing Requirements:</strong> To be listed on an exchange,
                                companies need to meet certain requirements, such as having a minimum company value
                                (market capitalization), earning a specific amount of revenue, and having a set number
                                of shareholders.</li>
                            <li><strong>Functionality:</strong> Exchanges make trading easy by connecting buyers and
                                sellers, ensuring trades are completed efficiently, and showing real-time prices so
                                everyone knows the current value of a stock.</li>
                        </ul>
                    </section>

                    {/* 6.2 Initial Public Offering (IPO) */}
                    <section className="mb-8">
                        <h4 className="inline-block px-4 py-2 text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                            Initial Public Offering (IPO)
                        </h4>
                        <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                            Now that we understand how stock exchanges function, let’s take a step back and look at how
                            companies begin their journey to becoming publicly traded. This process, called an Initial
                            Public Offering (IPO), is the first step for a private company to list its shares on an
                            exchange and raise capital from a wider pool of investors.
                        </p>
                        <ol className="list-decimal list-inside mb-6 text-lg text-gray-700 dark:text-gray-300">
                            <li><strong>Decision to Go Public:</strong> Company leadership decides to raise capital by selling shares to the public.</li>
                            <li><strong>Hiring Underwriters:</strong> Investment banks (underwriters) are hired to manage the IPO process, including determining the offering price and marketing the shares.</li>
                            <li><strong>Regulatory Filings:</strong> The company files a registration statement (e.g., Form S-1 in the U.S.) with regulatory bodies like the Securities and Exchange Commission (SEC), providing detailed financial and operational information.</li>
                            <li><strong>Setting the Price:</strong> Through a process called <em>book building</em>, underwriters gauge investor interest to determine the initial offering price.</li>
                            <li><strong>Going Live:</strong> On the IPO date, shares are listed on an exchange, and trading begins.</li>
                        </ol>
                    </section>

                    {/* 6.3 Determining the Initial IPO Price */}
                    <section className="mb-8">
                        <h4 className="inline-block px-4 py-2 text-2xl font-semibold text-gray-800 dark:text-gray-200  mb-4">
                            Determining the Initial IPO Price
                        </h4>
                        <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                            Now that we’ve covered how a company goes public through an IPO, the next critical step is
                            determining the initial price of the shares. This process involves balancing the company’s
                            valuation with investor interest to ensure the shares are priced attractively while
                            maximizing the funds raised for the business.
                        </p>
                        <ul className="list-disc list-inside mb-6 text-lg text-gray-700 dark:text-gray-300">
                            <li><strong>Company Valuation:</strong> Based on financial metrics like revenue, earnings, growth prospects, and comparable company valuations.</li>
                            <li><strong>Market Conditions:</strong> Overall market sentiment, economic indicators, and investor appetite for new stocks.</li>
                            <li><strong>Underwriter Analysis:</strong> Investment banks assess demand through roadshows and investor feedback to set a price that balances supply and demand.</li>
                            <li><strong>Competitive Landscape:</strong> The performance and valuations of similar companies in the industry.</li>
                        </ul>
                        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                            <strong>Example:</strong> If a company is valued at $100 million and decides to offer 10% of its shares to the public, the IPO price per share would be determined based on the total number of shares outstanding and investor demand.
                        </p>
                    </section>

                    {/* 6.4 Supply and Demand in the Stock Market */}
                    <section className="mb-8">
                        <h4 className="inline-block px-4 py-2 text-2xl font-semibold text-gray-800 dark:text-gray-200  mb-4">
                            Supply and Demand in the Stock Market
                        </h4>
                        <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                            Once a company's shares are listed on an exchange, their prices are continuously influenced by the principles of <strong>supply and demand</strong>.
                        </p>
                        <ul className="list-disc list-inside mb-6 text-lg text-gray-700 dark:text-gray-300">
                            <li><strong>Supply:</strong> The number of shares available for sale.</li>
                            <li><strong>Demand:</strong> The number of shares investors want to buy.</li>
                            <li><strong>Price Fluctuation:</strong> If demand exceeds supply, prices rise. If supply exceeds demand, prices fall.</li>
                            <li><strong>Market Sentiment:</strong> Investors' perceptions, news, and economic indicators can sway demand and supply dynamics.</li>
                        </ul>
                        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                            <strong>Example:</strong> If a technology company releases a groundbreaking product, investor optimism may increase demand for its shares, driving up the price.
                        </p>
                    </section>

                    {/* 6.5 Secondary Market Trading */}
                    <section className="mb-8">
                        <h4 className="inline-block px-4 py-2 text-2xl font-semibold text-gray-800 dark:text-gray-200  mb-4">
                            Secondary Market Trading
                        </h4>
                        <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                            After learning how supply and demand affect stock prices, it’s important to understand the role of the secondary market.
                            This is where shares are traded between investors after the IPO, providing liquidity and enabling continuous price discovery based on market activity.
                            After the IPO, shares are traded in the <strong>secondary market</strong>, where existing
                            shares are bought and sold among investors. The company does not receive additional capital
                            from these trades, but the secondary market provides liquidity, enabling investors to enter
                            and exit positions easily.
                        </p>
                        <ul className="list-disc list-inside mb-6 text-lg text-gray-700 dark:text-gray-300">
                            <li><strong>Liquidity:</strong> Investors can quickly buy or sell shares, making stocks more attractive investments.</li>
                            <li><strong>Price Discovery:</strong> Continuous trading helps determine the fair market value of shares.</li>
                            <li><strong>Investor Confidence:</strong> A robust secondary market enhances trust in the financial system.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </SectionWrapperModule2>
    );
};

export default StockMarketOverview;
