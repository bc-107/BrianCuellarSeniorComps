// ThemeToggleButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "@/components/ui/shadcncomponents/button.jsx"
import { Sun, Moon } from 'react-icons/ri';

const ThemeToggleButton = ({ theme, toggleTheme }) => {
    return (
        <Button
            variant="ghost"
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
    );
};

// Define PropTypes for the component
ThemeToggleButton.propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggleButton;
