import React from 'react';
import Introduction from './Introduction';
import BuyerControl from './BuyerControl';
import SellerControl from './SellerControl';
import MessageBox from './MessageBox';
import PriceChart from './PriceChart';
import ResetButton from './ResetButton';

const Simulations = () => {
    return (
        <div className="simulation py-8 px-4 bg-body-color dark:bg-gray-900 transition-colors duration-300 min-h-screen">
            <Introduction />


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <BuyerControl />
                <SellerControl />
            </div>


            <MessageBox />


            <PriceChart />

            <div className="flex justify-center mt-8">
                <ResetButton />
            </div>
        </div>
    );
};

export default Simulations;
