import React, { useContext, useCallback } from "react";
import { Button } from "@/components/ui/shadcncomponents/button.jsx";
import { Slider } from "@/components/ui/shadcncomponents/slider.jsx";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { SimulationContext } from "./SimulationsContext";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/shadcncomponents/hover-card.jsx";
import buyerImageSrc from "../../images/man_cook.svg";
import { motion } from "framer-motion"; //

const BuyerControl = () => {
    const {
        buyerSliderValue,
        setBuyerSliderValue,
        addBuyers,
        deleteBuyers,
        buyers,
        totalBuyers,
    } = useContext(SimulationContext);

    // Handle slider value change
    const handleSliderChange = useCallback(
        (value) => {
            setBuyerSliderValue(value[0]);
        },
        [setBuyerSliderValue]
    );

    // Render buyers using their stored positions with animation
    const renderBuyers = () => {
        return buyers.map((buyer, index) => (
            <motion.img
                key={index}
                src={buyerImageSrc}
                alt="Buyer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                    position: "absolute",
                    top: `${buyer.y}%`,
                    left: `${buyer.x}%`,
                    transform: "translate(-50%, -50%)",
                }}
                className="w-12 h-12 object-contain"
            />
        ));
    };

    return (
        <motion.div
            className="flex flex-col items-center p-6 bg-white dark:bg-black rounded-xl shadow-lg transition-colors duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            <HoverCard>
                <HoverCardTrigger>
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4 cursor-pointer">
                        Buyers Control
                    </h2>
                </HoverCardTrigger>
                <HoverCardContent className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-5 rounded-lg shadow-md">
                    <p className="text-sm">
                        Adjust the number of cooks to see how demand shapes the market. Use the slider or buttons to change their numbers and observe how cooks (buyers) and farmers (sellers) interact to influence prices and supply-demand balance.
                    </p>
                </HoverCardContent>
            </HoverCard>
            <label
                htmlFor="buyer-slider"
                className="mb-2 text-lg text-gray-700 dark:text-gray-300"
            >
                Number of Buyers: {buyerSliderValue}
            </label>
            <Slider
                id="buyer-slider"
                className="w-full mb-6"
                defaultValue={[buyerSliderValue]}
                max={30}
                step={1}
                onValueChange={handleSliderChange}
                aria-label="Buyer Slider"
            />
            <div className="flex space-x-4 mb-4">
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={addBuyers}
                    aria-label="Add Buyers"
                    className="transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <RiAddLine size={20} />
                </Button>
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={deleteBuyers}
                    aria-label="Delete Buyers"
                    className="transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <RiSubtractLine size={20} />
                </Button>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                Total Buyers: {totalBuyers}
            </p>
            <div className="mt-6 w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg relative overflow-auto" >
                {renderBuyers()}
            </div>
        </motion.div>
    );
};

export default BuyerControl;
