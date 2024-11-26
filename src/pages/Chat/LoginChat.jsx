/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

// import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { IoEnterOutline, IoKeyOutline } from "react-icons/io5";
// import { Bounce, toast } from "react-toastify";
// import { useUserInfo } from "../Services/UserContext";
import { useState } from "react";
import { FiCode } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
const TabContent = ({
  title,
  desc,
  name,
  setName,
  password,
  setPassword,
  handleSubmit,
  button,
}) => (
  <section className="flex items-center   ">
    <div className="   lg:py-0 w-full">
      <div className="flex  md:col-span-2 flex-col items-center justify-center">
        <div className="w-full bg-white roundedLg  md:mt-0  xl:p-0  ">
          <div className="p-6  sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              {title}
            </h1>
            <h3 className="fontLigh mb-4">{desc}</h3>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="Name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Name
                </label>
                <div className="relative">
                  <input
                    id="Name"
                    type="text"
                    className="peer py-2 px-4 ps-11 block w-full
                        border-2  border-gray-200 rounded-lg text-sm 
                        focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none  
                         "
                    placeholder="Enter Room Name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    type="password"
                    className="peer py-2 px-4 ps-11 block w-full
border-2  border-gray-200 rounded-lg text-sm 
focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none text-gray-500">
                    <IoKeyOutline />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-0 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-[#4F9451]"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                {button}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center login-img"></div>
    </div>
  </section>
);
const LoginChat = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [joinName, setJoinName] = useState("");
  const [createName, setCreateName] = useState("");
  const [joinPassword, setJoinPassword] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  // const { loginUser } = useUserInfo();

  // const navigate = useNavigate();
  const handleJoinSubmit = async (e) => {
    e.preventDefault();
    console.log(joinName);
    console.log(joinPassword);
    // try {
    //   const res = await fetch("http://localhost:4000/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     credentials: "include",
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const msg = await res.json();
    //   console.log(res);
    //   if (res.ok) {
    //     await loginUser();
    //     navigate("/");
    //     return toast.success(msg["message"], {
    //       position: "bottom-right",
    //       autoClose: 1000,
    //       closeOnClick: true,
    //       pauseOnHover: false,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       transition: Bounce,
    //     });
    //   } else {
    //     setIsLoading(false);
    //     navigate("/login");

    //     return toast.error(msg["message"], {
    //       position: "bottom-right",
    //       autoClose: 750,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: false,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       transition: Bounce,
    //     });
    //   }
    // } catch (err) {
    //   console.log(err.message);
    // }
  };
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    console.log(createName);
    console.log(createPassword);
    // try {
    //   const res = await fetch("http://localhost:4000/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     credentials: "include",
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const msg = await res.json();
    //   console.log(res);
    //   if (res.ok) {
    //     await loginUser();
    //     navigate("/");
    //     return toast.success(msg["message"], {
    //       position: "bottom-right",
    //       autoClose: 1000,
    //       closeOnClick: true,
    //       pauseOnHover: false,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       transition: Bounce,
    //     });
    //   } else {
    //     setIsLoading(false);
    //     navigate("/login");

    //     return toast.error(msg["message"], {
    //       position: "bottom-right",
    //       autoClose: 750,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: false,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       transition: Bounce,
    //     });
    //   }
    // } catch (err) {
    //   console.log(err.message);
    // }
  };
  const tabs = [
    {
      id: "reading",
      label: "Join",
      icon: IoEnterOutline,
      title: "Join Room...",
      desc: "Enter room's detailes..",
      button: "Join",
      setName: setJoinName,
      name: joinName,
      password: joinPassword,
      setPassword: setJoinPassword,
      handleSubmit: handleJoinSubmit,
    },
    {
      id: "coding",
      label: "Create",
      icon: IoMdAddCircleOutline,
      title: "Create Room...",
      desc: "Enter room's detailes..",
      button: "Create",
      setName: setCreateName,
      name: createName,
      password: createPassword,
      setPassword: setCreatePassword,
      handleSubmit: handleCreateSubmit,
    },
  ];

  return (
    <>
      {/* <section className="flex items-center   ">
        <div className="grid grid-cols-1 md:grid-cols-3   lg:py-0 w-full">
          <div className="flex  md:col-span-2 flex-col items-center justify-center">
            <div className="w-full bg-white roundedLg  md:mt-0 sm:max-w-md xl:p-0  ">
              <div className="p-6  sm:p-8 ">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Log in
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
                        focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none  
                         "
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
focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
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
                        className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-[#4f9451] "
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-0  "
                          disabled
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 ">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="/"
                      className="text-sm font-medium text-primary-600 hover:underline  text-[#4F9451]"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="button"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-0 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-[#4F9451]"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Login
                  </button>
                  <p className="text-sm fontLight text-gray-500 ">
                    Don't have an account yet?{" "}
                    <Link
                      to="/register"
                      className="font-medium text-primary-600 hover:underline  text-[#4F9451]"
                      //   onClick={(e) => setIsLoading(true)}
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center login-img"></div>
        </div>
      </section> */}
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-wrap -mb-px" role="tablist">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`inline-flex items-center px-4 py-2 font-medium text-sm border-b-2 rounded-t-lg hover:bg-gray-100 focus:outline-none  focus:ring-0 transition-colors duration-200 ease-in-out ${
                activeTab === index
                  ? "text-[#0b0b43] border-[#0b0b43]"
                  : "text-gray-500 border-transparent hover:text-gray-600"
              }`}
              onClick={() => setActiveTab(index)}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
            >
              <tab.icon className="mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`transition-opacity duration-300 ${
                activeTab === index ? "opacity-100" : "opacity-0 hidden"
              }`}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
            >
              <TabContent {...tab} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoginChat;
