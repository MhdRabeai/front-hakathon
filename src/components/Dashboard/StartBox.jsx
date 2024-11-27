import { Box, Typography } from "@mui/material";
// import ProgressCircle from "./ProgressCirde";
import PropTypes from "prop-types"; 

const StatBox = ({ title, subtitle, icon, increase }) => {
  const colors = {
    primary: {
      400: "#1e293b",
      100: "#f8fafc",
    },
    text:{
      main: "#E2E2EB",
      200: "#0B0B43"
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
    greenAccent: {
      500: "#E2E2EB",
    },
  };

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          {/* <ProgressCircle progress={progress} /> */}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

StatBox.propTypes = {
  title: PropTypes.string.isRequired, 
  subtitle: PropTypes.string.isRequired, 
  icon: PropTypes.element, 
  progress: PropTypes.string, 
  increase: PropTypes.string, 
};

// StatBox.defaultProps = {
//   icon: null,
//   progress: "0.5",
//   increase: "0%", 
// };

export default StatBox;