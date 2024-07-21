import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "chart.js/auto";

Chart.register(ArcElement, Tooltip, Legend);

const FrameworkPie = () => {
  const data = {
    labels: [
      "ReactJS",
      "Node.JS",
      "Spring Boot",
      "Laravel",
      "Bootstrap",
      "Tailwind CSS",
    ],
    datasets: [
      {
        data: [10, 5, 15, 20, 30, 20],
        backgroundColor: [
          "#0056b3",
          "#4682B4",
          "#7e7e7e",
          "#70b3fc",
          "#87CEEB",
          "#1E90FF",
        ],
        hoverBackgroundColor: [
          "#080808",
          "#080808",
          "#080808",
          "#080808",
          "#080808",
          "#080808",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const, // Explicitly typing to a valid position
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

export default FrameworkPie;
