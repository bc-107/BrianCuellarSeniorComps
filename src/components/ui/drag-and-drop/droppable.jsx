import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function DroppableArea({ id, children, isCorrect }) {
    const { isOver, setNodeRef } = useDroppable({
        id: id, // Use the passed id for droppable identification
    });

    const isDefinitionsArea = id === 'definitions';

    // Define base styles
    const baseStyle = {
        border: '2px solid #6b7280', // Default gray border
        backgroundColor: '#374151', // Default dark gray background
        minHeight: '60px',
        padding: '8px',
        borderRadius: '8px',
        transition: 'background-color 0.3s, border 0.3s',
    };

    // Modify styles dynamically
    const style = {
        ...baseStyle,
        ...(isOver && !isDefinitionsArea && { border: '2px dashed #4ade80', backgroundColor: '#f0fdf4' }), // Highlight on drag over
        ...(isCorrect === true && { border: '2px solid #22c55e' }), // Correct match
        ...(isCorrect === false && { border: '2px solid #ef4444' }), // Incorrect match
    };

    // Prevents dropping inside definitions area
    const handleDragOver = (e) => {
        if (isDefinitionsArea) {
            e.preventDefault();
        }
    };

    return (
        <div
            ref={setNodeRef}
            id={id} // Assigns the id to the div for identification
            style={style}
            onDragOver={handleDragOver}
            className={`droppable-area ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}
        >
            {children}
        </div>
    );
}
