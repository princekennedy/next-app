"use client"
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "react-date-range"; // Install react-date-range for the calendar
import "react-date-range/dist/styles.css"; // Main CSS file
import "react-date-range/dist/theme/default.css"; // Theme CSS file

const ScheduleSwingAnalysis = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);

  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
  ]; // Replace with dynamic availability if needed

  const handleSave = async () => {
    setLoading(true);

    // Simulate saving data
    setTimeout(() => {
      alert(
        `Swing Analysis Scheduled!\n\nDate: ${format(
          selectedDate!,
          "MMMM dd, yyyy"
        )}\nTime: ${selectedTime}\nComments: ${comments}`
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">
        Schedule a Swing Analysis
      </h1>

      {/* Step 1: Select Date */}
      {step === 1 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Select a Date</h2>
          <Calendar
            date={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            minDate={new Date()}
          />
          <div className="flex justify-end mt-4">
            <button
              className={`px-4 py-2 bg-blue-500 text-white rounded ${
                !selectedDate ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!selectedDate}
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Select Time */}
      {step === 2 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Select a Time</h2>
          <div className="grid grid-cols-3 gap-2">
            {times.map((time) => (
              <button
                key={time}
                className={`px-4 py-2 rounded border ${
                  selectedTime === time
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => setStep(1)}
            >
              Back
            </button>
            <button
              className={`px-4 py-2 bg-blue-500 text-white rounded ${
                !selectedTime ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!selectedTime}
              onClick={() => setStep(3)}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Add Comments */}
      {step === 3 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Add Comments</h2>
          <textarea
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            rows={4}
            placeholder="Add any comments or special requests (optional)"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => setStep(2)}
            >
              Back
            </button>
            <button
              className={`px-4 py-2 bg-green-500 text-white rounded ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
              onClick={handleSave}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleSwingAnalysis;
