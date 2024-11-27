/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect, useState } from "react";
import { FaEdit, FaFilter, FaRegFilePdf, FaSort } from "react-icons/fa";
import { IoIosCloseCircleOutline, IoIosSend } from "react-icons/io";

export const Candidate = () => {
  const [users, setUsers] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  const [sortField, setSortField] = useState("");
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
    user.name
      .split("")
      .some((val) => String(val).toLowerCase().includes(filterQuery))
  );
  const [users1, setUsers1] = useState([]);
  const [filterQuery1, setFilterQuery1] = useState("");
  const handleFilter1 = (e) => {
    const query = e.target.value.toLowerCase();
    setFilterQuery1(query);
  };

  const filteredUsers1 = users1?.filter((user) =>
    user.name
      .split("")
      .some((val) => String(val).toLowerCase().includes(filterQuery1))
  );
  async function handleCandidate() {
    try {
      const res = await fetch("http://localhost:4000/getAlldCandidates", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setUsers(data["users"]);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleFirstAccept(id) {
    function getCurrentDateTime() {
      const date = new Date();
      const day = date.toLocaleDateString();
      const time = date.toLocaleTimeString();
      return { date: day, time: time };
    }
    const { date, time } = getCurrentDateTime();
    try {
      const res = await fetch("http://localhost:4000/firstAccept", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id, allDate: { date, time } }),
        credentials: "include",
      });
      const data = await res.json();
      console.log(data["message"]);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleFirstReject(id) {
    try {
      const res = await fetch("http://localhost:4000/firstReject", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id, date }),
        credentials: "include",
      });
      const data = await res.json();
      console.log(data["message"]);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleAcceptedCandidate() {
    try {
      const res = await fetch("http://localhost:4000/acceptedCandidateByDate", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setUsers1(data["users"]);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleAcceptAfterInter(id) {
    try {
      const res = await fetch("http://localhost:4000/acceptAfterInter", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id }),
        credentials: "include",
      });
      const data = await res.json();
      console.log(data["message"]);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleSendRoomDetails(id) {
    try {
      const res = await fetch("http://localhost:4000/sendRoomDetails", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id }),
        credentials: "include",
      });
      const data = await res.json();
      console.log(data["message"]);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    handleCandidate();
    handleAcceptedCandidate();
  }, []);

  return (
    <div className="bg-gray-50  ">
      <div className=" mx-auto min-h-screen flex flex-col gap-8">
        <div className=" ">
          <div className="w-full  bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              All Candidate
            </h1>

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
                      "_ID",
                      "Name",
                      "Email",
                      "Phone",
                      "gender",
                      "Job",
                      "Skills",
                      "location",
                      "Employment",
                      "exp",
                      "status",
                      "Cv",
                      "Actions",
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
                  {filteredUsers?.map((user) => (
                    <tr
                      key={user._id}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user._id.slice(-3)}.
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.email}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.phone}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.gender}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.jobTitle}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        <ul>
                          {user.skills.map((ele, i) => (
                            <li key={i}>{ele} </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.locationType}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.employmentType}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.experience} Year
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.status}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        <div className="flex justify-center">
                          <TooltipComponent content="View CV" position="top">
                            <a
                              href={`http://localhost:4000/${user.cv}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-red-500  transition-colors"
                              aria-label="View CV"
                            >
                              <FaRegFilePdf />
                            </a>
                          </TooltipComponent>
                        </div>
                      </td>

                      {user.status !== "Before interview" ? (
                        <td className="px-4 py-3 text-sm text-gray-600">
                          <div className="flex gap-3 justify-center">
                            <TooltipComponent content="Accept" position="top">
                              <button
                                className="text-blue-500 hover:text-blue-700 transition-colors"
                                onClick={() => handleFirstAccept(user._id)}
                              >
                                <FaEdit />
                              </button>
                            </TooltipComponent>
                            <TooltipComponent
                              content="Delete User"
                              position="top"
                            >
                              <button
                                className="text-red-500 hover:text-red-700 transition-colors"
                                onClick={() => handleFirstReject(user._id)}
                              >
                                <IoIosCloseCircleOutline />
                              </button>
                            </TooltipComponent>
                          </div>
                        </td>
                      ) : (
                        "  "
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Accepted For interView
            </h1>

            <div className="mb-6 flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Filter users..."
                  onChange={handleFilter1}
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
                      "gender",
                      "Job",
                      "Skills",
                      "location",
                      "Employment",
                      "exp",
                      "status",
                      "Cv",
                      "Actions",
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
                  {filteredUsers1?.map((user) => (
                    <tr
                      key={user._id}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user._id.slice(0, 3)}.
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.email}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.phone}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.gender}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.jobTitle}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        <ul>
                          {user.skills.map((ele, i) => (
                            <li key={i}>{ele} </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.locationType}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.employmentType}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.experience} Year
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.status}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        <div className="flex justify-center">
                          <TooltipComponent content="View CV" position="top">
                            <a
                              href={`http://localhost:4000/${user.cv}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-red-500  transition-colors"
                              aria-label="View CV"
                            >
                              <FaRegFilePdf />
                            </a>
                          </TooltipComponent>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-sm text-gray-600">
                        <div className="flex gap-3 justify-center">
                          <TooltipComponent content="Send Time" position="top">
                            <button
                              className="text-blue-500 hover:text-blue-700 transition-colors scale-150"
                              onClick={() => handleSendRoomDetails(user._id)}
                            >
                              <IoIosSend />
                            </button>
                          </TooltipComponent>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
