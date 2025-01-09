"use client"
import React, { useState } from "react";
import { format } from "date-fns";
import SideNav from "@/components/SideNav";

const FittingHistory = () => {
  // Mock data for fittings
  const [fittings, setFittings] = useState([
    {
      id: 1,
      date: "2025-01-09",
      time: "10:00 AM",
      customerName: "John Doe",
      status: "Completed",
      task: "Fitting Completed",
    },
    {
      id: 2,
      date: "2025-01-10",
      time: "2:00 PM",
      customerName: "Jane Smith",
      status: "Scheduled",
      task: "Fitting Scheduled",
    },
    {
      id: 3,
      date: "2025-01-11",
      time: "1:00 PM",
      customerName: "Alice Johnson",
      status: "Requested",
      task: "Request Acknowledged",
    },
  ]);

  return (

    <>
    <div className="flex h-screen">
        {/* Sidebar */}
        <SideNav></SideNav>
        {/* Main Content */}

        <div className="flex-1 p-6 bg-gray-100">
                <div className="fitting-history p-4 border rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Fitting History</h2>
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Date</th>
                        <th className="border border-gray-300 px-4 py-2">Time</th>
                        <th className="border border-gray-300 px-4 py-2">Customer Name</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                        <th className="border border-gray-300 px-4 py-2">Task</th>
                    </tr>
                    </thead>
                    <tbody>
                    {fittings.map((fitting) => (
                        <tr key={fitting.id}>
                        <td className="border border-gray-300 px-4 py-2">
                            {format(new Date(fitting.date), "MMM d, yyyy")}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">{fitting.time}</td>
                        <td className="border border-gray-300 px-4 py-2">{fitting.customerName}</td>
                        <td className="border border-gray-300 px-4 py-2">{fitting.status}</td>
                        <td className="border border-gray-300 px-4 py-2">{fitting.task}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </>
  );
};

export default FittingHistory;
