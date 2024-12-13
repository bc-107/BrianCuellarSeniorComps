import React from 'react';
import WelcomeOverview from './Intro/WelcomeOverview.jsx';
import UnderstandingSupply from './SupplyDemonstration/UnderstandingSupply.jsx';
import UnderstandingDemand from './DemandDemonstration/UnderstandingDemand.jsx';
import UnderstandingMarketEquilibrium from './MarketEquilibrium/UnderstandingMarketEquilibrium.jsx';
import UnderstandingMarkets from "./Intro/UnderstandingMarkets.jsx";

const Module1 = () => {
    return (
        <div className="module1-container p-8 bg-background dark:bg-gray-900 text-foreground transition-colors duration-300 space-y-12">
            <WelcomeOverview />
            <UnderstandingMarkets/>
            <UnderstandingSupply/>
            <UnderstandingDemand />
            <UnderstandingMarketEquilibrium />
        </div>
    );
};

export default Module1;
