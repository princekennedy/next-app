"use client"
import { useState } from "react";

const steps = [
  { id: 1, label: "Acknowledge Request" },
  { id: 2, label: "Schedule Swing Analysis" },
  { id: 3, label: "Swing Analysis Completed" },
  { id: 4, label: "Fitting Scheduled" },
  { id: 5, label: "Fitting Cancelled" },
  { id: 5, label: "Fitting Completed" },
];

const FittingProgress = () => {
  const [currentStep, setCurrentStep] = useState(3); // Tracks current progress step

  // Utility to determine step status
  const getStepStatus = (stepId: number) => {
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "current";
    return "pending";
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Fitting Progress</h1>

      <div className="relative">
        {/* Step Tracker */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-1 bg-gray-300 h-full z-0"></div>
        <ul className="space-y-6">
          {steps.map((step, index) => {
            const status = getStepStatus(step.id);

            return (
              <li key={step.id} className="relative z-10 flex items-center">
                {/* Step Indicator */}
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${
                    status === "completed"
                      ? "bg-green-500"
                      : status === "current"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                >
                  {status === "completed" ? "✓" : step.id}
                </div>

                {/* Step Label */}
                <div className="ml-4">
                  <p
                    className={`text-lg ${
                      status === "completed"
                        ? "text-gray-600"
                        : status === "current"
                        ? "text-blue-500 font-bold"
                        : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </p>

                  {/* Add a subtle hint for the current step */}
                  {status === "current" && (
                    <p className="text-sm text-gray-500">
                      We’re currently working on this step.
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {/* <button
          className={`px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 ${
            currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentStep === 1}
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button> */}
        {/* <button
          className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
            currentStep === steps.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentStep === steps.length}
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length))}
        >
          Next
        </button> */}
      </div>
    </div>
  );
};

export default FittingProgress;
