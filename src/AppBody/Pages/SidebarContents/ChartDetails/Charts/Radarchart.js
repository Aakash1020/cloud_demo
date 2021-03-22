import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";

const RadarChart = (props) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const chartData = props.Info;

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const mychart = new Chart(chartContainer.current, {
        type: "radar",
        data: chartData,
        options: {
          scales: {
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
      setChartInstance(mychart);
    }
  }, [chartData]);
  return (
    <div
      style={{
        height: "400px",
        width: "600px",
        padding: "5px",
      }}
    >
      {/* <button onClick={onButtonClick}>Randomize!</button> */}
      <canvas ref={chartContainer} />
    </div>
  );
};

export default RadarChart;
