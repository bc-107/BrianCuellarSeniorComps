// Module1Context.jsx

import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Module1Context = createContext();

export const Module1Provider = ({ children }) => {
    const [sellerSliderValue, setSellerSliderValue] = useState(10); // Default 10 sellers
    const [sellers, setSellers] = useState([]);
    const [totalApples, setTotalApples] = useState(0);

    // Initialize sellers based on default slider value
    useEffect(() => {
        resetSellers();
    }, []);

    const addSellers = () => {
        setSellerSliderValue(prev => {
            if (prev < 30) {
                const newValue = prev + 1;
                addSeller();
                return newValue;
            }
            return prev;
        });
    };

    const deleteSellers = () => {
        setSellerSliderValue(prev => {
            if (prev > 0) {
                const newValue = prev - 1;
                removeSeller();
                return newValue;
            }
            return prev;
        });
    };

    const resetSellers = () => {
        setSellerSliderValue(0); // Reset to default value
        setSellers(generateSellers(0));
    };

    const setSellerSlider = (value) => {
        setSellerSliderValue(value);
        setSellers(generateSellers(value));
    };

    const addSeller = () => {
        setSellers(prev => [...prev, ...generateSingleSeller(1)]);
    };

    const removeSeller = () => {
        setSellers(prev => prev.slice(0, -1));
    };

    const generateSellers = (count) => {
        const newSellers = [];
        for (let i = 0; i < count; i++) {
            newSellers.push({
                id: uuidv4(),
                x: Math.floor(Math.random() * 90) + 5, // 5% to 95% to avoid edges
                y: Math.floor(Math.random() * 90) + 5,
            });
        }
        return newSellers;
    };

    const generateSingleSeller = (count) => {
        const newSellers = [];
        for (let i = 0; i < count; i++) {
            newSellers.push({
                id: uuidv4(),
                x: Math.floor(Math.random() * 90) + 5,
                y: Math.floor(Math.random() * 90) + 5,
            });
        }
        return newSellers;
    };

    return (
        <Module1Context.Provider
            value={{
                sellerSliderValue,
                setSellerSliderValue: setSellerSlider,
                addSellers,
                deleteSellers,
                resetSellers,
                sellers,
                totalSellers: sellers.length,
                totalApples,
                setTotalApples,
            }}
        >
            {children}
        </Module1Context.Provider>
    );
};
