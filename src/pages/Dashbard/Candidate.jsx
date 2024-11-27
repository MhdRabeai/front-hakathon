import React, { useState } from "react";
import { FaGithub, FaFileAlt, FaSort, FaFilter, FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";


export const Candidate = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "MHD Ahmad",
      email: "mhdAhmad@example.com",
      phone: "+1-234-567-8900",
      jobTitle: "Senior Developer",
      location: "On site",
      cvLink: "https://example.com/cv",
      githubProfile: "https://github.com/johndoe",
      date: "2024-01-20",
    },
    {
      id: 2,
      firstName: "Bassam jamal",
      email: "Bassam.jamal@example.com",
      phone: "+1-987-654-3210",
      jobTitle: "UX Designer",
      location: "Remotly",
      cvLink: "https://example.com/cv",
      githubProfile: "https://github.com/janesmith",
      date: "2024-01-19",
    },
  ]);

  const [errors, setErrors] = useState({});
  const [sortField, setSortField] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  const handleSort = (field) => {
    setSortField(field);
    const sortedUsers = [...users].sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
    setUsers(sortedUsers);
  };

  const handleFilter = (e) => {
    const query = e.target.value.toLowerCase();
    setFilterQuery(query);
  };

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) =>
      String(value).toLowerCase().includes(filterQuery)
    )
  );

  const validateField = (name, value) => {
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
      return false;
    }
    setErrors((prev) => ({ ...prev, [name]: "" }));
    return true;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Candidates</h1>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Filter users..."
              onChange={handleFilter}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Filter users"
            />
            <FaFilter className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                {[
                  "ID",
                  "Name",
                  "Email",
                  "Phone",
                  "Job Title",
                  "Location",
                  "Links",
                  "Date",
                  
                ].map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors"
                    onClick={() => handleSort(header.toLowerCase())}
                  >
                    <div className="flex items-center gap-2">
                      {header}
                      <FaSort className="text-gray-400" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 text-sm text-gray-600">{user.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {user.firstName}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {user.phone}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {user.jobTitle}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {user.location}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    <div className="flex gap-3 ">
                      <TooltipComponent content="View CV" position="top">
                        <a
                          href={user.cvLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0B0B43] hover:text-[#7D7CEC] transition-colors"
                          aria-label="View CV"
                        >
                          <FaFileAlt />
                        </a>
                      </TooltipComponent>
                      
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {user.date}
                  </td>
                  {/* <td className="px-4 py-3 text-sm text-gray-600">
                    <div className="flex gap-3 items-center">
                      <TooltipComponent content="Edit User" position="top">
                        <button
                          className="text-blue-500 hover:text-blue-700 transition-colors"
                          aria-label="Edit user"
                        >
                          <FaCheck />
                        </button>
                      </TooltipComponent>
                      <TooltipComponent content="Delete User" position="top">
                        <button
                          className="text-red-500 text-xl hover:text-red-700 transition-colors"
                          aria-label="Delete user"
                        >
                          <IoClose />
                        </button>
                      </TooltipComponent>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
