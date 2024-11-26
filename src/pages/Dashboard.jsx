import { useEffect, useState } from 'react';
import { Box, Button, Typography } from "@mui/material";
import { FaBriefcase, FaFileAlt, FaUser, FaCheckCircle, FaDownload} from "react-icons/fa";

// import LineChart from "../components/Dashboard/LineChart";
import BarChart from "../components/Dashboard/BarChart";
import StatBox from "../components/Dashboard/StartBox";
import ProgressCircle from "../components/Dashboard/ProgressCirde";
// import { fetchUsersData } from '../../services/fetchUsersData.js'; 

// const fetchUsersData = async () => {
//   try {
//     const response = await fetch("/mockData.json");
//     const data = await response.json();
//     if (data && data.users) {
//       return data.users.map((item) => ({
//         id: item._id,
//         name: item.fullName,
//         phone: item.phoneNumber,
//         location: item.location,
//         active: item.active ? "Active" : "Inactive",
//         accessLevel:
//           item.roleID === 1
//             ? "admin"
//             : item.roleID === 2
//               ? "user"
//               : item.roleID === 3
//                 ? "pharmacy"
//                 : item.roleID === 4
//                   ? "warehouse"
//                   : "driver",
//       }));
//     } else {
//       console.error("Unexpected response format:", data);
//       return [];
//     }
//   } catch (error) {
//     console.error("Error fetching team data:", error);
//     return [];
//   }
// };

export const Dashboard = () => {
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
        400: "#0B0B43",
        100: "#7D7CEC",
      },
      secondary: {
        main: "#7D7CEC"
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

            <Box>
              <Button
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.secondary,
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
              display="grid"
              gridTemplateColumns="repeat(4, 1fr)"
              gap="20px"
              p="20px"
            >
              <Box
                gridColumn="span 1"
                backgroundColor={colors.primary[400]}
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
                        color: colors.primary[100],
                        fontSize: "36px",
                        marginBottom: "10px",
                      }}
                    />
                  }
                />
              </Box>

              <Box
                gridColumn="span 1"
                backgroundColor={colors.primary[400]}
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
                        color: colors.primary[100],
                        fontSize: "36px",
                        marginBottom: "10px",
                      }}
                    />
                  }
                />
              </Box>

              <Box
                gridColumn="span 1"
                backgroundColor={colors.primary[400]}
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
                        color: colors.primary[100],
                        fontSize: "36px",
                        marginBottom: "10px",
                      }}
                    />
                  }
                />
              </Box>

              <Box
                gridColumn="span 1"
                backgroundColor={colors.primary[400]}
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
                        color: colors.primary[100],
                        fontSize: "36px",
                        marginBottom: "10px",
                      }}
                    />
                  }
                />
              </Box>
            </Box>


            {/* ROW 2 */}
          

            {/* ROW 3 */}
            <Box
              gridColumn="span 6"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              p="30px"
              borderRadius="8px"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            >
              {/* Title */}
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.primary[100]}
                textAlign="center"
              >
                Active & Inactive
              </Typography>
              <Typography
                variant="body2"
                color={colors.grey[100]}
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
                <Box display="flex" justifyContent="space-between" width="100%" mt="20px">
                  {/* Active Users */}
                  <Box display="flex" alignItems="center" gap="10px">
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: colors.blueAccent[500],
                      }}
                    />
                    <Typography variant="body1" color={colors.primary[100]}>
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
                    <Typography variant="body1" color={colors.primary[100]}>
                      Inactive Users: 25%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>




            <Box
              gridColumn="span 6"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
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
