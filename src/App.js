import React from "react";
import { useState, useRef } from "react";
import LineChart from "./components/linechart/LineChart";
import BarChart from "./components/barchart/BarChart";
import chartData from "./asset/json/eve.json";
import PieChart from "./components/piechart/PieChart";
import DonutChart from "./components/donutchart/DonutChart";
import "./App.css";

const App = () => {
  // console.log("datagag....", chartData);
  const [data, setData] = useState(chartData);
  // References for each chart container
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const donutChartRef = useRef(null);

  // Function to scroll to a chart
  const scrollToChart = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app container p-0">
      <div className="heading d-flex justify-content-between align-items-center mx-0">
        <div className="logo">WiJungle Dashboard</div>
        <div className="navbar">
          <ul className="d-flex align-items-center gap-4">
            <li onClick={() => scrollToChart(lineChartRef)}>Line Chart</li>
            <li onClick={() => scrollToChart(barChartRef)}>Bar Chart</li>
            <li onClick={() => scrollToChart(pieChartRef)}>Pie Chart</li>
            <li onClick={() => scrollToChart(donutChartRef)}>Dougnut Chart</li>
          </ul>
        </div>
      </div>
      <div className="lineChart row chart-container m-4" ref={lineChartRef}>
        <LineChart data={data} />
        <div className="desc">This line chart displays the number of alerts over time. It helps to track the frequency of alerts and identify any trends or spikes in network activity.</div>
      </div>
      <div className="barChart row chart-container m-4" ref={barChartRef}>
        <BarChart data={data} />
        <div className="desc">This bar chart shows the destination ports and the number of alerts associated with each port. It helps in identifying which ports are being targeted most frequently in the network.</div>
      </div>
      <div className="pieChart row chart-container m-4" ref={pieChartRef}>
        <PieChart data={data} />
        <div className="desc">This pie chart visualizes the distribution of different alert signatures. Each slice represents a specific type of alert, helping to understand the variety and prevalence of different security threats.</div>
      </div>
      <div className="donutChart row chart-container m-4" ref={donutChartRef}>
        <DonutChart data={data} />
        <div className="desc">This doughnut chart represents the distribution of alert events based on source IP addresses. Each segment of the doughnut shows the count of alerts originating from a specific IP, highlighting which sources are the most active in generating alerts.</div>
      </div>
    </div>
  );
};

export default App;
