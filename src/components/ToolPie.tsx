import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

Chart.register(ArcElement, Tooltip, Legend);

const ToolPie = () => {
  const data = {
    labels: [
      'GitHub',
      'Figma',
      'VS code',
      'GitLab',
    ],
    datasets: [
      {
        data: [10, 20, 30, 40],
        backgroundColor: [
          '#0056b3',
          '#4682B4',
          '#7e7e7e',
          '#70b3fc',
        ],
        hoverBackgroundColor: [
          '#080808',
          '#080808',
          '#080808',
          '#080808',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const, // Explicitly typing to a valid position
        labels: {
          boxWidth: 20,
        },
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ToolPie;
