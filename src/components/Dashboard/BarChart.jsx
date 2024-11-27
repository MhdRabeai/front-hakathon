import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types"; 


const BarChart = ({ isDashboard = false }) => {
  const colors = {
    //7D7CEC
    //0B0B43
    //E2E2EB
    //e2e8f0
    //64748b
    //ADA7B3
    primary: {
      400: "#1e293b",
      100: "#f8fafc",
    },
    grey: {
      100: "#e2e8f0",
      500: "#64748b",
    },
    PurpleAccent: {
      500: "#3b82f6",
      700: "#1e40af",
      800: "#1e3a8a",
    },
    redAccent: {
      500: "#ef4444",
    },
    greenAccent: {
      500: "#22c55e",
    },
  };
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get("/mockUsers.json")
      .then((response) => {
        const data = response.data; 
        const requests = data.requests; // Assuming `requests` contains the application data.
        
        // Count requests per day in the past week
        const today = new Date();
        const lastWeek = Array.from({ length: 7 }, (_, i) => {
          const date = new Date(today);
          date.setDate(today.getDate() - i);
          return date.toISOString().split("T")[0]; // Format: YYYY-MM-DD
        });

        const countsByDay = lastWeek.reduce((acc, date) => {
          acc[date] = 0;
          return acc;
        }, {});

        requests.forEach((request) => {
          const requestDate = request.date.split("T")[0]; // Format: YYYY-MM-DD
          if (countsByDay[requestDate] !== undefined) {
            countsByDay[requestDate] += 1;
          }
        });

        const formattedData = Object.entries(countsByDay).map(([date, count]) => ({
          day: date,
          count,
        }));

        setChartData(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <ResponsiveBar
      data={chartData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[500],
            },
          },
          legend: {
            text: {
              fill: colors.grey[400],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[300],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[200],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["count"]}
      indexBy="day"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -45,
        legend: isDashboard ? undefined : "Day",
        legendPosition: "middle",
        legendOffset: 40,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Applications Count",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={(e) => {
        return `${e.id}: ${e.formattedValue} applications on ${e.indexValue}`;
      }}
    />
  );
};

BarChart.propTypes = {
  isDashboard: PropTypes.bool,
};


export default BarChart;
