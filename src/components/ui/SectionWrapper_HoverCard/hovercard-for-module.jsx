// src/components/ui/HoverCardForModuleInfo.jsx

import React from "react";
import { motion } from "framer-motion";

const HoverCardForModuleInfo = ({ title, children }) => {
    return (
        <motion.div
            className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors w-full"
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {title && <strong className="text-xl text-gray-800 dark:text-gray-200">{title}:</strong>}
            <p className="mt-2 text-gray-700 dark:text-gray-300 break-words">{children}</p>
        </motion.div>
    )
};

export default HoverCardForModuleInfo;
