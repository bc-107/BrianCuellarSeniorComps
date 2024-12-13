import React, {createContext, useState, useEffect, useMemo, useCallback, useRef} from "react";
import PropTypes from "prop-types";

export const SimulationContext = createContext();

export const SimulationProvider = ({ children }) => {



    const basePrice = 20; // init price

    const defaultState = {
        buyerSliderValue: 1,
        sellerSliderValue: 1,
        totalBuyers: 0,
        totalSellers: 0,
        buyers: [],
        sellers: [],
        priceData: [],
        chartLabels: [],
        currentPrice: basePrice,
        message: "",
    };

    // State variables
    const [buyerSliderValue, setBuyerSliderValue] = useState(defaultState.buyerSliderValue);
    const [sellerSliderValue, setSellerSliderValue] = useState(defaultState.sellerSliderValue);
    const [totalBuyers, setTotalBuyers] = useState(defaultState.totalBuyers);
    const [totalSellers, setTotalSellers] = useState(defaultState.totalSellers);
    const [buyers, setBuyers] = useState(defaultState.buyers);
    const [sellers, setSellers] = useState(defaultState.sellers);
    const [priceData, setPriceData] = useState(defaultState.priceData);
    const [chartLabels, setChartLabels] = useState(defaultState.chartLabels);
    const [currentPrice, setCurrentPrice] = useState(basePrice);
    const [message, setMessage] = useState(defaultState.message);

    // Add buyers with fixed random positions
    const addBuyers = useCallback(() => {
        const count = buyerSliderValue;
        const newBuyers = Array.from({ length: count }).map(() => ({
            x: Math.random() * 100, // Random x-position (0–100%)
            y: Math.random() * 100, // Random y-position (0–100%)
        }));

        setTotalBuyers((prev) => prev + count);
        setBuyers((prev) => [...prev, ...newBuyers]); // Add new buyers to the existing array
    }, [buyerSliderValue]);

    // Add sellers
    const addSellers = useCallback(() => {
        const count = sellerSliderValue;
        const newSellers = Array.from({ length: count }).map(() => ({
            x: Math.random() * 100, // Random x-position (0–100%)
            y: Math.random() * 100, // Random y-position (0–100%)
        }));

        setTotalSellers((prev) => prev + count);
        setSellers((prev) => [...prev, ...newSellers]); // Add new sellers to the existing array
    }, [sellerSliderValue]);

    // Delete buyers
    const deleteBuyers = useCallback(() => {
        const count = buyerSliderValue;
        setTotalBuyers((prevTotal) => {
            const newTotal = Math.max(prevTotal - count, 0);
            const actualCount = prevTotal - newTotal;
            setBuyers((prevBuyers) => prevBuyers.slice(0, -actualCount));
            return newTotal;
        });
    }, [buyerSliderValue]);

    // Delete sellers
    const deleteSellers = useCallback(() => {
        const count = sellerSliderValue;
        setTotalSellers((prevTotal) => {
            const newTotal = Math.max(prevTotal - count, 0);
            const actualCount = prevTotal - newTotal;
            setSellers((prevSellers) => prevSellers.slice(0, -actualCount));
            return newTotal;
        });
    }, [sellerSliderValue]);

    const calculatePrice = useCallback((buyersCount, sellersCount) => {
        // Handle the case where both buyers and sellers are zero
        if (buyersCount === 0 && sellersCount === 0) return basePrice;

        // Handle edge cases
        if (sellersCount === 0) return basePrice + 10; // Price skyrockets due to zero supply
        if (buyersCount === 0) return basePrice - 10; // Price drops significantly due to zero demand

        // Exact equality
        if (buyersCount === sellersCount) {
            return basePrice; // Market equilibrium, no change in price
        }

        // Otherwise, calculate price adjustment
        const buyerToSellerRatio = buyersCount / sellersCount;

        // Calculate price change based on ratio
        const priceChange = (buyerToSellerRatio - 1) * 5; // Adjust sensitivity with multiplier
        return basePrice + priceChange;
    }, [basePrice]);



    // Debounced updatePrice
    const updatePriceTimeout = useRef(null);

    const updatePrice = useCallback(() => {
        if (updatePriceTimeout.current) {
            clearTimeout(updatePriceTimeout.current);
        }

        updatePriceTimeout.current = setTimeout(() => {
            const buyersCount = totalBuyers;
            const sellersCount = totalSellers;
            const newPrice = calculatePrice(buyersCount, sellersCount);
            setCurrentPrice(newPrice);

            const currentTime = new Date().toLocaleTimeString();

            setChartLabels((prev) => {
                const updatedLabels = [...prev, currentTime];
                if (updatedLabels.length > 20) updatedLabels.shift();
                return updatedLabels;
            });

            setPriceData((prev) => {
                const updatedData = [...prev, newPrice];
                if (updatedData.length > 20) updatedData.shift();
                return updatedData;
            });
        }, 500); // 500ms debounce delay
    }, [totalBuyers, totalSellers, calculatePrice]);

    //update message
    useEffect(() => {
        if (totalBuyers > totalSellers) {
            const difference = totalBuyers - totalSellers;
            setMessage(
                `There are currently ${totalBuyers} buyers and ${totalSellers} sellers, 
                with ${difference} more buyers than sellers. 
                With higher demand than supply, prices are likely to rise.`
            );
        } else if (totalBuyers < totalSellers) {
            const difference = totalSellers - totalBuyers;
            setMessage(
                `There are currently ${totalBuyers} buyers and ${totalSellers} sellers, 
                with ${difference} more sellers than buyers. 
                Excess supply may lead to lower prices.`
            );
        } else {
            setMessage(
                `Market is balanced with ${totalBuyers} buyers and ${totalSellers} sellers. 
                Prices are stable at this equilibrium.`
            );
        }
    }, [totalBuyers, totalSellers]);

    // Trigger price updates
    useEffect(() => {
        updatePrice();
    }, [totalBuyers, totalSellers, updatePrice]);

    // Clean up timeout on unmount
    useEffect(() => {
        return () => {
            if (updatePriceTimeout.current) {
                clearTimeout(updatePriceTimeout.current);
            }
        };
    }, []);

    // Reset Sim
    const resetSimulation = useCallback(() => {
        setBuyerSliderValue(defaultState.buyerSliderValue);
        setSellerSliderValue(defaultState.sellerSliderValue);
        setTotalBuyers(defaultState.totalBuyers);
        setTotalSellers(defaultState.totalSellers);
        setBuyers(defaultState.buyers);
        setSellers(defaultState.sellers);
        setPriceData(defaultState.priceData);
        setChartLabels(defaultState.chartLabels);
        setCurrentPrice(basePrice); // Reset to basePrice
        setMessage(defaultState.message);
    }, [basePrice]);


    const contextValue = useMemo(
        () => ({
            buyerSliderValue,
            setBuyerSliderValue,
            sellerSliderValue,
            setSellerSliderValue,
            addBuyers,
            deleteBuyers,
            addSellers,
            deleteSellers,
            totalBuyers,
            totalSellers,
            buyers,
            sellers,
            priceData,
            chartLabels,
            currentPrice,
            message,
            resetSimulation,
        }),
        [
            buyerSliderValue,
            sellerSliderValue,
            addBuyers,
            deleteBuyers,
            addSellers,
            deleteSellers,
            totalBuyers,
            totalSellers,
            buyers,
            sellers,
            priceData,
            chartLabels,
            currentPrice,
            message,
            resetSimulation,
        ]
    );

    return (
        <SimulationContext.Provider value={contextValue}>
            {children}
        </SimulationContext.Provider>
    );
};

SimulationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SimulationProvider;
