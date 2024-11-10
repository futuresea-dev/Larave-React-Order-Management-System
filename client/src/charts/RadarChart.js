import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, Title, Tooltip, Legend, PointElement, RadialLinearScale } from 'chart.js';

// Register the components you are using
Chart.register(
  LinearScale,   // For Y-axis (linear scale)
  CategoryScale, // For X-axis (category scale)
  Title,         // For chart title
  Tooltip,       // For tooltips
  Legend,         // For chart legend
  PointElement,
  RadialLinearScale
);

const RadarChart = () => {

    const data = {
        labels: ['Desktop', 'Laptop', 'Printer', 'Scanner', 'Tablet', 'Monitor'],
        datasets: [{
            label: '# of prods',
            data: [6, 6, 2, 1, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
    };

    const options = {
        scales: {
            r: {  // Radial (Radar) scale configuration
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 1
                }
            }
        }
    };

    return (
        <div>
            <Radar data={data} options={options} />
        </div>
    );
};

export default RadarChart;
