import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Theme and Styling
import ThemeProvider from '@/components/ui/shadcncomponents/ThemeContext.jsx';
import './index.css';

// Home Component
import Home from './home/home.jsx';

// Modules
import Module1 from './Module1/Module1.jsx';
import Module2 from './Module2/Module2.jsx';
import { Module1Provider } from './Module1/SupplyDemonstration/Module1Context.jsx';

// Simulations
import Simulations from '@/components/Simulation1/Simulation1.jsx';
import { SimulationProvider } from '@/components/Simulation1/SimulationsContext.jsx';
import MarketEquilibrium from '@/components/Simulation2/MarketEquilibrium.jsx';
import InvestorIndices from '@/components/Simulation3/InvestorIndices.jsx';
import StocksandShares from '@/components/Simulation4/StocksandShares.jsx';

function App() {
    return (
        <Module1Provider>
            <ThemeProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* Module Routes */}
                        <Route path="/module1" element={<Module1 />} />
                        <Route path="/module2" element={<Module2 />} />
                        {/*Simulation Route*/}
                        <Route
                            path="/simulations"
                            element={
                                <SimulationProvider>
                                    <Simulations />
                                </SimulationProvider>
                            }
                        />
                        <Route path="/simulation/market-equilibrium" element={<MarketEquilibrium />} />
                        <Route path="/simulation/investor-indices" element={<InvestorIndices />} />
                        <Route path="/simulation/stocks-and-shares" element={<StocksandShares />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </Module1Provider>
    );
}

export default App;
