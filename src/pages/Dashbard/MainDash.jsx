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
    //7D7CEC
    //0B0B43
    //E2E2EB
    //e2e8f0
    //64748b
    //ADA7B3
    secondary: {
      main: "#0B0B43",
    },
    text: {
      main: "#7D7CEC",
      200: "#0B0B43",
    },
    icons: {
      main: "#0B0B43",
    },
    grey: {
      100: "#E2E2EB",
      500: "#64748b",
    },
    purpleAccent: {
      500: "#7D7CEC",
      700: "#1e40af",
      800: "#1e3a8a",
    },
    redAccent: {
      500: "#64748b",
    },
  };

  // ///////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="flex-1 transition-all duration-150">
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}

          <Box>
            <Button
              sx={{
                backgroundColor: colors.icons.main,
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <FaDownload sx={{ mr: "10px" }} />
              Download Reports
            </Button>
          </Box>
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
            backgroundColor={colors.primary.main}
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
            backgroundColor={colors.primary.main}
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
            backgroundColor={colors.primary.main}
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
            backgroundColor={colors.primary.main}
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
                    marginBottom: "10px",
                  }}
                />
              }
            />
          </Box>

          {/* ROW 2 */}

          <Box
            gridColumn="span 8"
            gridRow="span 3"
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
                  Order Status:
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.text[100]}
                >
                  Statistics on requests by status
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
            gridColumn="span 4"
            gridRow="span 3"
            backgroundColor={colors.primary.main}
            overflow="auto"
            borderRadius="8px"
            className="scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-700"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary.main}`}
              p="15px"
            >
              <Typography
                color={colors.text.main}
                variant="h5"
                fontWeight="600"
              >
                Latest Users
              </Typography>
            </Box>

            {dashboardData.latestUsers.map((user) => (
              <Box
                key={dashboardData.latestUsers.id}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor={colors.secondary}
                borderRadius="8px"
                p="15px"
                m="10px"
              >
                <Box display="flex" alignItems="center" gap="15px">
                  <FaUser
                    style={{ color: colors.icons.main, fontSize: "30px" }}
                  />
                  <Box>
                    <Typography
                      color={colors.text.main}
                      variant="h5"
                      fontWeight="600"
                    >
                      {dashboardData.latestUsers.name}
                    </Typography>
                    <Typography
                      color={colors.text[100]}
                      display="flex"
                      alignItems="center"
                      gap="5px"
                    >
                      <fePhone fontSize="small" /> {user.phone}
                    </Typography>
                    <Typography
                      color={colors.text[100]}
                      display="flex"
                      alignItems="center"
                      gap="5px"
                    >
                      <feLocation fontSize="small" />{" "}
                      {dashboardData.latestUsers.location}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap="10px"
                >
                  <Typography
                    color={
                      user.active === "Active"
                        ? colors.purpleAccent[500]
                        : colors.redAccent[500]
                    }
                  >
                    {dashboardData.latestUsers.active === "Active" ? (
                      <FaCheckCircle
                        style={{ color: colors.purpleAccent[500] }}
                      />
                    ) : (
                      <FaTimesCircle style={{ color: colors.redAccent[500] }} />
                    )}
                    {dashboardData.latestUsers.active}
                  </Typography>
                </Box>

                <Typography
                  color={colors.text.main}
                  backgroundColor={colors.purpleAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  {dashboardData.latestUsers.accessLevel}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* ROW 3 */}
          <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={colors.primary.main}
            p="30px"
            borderRadius="8px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          >
            {/* Title */}
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.text.main}
              textAlign="center"
            >
              Active & Inactive
            </Typography>
            <Typography
              variant="body2"
              color={colors.text[100]}
              textAlign="center"
              mt="8px"
            >
              Overview of active vs inactive users
            </Typography>

            {/* Content */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              {/* Progress Circle */}
              <ProgressCircle size="125" progress={0.75} />
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                mt="20px"
              >
                {/* Active Users */}
                <Box display="flex" alignItems="center" gap="10px">
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: colors.purpleAccent[500],
                    }}
                  />
                  <Typography variant="body1" color={colors.text.main}>
                    Active Users: 75%
                  </Typography>
                </Box>
                {/* Inactive Users */}
                <Box display="flex" alignItems="center" gap="10px">
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: colors.grey[500],
                    }}
                  />
                  <Typography variant="body1" color={colors.primary.main[100]}>
                    Inactive Users: 25%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={colors.primary.main}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Applications Received This Week
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
