import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Module1_DemandContextPart2 = createContext();

export const Module1_DemandProviderPart2 = ({ children }) => {
    const [buyers, setBuyers] = useState([]);
    const [event, setEvent] = useState("None");
    const [explanation, setExplanation] = useState("");
    const [demandLevel, setDemandLevel] = useState("Steady"); // Demand state

    // Function to generate a single buyer with random position
    const generateSingleBuyer = () => ({
        id: uuidv4(),
        x: Math.floor(Math.random() * 90) + 5, // Random position
        y: Math.floor(Math.random() * 90) + 5,
    });

    // Add multiple buyers
    const addBuyers = (number = 10) => {
        const newBuyers = Array.from({ length: number }, generateSingleBuyer);
        setBuyers((prev) => [...prev, ...newBuyers]);
    };

    // Remove multiple buyers
    const removeBuyers = (number = 10) => {
        setBuyers((prev) => prev.slice(0, Math.max(prev.length - number, 0)));
    };

    // Reset buyers
    const resetBuyers = () => {
        setBuyers([]);
        setEvent("None");
        setExplanation("");
        setDemandLevel("Steady"); // Reset demand level
    };

    const triggerEvent = (selectedEvent) => {
        // Reset buyers to ensure consistent behavior for each event
        setBuyers([]);

        setEvent(selectedEvent);

        switch (selectedEvent) {
            case "FestiveSeason":
                addBuyers(20); // Increased buyers for the Festive Season
                setExplanation(
                    "During the festive season, chefs rush to buy apples to prepare special dishes for their customers, causing a surge in demand."
                );
                setDemandLevel("Increasing");
                break;

            case "EconomicDownturn":
                addBuyers(2); // Low but visible buyers for Economic Downturn
                setExplanation(
                    "An economic downturn has reduced restaurant budgets, forcing chefs to cut back on apple purchases."
                );
                setDemandLevel("Decreasing");
                break;

            case "SocialMediaTrend":
                addBuyers(25); // Spike in buyers for Social Media Trend
                setExplanation(
                    "A viral apple pie recipe on social media has led chefs to stock up on apples to meet customer demand."
                );
                setDemandLevel("Increasing");
                break;

            case "PriceDrop":
                addBuyers(10); // Moderate increase for Price Drop
                setExplanation(
                    "A sudden price drop makes apples more affordable, encouraging chefs to buy more for their menus."
                );
                setDemandLevel("Increasing");
                break;

            default:
                setExplanation("");
                setDemandLevel("Steady");
                break;
        }
    };

    return (
        <Module1_DemandContextPart2.Provider
            value={{
                buyers,
                totalBuyers: buyers.length,
                event,
                explanation,
                demandLevel,
                triggerEvent,
                resetBuyers,
            }}
        >
            {children}
        </Module1_DemandContextPart2.Provider>
    );
};
