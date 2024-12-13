import React, { useContext, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { SimulationContext } from './SimulationsContext';
import 'chart.js/auto';
import { Chart as ChartJS, Tooltip, Legend, Title, LineElement, PointElement, LinearScale, CategoryScale, Filler } from 'chart.js';

ChartJS.register(Tooltip, Legend, Title, LineElement, PointElement, LinearScale, CategoryScale, Filler);

const PriceChart = () => {
    const { priceData, chartLabels, currentPrice } = useContext(SimulationContext);

  // Chart Background
    const getGradient = (ctx, chartArea) => {
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, 'rgba(72, 187, 120, 0.1)');
        gradient.addColorStop(1, 'rgba(72, 187, 120, 0.5)');
        return gradient;
    };

    // Memoize chart data and options
    const chartData = useMemo(() => ({
        labels: chartLabels,
        datasets: [
            {
                label: 'Market Price',
                data: priceData,
                fill: true,
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        // This case happens on initial chart load
                        return 'rgba(72, 187, 120, 0.3)';
                    }
                    return getGradient(ctx, chartArea);
                },
                borderColor: 'rgb(72, 187, 120)', // Bright green line
                pointBackgroundColor: 'rgb(255, 255, 255)', // White points
                pointBorderColor: 'rgb(72, 187, 120)', // Green border for points
                pointHoverRadius: 6,
                pointRadius: 4,
                tension: 0.4, // Smoother lines
            },
        ],
    }), [priceData, chartLabels]);

    const chartOptions = useMemo(() => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff', // Pure white for legend text
                    font: {
                        size: 16,
                        family: 'Inter, sans-serif',
                        weight: '600',
                    },
                },
                position: 'top',
            },
            title: {
                display: true,
                text: 'Price Over Time',
                color: '#ffffff', // Pure white for the title
                font: {
                    size: 24,
                    family: 'Inter, sans-serif',
                    weight: '700',
                },
                padding: {
                    top: 10,
                    bottom: 30,
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: 'rgba(72, 187, 120, 1)',
                borderWidth: 1,
                callbacks: {
                    label: function (context) {
                        return `$${Math.round(context.parsed.y)}`;
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#ffffff', // Pure white for x-axis labels
                    font: {
                        size: 14,
                        family: 'Inter, sans-serif',
                        weight: '500',
                    },
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Subtle white grid lines
                    borderDash: [5, 5],
                },
            },
            y: {
                ticks: {
                    color: '#ffffff', // Pure white for y-axis labels
                    font: {
                        size: 14,
                        family: 'Inter, sans-serif',
                        weight: '500',
                    },
                    callback: function (value) {
                        return `$${Math.round(value)}`; // Display whole numbers
                    },
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Subtle white grid lines
                    borderDash: [5, 5],
                },
                beginAtZero: true, // Start at zero
            },
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        animation: {
            duration: 1000,
            easing: 'easeOutQuart',
        },
    }), []);

    return (
        <div className="max-w-5xl mx-auto my-12 p-8 bg-gradient-to-r from-gray-900 to-gray-800 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl transition-all duration-500">
            <div className="relative h-96">
                <Line data={chartData} options={chartOptions} />
            </div>
            <div className="mt-8 flex justify-center">
                <div className="bg-gray-700 dark:bg-gray-700 bg-opacity-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-500">
                    <p className="text-center text-2xl font-semibold text-green-400">
                        Current Price: ${currentPrice.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PriceChart;
