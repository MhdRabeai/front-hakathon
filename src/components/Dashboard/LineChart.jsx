import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(LineElement, PointElement, LineController, LinearScale, CategoryScale);

const LineChart = () => {
  const [candidateData, setCandidateData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/dashboardData.json");
        const data = response.data;

        const candidatesArray = data.latestUsers
          .flatMap((user) => user.candidate || [])
          .map((candidate) => ({
            id: candidate._id,
            name: candidate.name,
            status: candidate.status,
            experience: candidate.experience,
            createdAt: new Date(candidate.createdAt),
          }));

        setCandidateData(candidatesArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatChartData = (candidates) => {
    const dataByDate = {};

    candidates.forEach((candidate) => {
      const date = candidate.createdAt.toLocaleDateString("en-US", { month: "short", day: "numeric" });

      if (!dataByDate[date]) {
        dataByDate[date] = {
          beforeInterview: 0,
          rejected: 0,
          rejectedAfterInterview: 0,
          finalApproval: 0,
        };
      }

      if (candidate.status === "Before interview") {
        dataByDate[date].beforeInterview += 1;
      } else if (candidate.status === "rejected") {
        dataByDate[date].rejected += 1;
      } else if (candidate.status === "Rejected after interview") {
        dataByDate[date].rejectedAfterInterview += 1;
      } else if (candidate.status === "final approval") {
        dataByDate[date].finalApproval += 1;
      }
    });

    const labels = Object.keys(dataByDate);
    const beforeInterviewData = labels.map((label) => dataByDate[label].beforeInterview);
    const rejectedData = labels.map((label) => dataByDate[label].rejected);
    const rejectedAfterInterviewData = labels.map((label) => dataByDate[label].rejectedAfterInterview);
    const finalApprovalData = labels.map((label) => dataByDate[label].finalApproval);

    return {
      labels,
      datasets: [
        {
          label: "Before Interview",
          data: beforeInterviewData,
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
          tension: 0.4,
        },
        {
          label: "Rejected",
          data: rejectedData,
          borderColor: "rgba(255,99,132,1)",
          backgroundColor: "rgba(255,99,132,0.2)",
          tension: 0.4,
        },
        {
          label: "Rejected after Interview",
          data: rejectedAfterInterviewData,
          borderColor: "rgba(255,159,64,1)",
          backgroundColor: "rgba(255,159,64,0.2)",
          tension: 0.4,
        },
        {
          label: "Final Approval",
          data: finalApprovalData,
          borderColor: "rgba(153,102,255,1)",
          backgroundColor: "rgba(153,102,255,0.2)",
          tension: 0.4,
        },
      ],
    };
  };

  const chartData = formatChartData(candidateData);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Candidate Status Over Time" },
    },
  };

  return (
    <div className="dashboard">
      <div style={{ maxWidth: "700px", margin: "auto", padding: "auto", textAlign: "center", paddingTop: "5px" }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
  
};

export default LineChart;
