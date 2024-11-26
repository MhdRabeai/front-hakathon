/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserInfo } from "../../Providers/UserContext";
import { Loading } from "../../components/Loading";
const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useUserInfo();
  useEffect(() => {
    const checkToken = async () => {
      try {
        const res = await fetch("http://localhost:4000/checkToken", {
          method: "GET",
          credentials: "include",
        });

        if (res.ok) {
          await loginUser();
          setIsAuthenticated(true);
        } else {
          console.log("Invalid token");
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error("Error checking token:", err);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/adminLogin" replace />;
  }

  return children;
};

export default ProtectedRoute;
