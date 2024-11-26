/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChatbubbles } from "react-icons/io5";
import { IoIosBook } from "react-icons/io";
import { FaChartLine, FaLeaf } from "react-icons/fa";
import welcomeImage from "../images/welcome.avif";

const Home = () => {
  return (
    <div className="">
      <div className=" container max-w-[86rem] w-full mx-auto px-4 ">
        <div className="grid lg:grid-cols-7 lg:gap-x-4 xl:gap-x-12  lg:items-center pb-6 mb-6 border-b-2 border-[#ddd]">
          <div className="lg:col-span-3 flex flex-col ">
            <h1 className="block text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl text-center lg:text-left">
              Recruit Smarter, Discover the Best Programmers!
            </h1>
            <h1 className="block text-3xl font-semibold text-[#7D7CEC] sm:text-4xl md:text-5xl lg:text-6xl  text-center lg:text-left">
              Starts Here
            </h1>
            <ul className="mt-5 marker:text-[#7D7CEC] list-disc ps-5 space-y-1 text-sm text-gray-600 ">
              <li>Your Solution to Tech Recruitment Challenges</li>
              <li>Level Up Your Tech Team</li>
            </ul>
            <div className="mt-5 lg:mt-8 flex ">
              <Link className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#0B0B43] text-white hover:bg-[rgba(79,148,81,0.84)] focus:outline-none focus:bg-[rgba(79,148,81,0.84)]  ">
                Get Started
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="w-full rounded-3xl "
              src={welcomeImage}
              alt="Hero Image"
            />
          </div>
        </div>
        <div className="pb-6 mb-6 border-b-2 border-[#ddd] ">
          <div className="mb-6 lg:mb-10 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="w-full px-4">
              <div className="mx-auto  max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary text-[#7D7CEC]">
                  Our Services
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
                  What We Offer{" "}
                </h2>
                <p className="text-base text-body-color ">
                  Your partner in building world-class tech teams.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group relative w-full shadow-lg bg-[#ffffff] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 x:w-[32%] hover:bg-[#7D7CEC]">
              <div className="bg-[#f6f6f6] shadow-lg rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <IoChatbubbles className="scale-150 text-[#7D7CEC]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Web Developement
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                "We delight in working with discerning clients who value
                quality, service, integrity, and aesthetics."
              </p>
            </div>

            <div className="group relative shadow-lg w-full bg-[#ffffff] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 x:w-[32%] hover:bg-[#7D7CEC]">
              <div className="bg-[#f6f6f6] shadow-lg rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <IoIosBook className="scale-150 text-[#7D7CEC]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Web Design
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                We delight in working with discerning clients who value quality,
                service, integrity, and aesthetics.{" "}
              </p>
            </div>

            <div className="group relative w-full  shadow-lg bg-[#ffffff] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 x:w-[32%] hover:bg-[#7D7CEC]">
              <div className="bg-[#f6f6f6] shadow-lg rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <FaLeaf className="scale-150 text-[#7D7CEC]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Fix Issues
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                "We delight in working with discerning clients who value
                quality, service, integrity, and aesthetics."
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mx-auto my-10  max-w-[510px] text-center ">
            <span className="mb-2 block text-lg font-semibold text-primary text-[#7D7CEC]">
              Our Projects{" "}
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
              Our Recent Projects{" "}
            </h2>
            <p className="text-base text-body-color ">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={`relative Facts mb-10`}>
        <div className=" -inset-0 w-full h-full pt-8 pb-10">
          <div className="mx-auto  max-w-[510px] text-center ">
            <span className="mb-2 block text-base font-semibold text-primary text-[#7D7CEC]">
              Fun Facts
            </span>
            <h2 className="mb-3 text-xl font-semibold leading-[1.2] text-white  sm:text-4xl md:text-[40px]">
              Our achievements
            </h2>
          </div>
          <div className="pt-4 container grid justify-center gap-4 max-w-[800px] mx-auto grid-cols-2 lg:grid-cols-4 text-white">
            <div className="flex flex-col items-center">
              <h2 className="mb-1 md:text-4xl font-semibold sm:text-xl title-font ">
                50+
              </h2>
              <p className="flex-1  text-light text-base leading-relaxed ">
                Happy Patients
              </p>
            </div>
            <div className="flex flex-col  items-center">
              <h2 className="mb-1 md:text-4xl font-semibold sm:text-xl title-font ">
                15+
              </h2>
              <p className="flex-1  text-light text-base leading-relaxed ">
                Campaign Complete
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="mb-1 md:text-4xl font-semibold sm:text-xl title-font ">
                30+
              </h2>
              <p className="flex-1  text-light text-base leading-relaxed ">
                Award Won
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="mb-1 md:text-4xl font-semibold sm:text-xl title-font ">
                25+
              </h2>
              <p className="flex-1  text-light text-base leading-relaxed ">
                Expert Doctors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
