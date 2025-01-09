
"use client"
import React, { useState } from "react";
import { format } from "date-fns";
import SideNav from "@/components/SideNav";

const FittingSchedule = () => {
  // Mock data for scheduled fittings
  const [fittings, setFittings] = useState([
    {
      id: 1,
      date: "2025-01-09",
      time: "10:00 AM",
      customerName: "John Doe",
      status: "Completed",
    },
    {
      id: 2,
      date: "2025-01-10",
      time: "2:00 PM",
      customerName: "Jane Smith",
      status: "Scheduled",
    },
    {
      id: 3,
      date: "2025-01-11",
      time: "1:00 PM",
      customerName: "Alice Johnson",
      status: "Requested",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-200 text-green-800";
      case "Scheduled":
        return "bg-blue-200 text-blue-800";
      case "Requested":
        return "bg-yellow-200 text-yellow-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(2025, 1, 0).getDate(); // January 2025
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (

    <div className="grid grid-cols-7 gap-4">
        {days.map((day) => {

        const currentDate = `2025-01-${day.toString().padStart(2, "0")}`;

        const dayFittings = fittings.filter(
            (fitting) => fitting.date === currentDate
        );

        return (
            <div key={day} className="border p-2 rounded shadow-md flex flex-col items-center">
            <div className="font-bold mb-2">{format(new Date(currentDate), "EEEE, MMM d")}</div>
            {dayFittings.length > 0 ? (
                <ul className="w-full">
                    {dayFittings.map((fitting) => (
                        <li key={fitting.id} className={`p-2 mb-2 rounded ${getStatusColor(fitting.status)}`}>
                            <div className="text-sm font-medium">{fitting.time}</div>
                            <div className="text-xs">{fitting.customerName}</div>
                            <div className="text-xs italic">{fitting.status}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-gray-500 text-sm">No fittings</div>
            )}
            </div>
        );
        })}
    </div>
    );
  };

  return (
    <div className="flex h-screen">
        {/* Sidebar */}
        <SideNav></SideNav>
        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
            <div className="fitting-schedule p-4 border rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Fitting Schedule</h2>
                <div className="calendar-view">{renderCalendar()}</div>
            </div>
        </div>
    </div>
        
  );
};

export default FittingSchedule;
