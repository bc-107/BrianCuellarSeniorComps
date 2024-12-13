import React, { useContext } from "react";
import { Button } from "@/components/ui/shadcncomponents/button.jsx";
import { RiRefreshLine } from "react-icons/ri";
import { Module1ContextPart2 } from "./Module1ContextPart2.jsx";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/shadcncomponents/hover-card.jsx";
import farmerImage from "../../images/man_farmer.svg";
import appleCart from "../../images/apple.svg";
import { motion, AnimatePresence } from "framer-motion";

import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
} from "@/components/ui/shadcncomponents/select.jsx"; // Ensure correct path



const SupplyControlPT2 = () => {
    const {
        sellers,
        totalSellers,
        totalApples,
        event,
        explanation,
        triggerEvent,
        resetSellers,
    } = useContext(Module1ContextPart2); // Ensure correct context

    // Function to map event to demand value
    const getDemandValue = () => {
        switch (event) {
            case "ViralTikTok":
                return 20;
            case "NegativeNews":
                return 0;
            case "Stable":
                return 10;
            default:
                return 0;
        }
    };

    return (
        <motion.div
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-500 relative"
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
        >
            {/* Hoverable Card for Supply Control */}
            <HoverCard>
                <HoverCardTrigger>
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4 cursor-pointer">
                        Supply Control
                    </h2>
                </HoverCardTrigger>
                <HoverCardContent
                    className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-5 rounded-lg shadow-md"
                >
                    <p className="text-sm">
                        Adjust the number of farmers by triggering demand events to see how supply shapes the market.
                        You can also reset the simulation to its initial state.
                    </p>
                </HoverCardContent>
            </HoverCard>

            {/* Buttons for Resetting Sellers */}
            <div className="flex space-x-4 mb-4">
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={resetSellers}
                    aria-label="Reset Sellers"
                >
                    <RiRefreshLine size={20}/>
                </Button>
            </div>

            {/* Custom Select Dropdown for Demand Events */}
            <div className="w-full mb-6">
                <label htmlFor="demand-event" className="mb-2 text-lg text-gray-700 dark:text-gray-300">
                    Demand Events:
                </label>

                <Select onValueChange={(value) => triggerEvent(value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select an event"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectScrollUpButton/>
                        <SelectGroup>
                            <SelectLabel>Demand Scenarios</SelectLabel>
                            <SelectItem value="Stable">Stable Demand</SelectItem>
                            <SelectItem value="ViralTikTok">Viral TikTok Video Increases Demand</SelectItem>
                            <SelectItem value="NegativeNews">Negative News Decreases Demand</SelectItem>
                        </SelectGroup>
                        <SelectScrollDownButton/>
                    </SelectContent>
                </Select>

                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Selected Event:{" "}
                    {event === "ViralTikTok"
                        ? "Viral TikTok Video Increases Demand"
                        : event === "NegativeNews"
                            ? "Negative News Decreases Demand"
                            : event === "Stable"
                                ? "Stable Demand"
                                : "None"}
                </p>
            </div>

            {/* Display Total Sellers, Total Apples, and Current Demand */}
            <div className="flex space-x-6 mb-6">
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    <strong>Total Sellers:</strong> {totalSellers}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    <strong>Total Apples Produced:</strong> {totalApples}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    <strong>Current Demand:</strong> {getDemandValue()}
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


            {/* Sellers and Apples Display */}
            <div className="mt-8 w-full grid grid-cols-2 gap-4">
                {/* Farmers Display */}
                <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <AnimatePresence>
                        {sellers.map((seller) => (
                            <motion.img
                                key={seller.id}
                                src={farmerImage}
                                alt="Seller"
                                initial={{opacity: 0, scale: 0.5}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.5}}
                                transition={{duration: 0.5}}
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
                        {sellers.map((seller) => (
                            <motion.img
                                key={`apple-${seller.id}`}
                                src={appleCart}
                                alt="Apple Cart"
                                initial={{opacity: 0, scale: 0.5}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.5}}
                                transition={{duration: 0.5}}
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
    export default SupplyControlPT2;

