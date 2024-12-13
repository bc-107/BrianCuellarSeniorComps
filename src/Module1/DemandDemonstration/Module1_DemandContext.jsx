import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Module1_DemandContext = createContext();

export const Module1_DemandProvider = ({ children }) => {
    const [buyerSliderValue, setBuyerSliderValue] = useState(5); // Default 5 buyers
    const [buyers, setBuyers] = useState([]);

    // Initialize buyers based on default slider value
    useEffect(() => {
        resetBuyers();
    }, []);

    const addBuyers = () => {
        setBuyerSliderValue(prev => {
            if (prev < 30) {
                const newValue = prev + 1;
                addBuyer();
                return newValue;
            }
            return prev;
        });
    };

    const deleteBuyers = () => {
        setBuyerSliderValue(prev => {
            if (prev > 0) {
                const newValue = prev - 1;
                removeBuyer();
                return newValue;
            }
            return prev;
        });
    };

    const resetBuyers = () => {
        setBuyerSliderValue(0); // Reset to default value
        setBuyers(generateBuyers(0));
    };

    const setBuyerSlider = (value) => {
        setBuyerSliderValue(value);
        setBuyers(generateBuyers(value));
    };

    const addBuyer = () => {
        setBuyers(prev => [...prev, ...generateSingleBuyer(1)]);
    };

    const removeBuyer = () => {
        setBuyers(prev => prev.slice(0, -1));
    };

    const generateBuyers = (count) => {
        const newBuyers = [];
        for (let i = 0; i < count; i++) {
            newBuyers.push({
                id: uuidv4(),
                x: Math.floor(Math.random() * 90) + 5, // 5% to 95% to avoid edges
                y: Math.floor(Math.random() * 90) + 5,
            });
        }
        return newBuyers;
    };

    const generateSingleBuyer = (count) => {
        const newBuyers = [];
        for (let i = 0; i < count; i++) {
            newBuyers.push({
                id: uuidv4(),
                x: Math.floor(Math.random() * 90) + 5,
                y: Math.floor(Math.random() * 90) + 5,
            });
        }
        return newBuyers;
    };

    return (
        <Module1_DemandContext.Provider
            value={{
                buyerSliderValue,
                setBuyerSliderValue: setBuyerSlider,
                addBuyers,
                deleteBuyers,
                resetBuyers,
                buyers,
                totalBuyers: buyers.length,
            }}
        >
            {children}
        </Module1_DemandContext.Provider>
    );
};
