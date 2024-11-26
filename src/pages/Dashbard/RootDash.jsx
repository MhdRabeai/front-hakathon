/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserInfo } from "../../Providers/UserContext";

const RootDash = () => {
  const { user } = useUserInfo();
  // const navigate = useNavigate;
  useEffect(() => {
    // handleInit();
  }, []);
  // const handleInit = async () => {
  //   try {
  //     const res = await fetch("http://localhost:4000/checkToken", {
  //       method: "GET",
  //       credentials: "include",
  //     });
  //     if (res.ok) {
  //       const data = await res.json();
  //       await loginUser();
  //       navigate("/newDashbard");
  //     } else {
  //       navigate("/adminLogin");
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  return <div>{user?._id}</div>;
};

export default RootDash;
