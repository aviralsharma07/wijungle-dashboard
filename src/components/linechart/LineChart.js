import "./LineChart.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, plugins, elements } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  //   console.log("Line Data: ", data.data);
  const dataArray = data?.data;
  //   console.log(dataArray[0].timestamp);
  const labels = dataArray?.map((item) => item.timestamp);
  const flowData = dataArray?.map((item) => item.flow_id);
  // console.log("Labels: ", labels);
  //   console.log("Flow Data: ", flowData);

  // const timeStamp = new Date(labels[0]).toLocaleDateString();
  // console.log("Time Stamp: ", timeStamp);

  const timeStamps = labels.map((item) => new Date(item).toLocaleDateString());

  const lineData = {
    labels: timeStamps,
    datasets: [
      {
        label: "Flow IDs",
        data: flowData,
        borderColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        lineTension: 0.4,
      },
    ],
  };

  const lineOptions = {
    plugins: {
      legend: true,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Timestamp",
        },
        ticks: {
          autoskip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        title: {
          display: true,
          text: "Flow ID",
        },
      },
    },
  };

  return (
    <div className="line-chart">
      <Line data={lineData} options={lineOptions}></Line>
    </div>
  );
};

export default LineChart;
