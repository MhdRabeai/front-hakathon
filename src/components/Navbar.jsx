/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useUserInfo } from "../Providers/UserContext";
import { IoMdLogOut } from "react-icons/io";
import { Bounce, toast } from "react-toastify";
import { useUserInfo } from "../Providers/UserContext";
import { IoMdLogOut } from "react-icons/io";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const { logoutUser, user } = useUserInfo();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:4000/logout", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        await logoutUser();
        navigate("/");
        return toast.success("Logout successful", {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (err) {
      navigate("/");
      return toast.error(err.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const { logoutUser, user } = useUserInfo();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:4000/logout", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        await logoutUser();
        navigate("/");
        return toast.success("Logout successful", {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (err) {
      navigate("/");
      return toast.error(err.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  // const [isDark, setIsDark] = useState(false);
  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  //   document.documentElement.classList.toggle("dark");
  // };

  return (
    <header className=" rounded-b-3xl  flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-[#0B0B43] text-sm py-2 shadow-2xl mb-10 dark:drop-shadow-[0_5px_2px_rgba(165,165,174,0.5)] font-barcon">
      <nav className="  max-w-[86rem] w-full mx-auto px-4 sm:flex items-center sm:justify-between ">
        <div className=" flex justify-between items-center md:flex-none">
          <NavLink
            className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
            to="/"
          >
            <img src="/Logo.svg" alt="logo" width={135} />
          </NavLink>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-2 rounded-lg border border-white/20 font-medium bg-[#0b0b43] text-white shadow-sm align-middle hover:bg-white/10 focus:outline-none focus:bg-white/10 text-sm"
              id="hs-navbar-primary-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-primary"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-primary"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-primary"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-primary-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 sm-pb-4 md-pb-0">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white transition"
              }
              to="/"
              aria-current="page"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white transition"
              }
              to="#Services"
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white transition"
              }
              to="#Features"
            >
              Features
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white transition"
              }
              to="#Projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white transition"
              }
              to="#Contact"
            >
              Contact
            </NavLink>

            {/* <button onClick={toggleTheme} className="transition  p-1 sm:pr-2">
              {isDark ? (
                <MdDarkMode className="fill-white scale-150 transition" />
              ) : (
                <GoSun className="fill-white scale-150 transition" />
              )}
            </button> */}

            <NavLink
              className={
                "active font-medium text-white focus:outline-none  hover:text-white  focus:text-white transition"
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <div className="flex  ">
            {user && (
              <>
                <NavLink
                  className={
                    "active font-medium text-white focus:outline-none  hover:text-white  focus:text-white transition"
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
                <button
                  className="font-medium text-white focus:outline-none"
                  onClick={handleLogout}
                >
                  <IoMdLogOut />
                </button>
              </>
            )}

            <div className="flex">
              <Link
                to={"/register"}
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg border border-transparent bg-[#7D7CEC] text-[#E2E2EB] hover:bg-[#E2E2EB] hover:text-[#7D7CEC] ml-6 transition-transform duration-300 ease-in-out 
                transform hover:scale-105 hover:shadow-lg 
                focus:outline-none"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;