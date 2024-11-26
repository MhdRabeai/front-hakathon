/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useUserInfo } from "../../Providers/UserContext";
import { FaPills } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";

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
  return (
    <div>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full  border-b text-sm py-2.5 lg:ps-[260px] ">
        Nabbar + styling
      </header>

      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden ">
        <div className="flex items-center py-2">
          <button
            type="button"
            className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none "
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-application-sidebar"
            aria-label="Toggle navigation"
            data-hs-overlay="#hs-application-sidebar"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M15 3v18" />
              <path d="m8 9 3 3-3 3" />
            </svg>
          </button>

          <ol className="ms-3 flex items-center whitespace-nowrap">
            <li className="flex items-center text-sm text-gray-800 ">
              Home
              <svg
                className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate "
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
        </div>
      </div>

      <div
        id="hs-application-sidebar"
        className="hs-overlay  [--auto-close:lg]
hs-overlay-open:translate-x-0
-translate-x-full transition-all duration-300 transform
w-[260px] h-full
hidden
fixed inset-y-0 start-0 z-[60]
bg-white border-e border-[#4F9451]
lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
"
        role="dialog"
        tabIndex="-1"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full bg-[#0b0b43] ">
          <div className="relative z-10">
            <div className="w-full max-w-5xl px-4 xl:px-0 py-4 lg:pt-6 mx-auto flex justify-center">
              <div className="inline-flex items-center border-x px-5 mx-5">
                <Link to={"/"}>
                  <img src="/Logo.svg" alt="logo" width={100} />
                </Link>
              </div>
            </div>
          </div>

          <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
            <nav
              className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul className="flex flex-col space-y-1 text-white">
                Side + links
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="w-full lg:ps-64">
        <div className="my-section p-4 pb-0  w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootDash;
