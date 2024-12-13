import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DemandBarChart = ({ totalBuyers }) => {
    // Function to generate gradient
    const getGradient = (ctx, chartArea) => {
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, "rgba(72, 187, 120, 0.1)"); // Light green at the bottom
        gradient.addColorStop(1, "rgba(72, 187, 120, 0.5)"); // Darker green at the top
        return gradient;
    };

    // Memoize chart data
    const chartData = useMemo(() => ({
        labels: ["Demand Level"],
        datasets: [
            {
                label: "Number of Buyers",
                data: [totalBuyers],
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        // Initial chart load case
                        return "rgba(72, 187, 120, 0.3)";
                    }
                    return getGradient(ctx, chartArea);
                },
                borderColor: "rgb(72, 187, 120)", // Bright green border
                borderWidth: 2,
                hoverBackgroundColor: "rgba(72, 187, 120, 0.7)", // Darker green on hover
            },
        ],
    }), [totalBuyers]);

    // Chart options
    const chartOptions = useMemo(() => ({
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: `Demand Level: ${totalBuyers} Buyers`,
                font: {
                    size: 18,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 30, // Adjust based on the maximum number of buyers
                ticks: {
                    stepSize: 5,
                },
            },
        },
    }), [totalBuyers]);

    return <Bar data={chartData} options={chartOptions} />;
};

export default DemandBarChart;
