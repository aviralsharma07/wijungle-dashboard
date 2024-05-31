import "./BarChart.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const BarChart = ({ data }) => {
  const dataArray = data?.data;
  // console.log("barData: ", data?.data);

  // Count the frequency of scans targeting each port
  const portCounts = dataArray?.reduce((counts, entry) => {
    const port = entry?.dest_port;
    counts[port] = (counts[port] || 0) + 1;
    return counts;
  }, {});

  // Sort the port counts in descending order
  // const sortedPorts = Object.keys(portCounts)?.sort((a, b) => portCounts[b] - portCounts[a]);
  const ports = Object.keys(portCounts);
  // console.log(sortedPorts);

  // Get the top 10 ports (or adjust as needed)
  // const topPorts = sortedPorts.slice(0, 10);

  // Extract labels and data for the bar chart
  const labels = ports.map((port) => `Port ${port}`);
  const dataPoints = ports.map((port) => portCounts[port]);

  // console.log("labels: ", labels);
  // console.log("dataPoints:", dataPoints);

  const barData = {
    labels: labels,
    datasets: [
      {
        label: "Frequency of Scans",
        data: dataPoints,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    plugins: {
      legend: true,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Ports",
        },
        ticks: {
          autoskip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        title: {
          display: true,
          text: "Frequency",
        },
      },
    },
  };

  return (
    <div className="bar-chart">
      <Bar data={barData} options={barOptions}></Bar>{" "}
    </div>
  );
};

export default BarChart;
