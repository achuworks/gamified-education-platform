import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Skillsweb = () => {
    const data = {
        labels: ["Linux", "WebX", "WinX", "Basic", "PrivEsc", "NetX"],
        datasets: [{
            label: "Skill Level",
            data: [3, 2, 1, 4, 1, 3],
            backgroundColor: "rgba(0, 255, 0, 0.2)",
            borderColor: "rgba(0, 255, 0, 1)",
            borderWidth: 2,
        }],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                beginAtZero: true,
                grid: { color: "rgba(0, 0, 128, 0.2)" }, 
                pointLabels: { color: "#000080", font: { size: 14 } }, 
                ticks: { display: false },
            },
        },
        plugins: {
            legend: { display: false },
        },
    };

    return (
        <div className="h-100" style={{ 
            background: "#FFFFFF", 
            padding: "20px", 
            borderRadius: "10px", 
            color: "#000080" 
        }}>
            <h5 className="text-center" style={{ color: "#000080" }}>Skills Matrix</h5>
            <div style={{ height: "calc(100% - 40px)" }}>
                <Radar data={data} options={options} />
            </div>
        </div>
    );
};

export default Skillsweb;