import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./DonutChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data }) => {
  const dataArray = data?.data;
  //   console.log("donutData: ", dataArray);
  const ipCounts = {};

  // Counting occurrences of each source IP
  dataArray?.forEach((item) => {
    const srcIp = item.src_ip;
    if (ipCounts[srcIp]) {
      ipCounts[srcIp]++;
    } else {
      ipCounts[srcIp] = 1;
    }
  });

  // Prepare data for the doughnut chart
  const ips = Object.keys(ipCounts).slice(0, 40);
  const counts = Object.values(ipCounts).slice(0, 40);

  const doughnutData = {
    labels: ips,
    datasets: [
      {
        label: "IPs",
        data: counts,
        backgroundColor: ips.map(() => getRandomColor()),
        borderColor: "black",
      },
    ],
  };

  const doughnutOptions = {
    plugins: {
      legend: true,
    },
  };

  return (
    <div className="donut-chart">
      <Doughnut data={doughnutData}></Doughnut>
    </div>
  );
};

// Function to generate random colors
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default DonutChart;
