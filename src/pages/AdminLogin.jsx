/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";
import { Loading } from "../components/Loading";
import { useUserInfo } from "../Providers/UserContext";

const AdminLogin = () => {
  const { loginUser } = useUserInfo();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/adminLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        await loginUser();
        navigate("/newDashbard");
        return toast.success(data["message"], {
          position: "bottom-right",
          autoClose: 1000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        setIsLoading(false);
        navigate("/adminLogin");

        return toast.error(data["message"], {
          position: "bottom-right",
          autoClose: 750,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <section className="flex items-center   auth-body">
        <div className=" lg:py-0 w-full h-full">
          <div className="flex  md:col-span-2 flex-col items-center justify-center">
            <div className="w-[60%] bg-white rounded-lg  md:mt-0 xl:p-0 ">
              <div className="p-6  sm:p-8 ">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Admin Login
                </h1>
                <h3 className="fontLigh mb-4">
                  Welcome back! Please enter your details.
                </h3>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="Email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        id="Email"
                        type="email"
                        className="peer py-2 px-4 ps-11 block w-full
                            border-2  border-gray-200 rounded-lg text-sm 
                            focus:border-[#0b0b43] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                        placeholder="Enter Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                        <MdOutlineEmail className="fill-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>

                    <div className="relative">
                      <input
                        id="hs-toggle-password"
                        type="password"
                        className="peer py-2 px-4 ps-11 block w-full
 border-2  border-gray-200 rounded-lg text-sm 
 focus:border-[#0b0b43] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none text-gray-500">
                        <IoKeyOutline />
                      </div>

                      <button
                        type="button"
                        data-hs-toggle-password='{
      "target": "#hs-toggle-password"
    }'
                        className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-[#0b0b43]"
                      >
                        <svg
                          className="shrink-0 size-3.5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            className="hs-password-active:hidden"
                            d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                          ></path>
                          <path
                            className="hs-password-active:hidden"
                            d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                          ></path>
                          <path
                            className="hs-password-active:hidden"
                            d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                          ></path>
                          <line
                            className="hs-password-active:hidden"
                            x1="2"
                            x2="22"
                            y1="2"
                            y2="22"
                          ></line>
                          <path
                            className="hidden hs-password-active:block"
                            d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                          ></path>
                          <circle
                            className="hidden hs-password-active:block"
                            cx="12"
                            cy="12"
                            r="3"
                          ></circle>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-0 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-[#0b0b43]"
                    onClick={(e) => {
                      handleSubmit(e);
                      setIsLoading(true);
                    }}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center login-img"></div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
