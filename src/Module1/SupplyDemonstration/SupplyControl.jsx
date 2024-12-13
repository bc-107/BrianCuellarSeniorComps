import React, { useContext, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/shadcncomponents/button.jsx";
import { Slider } from "@/components/ui/shadcncomponents/slider.jsx";
import { RiAddLine, RiSubtractLine, RiRefreshLine } from "react-icons/ri";
import { Module1Context } from "./Module1Context.jsx";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/shadcncomponents/hover-card.jsx";
import farmerImage from "../../images/man_farmer.svg";
import appleCart from "../../images/apple.svg";
import { motion, AnimatePresence } from "framer-motion";

const SupplyControl = () => {
    const {
        sellerSliderValue,
        setSellerSliderValue,
        addSellers,
        deleteSellers,
        resetSellers,
        sellers,
        totalSellers,
        totalApples,
        setTotalApples,
    } = useContext(Module1Context);

    const handleSliderChange = useCallback(
        (value) => setSellerSliderValue(value[0]),
        [setSellerSliderValue]
    );

    // Update total apples based on the number of sellers
    useEffect(() => {
        setTotalApples(totalSellers); // Example: each seller produces 10 apples
    }, [totalSellers, setTotalApples]);

    return (
        <motion.div
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-500 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            {/* Hoverable Card for Supply Control */}
            <HoverCard>
                <HoverCardTrigger>
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4 cursor-pointer">
                        Supply Control
                    </h2>
                </HoverCardTrigger>
                <HoverCardContent
                    className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-5 rounded-lg shadow-md">
                    <p className="text-sm">
                        Adjust the number of farmers and production costs to see how supply shapes the market.
                    </p>
                </HoverCardContent>
            </HoverCard>

            {/* Slider for Number of Sellers */}
            <label htmlFor="seller-slider" className="mb-2 text-lg text-gray-700 dark:text-gray-300">
                Number of Sellers: {sellerSliderValue}
            </label>
            <Slider
                id="seller-slider"
                className="w-full mb-6"
                value={[sellerSliderValue]}
                max={30}
                step={1}
                onValueChange={handleSliderChange}
                aria-label="Seller Slider"
            />

            {/* Buttons for Adding/Deleting/Resetting Sellers */}
            <div className="flex space-x-4 mb-4">
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={addSellers}
                    aria-label="Add Sellers"
                >
                    <RiAddLine size={20} />
                </Button>
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={deleteSellers}
                    aria-label="Delete Sellers"
                >
                    <RiSubtractLine size={20} />
                </Button>
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={resetSellers}
                    aria-label="Reset Sellers"
                >
                    <RiRefreshLine size={20} />
                </Button>
            </div>

            {/* Display Total Sellers and Total Apples */}
            <div className="flex space-x-6 mb-6">
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    <strong>Total Sellers:</strong> {totalSellers}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    <strong>Total Apples Produced:</strong> {totalApples}
                </p>
            </div>

            {/* Sellers and Apples Display */}
            <div className="mt-8 w-full grid grid-cols-2 gap-4">
                {/* Farmers Display */}
                <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <AnimatePresence>
                        {sellers.map((seller, index) => (
                            <motion.img
                                key={seller.id}
                                src={farmerImage}
                                alt="Seller"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                style={{
                                    position: "absolute",
                                    top: `${seller.y}%`,
                                    left: `${seller.x}%`,
                                    transform: "translate(-50%, -50%)",
                                }}
                                className="w-12 h-12 object-contain"
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Apples Display */}
                <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <AnimatePresence>
                        {sellers.map((seller, index) => (
                            <motion.img
                                key={`apple-${seller.id}`}
                                src={appleCart}
                                alt="Apple Cart"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                                style={{
                                    position: "absolute",
                                    top: `${(seller.y + 20) % 100}%`, // Offset apples slightly below farmers
                                    left: `${seller.x}%`,
                                    transform: "translate(-50%, -50%)",
                                }}
                                className="w-12 h-12 object-contain"
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default SupplyControl;
