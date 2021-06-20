import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

function Overview() {
  const [safeData, setSafeData] = useState([]);
  const [maliciousData, setmaliciousData] = useState([]);

  // let count = 0;
  // let count2 = 0;
  // if (Data === "Safe") {
  //   count++;
  // } else if (Data === "Malicious") {
  //   count2++;
  // }

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("https://localhost/api/get/countsafe");
        const response1 = await axios.get(
          "https://localhost:3001/api/get/countunsafe"
        );
        const data = response.data;
        const data1 = response1.data;
        setSafeData(data);
        setmaliciousData(data1);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  const safe = safeData.map((num) => num.countsafe);
  const malicious = maliciousData.map((num) => num.countunsafe);
  // const a = parseInt(safe);
  // const b = parseInt(malicious);
  // const sum = a + b;

  const data = {
    labels: ["Safe", "Malicious"],
    datasets: [
      {
        label: "Data",
        backgroundColor: ["#66ff33", "#ff0000"],
        hoverBackgroundColor: ["#afff94", "#ff9191"],
        data: [safe, malicious],
      },
    ],
  };

  const chartstyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "5px",
  };
  const chartpage = {
    display: "grid",
    placeItems: "center",
    height: "100vh",
    width: "100%",
  };

  return (
    <div id="overview" style={chartpage}>
      <div style={chartstyle}>
        <div className="chart">
          {safeData?.length > 0 && (
            <Pie
              height="350"
              width="450"
              data={data}
              options={{
                title: {
                  display: true,
                  text: "Data Severity",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Overview;
