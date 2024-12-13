import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/shadcncomponents/button.jsx"; // Adjust based on your file structure
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/shadcncomponents/dropdown-menu.jsx";
import { useTheme } from "./ThemeContext.jsx"; // Adjust the import path

const ModeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className={`relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 
                        ${
                        theme === "dark"
                            ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-500"
                            : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200 hover:border-gray-400"
                    }`}
                    aria-label="Toggle Theme"
                >
                    {/* Sun Icon for Light Mode */}
                    <Sun
                        className={`absolute w-5 h-5 transition-transform duration-300 ${
                            theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"
                        }`}
                    />
                    {/* Moon Icon for Dark Mode */}
                    <Moon
                        className={`absolute w-5 h-5 transition-transform duration-300 ${
                            theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
                        }`}
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={5} className="min-w-[8rem]">
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                >
                    <Sun className="mr-2 h-4 w-4" /> Light
                    {theme === "light" && <span className="ml-auto text-xs text-green-500">Active</span>}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                >
                    <Moon className="mr-2 h-4 w-4" /> Dark
                    {theme === "dark" && <span className="ml-auto text-xs text-green-500">Active</span>}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                >
                    <span className="mr-2">🖥️</span> System
                    {theme === "system" && <span className="ml-auto text-xs text-green-500">Active</span>}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ModeToggle;
