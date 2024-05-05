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

const flightSchedule = [
  { month: "January", flights: 100, passengers: 80 },
  { month: "February", flights: 150, passengers: 90 },
  { month: "March", flights: 200, passengers: 100 },
  { month: "April", flights: 120, passengers: 70 },
  { month: "May", flights: 180, passengers: 110 },
  { month: "June", flights: 250, passengers: 120 },
];

function LineChart() {
  const data = {
    labels: flightSchedule.map((data) => data.month),
    datasets: [
      {
        label: "Flights",
        data: flightSchedule.map((data) => data.flights),
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
      {
        label: "Passengers",
        data: flightSchedule.map((data) => data.passengers),
        borderColor: "#4b8f8c",
        borderWidth: 3,
        pointBorderColor: "#4b8f8c",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: false,
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
          text: "Flights",
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "900px",
          height: "400px",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default LineChart;
