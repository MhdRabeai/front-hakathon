import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  FaBriefcase,
  FaFileAlt,
  FaUser,
  FaCheckCircle,
  FaDownload,
  FaTimesCircle,
} from "react-icons/fa";

import LineChart from "../../components/Dashboard/LineChart";
import BarChart from "../../components/Dashboard/BarChart";
import StatBox from "../../components/Dashboard/StartBox";
import ProgressCircle from "../../components/Dashboard/ProgressCirde";

const MainDash = () => {
  const [dashboardData, setDashboardData] = useState({
    stats: {
      activeJobs: 0,
      totalApplications: 0,
      candidatesInProcess: 0,
      closedJobs: 0,
    },
    latestUsers: [],
  });

  useEffect(() => {
    fetch("/dashboardData.json")
      .then((response) => response.json())
      .then((data) => setDashboardData(data))
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []);

  const colors = {
    primary: {
      main: "#E2E2EB",
    },
    secondary: {
      main: "#7D7CEC",
    },
    text: {
      main: "#0B0B43",
      200: "#0B0B43",
    },
    icons: {
      main: "#0B0B43",
    },
    grey: {
      100: "#e2e8f0",
      500: "#64748b",
    },
    blueAccent: {
      500: "#3b82f6",
      700: "#1e40af",
      800: "#1e3a8a",
    },
    redAccent: {
      500: "#ef4444",
    },
  };

  // ///////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="flex-1 transition-all duration-150">
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}


        </Box>

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 3"
            backgroundColor={colors.blueAccent[500]}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            borderRadius="12px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="20px"
          >
            <StatBox
              title={dashboardData.stats.activeJobs}
              subtitle="Active Jobs"
              icon={
                <FaBriefcase
                  style={{
                    color: colors.icons.main,
                    fontSize: "36px",
                    marginBottom: "10px",
                  }}
                />
              }
            />
          </Box>

          <Box
            gridColumn="span 3"
            backgroundColor={colors.blueAccent[500]}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            borderRadius="12px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="20px"
          >
            <StatBox
              title={dashboardData.stats.totalApplications}
              subtitle="Total Applications"
              icon={
                <FaFileAlt
                  style={{
                    color: colors.icons.main,
                    fontSize: "36px",
                    marginBottom: "10px",
                  }}
                />
              }
            />
          </Box>

          <Box
            gridColumn="span 3"
            backgroundColor={colors.blueAccent[500]}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            borderRadius="12px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="20px"
          >
            <StatBox
              title={dashboardData.stats.candidatesInProcess}
              subtitle="Candidates In Process"
              icon={
                <FaUser
                  style={{
                    color: colors.icons.main,
                    fontSize: "36px",
                    marginBottom: "10px",
                  }}
                />
              }
            />
          </Box>

          <Box
            gridColumn="span 3"
            backgroundColor={colors.blueAccent[500]}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            borderRadius="12px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="20px"
          >
            <StatBox
              title={dashboardData.stats.closedJobs}
              subtitle="Closed Jobs"
              icon={
                <FaCheckCircle
                  style={{
                    color: colors.icons.main,
                    fontSize: "36px",
                    marginBottom: "15px",
                  }}
                />
              }
            />
          </Box>

          {/* ROW 2 */}

          <Box
            gridColumn="span 6"
            gridRow="span 4"
            backgroundColor={colors.primary.main}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.text.main}
                >
                  Candidate Status:
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color={colors.primary.main}
                >
                  Statistics on candidates: progress by status over time.
                </Typography>
              </Box>
              <Box>
                <FaDownload
                  sx={{ fontSize: "26px", color: colors.icons.main }}
                />
              </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>

          <Box
            gridColumn="span 6"
            gridRow="span 4"
            backgroundColor={colors.primary.main}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              color="#0B0B43"
              sx={{ padding: "30px 30px 0 30px", marginBottom: "15px" }}
            >
              Most Popular Programming Languages Through The Years

            </Typography>

            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>



        </Box>
      </Box>
    </div>
  );
};
export default MainDash;
