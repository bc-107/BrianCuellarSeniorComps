import React, { useContext } from "react";
import { Button } from "@/components/ui/shadcncomponents/button.jsx";
import { RiRefreshLine } from "react-icons/ri";
import { Module1_DemandContextPart2 } from "./Module1_DemandContextPart2.jsx";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/shadcncomponents/hover-card.jsx";
import buyerImage from "../../images/man_cook.svg";
import { motion, AnimatePresence } from "framer-motion";

import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectScrollUpButton,
    SelectScrollDownButton,
} from "@/components/ui/shadcncomponents/select.jsx"; // Ensure correct path
import DemandBarChart from "./DemandBarChart"; // Bar chart for demand visualization

const BuyerControlPT2 = () => {
    const {
        buyers,
        totalBuyers,
        event,
        explanation,
        triggerEvent,
        resetBuyers,
        demandLevel
    } = useContext(Module1_DemandContextPart2); // Ensure correct context

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
                    className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-5 rounded-lg shadow-md"
                >
                    <p className="text-sm">
                        Adjust the number of chefs buying apples by triggering demand events to see how demand shapes the market.
                        You can also reset the simulation to its initial state.
                    </p>
                </HoverCardContent>
            </HoverCard>

            {/* Buttons for Resetting Buyers */}
            <div className="flex space-x-4 mb-4">
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={resetBuyers}
                    aria-label="Reset Buyers"
                >
                    <RiRefreshLine size={20} />
                </Button>
            </div>

            {/* Custom Select Dropdown for Demand Events */}
            <div className="w-full mb-6">
                <label htmlFor="demand-event" className="mb-2 text-lg text-gray-700 dark:text-gray-300">
                    Demand Events:
                </label>

                <Select onValueChange={(value) => triggerEvent(value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select an event" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectScrollUpButton />
                        <SelectGroup>
                            <SelectLabel>Demand Scenarios</SelectLabel>
                            <SelectItem value="FestiveSeason">Festive Season</SelectItem>
                            <SelectItem value="EconomicDownturn">Economic Downturn</SelectItem>
                            <SelectItem value="SocialMediaTrend">Social Media Trend</SelectItem>
                            <SelectItem value="PriceDrop">Price Drop</SelectItem>
                        </SelectGroup>
                        <SelectScrollDownButton />
                    </SelectContent>
                </Select>

                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Selected Event:{" "}
                    {event === "FestiveSeason"
                        ? "Festive Season"
                        : event === "EconomicDownturn"
                            ? "Economic Downturn"
                            : event === "SocialMediaTrend"
                                ? "Social Media Trend"
                                : event === "PriceDrop"
                                    ? "Price Drop"
                                    : "None"}
                </p>
            </div>

            {/* Display Total Buyers and Explanation */}
            <div className="flex space-x-6 mb-6">
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    <strong>Total Buyers:</strong> {totalBuyers}
                </p>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    <strong>Demand Level:</strong> {demandLevel}
                </p>

            </div>

            {/* Dynamic Explanation Box */}
            {explanation && (
                <div className="mt-4 w-full p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
                    <p className="text-gray-800 dark:text-gray-100 whitespace-pre-line text-center">
                        {explanation}
                    </p>
                </div>
            )}

            {/* Buyers and Demand Level Display */}
            <div className="mt-8 w-full grid grid-cols-2 gap-4">
                {/* Buyers Display */}
                <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <AnimatePresence>
                        {buyers.map((buyer) => (
                            <motion.img
                                key={buyer.id}
                                src={buyerImage}
                                alt="Buyer"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
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

                {/* Demand Level Bar Chart */}
                <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <DemandBarChart totalBuyers={totalBuyers} />
                </div>
            </div>
        </motion.div>
    );
};

export default BuyerControlPT2;
