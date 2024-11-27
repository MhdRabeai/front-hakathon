/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

// import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { IoEnterOutline, IoKeyOutline } from "react-icons/io5";
// import { Bounce, toast } from "react-toastify";
// import { useUserInfo } from "../Services/UserContext";
import { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
  <section className="flex items-center  justify-center ">
    <div className="max-w-xl   lg:py-0 w-full">
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
                        focus:border-[#0b0b43] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none  
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
focus:border-[#0b0b43] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
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
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-0 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-[#0b0b43]"
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
const LoginChat = ({ role, onAuthSuccess }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [joinName, setJoinName] = useState("");
  const [createName, setCreateName] = useState("");
  const [joinPassword, setJoinPassword] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  const navigate = useNavigate();

  const handleJoinSubmit = async (e) => {
    e.preventDefault();
    console.log(joinName);
    console.log(joinPassword);
    try {
      const res = await fetch("http://localhost:4000/joinRoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          channelName: joinName,
          password: joinPassword,
        }),
      });

      const msg = await res.json();
      if (res.ok) {
        onAuthSuccess();
        navigate(`${joinName}`);
        return toast.success(msg["message"], {
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
        // setIsLoading(false);

        return toast.error(msg["message"], {
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
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/createRoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          channelName: createName,
          password: createPassword,
        }),
      });

      const msg = await res.json();
      console.log(res);
      if (res.ok) {
        navigate(`${createName}`);
        return toast.success(msg["message"], {
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
        // setIsLoading(false);

        return toast.error(msg["message"], {
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
  let tabs;
  {
    role === "admin"
      ? (tabs = [
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
        ])
      : (tabs = [
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
        ]);
  }
  return (
    <>
      <div className=" bg-white p-4 w-[50%] border-2 border-gray-300 rounded-lg">
        <div className="flex flex-wrap justify-center -mb-px" role="tablist">
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
