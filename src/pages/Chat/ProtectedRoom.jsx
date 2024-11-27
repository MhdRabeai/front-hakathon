/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";

const ProtectedRoom = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/videoCall" replace />;
  }
  return children;
};

export default ProtectedRoom;
