import './index.css';
import React, { useState } from "react";
import Chart from "react-apexcharts";


function App() {

  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "series-2",
        data: [60, 80, 90, 100, 98, 120, 140, 182]
      },
      {
        name: "series-3",
        data: [90, 160, 90, 200, 196, 149, 105, 112]
      }
    ]
  })

  return (
  <div className="app">
    <div className="row">
      <div className="mixed-chart">
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          width="450"
        />
      </div>


      <div className="mixed-chart">
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          width="450"
        />
      </div>


      <div className="mixed-chart">
        <Chart
          options={data.options}
          series={data.series}
          type="area"
          width="450"
        />
      </div>


      <div className="mixed-chart">
        <Chart
          options={data.options}
          series={data.series}
          type="radar"
          width="450"
        />
      </div>

      <div className="mixed-chart">
        <Chart
          options={data.options}
          series={data.series}
          type="scatter"
          width="450"
        />
      </div>

      <div className="mixed-chart">
        <Chart
          options={data.options}
          series={data.series}
          type="heatmap"
          width="450"
        />
      </div>

    </div>
  </div>
);
}

export default App;
