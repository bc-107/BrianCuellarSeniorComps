import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Create the context
export const Module1ContextPart2 = createContext();

// Provider component
export const Module1ProviderPart2 = ({ children }) => {
    // State variables
    const [sellers, setSellers] = useState([]); // Array of farmers
    const [totalApples, setTotalApples] = useState(0); // Number of apples
    const [event, setEvent] = useState("None"); // Current event
    const [explanation, setExplanation] = useState(""); // Explanation message

    // Function to generate a single farmer with random position
    const generateSingleSeller = () => ({
        id: uuidv4(),
        x: Math.floor(Math.random() * 90) + 5, // 5% to 95% to avoid edges
        y: Math.floor(Math.random() * 90) + 5,
    });

    // Function to add multiple farmers
    const addSellers = (number = 10) => {
        const newSellers = [];
        for (let i = 0; i < number; i++) {
            newSellers.push(generateSingleSeller());
        }
        setSellers(prev => [...prev, ...newSellers]);
        setTotalApples(prev => prev + number); // Each farmer produces 1 apple
    };

    // Function to remove multiple farmers
    const removeSellers = (number = 10) => {
        setSellers(prev => {
            const newSellers = prev.slice(0, Math.max(prev.length - number, 0));
            setTotalApples(newSellers.length); // Adjust apples to match farmers
            return newSellers;
        });
    };

    // Function to reset the simulation
    const resetSellers = () => {
        setSellers([]);
        setTotalApples(0);
        setEvent("None");
        setExplanation("");
    };

    // Function to trigger demand events
    const triggerEvent = (selectedEvent) => {
        setEvent(selectedEvent);

        switch(selectedEvent) {
            case "ViralTikTok":
                // Add 10 farmers
                addSellers(10);
                // Set explanation
                setExplanation("A viral TikTok video has increased demand for apples, leading to higher demand and potentially higher prices.");
                break;
            case "NegativeNews":
                // Remove 10 farmers
                removeSellers(10);
                // Set explanation
                setExplanation("Negative news has decreased demand for apples, leading to lower demand and potentially lower prices.");
                break;
            case "Stable":
                // Reset to 10 farmers for balanced demand
                resetSellers();
                addSellers(10);
                // Set explanation
                setExplanation("Demand remains stable, maintaining a balanced market with steady prices.");
                break;
            default:
                // No event
                break;
        }
    };

    return (
        <Module1ContextPart2.Provider
            value={{
                sellers,
                totalSellers: sellers.length,
                totalApples,
                event,
                explanation,
                triggerEvent,
                resetSellers,
            }}
        >
            {children}
        </Module1ContextPart2.Provider>
    );
};
