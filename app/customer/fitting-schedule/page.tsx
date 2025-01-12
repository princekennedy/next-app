
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
    const firstDayOfMonth = new Date(2025, 0, 1).getDay(); // Day of the week for Jan 1, 2025 (0 = Sunday, 1 = Monday, etc.)
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
    // Days of the week header
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    // Fill empty cells before the first day of the month
    const leadingEmptyDays = Array.from({ length: firstDayOfMonth }, () => null);
  
    // Combine leading empty cells with actual days
    const calendarDays = [...leadingEmptyDays, ...days];
  
    return (
      <div>
        {/* Weekday header */}
        <div className="grid grid-cols-7 gap-4 mb-4">
          {weekDays.map((day) => (
            <div key={day} className="font-bold text-center text-gray-800">
              {day}
            </div>
          ))}
        </div>
  
        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-4">
          {calendarDays.map((day, index) => {
            if (!day) {
              // Render empty cells for days before the first day of the month
              return <div key={`empty-${index}`} className="border p-2 bg-gray-100"></div>;
            }
  
            const currentDate = `2025-01-${day.toString().padStart(2, "0")}`;
  
            const dayFittings = fittings.filter(
              (fitting) => fitting.date === currentDate
            );
  
            return (
              <div
                key={day}
                className="border p-2 rounded shadow-md flex flex-col items-center bg-white"
              >
                {/* Date only (no day of the week) */}
                <div className="text-sm text-gray-500 mb-2">
                  {format(new Date(currentDate), "MMM d")}
                </div>
  
                {/* Fitting details */}
                {dayFittings.length > 0 ? (
                  <ul className="w-full">
                    {dayFittings.map((fitting) => (
                      <li
                        key={fitting.id}
                        className={`p-2 mb-2 rounded ${getStatusColor(
                          fitting.status
                        )}`}
                      >
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
      </div>
    );
  };
  
  return (
    <div className="fitting-schedule p-4 border rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Fitting Schedule</h2>
        <div className="calendar-view">{renderCalendar()}</div>
    </div>
  );
};

export default FittingSchedule;
