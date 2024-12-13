import React from 'react';
import { useNavigate } from 'react-router-dom';
import InteractiveCard from "@/components/ui/InteractiveCardMod_Sim.jsx";
import ModeToggle from '@/components/ui/shadcncomponents/ModeToggle.jsx';
import { motion } from 'framer-motion';

// Reusable Navigation Link
const NavLink = ({ href, label }) => (
    <a
        href={href}
        className="text-white text-3xl font-medium hover:text-first-color"
    >
        {label}
    </a>
);


// Main Home Component
const Home = () => {
    const navigate = useNavigate();

    return (
        <>
        <header
            className="fixed w-full top-0 left-0 h-20 bg-black-color z-50 shadow-md border-b border-green-500 transition-colors">
            <nav className="h-full flex justify-between items-center px-6 max-w-7xl mx-auto">
                <a href="#" className="flex items-center text-white font-bold text-3xl">
                    <i className="ri-bar-chart-line text-first-color mr-3"></i> Market Wise
                </a>
                <ModeToggle/>
                <div className="hidden md:block">
                    <ul className="flex space-x-8">
                        <li><NavLink href="#home" label="Home"/></li>
                        <li><NavLink href="#modules" label="Modules"/></li>
                        <li><NavLink href="#simulations" label="Simulations"/></li>
                    </ul>
                </div>
            </nav>
        </header>

        <main className="pt-16">
            {/* Home Section */}
            <section className="home-section py-20 flex items-center justify-center min-h-screen" id="home">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h1 className="text-3xl md:text-6xl font-bold mb-6 uppercase text-black dark:text-white">
                        Demystifying Markets<br/>
                        <span className="block mt-2 text-green-600 dark:text-first-color">
                              Through Interactive Learning
                             </span>
                    </h1>


                    <p className="text-base md:text-2xl mb-8 text-black dark:text-white">
                        Explore the fundamentals of markets, from their basic principles to the dynamics
                        of the stock market. Dive into interactive lessons and simulations to understand
                        how markets operate and what the stock market is all about.
                    </p>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => {
                                const section = document.getElementById('modules');
                                section?.scrollIntoView({behavior: 'smooth'});
                            }}
                            className="bg-first-color text-white font-bold py-3 px-7 rounded-full inline-flex items-center gap-2 hover:bg-first-color-alt transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            Jump to Modules
                        </button>
                    </div>
                </div>
            </section>


            {/* Modules Section */
            }
            <section className="modules-section py-20 bg-container-color" id="modules">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="text-center md:text-left">
                        <motion.div
                            className="text-center mb-12 p-6 bg-gradient-to-r from-gray-800 to-green-700 rounded-lg shadow-xl"
                            initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-3xl font-bold text-title-color mb-4">Modules</h2>
                </motion.div>
                <p className="py-2">
                    Explore two foundational modules designed to introduce you to the key concepts that pave
                    the way to understanding the stock market.
                </p>
                <p className="py-2">
                    <strong>Module 1: Understanding Markets</strong>: Learn the basic principles of markets,
                    including how supply and demand interact to influence prices, and the fundamental
                    factors
                    that drive market behavior.
                </p>
                <p className="py-2">
                    <strong>Module 2: Understanding the Stock Market</strong>: Build on the basics by diving
                                into how the stock market works, exploring concepts like stocks, shares, and how market
                                dynamics impact trading and investing.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <InteractiveCard
                                title="Module 1: Understanding Markets"
                                buttonText="Start Now"
                                onClick={() => navigate('/module1')}
                            />
                            <InteractiveCard
                                title="Module 2: Understanding the Stock Market"
                                buttonText="Start Now"
                                onClick={() => navigate('/module2')}
                            />
                        </div>
                    </div>
                </section>

                {/* Simulations Section */}
                <section className="simulations-section py-20" id="simulations">
                    <h2 className="text-3xl font-bold text-title-color text-center mb-10">Interactive Simulations</h2>
                    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                        <InteractiveCard
                            title="Interactive Buyer-Seller Price Simulator"
                            buttonText="Start Now"
                            onClick={() => navigate('/simulations')}
                        />
                        <InteractiveCard
                            title="Market Equilibrium Matcher"
                            buttonText="Start Now"
                            onClick={() => navigate('/simulation/market-equilibrium')}
                        />
                        <InteractiveCard
                            title="Investor Indices Matcher"
                            buttonText="Start Now"
                            onClick={() => navigate('/simulation/investor-indices')}
                        />
                        <InteractiveCard
                            title="Stocks and Shares Matcher"
                            buttonText="Start Now"
                            onClick={() => navigate('/simulation/stocks-and-shares')}
                        />

                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
