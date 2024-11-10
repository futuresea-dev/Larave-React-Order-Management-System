import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, Title, PointElement, RadialLinearScale } from 'chart.js';

// Register the components you are using
Chart.register(
  ArcElement,  // Register the ArcElement for doughnut segments
  Tooltip,     // Register Tooltip
  Legend,      // Register Legend
  Title,        // Register Title,
  PointElement,
  RadialLinearScale
);

const DoughnutChart = () => {

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
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            }
        }
    };

    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChart;
