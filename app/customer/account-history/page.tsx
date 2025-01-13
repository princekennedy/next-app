"use client"
import { useState, useEffect } from "react";

interface Fitting {
  id: number;
  date: string; // e.g., "2025-01-13"
  time: string; // e.g., "10:00 AM"
  status: string; // e.g., "Scheduled", "Completed", "Canceled", etc.
  comments: string; // Additional details or notes about the fitting
}

const AccountHistory = () => {
  const [fittings, setFittings] = useState<Fitting[]>([]);

  // Simulating API call to fetch fitting history
  useEffect(() => {
    // Replace this with a real API call
    const fetchFittings = async () => {
      const mockData: Fitting[] = [
        {
          id: 1,
          date: "2025-01-10",
          time: "9:00 AM",
          status: "Completed",
          comments: "Great session!",
        },
        {
          id: 2,
          date: "2025-01-12",
          time: "10:30 AM",
          status: "Canceled",
          comments: "Customer requested reschedule.",
        },
        {
          id: 3,
          date: "2025-01-15",
          time: "2:00 PM",
          status: "Scheduled",
          comments: "Awaiting confirmation.",
        },
      ];
      setFittings(mockData);
    };
    fetchFittings();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Account History</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Time</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Comments</th>
            </tr>
          </thead>
          <tbody>
            {fittings.length > 0 ? (
              fittings.map((fitting) => (
                <tr
                  key={fitting.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {fitting.date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {fitting.time}
                  </td>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      fitting.status === "Completed"
                        ? "text-green-600"
                        : fitting.status === "Canceled"
                        ? "text-red-600"
                        : "text-blue-600"
                    }`}
                  >
                    {fitting.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {fitting.comments}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                >
                  No fitting history available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountHistory;
