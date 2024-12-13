import React, { useContext, useCallback } from "react";
import { Button } from "@/components/ui/shadcncomponents/button.jsx";
import { Slider } from "@/components/ui/shadcncomponents/slider.jsx";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { SimulationContext } from "./SimulationsContext";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/shadcncomponents/hover-card.jsx";
import sellerImageSrc from "../../images/man_farmer.svg";
import { motion } from "framer-motion";

const SellerControl = () => {
    const {
        sellerSliderValue,
        setSellerSliderValue,
        addSellers,
        deleteSellers,
        sellers,
        totalSellers,
    } = useContext(SimulationContext);

    const handleSliderChange = useCallback(
        (value) => {
            setSellerSliderValue(value[0]);
        },
        [setSellerSliderValue]
    );

    const renderSellers = () => {
        return sellers.map((seller, index) => (
            <motion.img
                key={index}
                src={sellerImageSrc}
                alt="Seller"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                    position: "absolute",
                    top: `${seller.y}%`,
                    left: `${seller.x}%`,
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
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            <HoverCard>
                <HoverCardTrigger>
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4 cursor-pointer">
                        Sellers Control
                    </h2>
                </HoverCardTrigger>
                <HoverCardContent className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-5 rounded-lg shadow-md">
                    <p className="text-sm">
                        Adjust the number of farmers to see how supply impacts market dynamics. Use the slider or buttons to modify their numbers and observe changes in prices and supply-demand balance, reflecting real-world interactions between farmers and buyers like cooks.
                    </p>
                </HoverCardContent>
            </HoverCard>
            <label
                htmlFor="seller-slider"
                className="mb-2 text-lg text-gray-700 dark:text-gray-300"
            >
                Number of Sellers: {sellerSliderValue}
            </label>
            <Slider
                id="seller-slider"
                className="w-full mb-6"
                defaultValue={[sellerSliderValue]}
                max={30}
                step={1}
                onValueChange={handleSliderChange}
                aria-label="Seller Slider"
            />
            <div className="flex space-x-4 mb-4">
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={addSellers}
                    aria-label="Add Sellers"
                    className="transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <RiAddLine size={20} />
                </Button>
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={deleteSellers}
                    aria-label="Delete Sellers"
                    className="transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <RiSubtractLine size={20} />
                </Button>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                Total Sellers: {totalSellers}
            </p>
            <div className="mt-6 w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg relative overflow-auto">
                {renderSellers()}
            </div>
        </motion.div>
    );
};

export default SellerControl;
