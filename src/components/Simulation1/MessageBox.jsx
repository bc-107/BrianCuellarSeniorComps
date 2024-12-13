import React, { useContext, useMemo } from 'react';
import { SimulationContext } from './SimulationsContext'; // Context for simulation state

const MessageBox = () => {
    const { message } = useContext(SimulationContext);

    // Determine background color based on message type
    const bgColor = useMemo(() => {
        if (message.includes('more buyers')) return 'bg-green-200 dark:bg-green-700';
        if (message.includes('more sellers')) return 'bg-red-200 dark:bg-red-700';
        return 'bg-yellow-200 dark:bg-yellow-700';
    }, [message]);

    return (
        <div className={`max-w-4xl mx-auto p-4 rounded-lg ${bgColor} transition-colors duration-300`}>
            <p className="text-gray-800 dark:text-gray-100">{message}</p>
        </div>
    );
};

export default MessageBox;
