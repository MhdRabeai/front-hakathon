/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChatbubbles } from "react-icons/io5";
import { IoIosBook } from "react-icons/io";
import { FaChartLine, FaLeaf } from "react-icons/fa";

const Home = () => {
  return (
    <div className="">
      <div className="container max-w-[86rem] w-full mx-auto px-4 ">
        <div className="grid lg:grid-cols-7 lg:gap-x-4 xl:gap-x-12  lg:items-center pb-6 mb-6 border-b-2 border-[#ddd]">
          <div className="lg:col-span-3 flex flex-col ">
            <h1 className="block text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl  text-center lg:text-left">
              Your Journey to Mental Clarity
            </h1>
            <h1 className="block text-3xl font-semibold text-[#4f9451] sm:text-4xl md:text-5xl lg:text-6xl  text-center lg:text-left">
              Starts Here
            </h1>

            <ul className="mt-5 marker:text-[#4f9451] list-disc ps-5 space-y-1 text-sm text-gray-600 ">
              <li>Take control of your health</li>
              <li>Seek expert guidance</li>
              <li>Access preventive care</li>
              <li>Find solutions for long-standing health concerns</li>
              <li>Recieve Support with Doctor X</li>
            </ul>
            <div className="mt-5 lg:mt-8 flex ">
              <Link className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[rgba(79,148,81,0.84)] focus:outline-none focus:bg-[rgba(79,148,81,0.84)]  ">
                Start therapy
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="w-full rounded-3xl "
              src="hero.png"
              alt="Hero Image"
            />
          </div>
        </div>

        <div className="pb-6 mb-6 border-b-2 border-[#ddd] ">
          <div className="mb-6 lg:mb-10 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="w-full px-4">
              <div className="mx-auto  max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary text-[#4F9451]">
                  Our Features
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
                  Why choose Us
                </h2>
                <p className="text-base text-body-color ">
                  we aim to create a safe and supportive environment where you
                  can explore your thoughts, feelings, and experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group relative w-full bg-[#ffffff] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-[#4f9451]">
              <div className="bg-[#f6f6f6] rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <IoChatbubbles className="scale-150 text-[#4f9451]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Online Therapy Sessions
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Access licensed therapists from the comfort of your home through
                secure video sessions. Personalized support is just a click
                away. Don&apos;t hesitate and start right now!
              </p>
            </div>
            <div className="group relative w-full bg-[#ffffff] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-[#4f9451]">
              <div className="bg-[#f6f6f6] rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <IoIosBook className="scale-150 text-[#4f9451]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Self-Help Resources
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Explore a wide range of articles, guides, and tools designed to
                help you manage stress, anxiety, and other mental health
                challenges effectively.
              </p>
            </div>
            <div className="group relative w-full bg-[#ffffff] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-[#4f9451]">
              <div className="bg-[#f6f6f6] rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <FaLeaf className="scale-150 text-[#4f9451]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Mindfulness and Meditation
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Discover mindfulness and meditation techniques that can help
                reduce stress and improve your overall mental well-being.
              </p>
            </div>
            <div className="group relative w-full bg-[#ffffff] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-[#4f9451]">
              <div className="bg-[#f6f6f6] rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <FaChartLine className="scale-150 text-[#4f9451]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Personalized Wellness Plans
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Receive tailored wellness plans that cater to your individual
                needs and goals. Our resources will guide you on your journey to
                better mental health.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`relative Facts mb-10`}>
        <div className=" -inset-0 w-full h-full pt-8 pb-10">
          <div className="mx-auto  max-w-[510px] text-center ">
            <span className="mb-2 block text-base font-semibold text-primary text-[#4F9451]">
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
