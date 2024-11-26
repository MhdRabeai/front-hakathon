/* eslint-disable no-unused-vars */
import React from "react";
import LoginChat from "./LoginChat";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
// import { Outlet } from "react-router-dom";

const RootChat = () => {
  return (
    <div className=" relative w-full flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default RootChat;
