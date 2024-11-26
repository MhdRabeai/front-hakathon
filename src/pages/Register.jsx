/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaUser, FaCheck } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const steps = [
  { id: 1, title: "Info", icon: FaUser },
  { id: 2, title: "Confirm", icon: FaCheck },
];
export const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
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
                    Full name:
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
                          focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                      placeholder="Enter Name..."
                      name="name"
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
                          focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                      placeholder="Enter Email..."
                      name="email"
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                      <MdOutlineEmail className="fill-gray-500" />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label className="inline-block text-sm text-gray-800 mt-2.5  font-medium">
                    Profile photo:
                  </label>
                </div>

                <div className="sm:col-span-9">
                  <div className="flex gap-x-2">
                    <div>
                      <label
                        htmlFor="uploadFile1"
                        className="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 "
                      >
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
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" x2="12" y1="3" y2="15" />
                        </svg>
                        Upload
                        <input
                          type="file"
                          id="uploadFile1"
                          className="hidden"
                          name="myfile"
                          accept="application/pdf"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-3 ">
                  <label
                    htmlFor="registerAge"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                  >
                    Age:
                  </label>
                </div>

                <div className="sm:col-span-9">
                  <div
                    className="
                          "
                    data-hs-input-number=""
                  >
                    <div className="relative">
                      <input
                        id="registerAge"
                        className="w-full peer py-2 px-4  
                          border-2  border-gray-200 rounded-lg text-sm  focus:border-[#4f9451] focus:ring-0 flex justify-between items-center gap-x-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none "
                        style={{ appearance: "textfield" }}
                        type="number"
                        aria-roledescription="Number field"
                        defaultValue="18"
                        data-hs-input-number-input=""
                        name="age"
                      />
                      <div className="absolute right-4 top-2 flex justify-end items-center gap-x-1.5">
                        <button
                          type="button"
                          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                          tabIndex="-1"
                          aria-label="Decrease"
                          data-hs-input-number-decrement=""
                        >
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path d="M5 12h14"></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                          tabIndex="-1"
                          aria-label="Increase"
                          data-hs-input-number-increment=""
                        >
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </button>
                      </div>
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
                        className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none  focus:ring-0"
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
                        className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none  focus:ring-0"
                        id="af-account-gender-checkbox-other"
                        value={"female"}
                      />
                      <span className="text-sm text-gray-500 ms-3 ">
                        Female
                      </span>
                    </label>
                  </div>
                </div>
              </form>
            )}

            {currentStep === 2 && (
              <div className="text-center text-green-700">
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
              className="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-70 hover:bg-gray-500"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-70 hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
