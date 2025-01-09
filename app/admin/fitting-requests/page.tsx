"use client"

import SideNav from "@/components/SideNav";
import React, { useState } from "react";

const FittingRequests = () => {
  // Mock data for fitting requests
  const [requests, setRequests] = useState([
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

  return (
    <>
    <div className="flex h-screen">
        {/* Sidebar */}
        <SideNav></SideNav>
        {/* Main Content */}

        <div className="flex-1 p-6 bg-gray-100">

        <div className="fitting-requests p-4 border rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Fitting Requests</h2>
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Time</th>
                    <th className="border p-2">Customer Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Phone</th>
                    <th className="border p-2">Received</th>
                    <th className="border p-2">Status</th>
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

export default FittingRequests;