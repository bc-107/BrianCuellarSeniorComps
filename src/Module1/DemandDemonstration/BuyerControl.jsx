import React, { useContext, useCallback} from "react";
import { Button } from "@/components/ui/shadcncomponents/button.jsx";
import { Slider } from "@/components/ui/shadcncomponents/slider.jsx";
import { RiAddLine, RiSubtractLine, RiRefreshLine } from "react-icons/ri";
import { Module1_DemandContext } from "./Module1_DemandContext.jsx";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/shadcncomponents/hover-card.jsx";
import buyerImageSrc from "../../images/man_cook.svg";
import { motion, AnimatePresence } from "framer-motion";

const BuyerControl = () => {
    const {
        buyerSliderValue,
        setBuyerSliderValue,
        addBuyers,
        deleteBuyers,
        resetBuyers,
        buyers,
        totalBuyers,
    } = useContext(Module1_DemandContext);

    const handleSliderChange = useCallback(
        (value) => setBuyerSliderValue(value[0]),
        [setBuyerSliderValue]
    );

    return (
        <motion.div
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-500 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            {/* Hoverable Card for Buyer Control */}
            <HoverCard>
                <HoverCardTrigger>
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4 cursor-pointer">
                        Buyer Control
                    </h2>
                </HoverCardTrigger>
                <HoverCardContent
                    className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-5 rounded-lg shadow-md">
                    <p className="text-sm">
                        Adjust the number of cooks to see how demand shapes the market. Use the slider or buttons to change their numbers
                        and observe how cooks (buyers) and farmers (sellers) interact to influence prices and supply-demand balance.
                    </p>
                </HoverCardContent>
            </HoverCard>

            {/* Slider for Number of Buyers */}
            <label htmlFor="buyer-slider" className="mb-2 text-lg text-gray-700 dark:text-gray-300">
                Number of Buyers: {buyerSliderValue}
            </label>
            <Slider
                id="buyer-slider"
                className="w-full mb-6"
                value={[buyerSliderValue]}
                max={30}
                step={1}
                onValueChange={handleSliderChange}
                aria-label="Buyer Slider"
            />

            {/* Buttons for Adding/Deleting/Resetting Buyers */}
            <div className="flex space-x-4 mb-4">
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={addBuyers}
                    aria-label="Add Buyers"
                >
                    <RiAddLine size={20} />
                </Button>
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={deleteBuyers}
                    aria-label="Delete Buyers"
                >
                    <RiSubtractLine size={20} />
                </Button>
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={resetBuyers}
                    aria-label="Reset Buyers"
                >
                    <RiRefreshLine size={20} />
                </Button>
            </div>

            {/* Display Total Buyers */}
            <div className="flex space-x-6 mb-6">
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    <strong>Total Buyers:</strong> {totalBuyers}
                </p>
            </div>

            {/* Buyers Display */}
            <div className="mt-8 w-full grid grid-cols-1 gap-4">
                {/* Buyers Visualization */}
                <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <AnimatePresence>
                        {buyers.map((buyer, index) => (
                            <motion.img
                                key={buyer.id}
                                src={buyerImageSrc}
                                alt="Buyer"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                style={{
                                    position: "absolute",
                                    top: `${buyer.y}%`,
                                    left: `${buyer.x}%`,
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

export default BuyerControl;
