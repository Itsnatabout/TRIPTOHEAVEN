import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler } from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const salesData = [
  { month: "May 16", sales: 100},
  { month: "May 17", sales: 150 },
  { month: "May 18", sales: 200 },
  { month: "May 19", sales: 120 },
  { month: "May 20", sales: 180 },
  { month: "May 21", sales: 250 },
];

function LineChart() {
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "Revenue",
        data: salesData.map((data) => data.sales),
        borderColor: "#cb0c9f",
        borderWidth: 3,
        pointBorderColor: "#cb0c9f",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#f797e1");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Sales",
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
        min: 50,
      },
      x: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Month",
          padding: {
            top: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
      },
    },
  };

  return (
    <div className='d-flex justify-content-center align-items-center' >
      <div
        style={{
          width: "100%",
          padding: "10px",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default LineChart;
