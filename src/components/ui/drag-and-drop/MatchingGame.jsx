import React, { useState, useEffect } from "react";
import { Button } from '@/components/ui/shadcncomponents/button.jsx';
import { RiRefreshLine } from "react-icons/ri";
import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { DraggableItem } from '@/components/ui/drag-and-drop/draggable.jsx';
import { DroppableArea } from '@/components/ui/drag-and-drop/droppable.jsx';

const shuffleArray = (array) => {
    return array
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
};

const MatchingGame = ({ title, description, terms, definitions, checkAnswers }) => {
    const [matches, setMatches] = useState({});
    const [feedback, setFeedback] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [shuffledDefinitions, setShuffledDefinitions] = useState(shuffleArray(definitions));
    const [activeId, setActiveId] = useState(null); // New state for active dragged item

    useEffect(() => {
        const matchedDefIds = Object.values(matches);
        const availableDefinitions = shuffleArray(
            definitions.filter((def) => !matchedDefIds.includes(def.id))
        );
        setShuffledDefinitions(availableDefinitions);
    }, [matches, definitions]);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) return;

        const draggedId = active.id;
        const targetId = over.id;

        if (targetId === "definitions") {
            const termId = Object.keys(matches).find((key) => matches[key] === draggedId);
            if (termId) {
                const updatedMatches = { ...matches };
                delete updatedMatches[termId];
                setMatches(updatedMatches);
            }
            return;
        }

        const targetTerm = terms.find((t) => t.id === targetId);
        if (!targetTerm) return;

        const currentTermId = Object.keys(matches).find((key) => matches[key] === draggedId);
        const targetTermDefId = matches[targetId];
        const updatedMatches = { ...matches };

        if (targetTermDefId) {
            if (currentTermId && currentTermId !== targetId) {
                updatedMatches[targetId] = draggedId;
                updatedMatches[currentTermId] = targetTermDefId;
            } else {
                updatedMatches[targetId] = draggedId;
            }
        } else {
            updatedMatches[targetId] = draggedId;

            if (currentTermId && currentTermId !== targetId) {
                delete updatedMatches[currentTermId];
            }
        }

        setMatches(updatedMatches);
    };

    const handleSubmit = () => {
        const newFeedback = checkAnswers(matches);
        setFeedback(newFeedback);
        setSubmitted(true);
    };

    const resetSimulation = () => {
        setMatches({});
        setFeedback({});
        setSubmitted(false);
        setShuffledDefinitions(shuffleArray(definitions));
    };

    return (
        <div className="matching-game">
            <h3 className="text-3xl font-semibold mb-6 text-center lg:text-left">{title}</h3>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                {description}
            </p>
            <DndContext
                collisionDetection={closestCenter}
                onDragStart={(event) => setActiveId(event.active.id)}
                onDragEnd={(event) => {
                    handleDragEnd(event);
                    setActiveId(null);
                }}
                onDragCancel={() => setActiveId(null)}
            >
                <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="w-1/2 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col gap-y-4">
                        {terms.map((term) => (
                            <DroppableArea
                                key={term.id}
                                id={term.id}
                                isCorrect={submitted ? feedback[term.id] : null}
                            >
                                <h4 className="font-semibold mb-2">{term.content}</h4>
                                <div className="p-2 mt-2 rounded bg-gray-600 min-h-[60px] flex items-center justify-center">
                                    {matches[term.id] && matches[term.id] !== activeId ? (
                                        <DraggableItem id={matches[term.id]}>
                                            {definitions.find((def) => def.id === matches[term.id]).content}
                                        </DraggableItem>
                                    ) : (
                                        <p className="text-gray-400 text-center break-words px-2">
                                            Drop definition here
                                        </p>
                                    )}
                                </div>
                            </DroppableArea>
                        ))}
                    </div>
                    <div className="w-1/2 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col gap-4 h-full overflow-auto">
                        <h4 className="font-semibold mb-2 text-center">Definitions</h4>
                        {shuffledDefinitions.map((def) => (
                            <DraggableItem
                                key={def.id}
                                id={def.id}
                                className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg"
                            >
                                {def.content}
                            </DraggableItem>
                        ))}
                    </div>
                </div>

                {/* DragOverlay */}
                <DragOverlay>
                    {activeId ? (
                        <div className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-lg">
                            {definitions.find((def) => def.id === activeId)?.content || "Loading..."}
                        </div>
                    ) : null}
                </DragOverlay>
            </DndContext>
            <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                    variant="primary"
                    onClick={handleSubmit}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                    disabled={submitted}
                >
                    <span>Submit</span>
                </Button>
                <Button
                    variant="secondary"
                    onClick={resetSimulation}
                    className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700"
                >
                    <RiRefreshLine size={20} /> <span>Reset Simulation</span>
                </Button>
            </div>
            {submitted && (
                <div className="mt-6 p-4 bg-gray-700 rounded-lg shadow-md">
                    <h4 className="text-2xl font-semibold mb-2">Results</h4>
                    <ul className="list-disc list-inside">
                        {terms.map((term) => (
                            <li key={term.id} className="mb-2">
                                <strong>{term.content}:</strong>{' '}
                                {feedback[term.id] ? (
                                    <span className="text-green-500">Correct</span>
                                ) : (
                                    <span className="text-red-500">Incorrect</span>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        {Object.values(feedback).every((isCorrect) => isCorrect) ? (
                            <p className="text-green-400 font-semibold">All matches are correct! Well done!</p>
                        ) : (
                            <p className="text-red-400 font-semibold">Some matches are incorrect. Try again!</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );

};

export default MatchingGame;
