import React, { useContext } from 'react';
import { Button } from "@/components/ui/shadcncomponents/button.jsx"
import { RiRestartLine } from 'react-icons/ri';
import { SimulationContext } from './SimulationsContext';

const ResetButton = () => {
    const { resetSimulation } = useContext(SimulationContext);

    return (
        <Button
            onClick={resetSimulation}
            variant="solid"
            className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 focus:ring-2 focus:ring-red-400 transition-colors duration-300"
            aria-label="Reset Simulation"
        >
            <RiRestartLine size={20} />
            <span>Reset Simulation</span>
        </Button>
    );
};

export default ResetButton;
