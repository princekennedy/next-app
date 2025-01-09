"use client";

import SideNav from "@/components/SideNav";
import React, { useState } from "react";

interface Task {
  id: number;
  date: string;
  time: string;
  customerName: string;
  email: string;
  phone: string;
  received: string;
  status: string;
}

const FittingTasks: React.FC = () => {
  // State for fitting requests
  const [requests, setRequests] = useState<Task[]>([
    {
      id: 1,
      date: "2025-01-09",
      time: "10:00 AM",
      customerName: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      received: "2025-01-08 9:30 AM",
      status: "Pending",
    },
    {
      id: 2,
      date: "2025-01-10",
      time: "2:00 PM",
      customerName: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      received: "2025-01-08 10:15 AM",
      status: "Confirmed",
    },
  ]);

  // State for the selected request
  const [selectedRequest, setSelectedRequest] = useState<Task | null>(null);

  // State for the list of tasks
  const [tasks, setTasks] = useState<string[]>([
    "Acknowledge Request",
    "Schedule Swing Analysis",
    "Swing Analysis Completed",
    "Fitting Scheduled",
    "Fitting Cancelled",
    "Fitting Completed",
  ]);

  return (
        <>
        <div className="flex h-screen">
            {/* Sidebar */}
            <SideNav></SideNav>
            {/* Main Content */}
    
            <div className="flex-1 p-6 bg-gray-100">
                <div className="fitting-requests p-4 border rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Fitting Requests</h2>
                <table className="w-full border-collapse border border-gray-200 mb-6">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Time</th>
                        <th className="border p-2">Customer Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Phone</th>
                        <th className="border p-2">Received</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {requests.map((request) => (
                        <tr key={request.id} className="odd:bg-white even:bg-gray-50">
                        <td className="border p-2">{request.date}</td>
                        <td className="border p-2">{request.time}</td>
                        <td className="border p-2">{request.customerName}</td>
                        <td className="border p-2">{request.email}</td>
                        <td className="border p-2">{request.phone}</td>
                        <td className="border p-2">{request.received}</td>
                        <td className="border p-2">{request.status}</td>
                        <td className="border p-2">
                            <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={() => setSelectedRequest(request)}
                            >
                            View Tasks
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {selectedRequest && (
                    <div className="tasks p-4 border rounded shadow-lg">
                    <h3 className="text-lg font-bold mb-4">
                        Tasks for {selectedRequest.customerName}
                    </h3>
                    <ul className="list-disc pl-6">
                        {tasks.map((task, index) => (
                        <li key={index} className="mb-2">
                            <input
                            type="checkbox"
                            id={`task-${index}`}
                            className="mr-2"
                            />
                            <label htmlFor={`task-${index}`}>{task}</label>
                        </li>
                        ))}
                    </ul>
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mt-4"
                        onClick={() => setSelectedRequest(null)}
                    >
                        Close Tasks
                    </button>
                    </div>
                )}
                </div>
            </div>
        </div>
    </>
  );
};

export default FittingTasks;
