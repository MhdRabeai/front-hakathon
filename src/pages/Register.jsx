/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaUser, FaCheck } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const steps = [
  { id: 1, title: "Info", icon: FaUser },
  { id: 2, title: "Confirm", icon: FaCheck },
];
export const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    id: 1,
    firstName: "John Doe",
    email: "john@example.com",
    phone: "+1-234-567-8900",
    jobTitle: "Senior Developer",
    location: "New York, USA",
    cvLink: "https://example.com/cv",
    githubProfile: "https://github.com/johndoe",
    date: "2024-01-20",
  });
  const handleNext = async () => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
    else if (currentStep === steps.length) {
     try{
      const response = await fetch("https://localhost:4000/api/", {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo)
      });
      if (!response.ok) {
        throw new Error('Failed to send data')
      }
      const result = await response.json()
     }
     catch(error) {
      console.error('Error sending data:', error)
     }
      alert("Your data has been saved!");
      
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };
  return (
    <div className=" container max-w-[86rem] w-full mx-auto px-4 ">
      <div className="flex justify-center items-center">
        <div className="w-[60%]  p-8 bg-white rounded-lg shadow-lg">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 ">Employment</h2>
            <p className="text-sm text-gray-600 ">
              We are so happy to have you join us..
            </p>
          </div>
          <div className="flex items-center justify-evenly mb-8">
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                <div
                  className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full border-2 ${
                    step.id <= currentStep
                      ? "border-[#0b0b43e3] bg-[#0b0b43e3] text-white"
                      : "border-gray-400"
                  }`}
                  aria-current={step.id === currentStep ? "step" : undefined}
                  aria-disabled={step.id !== currentStep}
                >
                  <step.icon size={24} />
                </div>
                <div className="mt-2 text-sm font-bold text-gray-700">
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6">
            {currentStep === 1 && (
              <form
                className="grid sm:grid-cols-12 gap-2 sm:gap-6"
                encType=" multipart/form-data"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="sm:col-span-3">
                  <label
                    htmlFor="registerForm"
                    className="inline-block text-sm text-gray-800 mt-2.5  font-medium"
                  >
                    Full Name:
                  </label>
                  <div className="hs-tooltip inline-block">
                    <svg
                      className="hs-tooltip-toggle ms-1 inline-block size-3 text-gray-400 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </div>
                </div>

                <div className="sm:col-span-9">
                  <div className="relative">
                    <input
                      id="registerForm"
                      type="text"
                      className="peer py-2 px-4 ps-11 block w-full
                          border-2  border-gray-200 rounded-lg text-sm 
                          focus:border-[#7D7CEC] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                      placeholder="Enter Name..."
                      name="fullName"
                      required
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                      <svg
                        id="registerIcon"
                        className="shrink-0 size-4 text-gray-500 "
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
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="registerEmail"
                    className="inline-block font-medium text-sm text-gray-800 mt-2.5 "
                  >
                    Email:
                  </label>
                </div>

                <div className="sm:col-span-9">
                  <div className="relative">
                    <input
                      id="registerEmail"
                      type="email"
                      className="peer py-2 px-4 ps-11 block w-full
                          border-2  border-gray-200 rounded-lg text-sm 
                          focus:border-[#7D7CEC] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                      placeholder="Enter Email..."
                      name="email"
                      required
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                      <MdOutlineEmail className="fill-gray-500" />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="inline-block">
                    <label
                      htmlFor="phoneNumber"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                    >
                      Phone Number:
                    </label>
                  </div>
                </div>

                <div className="sm:col-span-9">
                  <div className="relative">
                    <input
                      id="phoneNumber"
                      type="text"
                      className="peer py-2 px-4 ps-11 block w-full border-2  border-gray-200 rounded-lg text-sm  focus:border-[#7D7CEC] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                      placeholder="Enter Number..."
                      name="phone"
                      required
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                      <svg
                        width="10"
                        height="18"
                        viewBox="0 0 16 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 1H3C1.89543 1 1 1.89543 1 3V19C1 20.1046 1.89543 21 3 21H13C14.1046 21 15 20.1046 15 19V3C15 1.89543 14.1046 1 13 1Z"
                          stroke="#6B7280"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 17H8.01"
                          stroke="#6B7280"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-gender-checkbox"
                    className="inline-block text-sm  font-medium text-gray-800 mt-2.5 "
                  >
                    Gender:
                  </label>
                </div>

                <div className="sm:col-span-9">
                  <div className="sm:flex">
                    <label
                      htmlFor="af-account-gender-checkbox"
                      className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    >
                      <input
                        type="radio"
                        name="gender"
                        className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-[#C4C4C4]  text-[#7D7CEC]  focus:bg-[#7D7CEC] checked:bg-[#7D7CEC]   disabled:opacity-50 disabled:pointer-events-none  focus:ring-0"
                        id="af-account-gender-checkbox"
                        value={"Male"}
                        defaultChecked
                      />
                      <span className="text-sm text-gray-500 ms-3 ">Male</span>
                    </label>

                    <label
                      htmlFor="af-account-gender-checkbox-other"
                      className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    >
                      <input
                        type="radio"
                        name="gender"
                        className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-[#C4C4C4]  text-[#7D7CEC]  focus:bg-[#7D7CEC] checked:bg-[#7D7CEC]   disabled:opacity-50 disabled:pointer-events-none  focus:ring-0"
                        id="af-account-gender-checkbox-other"
                        value={"female"}
                      />
                      <span className="text-sm text-gray-500 ms-3 ">
                        Female
                      </span>
                    </label>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="registerJobTitle"
                    className="inline-block text-sm text-gray-800 mt-2.5  font-medium"
                  >
                    Job Title:
                  </label>
                </div>

                <div className="sm:col-span-9">
                  <div className="relative">
                    <input
                      id="registerJobTitle"
                      type="text"
                      className="peer py-2 px-4 ps-11 block w-full
                          border-2  border-gray-200 rounded-lg text-sm 
                          focus:border-[#7D7CEC] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                      placeholder="Enter Job Title..."
                      name="jobTitle"
                      required
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                          stroke="#6B7280"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 19V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H9C8.46957 1 7.96086 1.21071 7.58579 1.58579C7.21071 1.96086 7 2.46957 7 3V19"
                          stroke="#6B7280"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="registerLocationType"
                    className="inline-block font-medium text-sm text-gray-800 mt-2.5 "
                  >
                    Location type:
                  </label>
                </div>

                <div className="sm:col-span-9">
                  <div className="relative">
                    <select
                      id="registerLocationType"
                      name="locationType"
                      className="peer py-2 px-4 ps-11 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#7D7CEC] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
                      required
                    >
                      <option className="text-gray-500" selected="">
                        Select one of the following options
                      </option>
                      <option>Onsite</option>
                      <option>Remotely</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="employmentType"
                    className="inline-block text-sm  font-medium text-gray-800 mt-2.5 "
                  >
                    Employment Type:
                  </label>
                </div>

                <div className="sm:col-span-9">
                  <div className="sm:flex">
                    <label
                      htmlFor="fullTime"
                      className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    >
                      <input
                        type="radio"
                        name="employment"
                        className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-[#C4C4C4]  text-[#7D7CEC]  focus:bg-[#7D7CEC] checked:bg-[#7D7CEC]   disabled:opacity-50 disabled:pointer-events-none  focus:ring-0"
                        id="fullTime"
                        value={"Full Time"}
                        defaultChecked
                        required
                      />
                      <span className="text-sm text-gray-500 ms-3 ">
                        Full Time
                      </span>
                    </label>

                    <label
                      htmlFor="partTime"
                      className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    >
                      <input
                        type="radio"
                        name="employment"
                        className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-[#C4C4C4]  text-[#7D7CEC]  focus:bg-[#7D7CEC] checked:bg-[#7D7CEC]   disabled:opacity-50 disabled:pointer-events-none  focus:ring-0"
                        id="partTime"
                        value={"Part Time"}
                      />
                      <span className="text-sm text-gray-500 ms-3 ">
                        Part Time
                      </span>
                    </label>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="inline-block text-sm text-gray-800 mt-2.5  font-medium">
                    CV:
                  </label>
                </div>

                <div className="sm:col-span-9">
                  <div className="flex gap-x-2">
                    <div>
                      <label
                        htmlFor="uploadFile1"
                        className="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm text-gray-500 rounded-lg border border-gray-200 bg-white text-[#] shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 "
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13"
                            stroke="#6B7280"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15 6L10 1L5 6"
                            stroke="#6B7280"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 1V13"
                            stroke="#6B7280"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Upload
                        <input
                          type="file"
                          id="uploadFile1"
                          className="hidden"
                          name="myfile"
                          accept="application/pdf"
                          required
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {currentStep === 2 && (
              <div className="text-center text-[#7D7CEC]">
                <p className="text-lg font-semibold">All steps completed!</p>
                <p className="text-sm text-gray-700">
                  You have successfully updated your profile settings.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-70 hover:bg-gray-500 hover:cursor-pointer duration-300"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#0B0B43] text-white 
                hover:bg-white hover:text-[#7D7CEC] hover:border-[#7D7CEC] 
                transition-transform duration-300 ease-in-out 
                transform hover:scale-105 hover:shadow-lg 
                focus:outline-none"
            >
              {currentStep === steps.length ? "Done" : "Next"}

            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
