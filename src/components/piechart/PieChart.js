import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import "./PieChart.css";
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = ({ data }) => {
  const dataArray = data?.data;
  //   console.log("pieDataArr: ", dataArray);

  // Count occurrences of categories
  const categoryCounts = {};
  dataArray?.forEach((entry) => {
    if (entry.alert && entry.alert.category) {
      const category = entry.alert.category;
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
  });
  //   console.log("no of categories: ", categoryCounts);

  // Extracting labels and data for the pie chart
  const labels = Object.keys(categoryCounts);
  const dataPoints = Object.values(categoryCounts);
  //   console.log("labels: ", labels);
  //   console.log("dataPoints: ", dataPoints);

  // Pie chart data
  const pieData = {
    labels: labels,
    datasets: [
      {
        data: dataPoints,
        backgroundColor: ["rgba(255, 99, 132, 0.7)", "rgba(54, 162, 235, 0.7)", "rgba(255, 206, 86, 0.7)", "rgba(75, 192, 192, 0.7)", "rgba(153, 102, 255, 0.7)", "rgba(255, 159, 64, 0.7)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: true,
    },
  };

  return (
    <div className="pie-chart">
      <Pie data={pieData} options={pieOptions}></Pie>{" "}
    </div>
  );
};

export default PieChart;
