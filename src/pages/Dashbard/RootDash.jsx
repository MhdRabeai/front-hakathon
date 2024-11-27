/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, Outlet,  } from "react-router-dom";
import { CiVideoOn } from "react-icons/ci";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {BarChart2, Menu, Users, ClipboardList, UserCheck, ChevronDown} from "lucide-react";

// Sidebar items
const SIDEBAR_ITEMS = [
  {
    name: "Main Dashboard",
    icon: BarChart2,
    color: "#6366f1",
    href: "/newDashbard", 
  },
  {
    name: "Candidate Management",
    icon: Users,
    color: "#F97316",
    href: "/newDashbard/candidate", 
  },
  {
    name: "Interviews Management",
    icon: ClipboardList,
    color: "#3B82F6",
    href: "/newDashbard/interViews", 
  },
  {
    name: "Employees Management",
    icon: UserCheck,
    color: "#4ADE80",
    href: "/newDashbard/employees", 
  },
  {
    name: "Video Calls",
    icon: CiVideoOn,
    color: "#10B981",
    href: "/newDashbard/videoCall",
  },
];

const RootDash = ({ isSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(isSidebar);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (itemName) => {
    setExpandedItem((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <motion.div
        className={`relative z-10 transition-all duration-200 ease-in-out flex-shrink-0 ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
      >
        <div className="h-full w-full mx-auto bg-[#E2E2EB] relative block overflow-hidden rounded-lg shadow-lg p-4 lg:p-6 border border-gray-200 transition-transform transform ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-[#7D7CEC] transition-colors max-w-fit"
          >
            <Menu size={24} />
          </motion.button>

          <nav className="mt-8 flex-grow">
            {SIDEBAR_ITEMS.map((item) => (
              <div key={item.name}>
                <div
                  onClick={() => item.children && toggleExpand(item.name)}
                  className={`cursor-pointer flex items-center justify-between ${
                    item.children ? "" : "mb-2"
                  }`}
                >
                  <Link to={item.href || "#"}>
                    <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#7D7CEC] transition-colors">
                      <item.icon
                        size={20}
                        style={{ color: item.color, minWidth: "20px" }}
                      />
                      <AnimatePresence>
                        {isSidebarOpen && (
                          <motion.span
                            className="ml-4 whitespace-nowrap"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2, delay: 0.3 }}
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </Link>
                  {item.children && isSidebarOpen && (
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        expandedItem === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {/* Render children if expanded */}
                {item.children &&
                  expandedItem === item.name &&
                  isSidebarOpen &&
                  item.children.map((child) => (
                    <Link key={child.name} to={child.href}>
                      <motion.div className="flex items-center ml-8 p-2 text-sm font-medium rounded-lg hover:bg-[#7D7CEC] transition-colors mb-1">
                        <child.icon size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-400">{child.name}</span>
                      </motion.div>
                    </Link>
                  ))}
              </div>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-grow ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootDash;
